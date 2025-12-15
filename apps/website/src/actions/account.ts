import { db } from "@/db";
import { jsonObjectFrom } from "kysely/helpers/postgres";

export const getAllAccounts = async () => {
  return await db
    .selectFrom("account")
    .innerJoin("clan", "account.clanId", "clan.ID")
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
};
