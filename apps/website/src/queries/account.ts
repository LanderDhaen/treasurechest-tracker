import { db } from "@/db";
import { AccountSearchParams } from "@/schemas/account";
import { jsonArrayFrom, jsonObjectFrom } from "kysely/helpers/postgres";
import { withFilteredChests } from "./chest";
import { FilterConfig } from "@/types/common";
import { expressionBuilder } from "kysely";
import { Database } from "@/db/types/database";
import { InsertableAccount, UpdateableAccount } from "@/db/types/account";

export const getTotalAccounts = async () => {
  const result = await db
    .selectFrom("account")
    .where("account.isActive", "=", true)
    .select((eb) => eb.fn.countAll<number>().as("total"))
    .executeTakeFirstOrThrow();
  return result.total;
};

export const getAllTrackedAccounts = async () => {
  const accounts = await db
    .selectFrom("account")
    .select(["account.tag", "account.name", "account.townhall"])
    .where("account.isActive", "=", true)
    .where("account.isTracked", "=", true)
    .orderBy("account.townhall", "desc")
    .orderBy("account.name", "asc")
    .execute();

  return accounts;
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
      "account.isTracked",
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
    .select((eb) => [
      "account.id",
      "account.tag",
      "account.townhall",
      "account.name",
      "account.isTracked",
      jsonObjectFrom(
        eb
          .selectFrom("clan")
          .select(["clan.id", "clan.name", "clan.tag"])
          .whereRef("clan.id", "=", "account.clanId"),
      )
        .$notNull()
        .as("clan"),
    ])
    .where("account.isActive", "=", true)
    .where("account.tag", "=", tag)
    .executeTakeFirst();

  return account;
};

export const getAccountById = async (accountId: number) => {
  const account = await db
    .selectFrom("account")
    .select(["account.id", "account.townhall", "account.isTracked"])
    .where("account.id", "=", accountId)
    .where("account.isActive", "=", true)
    .executeTakeFirst();

  return account;
};

export const getChestCountPerAccount = async (filters: FilterConfig) => {
  const accounts = await db
    .with("filtered_chest", () => withFilteredChests(filters))
    .with("filtered_account", () => withFilteredAccounts(filters))
    .selectFrom("filtered_account")
    .leftJoin(
      "filtered_chest",
      "filtered_chest.accountId",
      "filtered_account.id",
    )
    .select((eb) => [
      "filtered_account.name",
      eb.fn.count<number>("filtered_chest.id").as("count"),
      jsonArrayFrom(
        eb
          .selectFrom("rarity")
          .innerJoin("filtered_chest", "filtered_chest.rarityId", "rarity.id")
          .select((eb) => [
            "rarity.name",
            eb.fn.count<number>("filtered_chest.id").as("count"),
          ])
          .whereRef("filtered_chest.accountId", "=", "filtered_account.id")
          .groupBy(["rarity.id", "rarity.name"])
          .orderBy("rarity.chance", "desc"), // Common - Rare - Epic - Legendary
      ).as("rarities"),
    ])
    .groupBy(["filtered_account.id", "filtered_account.name"])
    .orderBy("count", "desc")
    .orderBy("filtered_account.name", "asc")
    .execute();

  return accounts;
};

export const withFilteredAccounts = (filters: FilterConfig) => {
  const eb = expressionBuilder<Database>();

  let query = eb.selectFrom("account").where("account.isActive", "=", true);

  const { excludeUntrackedAccounts, accountId } = filters;

  if (excludeUntrackedAccounts === true) {
    query = query.where("account.isTracked", "=", true);
  }

  if (accountId) {
    query = query.where("account.id", "=", accountId);
  }

  return query.selectAll();
};

export const createAccount = async ({
  name,
  tag,
  townhall,
  clanId,
}: InsertableAccount) => {
  const account = await db
    .insertInto("account")
    .values({
      name,
      tag,
      townhall,
      clanId,
    })
    .returning("account.name")
    .executeTakeFirstOrThrow();

  return account;
};

export const updateAccount = async (
  accountId: number,
  data: UpdateableAccount,
) => {
  const { isActive, townhall, isTracked } = data;

  const updatedAccount = await db
    .updateTable("account")
    .set({
      updatedAt: new Date(),
      isActive,
      townhall,
      isTracked,
    })
    .where("account.id", "=", accountId)
    .returning([
      "account.name",
      "account.townhall",
      "account.tag",
      "account.isTracked",
    ])
    .executeTakeFirst();

  return updatedAccount;
};

export const deleteAccount = async (accountId: number) => {
  const deletedAccount = await db
    .updateTable("account")
    .set({
      updatedAt: new Date(),
      isActive: false,
    })
    .where("account.id", "=", accountId)
    .returning(["account.name"])
    .executeTakeFirst();

  return deletedAccount;
};
