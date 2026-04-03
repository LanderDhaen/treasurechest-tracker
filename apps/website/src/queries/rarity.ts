import { db } from "@/db";
import { withFilteredChests } from "./chest";
import { FilterConfig } from "@/types/common";

export const getAllRarities = async () => {
  const rarities = await db
    .selectFrom("rarity")
    .select(["rarity.name", "rarity.slug", "rarity.rank"])
    .where("rarity.isActive", "=", true)
    .orderBy("rarity.rank", "asc")
    .execute();

  return rarities;
};

export const getRarityBySlug = async (slug: string) => {
  const rarity = await db
    .selectFrom("rarity")
    .select(["rarity.id", "rarity.name", "rarity.rank"])
    .where("rarity.slug", "=", slug)
    .where("rarity.isActive", "=", true)
    .executeTakeFirst();

  return rarity;
};

export const getChestCountPerRarity = async (filters: FilterConfig) => {
  const rarities = await db
    .with("filtered_chest", () => withFilteredChests(filters))
    .selectFrom("rarity")
    .leftJoin("filtered_chest", "filtered_chest.rarityId", "rarity.id")
    .select((eb) => [
      "rarity.name",
      eb.fn.count<number>("filtered_chest.id").as("count"),
    ])
    .groupBy(["rarity.name", "rarity.rank"])
    .orderBy("rarity.rank", "asc")
    .execute();

  return rarities;
};
