import { db } from "@/db";

export const getMostReceivedReward = async () => {
  const result = await db
    .selectFrom("reward")
    .leftJoin("chest", "chest.rewardId", "reward.id")
    .select((eb) => [
      "reward.name",
      eb.fn.count<number>("chest.id").as("count"),
    ])
    .groupBy(["reward.name"])
    .orderBy("count", "desc")
    .executeTakeFirstOrThrow();

  return result;
};
