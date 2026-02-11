import { db } from "@/db";

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
      eb.fn.count<number>("chest.id").as("count"),
    ])
    .groupBy("category.name")
    .orderBy("count", "desc")
    .orderBy("category.name", "asc")
    .execute();

  return categories;
};
