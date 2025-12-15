import { db } from "@/db";
import { jsonObjectFrom } from "kysely/helpers/postgres";

export const getAllAccounts = async () => {
  return await db
    .selectFrom("account")
    .innerJoin("townhall", "account.townhallId", "townhall.ID")
    .innerJoin("clan", "account.clanId", "clan.ID")
    .select((eb) => [
      "account.ID",
      "account.name",
      "account.tag",
      jsonObjectFrom(
        eb
          .selectFrom("townhall")
          .select(["townhall.level", "townhall.level", "townhall.color"])
          .whereRef("townhall.ID", "=", "account.townhallId")
      )
        .$notNull()
        .as("townhall"),

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
