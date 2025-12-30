import { db } from "@/db";

export const getMostReceivedCategory = async () => {
  const result = await db
    .selectFrom("category")
    .innerJoin("reward", "reward.category", "category.id")
    .leftJoin("chest", "chest.rewardId", "reward.id")
    .select((eb) => [
      "category.name",
      eb.fn.count<number>("chest.id").as("count"),
    ])
    .groupBy(["category.name"])
    .orderBy("count", "desc")
    .limit(1)
    .executeTakeFirstOrThrow();

  return result;
};
