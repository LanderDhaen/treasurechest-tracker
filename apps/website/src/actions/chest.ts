import { db } from "@/db";
import { ChestSearchParams } from "@/schemas/chest";
import { sql } from "kysely";
import { jsonObjectFrom } from "kysely/helpers/postgres";

export const getTotalChests = async (accountId?: number) => {
  let query = db.selectFrom("chest");

  if (accountId) {
    query = query.where("chest.accountId", "=", accountId);
  }

  const result = await query
    .select(db.fn.countAll<number>().as("count"))
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

export const getLatestChest = async (accountId?: number) => {
  let query = db
    .selectFrom("chest")
    .innerJoin("reward", "chest.rewardId", "reward.id")
    .innerJoin("rarity", "chest.rarityId", "rarity.id")
    .innerJoin("account", "chest.accountId", "account.id");

  if (accountId) {
    query = query.where("chest.accountId", "=", accountId);
  }

  const chest = await query
    .select([
      "chest.amount",
      "reward.name as reward",
      "rarity.name as rarity",
      "account.name as account",
      "chest.openedAt",
    ])
    .orderBy("chest.openedAt", "desc")
    .executeTakeFirst();

  return chest;
};

export const getPeakOpeningHourData = async () => {
  const peakOpeningHourData = await db
    .selectFrom("chest")
    .select((eb) => [
      sql<number>`CAST(EXTRACT(HOUR FROM ${eb.ref("chest.openedAt")}) AS INTEGER)`.as(
        "hour",
      ),
      db.fn.count<number>("chest.id").as("count"),
    ])
    .groupBy(["hour"])
    .orderBy("count", "desc")
    .executeTakeFirst();

  console.log(
    "Peak Opening Hour Data:",
    peakOpeningHourData,
    "Type of hour:",
    typeof peakOpeningHourData?.hour,
  );

  return peakOpeningHourData;
};
