import { db } from "@/db";
import { FilterConfig } from "@/types/common";
import { withFilteredChests } from "./chest";
import { jsonArrayFrom } from "kysely/helpers/postgres";

export const getTownhallByLevel = async (level: number) => {
  const townhall = await db
    .selectFrom("townhall")
    .select(["townhall.id", "townhall.level"])
    .where("townhall.level", "=", level)
    .executeTakeFirst();

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

export const getChestCountPerTownhall = async (filters: FilterConfig) => {
  const townhalls = await db
    .with("filtered_chest", () => withFilteredChests(filters))
    .selectFrom("townhall")
    .leftJoin("filtered_chest", "filtered_chest.townhallId", "townhall.id")
    .select((eb) => [
      "townhall.level",
      eb.fn.count<number>("filtered_chest.id").as("count"),
      jsonArrayFrom(
        eb
          .selectFrom("rarity")
          .innerJoin("filtered_chest", "filtered_chest.rarityId", "rarity.id")
          .select((eb) => [
            "rarity.name",
            eb.fn.count<number>("filtered_chest.id").as("count"),
          ])
          .whereRef("filtered_chest.townhallId", "=", "townhall.id")
          .groupBy(["rarity.id", "rarity.name"])
          .orderBy("rarity.rank", "asc"),
      ).as("rarities"),
    ])
    .groupBy("townhall.id")
    .orderBy("count", "desc")
    .orderBy("townhall.rank", "desc")
    .execute();

  return townhalls;
};
