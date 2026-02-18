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
    .having((eb) => eb.fn.count<number>("chest.id"), ">", 0)
    .orderBy("count", "desc")
    .orderBy("reward.name", "asc")
    .executeTakeFirst();

  return reward;
};

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
    ])
    .groupBy("reward.name")
    .orderBy("count", "desc")
    .execute();

  return rewards;
};
