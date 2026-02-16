import { db } from "@/db";
import { jsonArrayFrom } from "kysely/helpers/postgres";

export const getChestCountPerCategory = async (accountId?: number) => {
  const categories = await db
    .selectFrom("category")
    .leftJoin("reward", "reward.category", "category.id")
    .leftJoin("chest", (join) => {
      let query = join.onRef("chest.rewardId", "=", "reward.id");

      if (accountId) {
        query = query.on("chest.accountId", "=", accountId);
      }

      return query;
    })
    .select((eb) => [
      "category.name",
      "category.id",
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
          .leftJoin("reward", "chest.rewardId", "reward.id")
          .select((eb) => [
            "rarity.name",
            eb.fn.count<number>("chest.id").as("count"),
          ])
          .whereRef("reward.category", "=", "category.id")
          .groupBy(["rarity.id", "rarity.name"])
          .orderBy("rarity.name", "asc"),
      ).as("rarities"),
    ])
    .groupBy(["category.id", "category.name"])
    .orderBy("count", "desc")
    .orderBy("category.name", "asc")
    .execute();

  return categories;
};

export const getChestCountPerRewardPerCategory = async () => {
  const categories = await db
    .selectFrom("category")
    .leftJoin("reward", "reward.category", "category.id")
    .leftJoin("chest", "chest.rewardId", "reward.id")
    .select((eb) => [
      "category.id",
      "category.name",
      eb.fn.count<number>("chest.id").as("count"),
      jsonArrayFrom(
        eb
          .selectFrom("reward")
          .leftJoin("chest", "chest.rewardId", "reward.id")
          .select((eb) => [
            "reward.id",
            "reward.name",
            eb.fn.count<number>("chest.id").as("count"),
            eb.fn.sum<number>("chest.amount").as("amount"),
          ])
          .whereRef("reward.category", "=", "category.id")
          .orderBy("count", "desc")
          .groupBy(["reward.id", "reward.name"]),
      ).as("rewards"),
    ])
    .groupBy(["category.id", "category.name"])
    .orderBy("category.minRarity", "asc")
    .orderBy("category.maxRarity", "asc")
    .orderBy("category.name", "asc")
    .execute();

  return categories;
};
