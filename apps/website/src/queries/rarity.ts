import { db } from "@/db";
import { withFilteredChests } from "./chest";

export const getAllRarities = async () => {
  const rarities = await db
    .selectFrom("rarity")
    .select(["rarity.name", "rarity.slug"])
    .where("rarity.isActive", "=", true)
    .orderBy("chance", "desc")
    .execute();

  return rarities;
};

export const getChestCountPerRarity = async (filters: {
  accountId?: number;
  eventId?: number;
}) => {
  const rarities = await db
    .with("filtered_chest", () => withFilteredChests(filters))
    .selectFrom("rarity")
    .leftJoin("filtered_chest", "filtered_chest.rarityId", "rarity.id")
    .select((eb) => [
      "rarity.name",
      eb.fn.count<number>("filtered_chest.id").as("count"),
    ])
    .groupBy(["rarity.name", "rarity.chance"])
    .orderBy("rarity.chance", "desc") // Common - Rare - Epic - Legendary
    .execute();

  return rarities;
};
