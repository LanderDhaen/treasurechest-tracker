import { db } from "@/db";
import { jsonArrayFrom, jsonObjectFrom } from "kysely/helpers/postgres";
import { withFilteredChests } from "./chest";
import { FilterConfig } from "@/types/common";

export const getRewardBySlug = async (slug: string) => {
  const reward = await db
    .selectFrom("reward")
    .select((eb) => [
      "reward.id",
      "reward.name",
      "reward.minTownhall",
      jsonObjectFrom(
        eb
          .selectFrom("category")
          .select((eb) => [
            "category.name",
            jsonObjectFrom(
              eb
                .selectFrom("rarity")
                .select(["rarity.name", "rarity.chance"])
                .whereRef("rarity.id", "=", "category.minRarityId"),
            )
              .$notNull()
              .as("minRarity"),
            jsonObjectFrom(
              eb
                .selectFrom("rarity")
                .select(["rarity.name", "rarity.chance"])
                .whereRef("rarity.id", "=", "category.maxRarityId"),
            )
              .$notNull()
              .as("maxRarity"),
          ])
          .whereRef("category.id", "=", "reward.categoryId"),
      )
        .$notNull()
        .as("category"),
    ])
    .where("reward.slug", "=", slug)
    .where("reward.isActive", "=", true)
    .executeTakeFirst();

  return reward;
};

export const getChestCountPerReward = async (filters: FilterConfig) => {
  const rewards = await db
    .with("filtered_chest", () => withFilteredChests(filters))
    .selectFrom("reward")
    .leftJoin("filtered_chest", "filtered_chest.rewardId", "reward.id")
    .select((eb) => [
      "reward.name",
      eb.fn.count<number>("filtered_chest.id").as("count"),
      jsonArrayFrom(
        eb
          .selectFrom("rarity")
          .innerJoin("filtered_chest", "filtered_chest.rarityId", "rarity.id")
          .select((eb) => [
            "rarity.name",
            eb.fn.count<number>("filtered_chest.id").as("count"),
          ])
          .whereRef("filtered_chest.rewardId", "=", "reward.id")
          .groupBy(["rarity.id", "rarity.name"])
          .orderBy("rarity.rank", "asc"),
      ).as("rarities"),
    ])
    .groupBy(["reward.id", "reward.name"])
    .orderBy("count", "desc")
    .execute();

  return rewards;
};
