import { db } from "@/db";
import { jsonArrayFrom } from "kysely/helpers/postgres";

export const getChestCountPerCategory = async (accountId?: number) => {
  const categories = await db
    .selectFrom("category")
    .leftJoin("reward", "reward.categoryId", "category.id")
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
