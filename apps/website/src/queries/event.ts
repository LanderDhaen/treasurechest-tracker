import { db } from "@/db";
import { Expression, expressionBuilder, sql } from "kysely";
import { EventStatus } from "@/constants/event";
import { EventSearchParams } from "@/schemas/event";
import { Database } from "@/db/types/database";
import { withFilteredChests } from "./chest";
import { FilterConfig } from "@/types/common";
import { withFilteredAccounts } from "./account";
import { jsonObjectFrom } from "kysely/helpers/postgres";
import { InsertableEvent, UpdateableEvent } from "@/db/types/event";

export const getTotalEvents = async () => {
  const result = await db
    .selectFrom("event")
    .select((eb) => eb.fn.countAll<number>().as("total"))
    .where("event.isActive", "=", true)
    .executeTakeFirstOrThrow();

  return result.total;
};

export const getPossibleChestCount = async (filters: FilterConfig) => {
  const result = await db
    .with("filtered_account", () => withFilteredAccounts(filters))
    .with("filtered_event", () => withFilteredEvents(filters))
    .selectFrom("filtered_event")
    .select((eb) =>
      eb(
        eb.fn.coalesce(
          eb.fn.sum<number>("filtered_event.maxChests"),
          eb.val(0),
        ),
        "*",
        eb
          .selectFrom("filtered_account")
          .select(eb.fn.countAll<number>().as("count")),
      ).as("possibleChestCount"),
    )
    .where("filtered_event.isActive", "=", true)
    .executeTakeFirstOrThrow();

  return result.possibleChestCount;
};

export const getAllAllowedEvents = async () => {
  const events = await db
    .selectFrom("event")
    .innerJoin("series", "series.id", "event.seriesId")
    .select((eb) => [
      "event.code",
      deriveEventName(
        eb.ref("event.name"),
        eb.ref("event.edition"),
        eb.ref("series.name"),
      ).as("name"),
      "event.startDate",
      "event.endDate",
    ])
    .where("event.isActive", "=", true)
    .where("event.isChestCreationAllowed", "=", true)
    .orderBy("event.startDate", "desc")
    .orderBy("event.endDate", "desc")
    .execute();

  return events;
};

export const getAllEvents = async ({
  search,
  page,
  pageSize,
  sortBy,
  direction,
}: EventSearchParams) => {
  let query = db
    .selectFrom("event")
    .where("event.isActive", "=", true)
    .innerJoin("type", "type.id", "event.typeId")
    .innerJoin("series", "series.id", "event.seriesId");

  // Filtering

  if (search) {
    query = query.where((eb) =>
      eb.or([
        eb(
          deriveEventName(
            eb.ref("event.name"),
            eb.ref("event.edition"),
            eb.ref("series.name"),
          ),
          "ilike",
          `%${search}%`,
        ),
        eb("type.name", "ilike", `%${search}%`),
      ]),
    );
  }

  const countQuery = await query
    .select((eb) => eb.fn.countAll<number>().as("result"))
    .executeTakeFirstOrThrow();

  // Sorting

  if (sortBy === "code") {
    query = query.orderBy("event.code", direction);
  }

  if (sortBy === "status") {
    // Custom sorting for status (finished, ongoing, upcoming or reversed)
    query = query
      .orderBy(
        (eb) =>
          eb
            .case()
            .when(sql`now()`, ">", eb.ref("event.endDate")) // Finished
            .then(1)
            .when(sql`now()`, "<", eb.ref("event.startDate")) // Upcoming
            .then(3)
            .else(2) // Ongoing
            .end(),
        direction,
      )
      .orderBy("event.startDate", direction)
      .orderBy("event.endDate", direction);
  }

  if (sortBy === "type") {
    query = query
      .orderBy("type.name", direction)
      .orderBy(
        (eb) =>
          deriveEventName(
            eb.ref("event.name"),
            eb.ref("event.edition"),
            eb.ref("series.name"),
          ),
        direction,
      );
  }

  if (sortBy === "name") {
    query = query.orderBy(
      (eb) =>
        deriveEventName(
          eb.ref("event.name"),
          eb.ref("event.edition"),
          eb.ref("series.name"),
        ),
      direction,
    );
  }

  if (sortBy === "startDate") {
    query = query
      .orderBy("event.startDate", direction)
      .orderBy("event.endDate", direction);
  }

  if (sortBy === "endDate") {
    query = query
      .orderBy("event.endDate", direction)
      .orderBy("event.startDate", direction);
  }

  if (sortBy === "maxChests") {
    query = query
      .orderBy("event.maxChests", direction)
      .orderBy(
        (eb) =>
          deriveEventName(
            eb.ref("event.name"),
            eb.ref("event.edition"),
            eb.ref("series.name"),
          ),
        direction,
      );
  }

  query = query.orderBy("event.id", direction);

  // Pagination

  query = query.offset((page - 1) * pageSize).limit(pageSize);

  const events = await query
    .select((eb) => [
      "event.code",
      deriveEventName(
        eb.ref("event.name"),
        eb.ref("event.edition"),
        eb.ref("series.name"),
      ).as("name"),
      "event.edition",
      "event.startDate",
      "event.endDate",
      "event.maxChests",
      deriveEventStatus(eb.ref("event.startDate"), eb.ref("event.endDate")).as(
        "status",
      ),
      "type.name as type",
    ])
    .execute();

  return {
    events,
    rows: countQuery.result,
    totalPages: Math.ceil(countQuery.result / pageSize),
  };
};

