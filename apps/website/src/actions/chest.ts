import { db } from "@/db";
import { sql } from "kysely";
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

export const getChestCountPerRarity = async () => {
  const result = await db
    .selectFrom("chest")
    .innerJoin("rarity", "chest.rarityId", "rarity.id")
    .select((eb) => [
      "rarity.name as rarity",
      eb.fn.count<number>("chest.id").as("count"),
    ])
    .groupBy(["chest.rarityId", "rarity.name"])
    .execute();

  return result;
};

export const getChestCountPerYear = async (year: number) => {
  const result = await db
    .with("monthly_chests", (qb) =>
      qb
        .selectFrom("chest")
        .select([
          sql<string>`TO_CHAR("opened_at", 'FMMonth')`.as("month"),
          sql<number>`EXTRACT(MONTH FROM "opened_at")`.as("month_number"),
        ])
        .where(sql<boolean>`EXTRACT(YEAR FROM "opened_at") = ${year}`)
    )
    .selectFrom("monthly_chests")
    .select((eb) => ["month", eb.fn.countAll<number>().as("count")])
    .groupBy(["month", "month_number"])
    .orderBy("month_number") // order chronologically
    .execute();

  return result;
};
