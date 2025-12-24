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

export const getEventCountPerCategory = async () => {
  const result = await db
    .selectFrom("event")
    .select((eb) => ["event.isGift", eb.fn.countAll<number>().as("count")])
    .groupBy(["event.isGift"])
    .execute();

  return result;
};
