import { db } from "@/db";
import { AccountSearchParams } from "@/schemas/account";
import { jsonObjectFrom } from "kysely/helpers/postgres";

export const getAllAccounts = async ({
  page,
  pageSize,
  sortBy,
  direction,
}: AccountSearchParams) => {
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
          .whereRef("clan.id", "=", "account.clanId"),
      )
        .$notNull()
        .as("clan"),
    ])

    // Sorting

    .$if(sortBy === "townhall", (eb) =>
      eb.orderBy(`account.townhall`, direction),
    )
    .$if(sortBy === "name", (eb) => eb.orderBy(`account.name`, direction))
    .$if(sortBy === "clan", (eb) => eb.orderBy("clan.rank", direction))
    // Tie-breaker by id
    .orderBy("account.id", direction)

    // Pagination

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
