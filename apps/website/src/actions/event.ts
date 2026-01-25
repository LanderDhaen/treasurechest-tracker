import { db } from "@/db";
import { sql } from "kysely";
import { EventStatus } from "@/constants/event";
import { EventSearchParams } from "@/schemas/event";

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
      eb
        .case()
        .when(sql`now()`, ">", eb.ref("event.endDate"))
        .then(EventStatus.Finished)
        .when(sql`now()`, "<", eb.ref("event.startDate"))
        .then(EventStatus.Upcoming)
        .else(EventStatus.Ongoing)
        .end()
        .as("status"),
    ])
    .execute();

  return {
    events,
    count: countQuery.result,
    totalPages: Math.ceil(countQuery.result / pageSize),
  };
};

export const getHighestEvent = async () => {
  const result = await db
    .selectFrom("event")
    .leftJoin("chest", "chest.eventId", "event.id")
    .select((eb) => [
      "event.name",
      "event.endDate",
      eb.fn.count<number>("chest.id").as("count"),
    ])
    .groupBy(["event.name", "event.endDate"])
    .orderBy("count", "desc")
    .executeTakeFirstOrThrow();

  return result;
};
