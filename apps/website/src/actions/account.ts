import { db } from "@/db";
import { jsonObjectFrom } from "kysely/helpers/postgres";

export const getAllAccounts = async ({
  page,
  pageSize,
  orderBy,
  orderDirection,
}: {
  page: number;
  pageSize: number;
  orderBy: "tag" | "name" | "clan";
  orderDirection: "asc" | "desc";
}) => {
  const baseQuery = db
    .selectFrom("account")
    .where("account.isActive", "=", true);

  const countQuery = await baseQuery
    .select((eb) => eb.fn.countAll<number>().as("result"))
    .executeTakeFirstOrThrow();

  const accounts = await baseQuery
    .innerJoin("clan", "account.clanId", "clan.id")
    .select((eb) => [
      "account.name",
      "account.tag",
      "account.townhall",
      jsonObjectFrom(
        eb
          .selectFrom("clan")
          .select(["clan.id", "clan.name", "clan.tag"])
          .whereRef("clan.id", "=", "account.clanId")
      )
        .$notNull()
        .as("clan"),
    ])
    .$if(orderBy === "tag", (qb) => qb.orderBy(`account.tag`, orderDirection))
    .$if(orderBy === "name", (qb) => qb.orderBy(`account.name`, orderDirection))
    .$if(orderBy === "clan", (qb) => qb.orderBy("clan.name", orderDirection))
    .orderBy("account.id", "asc")
    .limit(pageSize)
    .offset((page - 1) * pageSize)
    .execute();

  return {
    accounts,
    count: countQuery.result,
    totalPages: Math.ceil(countQuery.result / pageSize),
  };
};

export const getChestCountPerAccount = async () => {
  const result = await db
    .selectFrom("account")
    .leftJoin("chest", "account.id", "chest.accountId")
    .select((eb) => [
      "account.name as account",
      "account.townhall as townhall",
      eb.fn.count<number>("chest.id").as("count"),
    ])
    .groupBy(["account.name", "account.townhall"])
    .orderBy("count", "desc")
    .orderBy("account.townhall", "desc")
    .orderBy("account.name", "asc")
    .execute();

  return result;
};
