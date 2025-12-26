import { db } from "@/db";
import { sql } from "kysely";
import { EventStatus } from "@/types/event-status";

export const getAllEvents = async () => {
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
    .execute();

  return {
    events,
    count: countQuery.result,
  };
};

export const getChestCountPerEvent = async () => {
  const result = await db
    .selectFrom("event")
    .leftJoin("chest", "chest.eventId", "event.id")
    .select((eb) => [
      "event.id",
      "event.name",
      "event.isGift",
      eb.fn.count<number>("chest.id").as("count"),
    ])
    .groupBy(["event.id", "event.name", "event.startDate"])
    .orderBy("event.startDate", "desc")
    .orderBy("event.endDate", "desc")
    .execute();

  return result;
};
