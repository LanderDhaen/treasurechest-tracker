import { db } from "@/db";

export const getTownhallByLevel = async (level: number) => {
  console.log("Fetching townhall with level:", level);

  const townhall = await db
    .selectFrom("townhall")
    .select(["townhall.id", "townhall.level"])
    .where("townhall.level", "=", level)
    .executeTakeFirst();

  console.log("Queried townhall:", townhall);

  return townhall;
};

export const getHighestTownhall = async () => {
  const townhall = await db
    .selectFrom("townhall")
    .select(["townhall.level", "townhall.releasedOn"])
    .orderBy("townhall.rank", "desc")
    .executeTakeFirstOrThrow();

  return townhall;
};
