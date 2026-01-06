import { db } from "@/db";
import { sql } from "kysely";
import { EventStatus } from "@/types/event-status";

export const getAllEvents = async ({
  page,
  pageSize,
}: {
  page: number;
  pageSize: number;
}) => {
  const baseQuery = db.selectFrom("event").where("event.isActive", "=", true);

  const countQuery = await baseQuery
    .select((eb) => eb.fn.countAll<number>().as("result"))
    .executeTakeFirstOrThrow();

  const events = await baseQuery
    .orderBy("startDate", "desc")
    .select((eb) => [
      "event.id",
      "event.name",
      "event.startDate",
      "event.endDate",
      "event.maxChests",
      "event.isGift",
      eb
        .case()
        .when(sql`now() > ${eb.ref("event.endDate")}`)
        .then(EventStatus.Finished)
        .when(sql`now() < ${eb.ref("event.startDate")}`)
        .then(EventStatus.Upcoming)
        .else(EventStatus.Ongoing)
        .end()
        .as("status"),
    ])
    .offset((page - 1) * pageSize)
    .limit(pageSize)
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
