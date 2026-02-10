import { db } from "@/db";

export const getMostReceivedReward = async (accountId?: number) => {
  const reward = await db
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
    ])
    .groupBy("reward.name")
    .orderBy("count", "desc")
    .orderBy("reward.name", "asc")
    .executeTakeFirstOrThrow();

  return reward;
};
