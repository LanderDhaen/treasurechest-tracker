import { db } from "@/db";
import { InsertableChest } from "@/db/types/chest";
import { Database } from "@/db/types/database";
import { ChestSearchParams } from "@/schemas/chest";
import { FilterConfig } from "@/types/common";
import { expressionBuilder, sql } from "kysely";
import { jsonObjectFrom } from "kysely/helpers/postgres";

export const getTotalChests = async (filters: FilterConfig) => {
  const result = await db
    .with("filtered_chest", () => withFilteredChests(filters))
    .selectFrom("filtered_chest")
    .select((eb) => eb.fn.countAll<number>().as("totalChests"))
    .executeTakeFirstOrThrow();
  return result.totalChests;
};

export const getAllChests = async ({
  search,
  page,
  pageSize,
  sortBy,
  direction,
  accounts,
}: ChestSearchParams) => {
  let query = db
    .with("filtered_chest", () => withFilteredChests({}))
    .selectFrom("filtered_chest")
    .innerJoin("rarity", "filtered_chest.rarityId", "rarity.id")
    .innerJoin("reward", "filtered_chest.rewardId", "reward.id")
    .innerJoin("event", "filtered_chest.eventId", "event.id")
    .innerJoin("series", "event.seriesId", "series.id")
    .innerJoin("account", "filtered_chest.accountId", "account.id")
    .innerJoin("townhall", "account.townhallId", "townhall.id");

  // Filtering

  if (search) {
    query = query.where((eb) =>
      eb.or([
        eb("rarity.name", "ilike", `%${search}%`),
        eb("reward.name", "ilike", `%${search}%`),
        eb("account.name", "ilike", `%${search}%`),
        eb("series.name", "ilike", `%${search}%`),
      ]),
    );
  }

  if (accounts && accounts.length > 0) {
    query = query.where("account.tag", "in", accounts);
  }

  const countQuery = await query
    .select(db.fn.countAll<number>().as("result"))
    .executeTakeFirstOrThrow();

  // Sorting

  if (sortBy == "rarity") {
    query = query
      .orderBy("rarity.rank", direction)
      .orderBy("reward.name", direction)
      .orderBy("filtered_chest.amount", direction);
  }

  if (sortBy == "reward") {
    query = query
      .orderBy("reward.name", direction)
      .orderBy("filtered_chest.amount", direction);
  }

  if (sortBy == "account") {
    query = query
      .orderBy("account.name", direction)
      .orderBy("townhall.rank", direction);
  }

  if (sortBy == "event") {
    query = query
      .orderBy("series.name", direction)
      .orderBy("event.edition", direction);
  }

  query = query
    .orderBy("filtered_chest.openedAt", direction)
    .orderBy("filtered_chest.id", direction); // Secondary sort to ensure consistent order

  // Pagination

  query = query.limit(pageSize).offset((page - 1) * pageSize);

  // Selecting

  const chests = await query
    .select((eb) => [
      "filtered_chest.id",
      "filtered_chest.amount",
      "filtered_chest.openedAt",
      "rarity.name as rarity",
      "reward.name as reward",
      jsonObjectFrom(
        eb
          .selectFrom("account")
          .innerJoin("townhall", "account.townhallId", "townhall.id")
          .select(["account.name", "townhall.level as townhall"])
          .whereRef("account.id", "=", "filtered_chest.accountId"),
      )
        .$notNull()
        .as("account"),
      jsonObjectFrom(
        eb
          .selectFrom("event")
          .innerJoin("series", "event.seriesId", "series.id")
          .select(["event.edition", "series.name"])
          .whereRef("event.id", "=", "filtered_chest.eventId"),
      )
        .$notNull()
        .as("event"),
    ])
    .execute();

  return {
    chests,
    rows: countQuery.result,
    totalPages: Math.ceil(countQuery.result / pageSize),
  };
};

export const getLatestChest = async (filters: FilterConfig) => {
  const chest = await db
    .with("filtered_chest", () => withFilteredChests(filters))
    .selectFrom("filtered_chest")
    .innerJoin("rarity", "filtered_chest.rarityId", "rarity.id")
    .innerJoin("reward", "filtered_chest.rewardId", "reward.id")
    .innerJoin("account", "filtered_chest.accountId", "account.id")
    .select([
      "filtered_chest.amount",
      "reward.name as reward",
      "rarity.name as rarity",
      "account.name as account",
      "filtered_chest.openedAt",
    ])
    .orderBy("filtered_chest.openedAt", "desc")
    .executeTakeFirst();

  return chest;
};

export const getPeakOpeningHourData = async (filters: FilterConfig) => {
  const peakOpeningHourData = await db
    .with("filtered_chest", () => withFilteredChests(filters))
    .selectFrom("filtered_chest")
    .select((eb) => [
      sql<number>`CAST(EXTRACT(HOUR FROM ${eb.ref("filtered_chest.openedAt")}) AS INTEGER)`.as(
        "hour",
      ),
      eb.fn.count<number>("filtered_chest.id").as("count"),
    ])
    .groupBy(["hour"])
    .orderBy("count", "desc")
    .executeTakeFirst();

  return peakOpeningHourData;
};

export const withFilteredChests = (filters: FilterConfig) => {
  const eb = expressionBuilder<Database>();

  let query = eb
    .selectFrom("chest")
    .innerJoin("account", "chest.accountId", "account.id")
    .innerJoin("event", "chest.eventId", "event.id")
    .where("chest.isActive", "=", true)
    .where("account.isActive", "=", true)
    .where("event.isActive", "=", true);

  const { excludeUntrackedAccounts, accountId, eventId } = filters;

  if (excludeUntrackedAccounts === true) {
    query = query.where("account.isTracked", "=", true);
  }

  if (accountId) {
    query = query.where("account.id", "=", accountId);
  }

  if (eventId) {
    query = query.where("chest.eventId", "=", eventId);
  }

  return query.select([
    "chest.id",
    "chest.rarityId",
    "chest.rewardId",
    "chest.accountId",
    "chest.eventId",
    "chest.amount",
    "chest.openedAt",
  ]);
};

export const createChest = async ({
  amount,
  openedAt,
  rarityId,
  accountId,
  eventId,
  rewardId,
}: InsertableChest) => {
  const chest = await db
    .insertInto("chest")
    .values({
      amount,
      openedAt,
      rarityId,
      accountId,
      eventId,
      rewardId,
    })
    .returning(["id"])
    .executeTakeFirstOrThrow();

  return chest;
};

export const deleteChestsByEventId = async (eventId: number) => {
  const deletedChests = await db
    .updateTable("chest")
    .set({ updatedAt: new Date(), isActive: false })
    .where("eventId", "=", eventId)
    .returning(["id"])
    .execute();

  return deletedChests;
};

export const deleteChestsByAccountId = async (accountId: number) => {
  const deletedChests = await db
    .updateTable("chest")
    .set({ updatedAt: new Date(), isActive: false })
    .where("accountId", "=", accountId)
    .returning(["id"])
    .execute();

  return deletedChests;
};
