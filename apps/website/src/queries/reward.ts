import { db } from "@/db";
import { jsonArrayFrom } from "kysely/helpers/postgres";
import { withFilteredChests } from "./chest";
import { FilterConfig } from "@/types/common";

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
          .orderBy("rarity.chance", "desc"),
      ).as("rarities"),
    ])
    .groupBy(["reward.id", "reward.name"])
    .orderBy("count", "desc")
    .execute();

  return rewards;
};
