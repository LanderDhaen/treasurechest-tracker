import { db } from "@/db";
import { jsonArrayFrom } from "kysely/helpers/postgres";
import { withFilteredChests } from "./chest";
import { FilterConfig } from "@/types/common";

export const getChestCountPerCategory = async (filters: FilterConfig) => {
  const categories = await db
    .with("filtered_chest", () => withFilteredChests(filters))
    .selectFrom("category")
    .leftJoin("reward", "reward.categoryId", "category.id")
    .leftJoin("filtered_chest", "filtered_chest.rewardId", "reward.id")
    .select((eb) => [
      "category.name",
      eb.fn.count<number>("filtered_chest.id").as("count"),
      jsonArrayFrom(
        eb
          .selectFrom("rarity")
          .innerJoin("filtered_chest", "filtered_chest.rarityId", "rarity.id")
          .innerJoin("reward", "filtered_chest.rewardId", "reward.id")
          .select((eb) => [
            "rarity.name",
            eb.fn.count<number>("filtered_chest.id").as("count"),
          ])
          .whereRef("reward.categoryId", "=", "category.id")
          .groupBy(["rarity.id", "rarity.name"])
          .orderBy("rarity.chance", "desc"), // Common - Rare - Epic - Legendary
      ).as("rarities"),
    ])
    .groupBy(["category.id", "category.name"])
    .orderBy("count", "desc")
    .orderBy("category.name", "asc")
    .execute();

  return categories;
};
