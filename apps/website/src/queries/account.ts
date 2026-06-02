import { db } from "@/db";
import { AccountSearchParams } from "@/schemas/account";
import { jsonArrayFrom, jsonObjectFrom } from "kysely/helpers/postgres";
import { withFilteredChests } from "./chest";
import { FilterConfig } from "@/types/common";
import { expressionBuilder } from "kysely";
import { Database } from "@/db/types/database";
import {
  InsertableAccount,
  InsertableAccountHistory,
  UpdateableAccount,
} from "@/db/types/account";

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
    .innerJoin("townhall", "account.townhallId", "townhall.id")
    .select(["account.tag", "account.name", "townhall.level as townhall"])
    .where("account.isActive", "=", true)
    .where("account.isTracked", "=", true)
    .orderBy("townhall.rank", "desc")
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
    .innerJoin("townhall", "account.townhallId", "townhall.id")
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
    query = query.orderBy("townhall.rank", direction);
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
      "townhall.level as townhall",
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
    .innerJoin("townhall", "account.townhallId", "townhall.id")
    .select((eb) => [
      "account.id",
      "account.createdAt",
      "account.updatedAt",
      "account.tag",
      "account.name",
      "account.isTracked",
      jsonObjectFrom(
        eb
          .selectFrom("townhall")
          .select(["townhall.id", "townhall.level"])
          .whereRef("townhall.id", "=", "account.townhallId"),
      )
        .$notNull()
        .as("townhall"),
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
    .select((eb) => [
      "account.id",
      "account.updatedAt",
      "account.name",
      "account.tag",
      "account.isTracked",
      jsonObjectFrom(
        eb
          .selectFrom("townhall")
          .select(["townhall.id", "townhall.level"])
          .whereRef("townhall.id", "=", "account.townhallId"),
      )
        .$notNull()
        .as("townhall"),
      jsonObjectFrom(
        eb
          .selectFrom("clan")
          .select(["clan.id", "clan.name", "clan.tag"])
          .whereRef("clan.id", "=", "account.clanId"),
      )
        .$notNull()
        .as("clan"),
    ])
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
          .orderBy("rarity.rank", "asc"),
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

  let query = eb
    .selectFrom("account")
    .innerJoin("townhall", "account.townhallId", "townhall.id")
    .where("account.isActive", "=", true);

  const { accountId, onlyTracked } = filters;

  if (accountId) {
    query = query.where("account.id", "=", accountId);
  }

  if (onlyTracked === true) {
    query = query.where("account.isTracked", "=", true);
  }

  return query.select([
    "account.id",
    "account.name",
    "account.tag",
    "account.isTracked",
    "townhall.level as townhall",
  ]);
};

export const createAccount = async ({
  name,
  tag,
  townhallId,
  clanId,
}: InsertableAccount) => {
  const account = await db
    .insertInto("account")
    .values({
      name,
      tag,
      townhallId,
      clanId,
    })
    .returning(["account.tag", "account.name"])
    .executeTakeFirstOrThrow();

  return account;
};

export const updateAccount = async (
  accountId: number,
  data: UpdateableAccount,
) => {
  const { isActive, townhallId, isTracked } = data;

  const updatedAccount = await db
    .updateTable("account")
    .set({
      updatedAt: new Date(),
      isActive,
      townhallId,
      isTracked,
    })
    .where("account.id", "=", accountId)
    .returning(["account.name", "account.tag", "account.isTracked"])
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

// History

export const getAccountHistory = async (accountId: number) => {
  const history = await db
    .selectFrom("account_history")
    .innerJoin("townhall", "account_history.townhallId", "townhall.id")
    .select((eb) => [
      "account_history.validFrom",
      "account_history.validTo",
      "account_history.name",
      "account_history.tag",
      "account_history.isTracked",
      jsonObjectFrom(
        eb
          .selectFrom("townhall")
          .select(["townhall.id", "townhall.level"])
          .whereRef("townhall.id", "=", "account_history.townhallId"),
      )
        .$notNull()
        .as("townhall"),
      jsonObjectFrom(
        eb
          .selectFrom("clan")
          .select(["clan.id", "clan.name", "clan.tag"])
          .whereRef("clan.id", "=", "account_history.clanId"),
      )
        .$notNull()
        .as("clan"),
    ])
    .where("account_history.accountId", "=", accountId)
    .orderBy("account_history.validFrom", "desc")
    .orderBy("account_history.id", "desc")
    .execute();

  return history;
};

export const createAccountHistory = async ({
  validFrom,
  validTo,
  name,
  tag,
  isTracked,
  townhallId,
  clanId,
  accountId,
}: InsertableAccountHistory) => {
  const accountHistory = await db
    .insertInto("account_history")
    .values({
      validFrom,
      validTo,
      name,
      tag,
      isTracked,
      townhallId,
      clanId,
      accountId,
    })
    .returning(["account_history.id"])
    .executeTakeFirst();

  return accountHistory;
};