export const getEventByCode = async (code: string) => {
  const event = await db
    .selectFrom("event")
    .innerJoin("type", "type.id", "event.typeId")
    .innerJoin("series", "series.id", "event.seriesId")
    .where("event.code", "=", code)
    .where("event.isActive", "=", true)
    .select((eb) => [
      "event.id",
      "event.createdAt",
      "event.updatedAt",
      "event.code",
      deriveEventName(
        eb.ref("event.name"),
        eb.ref("event.edition"),
        eb.ref("series.name"),
      ).as("name"),
      "event.startDate",
      "event.endDate",
      "event.maxChests",
      "event.isChestCreationAllowed",
      deriveEventStatus(eb.ref("event.startDate"), eb.ref("event.endDate")).as(
        "status",
      ),
      "type.name as type",
    ])
    .executeTakeFirst();

  return event;
};

export const getEventById = async (eventId: number) => {
  const event = await db
    .selectFrom("event")
    .select(["event.id", "event.isChestCreationAllowed"])
    .where("event.id", "=", eventId)
    .where("event.isActive", "=", true)
    .executeTakeFirst();

  return event;
};

export const getChestCountPerEvent = async (filters: FilterConfig) => {
  const events = await db
    .with("filtered_chest", () => withFilteredChests(filters))
    .with("filtered_account", () => withFilteredAccounts(filters))
    .selectFrom("event")
    .innerJoin("series", "series.id", "event.seriesId")
    .leftJoin("filtered_chest", "filtered_chest.eventId", "event.id")
    .select((eb) => [
      "event.code",
      "event.edition",
      deriveEventStatus(eb.ref("event.startDate"), eb.ref("event.endDate")).as(
        "status",
      ),
      eb(
        "event.maxChests",
        "*",
        eb
          .selectFrom("filtered_account")
          .select(eb.fn.countAll<number>().as("count")),
      ).as("maxChests"),
      eb.fn.count<number>("filtered_chest.id").as("openedChests"),
      jsonObjectFrom(
        eb
          .selectFrom("series")
          .select(["series.name"])
          .whereRef("series.id", "=", "event.seriesId"),
      )
        .$notNull()
        .as("series"),
    ])
    .groupBy([
      "event.edition",
      "event.code",
      "event.startDate",
      "event.endDate",
      "event.seriesId",
      "event.maxChests",
    ])
    .orderBy("event.startDate", "desc")
    .orderBy("event.endDate", "desc")
    .execute();

  return events;
};

export const withFilteredEvents = (filters: FilterConfig) => {
  const eb = expressionBuilder<Database>();

  let query = eb.selectFrom("event").where("event.isActive", "=", true);

  const { eventId, year, onlyOngoing } = filters;

  if (eventId) {
    query = query.where("event.id", "=", eventId);
  }

  if (year) {
    const startDate = new Date(year, 0, 1);
    const endDate = new Date(year + 1, 0, 1);
    query = query
      .where("event.startDate", "<", endDate)
      .where("event.endDate", ">=", startDate);
  }

  if (onlyOngoing) {
    const now = new Date();

    query = query
      .where("event.startDate", "<=", now)
      .where("event.endDate", ">=", now);
  }

  return query.selectAll();
};

