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
        eb.fn.sum<number>("filtered_event.maxChests"),
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
    .select([
      "event.code",
      "series.name",
      "event.edition",
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
      eb
        .or([eb("series.name", "ilike", `%${search}%`)])
        .or(eb("type.name", "ilike", `%${search}%`)),
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
    query = query.orderBy("type.name", direction);
  }

  if (sortBy === "name") {
    query = query
      .orderBy("series.name", direction)
      .orderBy("event.edition", direction);
  }

  if (sortBy === "startDate") {
    query = query.orderBy("event.startDate", direction);
  }

  if (sortBy === "endDate") {
    query = query.orderBy("event.endDate", direction);
  }

  if (sortBy === "maxChests") {
    query = query.orderBy("event.maxChests", direction);
  }

  query = query.orderBy("event.id", direction);

  // Pagination

  query = query.offset((page - 1) * pageSize).limit(pageSize);

  const events = await query
    .select((eb) => [
      "event.code",
      "event.edition",
      "event.startDate",
      "event.endDate",
      "event.maxChests",
      deriveEventStatus(eb.ref("event.startDate"), eb.ref("event.endDate")).as(
        "status",
      ),
      "type.name as type",
      "series.name",
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
      "event.edition",
      "event.startDate",
      "event.endDate",
      "event.maxChests",
      "event.isChestCreationAllowed",
      deriveEventStatus(eb.ref("event.startDate"), eb.ref("event.endDate")).as(
        "status",
      ),
      "series.name",
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

  const { year, eventId } = filters;

  if (year) {
    const startDate = new Date(year, 0, 1);
    const endDate = new Date(year + 1, 0, 1);
    query = query
      .where("event.startDate", "<", endDate)
      .where("event.endDate", ">=", startDate);
  }

  if (eventId) {
    query = query.where("event.id", "=", eventId);
  }

  return query.selectAll();
};

export const deriveEventStatus = (
  startDate: Expression<Date>,
  endDate: Expression<Date>,
) => {
  const eb = expressionBuilder<Database, never>();

  return eb
    .case()
    .when(sql`now()`, ">", endDate)
    .then(EventStatus.Finished)
    .when(sql`now()`, "<", startDate)
    .then(EventStatus.Upcoming)
    .else(EventStatus.Ongoing)
    .end();
};

export const createEvent = async ({
  code,
  edition,
  startDate,
  endDate,
  maxChests,
  typeId,
  seriesId,
}: InsertableEvent) => {
  const event = await db
    .insertInto("event")
    .values({
      code,
      edition,
      startDate,
      endDate,
      maxChests,
      typeId,
      seriesId,
    })
    .returning(["event.id", "event.code", "event.edition"])
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
    .returning([
      "event.id",
      "series.name",
      "event.edition",
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
    .returning(["event.id", "series.name", "event.edition"])
    .executeTakeFirst();

  return deletedEvent;
};

// History

export const getEventHistory = async (eventId: number) => {
  const history = await db
    .selectFrom("event_history")
    .select((eb) => [
      "event_history.validFrom",
      "event_history.validTo",
      "event_history.edition",
      "event_history.code",
      "event_history.startDate",
      "event_history.endDate",
      "event_history.maxChests",
      "event_history.isChestCreationAllowed",
      jsonObjectFrom(
        eb
          .selectFrom("type")
          .select(["type.name"])
          .whereRef("type.id", "=", "event_history.typeId"),
      )
        .$notNull()
        .as("type"),
      jsonObjectFrom(
        eb
          .selectFrom("series")
          .select(["series.name"])
          .whereRef("series.id", "=", "event_history.seriesId"),
      )
        .$notNull()
        .as("series"),
    ])
    .where("event_history.eventId", "=", eventId)
    .orderBy("event_history.validFrom", "desc")
    .orderBy("event_history.id", "desc")
    .execute();

  return history;
};
