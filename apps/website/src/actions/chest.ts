import { db } from "@/db";
import { Database } from "@/db/types/database";
import { ChestSearchParams } from "@/schemas/chest";
import { FilterConfig } from "@/types/common";
import { expressionBuilder, sql } from "kysely";
import { jsonObjectFrom } from "kysely/helpers/postgres";

export const getTotalChests = async (filters?: {
  accountId?: number;
  eventId?: number;
}) => {
  const result = await db
    .with("filtered_chest", () => withFilteredChests(filters))
    .selectFrom("filtered_chest")
    .select((eb) => eb.fn.countAll<number>().as("count"))
    .executeTakeFirstOrThrow();
  return result.count;
};

export const getAllChests = async ({
  search,
  page,
  pageSize,
  sortBy,
  direction,
}: ChestSearchParams) => {
  let query = db
    .selectFrom("chest")
    .innerJoin("rarity", "chest.rarityId", "rarity.id")
    .innerJoin("reward", "chest.rewardId", "reward.id")
    .innerJoin("event", "chest.eventId", "event.id")
    .innerJoin("account", "chest.accountId", "account.id");

  // Filtering

  if (search) {
    query = query.where((eb) =>
      eb.or([
        eb("rarity.name", "ilike", `%${search}%`),
        eb("reward.name", "ilike", `%${search}%`),
        eb("account.name", "ilike", `%${search}%`),
        eb("event.name", "ilike", `%${search}%`),
      ]),
    );
  }

  const countQuery = await query
    .select(db.fn.countAll<number>().as("result"))
    .executeTakeFirstOrThrow();

  // Sorting

  if (sortBy == "rarity") {
    query = query
      .orderBy("rarity.chance", direction == "asc" ? "desc" : "asc") // Invert sorting for rarity because lower chance means higher rarity
      .orderBy("reward.name", direction)
      .orderBy("chest.amount", direction);
  }

  if (sortBy == "reward") {
    query = query
      .orderBy("reward.name", direction)
      .orderBy("chest.amount", direction);
  }

  if (sortBy == "account") {
    query = query
      .orderBy("account.name", direction)
      .orderBy("account.townhall", direction);
  }

  if (sortBy == "event") {
    query = query.orderBy("event.name", direction);
  }

  query = query
    .orderBy("chest.openedAt", direction)
    .orderBy("chest.id", direction); // Secondary sort to ensure consistent order

  // Pagination

  query = query.limit(pageSize).offset((page - 1) * pageSize);

  // Selecting

  const chests = await query
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
          .whereRef("event.id", "=", "chest.eventId"),
      )
        .$notNull()
        .as("event"),
      jsonObjectFrom(
        eb
          .selectFrom("account")
          .select(["account.name", "account.townhall"])
          .whereRef("account.id", "=", "chest.accountId"),
      )
        .$notNull()
        .as("account"),
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

export const getPeakOpeningHourData = async (filters?: {
  accountId?: number;
  eventId?: number;
}) => {
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

export const withFilteredChests = (filters?: {
  accountId?: number;
  eventId?: number;
}) => {
  const eb = expressionBuilder<Database>();

  let query = eb.selectFrom("chest");

  if (filters?.accountId) {
    query = query.where("chest.accountId", "=", filters.accountId);
  }

  if (filters?.eventId) {
    query = query.where("chest.eventId", "=", filters.eventId);
  }

  return query.selectAll();
};
