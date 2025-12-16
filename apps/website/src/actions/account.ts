import { db } from "@/db";
import { count } from "console";
import { jsonObjectFrom } from "kysely/helpers/postgres";

export const getAllAccounts = async () => {
  const baseQuery = db
    .selectFrom("account")
    .where("account.isActive", "=", true);

  const countQuery = await baseQuery
    .select((eb) => eb.fn.countAll<number>().as("result"))
    .executeTakeFirstOrThrow();

  const accounts = await baseQuery
    .innerJoin("clan", "account.clanId", "clan.ID")
    .orderBy("account.townhall", "desc")
    .select((eb) => [
      "account.ID",
      "account.name",
      "account.tag",
      "account.townhall",
      jsonObjectFrom(
        eb
          .selectFrom("clan")
          .select(["clan.ID", "clan.name", "clan.tag"])
          .whereRef("clan.ID", "=", "account.clanId")
      )
        .$notNull()
        .as("clan"),
    ])
    .execute();

  return {
    accounts: accounts,
    count: countQuery.result,
  };
};