export const deriveEventName = (
  name: Expression<string | null>,
  edition: Expression<number>,
  series: Expression<string>,
) => {
  const eb = expressionBuilder<Database, never>();

  return eb
    .case()
    .when(name, "is not", null)
    .then(name)
    .when(edition, ">", 1)
    .then(eb.fn<string>("concat", [series, sql`' '`, edition]))
    .else(series)
    .end()
    .$notNull(); // Kysely doesn't narrow the type after "is not null" check
};

export const deriveEventStatus = (
  startDate: Expression<Date>,
  endDate: Expression<Date>,
) => {
  const eb = expressionBuilder<Database, never>();

  return eb
    .case()
    .when(sql`current_date`, ">", endDate)
    .then(EventStatus.Finished)
    .when(sql`current_date`, "<", startDate)
    .then(EventStatus.Upcoming)
    .else(EventStatus.Ongoing)
    .end();
};

export const createEvent = async ({
  code,
  name,
  edition,
  startDate,
  endDate,
  maxChests,
  typeId,
  seriesId,
}: InsertableEvent) => {
  const event = await db
    .with("inserted_event", (eb) =>
      eb
        .insertInto("event")
        .values({
          code,
          name,
          edition,
          startDate,
          endDate,
          maxChests,
          typeId,
          seriesId,
        })
        .returningAll(),
    )
    .selectFrom("inserted_event")
    .innerJoin("series", "series.id", "inserted_event.seriesId")
    .select((eb) => [
      "inserted_event.code",
      deriveEventName(
        eb.ref("inserted_event.name"),
        eb.ref("inserted_event.edition"),
        eb.ref("series.name"),
      ).as("name"),
    ])
    .executeTakeFirstOrThrow();

  return event;
};

export const updateEvent = async (eventId: number, data: UpdateableEvent) => {
  const { isChestCreationAllowed } = data;

  const updatedEvent = await db
    .updateTable("event")
    .set({
      updatedAt: new Date(),
      isChestCreationAllowed: isChestCreationAllowed,
    })
    .from("series")
    .whereRef("series.id", "=", "event.seriesId")
    .where("event.id", "=", eventId)
    .returning((eb) => [
      "event.id",
      deriveEventName(
        eb.ref("event.name"),
        eb.ref("event.edition"),
        eb.ref("series.name"),
      ).as("name"),
      "event.code",
      "event.isChestCreationAllowed",
    ])
    .executeTakeFirst();

  return updatedEvent;
};

export const deleteEvent = async (eventId: number) => {
  const deletedEvent = await db
    .updateTable("event")
    .set({
      updatedAt: new Date(),
      isActive: false,
    })
    .from("series")
    .whereRef("series.id", "=", "event.seriesId")
    .where("event.id", "=", eventId)
    .returning((eb) => [
      "event.id",
      deriveEventName(
        eb.ref("event.name"),
        eb.ref("event.edition"),
        eb.ref("series.name"),
      ).as("name"),
    ])
    .executeTakeFirst();

  return deletedEvent;
};

// History

export const getEventHistory = async (eventId: number) => {
  const history = await db
    .selectFrom("event_history")
    .innerJoin("series", "series.id", "event_history.seriesId")
    .innerJoin("type", "type.id", "event_history.typeId")
    .select((eb) => [
      "event_history.validFrom",
      "event_history.validTo",
      "event_history.code",
      deriveEventName(
        eb.ref("event_history.name"),
        eb.ref("event_history.edition"),
        eb.ref("series.name"),
      ).as("name"),
      "event_history.startDate",
      "event_history.endDate",
      "event_history.maxChests",
      "event_history.isChestCreationAllowed",
      "type.name as type",
    ])
    .where("event_history.eventId", "=", eventId)
    .orderBy("event_history.validFrom", "desc")
    .orderBy("event_history.id", "desc")
    .execute();

  return history;
};
