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

export const getChestCountPerAccount = async () => {
  const result = await db
    .selectFrom("chest")
    .innerJoin("account", "chest.accountId", "account.id")
    .select((eb) => [
      "account.name as account",
      "account.townhall as townhall",
      eb.fn.count<number>("chest.id").as("count"),
    ])
    .groupBy(["chest.accountId", "account.name", "account.townhall"])
    .orderBy("account.townhall", "desc")
    .execute();

  return result;
};
