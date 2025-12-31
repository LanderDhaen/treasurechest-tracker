import { db } from "@/db";
import { jsonObjectFrom } from "kysely/helpers/postgres";

export const getAllChests = async () => {
  const baseQuery = db.selectFrom("chest");

  const countQuery = await baseQuery
    .select((eb) => [
      eb.fn.countAll<number>().as("chestCount"),
      eb.fn.count<number>("chest.accountId").distinct().as("accountCount"),
    ])
    .executeTakeFirstOrThrow();

  const chests = await baseQuery
    .innerJoin("rarity", "chest.rarityId", "rarity.id")
    .innerJoin("reward", "chest.rewardId", "reward.id")
    .orderBy("chest.openedAt", "desc")
    .select((eb) => [
      "chest.id",
      "chest.amount",
      "chest.openedAt",
      "rarity.name as rarity",
      "reward.name as reward",
      jsonObjectFrom(
        eb
          .selectFrom("event")
          .select(["event.name", "event.isGift"])
          .whereRef("event.id", "=", "chest.eventId")
      )
        .$notNull()
        .as("event"),
      jsonObjectFrom(
        eb
          .selectFrom("account")
          .select(["account.name", "account.townhall"])
          .whereRef("account.id", "=", "chest.accountId")
      )
        .$notNull()
        .as("account"),
    ])
    .execute();

  return {
    chests: chests,
    chestCount: countQuery.chestCount,
    accountCount: countQuery.accountCount,
  };
};

export const getLastestChest = async () => {
  const chest = await db
    .selectFrom("chest")
    .innerJoin("reward", "chest.rewardId", "reward.id")
    .innerJoin("account", "chest.accountId", "account.id")
    .select([
      "chest.amount",
      "reward.name as reward",
      "account.name as account",
      "chest.openedAt",
    ])
    .orderBy("chest.openedAt", "desc")
    .executeTakeFirstOrThrow();

  return chest;
};

export const getLastestLegendaryChest = async () => {
  const chest = await db
    .selectFrom("chest")
    .innerJoin("reward", "chest.rewardId", "reward.id")
    .innerJoin("account", "chest.accountId", "account.id")
    .innerJoin("rarity", "chest.rarityId", "rarity.id")
    .select([
      "chest.amount",
      "reward.name as reward",
      "account.name as account",
      "chest.openedAt",
    ])
    .where("rarity.name", "=", "Epic")
    .orderBy("chest.openedAt", "desc")
    .executeTakeFirstOrThrow();

  return chest;
};

export const getHighestPerformingDay = async () => {
  const result = await db
    .selectFrom("chest")
    .select([
      db.fn<Date>("DATE", ["chest.openedAt"]).as("day"),
      db.fn.countAll<number>().as("count"),
    ])
    .groupBy("day")
    .orderBy("count", "desc")
    .executeTakeFirstOrThrow();

  return result;
};

export const getChestCount = async () => {
  const result = await db
    .selectFrom("chest")
    .select(db.fn.countAll<number>().as("count"))
    .executeTakeFirstOrThrow();

  return result.count;
};
