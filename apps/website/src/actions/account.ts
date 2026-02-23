import { db } from "@/db";
import { AccountSearchParams } from "@/schemas/account";
import { jsonArrayFrom, jsonObjectFrom } from "kysely/helpers/postgres";

export const getTotalAccounts = async () => {
  const result = await db
    .selectFrom("account")
    .where("account.isActive", "=", true)
    .select((eb) => eb.fn.countAll<number>().as("total"))
    .executeTakeFirstOrThrow();
  return result.total;
};

export const getAllAccounts = async ({
  search,
  page,
  pageSize,
  sortBy,
  direction,
}: AccountSearchParams) => {
  let query = db
    .selectFrom("account")
    .innerJoin("clan", "account.clanId", "clan.id")
    .where("account.isActive", "=", true);

  // Filtering

  if (search) {
    query = query.where((eb) =>
      eb.or([
        eb("account.name", "ilike", `%${search}%`),
        eb("clan.name", "ilike", `%${search}%`),
      ]),
    );
  }

  const countQuery = await query
    .select((eb) => eb.fn.countAll<number>().as("result"))
    .executeTakeFirstOrThrow();

  // Sorting

  if (sortBy === "townhall") {
    query = query.orderBy("account.townhall", direction);
  }

  if (sortBy === "name") {
    query = query.orderBy("account.name", direction);
  }

  if (sortBy === "clan") {
    query = query.orderBy("clan.rank", direction);
  }

  query = query.orderBy("account.id", direction); // Secondary sort to ensure consistent order

  // Pagination

  query = query.limit(pageSize).offset((page - 1) * pageSize);

  // Selecting

  const accounts = await query
    .select((eb) => [
      "account.name",
      "account.tag",
      "account.townhall",
      jsonObjectFrom(
        eb
          .selectFrom("clan")
          .select(["clan.id", "clan.name", "clan.tag"])
          .whereRef("clan.id", "=", "account.clanId"),
      )
        .$notNull()
        .as("clan"),
    ])
    .execute();

  return {
    accounts,
    rows: countQuery.result,
    totalPages: Math.ceil(countQuery.result / pageSize),
  };
};

export const getAccountByTag = async (tag: string) => {
  const account = await db
    .selectFrom("account")
    .select(["account.id", "account.name"])
    .where("account.isActive", "=", true)
    .where("account.tag", "=", tag)
    .executeTakeFirstOrThrow();

  return account;
};

export const getChestCountPerAccount = async (filters?: {
  eventId?: number;
}) => {
  const accounts = await db
    .selectFrom("account")
    .leftJoin("chest", (join) => {
      let query = join.onRef("chest.accountId", "=", "account.id");

      if (filters?.eventId) {
        query = query.on("chest.eventId", "=", filters.eventId);
      }

      return query;
    })
    .select((eb) => [
      "account.name",
      eb.fn.count<number>("chest.id").as("count"),
      jsonArrayFrom(
        eb
          .selectFrom("rarity")
          .leftJoin("chest", (join) => {
            let query = join.onRef("chest.rarityId", "=", "rarity.id");

            if (filters?.eventId) {
              query = query.on("chest.eventId", "=", filters.eventId);
            }

            return query;
          })
          .leftJoin("reward", "chest.rewardId", "reward.id")
          .select((eb) => [
            "rarity.name",
            eb.fn.count<number>("chest.id").as("count"),
          ])
          .whereRef("chest.accountId", "=", "account.id")
          .groupBy(["rarity.id", "rarity.name"])
          .orderBy("rarity.chance", "desc"), // Common - Rare - Epic - Legendary
      ).as("rarities"),
    ])
    .groupBy(["account.id", "account.name"])
    .orderBy("count", "desc")
    .orderBy("account.name", "asc")
    .execute();

  return accounts;
};
