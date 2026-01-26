import { db } from "@/db";
import { ChestSearchParams } from "@/schemas/chest";
import { jsonObjectFrom } from "kysely/helpers/postgres";

export const getTotalChests = async () => {
  const result = await db
    .selectFrom("chest")
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

export const getLatestChests = async (tag: string) => {
  const result = await db
    .with("account_chests", (db) =>
      db
        .selectFrom("chest")
        .innerJoin("reward", "chest.rewardId", "reward.id")
        .innerJoin("event", "chest.eventId", "event.id")
        .innerJoin("rarity", "chest.rarityId", "rarity.id")
        .innerJoin("account", "chest.accountId", "account.id")
        .where("account.tag", "=", tag)
        .select([
          "chest.amount",
          "chest.openedAt",
          "reward.name as reward",
          "event.name as event",
          "rarity.name as rarity",
          "rarity.chance",
        ]),
    )

    .selectFrom("account_chests")
    .select((eb) => [
      jsonObjectFrom(
        eb
          .selectFrom("account_chests")
          .selectAll()
          .orderBy("openedAt", "desc")
          .limit(1),
      ).as("latest"),

      jsonObjectFrom(
        eb
          .selectFrom("account_chests")
          .where("rarity", "=", "Legendary")
          .selectAll()
          .orderBy("openedAt", "desc")
          .limit(1),
      ).as("legendary"),

      jsonObjectFrom(
        eb
          .selectFrom("account_chests")
          .where("rarity", "=", "Epic")
          .selectAll()
          .orderBy("openedAt", "desc")
          .limit(1),
      ).as("epic"),
    ])

    .executeTakeFirst();

  if (!result) {
    return {
      latest: null,
      latestLegendary: null,
      latestEpic: null,
    };
  }

  return {
    latest: result.latest,
    latestLegendary: result.legendary,
    latestEpic: result.epic,
  };
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
