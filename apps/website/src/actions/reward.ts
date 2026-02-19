import { db } from "@/db";
import { jsonArrayFrom } from "kysely/helpers/postgres";

export const getChestCountPerReward = async (accountId?: number) => {
  const rewards = await db
    .selectFrom("reward")
    .leftJoin("chest", (join) => {
      let query = join.onRef("chest.rewardId", "=", "reward.id");

      if (accountId) {
        query = query.on("chest.accountId", "=", accountId);
      }

      return query;
    })
    .select((eb) => [
      "reward.name",
      eb.fn.count<number>("chest.id").as("count"),
      jsonArrayFrom(
        eb
          .selectFrom("rarity")
          .leftJoin("chest", (join) => {
            let query = join.onRef("chest.rarityId", "=", "rarity.id");

            if (accountId) {
              query = query.on("chest.accountId", "=", accountId);
            }

            return query;
          })
          .select((eb) => [
            "rarity.name",
            eb.fn.count<number>("chest.id").as("count"),
          ])
          .whereRef("chest.rewardId", "=", "reward.id")
          .groupBy(["rarity.id", "rarity.name"])
          .orderBy("rarity.chance", "desc"), // Common - Rare - Epic - Legendary
      ).as("rarities"),
    ])
    .groupBy(["reward.id", "reward.name"])
    .orderBy("count", "desc")
    .execute();

  return rewards;
};
