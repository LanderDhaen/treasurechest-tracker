import { db } from "@/db";
import { Expression, expressionBuilder, sql } from "kysely";
import { EventStatus } from "@/constants/event";
import { EventSearchParams } from "@/schemas/event";
import { Database } from "@/db/types/database";

export const getTotalEvents = async () => {
  const result = await db
    .selectFrom("event")
    .where("event.isActive", "=", true)
    .select((eb) => eb.fn.countAll<number>().as("total"))
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
  let query = db.selectFrom("event").where("event.isActive", "=", true);

  // Filtering

  if (search) {
    query = query.where((eb) =>
      eb.or([eb("event.name", "ilike", `%${search}%`)]),
    );
  }

  const countQuery = await query
    .select((eb) => eb.fn.countAll<number>().as("result"))
    .executeTakeFirstOrThrow();

  // Sorting

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
    query = query.orderBy("event.name", direction);
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
      "event.id",
      "event.name",
      "event.startDate",
      "event.endDate",
      "event.maxChests",
      "event.isGift",
      deriveEventStatus(eb.ref("event.startDate"), eb.ref("event.endDate")).as(
        "status",
      ),
    ])
    .execute();

  return {
    events,
    rows: countQuery.result,
    totalPages: Math.ceil(countQuery.result / pageSize),
  };
};

export const getChestCountPerEvent = async (accountId?: number) => {
  const events = await db
    .selectFrom("event")

    .leftJoin("chest", (join) => {
      let query = join.onRef("chest.eventId", "=", "event.id");

      if (accountId) {
        query = query.on("chest.accountId", "=", accountId);
      }

      return query;
    })

    .select((eb) => [
      "event.name",
      "event.isGift",
      "event.maxChests",
      deriveEventStatus(eb.ref("event.startDate"), eb.ref("event.endDate")).as(
        "status",
      ),
      eb.fn.count<number>("chest.id").as("count"),
    ])
    .groupBy([
      "event.name",
      "event.isGift",
      "event.maxChests",
      "event.startDate",
      "event.endDate",
    ])
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
