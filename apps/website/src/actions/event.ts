import { db } from "@/db";
import { Expression, expressionBuilder, sql } from "kysely";
import { EventStatus } from "@/constants/event";
import { EventSearchParams } from "@/schemas/event";
import { Database } from "@/db/types/database";
import { withFilteredChests } from "./chest";
import { FilterConfig } from "@/types/common";
import { withFilteredAccounts } from "./account";
import { jsonObjectFrom } from "kysely/helpers/postgres";

export const getTotalEvents = async () => {
  const result = await db
    .selectFrom("event")
    .select((eb) => eb.fn.countAll<number>().as("total"))
    .executeTakeFirstOrThrow();

  return result.total;
};

export const getPossibleChestCount = async (filters: FilterConfig) => {
  const result = await db
    .with("filtered_account", () => withFilteredAccounts(filters))
    .selectFrom("event")
    .select((eb) =>
      eb(
        eb.fn.sum<number>("event.maxChests"),
        "*",
        eb
          .selectFrom("filtered_account")
          .select(eb.fn.countAll<number>().as("count")),
      ).as("total"),
    )
    .executeTakeFirstOrThrow();
  return result.total;
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
    .innerJoin("series", "series.id", "event.seriesId");

  // Filtering

  if (search) {
    query = query.where((eb) =>
      eb.or([eb("series.name", "ilike", `%${search}%`)]),
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
      jsonObjectFrom(
        eb
          .selectFrom("series")
          .select(["series.name", "series.isGift"])
          .whereRef("series.id", "=", "event.seriesId"),
      )
        .$notNull()
        .as("series"),
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
    .where("event.code", "=", code)
    .select((eb) => [
      "event.id",
      "event.code",
      "event.edition",
      "event.startDate",
      "event.endDate",
      "event.maxChests",
      deriveEventStatus(eb.ref("event.startDate"), eb.ref("event.endDate")).as(
        "status",
      ),
      jsonObjectFrom(
        eb
          .selectFrom("series")
          .select(["series.name", "series.isGift"])
          .whereRef("series.id", "=", "event.seriesId"),
      )
        .$notNull()
        .as("series"),
    ])
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
      jsonObjectFrom(
        eb
          .selectFrom("series")
          .select(["series.name", "series.isGift"])
          .whereRef("series.id", "=", "event.seriesId"),
      )
        .$notNull()
        .as("series"),
      eb(
        "event.maxChests",
        "*",
        eb
          .selectFrom("filtered_account")
          .select(eb.fn.countAll<number>().as("count")),
      ).as("maxChests"),
      deriveEventStatus(eb.ref("event.startDate"), eb.ref("event.endDate")).as(
        "status",
      ),
      eb.fn.count<number>("filtered_chest.id").as("openedChests"),
    ])
    .groupBy(["event.code", "event.startDate", "event.endDate"])
    .orderBy("event.startDate", "desc")
    .orderBy("event.endDate", "desc")
    .execute();

  return events;
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
