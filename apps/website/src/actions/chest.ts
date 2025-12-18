import { db } from "@/db";
import { jsonObjectFrom } from "kysely/helpers/postgres";
import { json } from "stream/consumers";

export const getAllChests = async () => {
  const baseQuery = db.selectFrom("chest");

  const countQuery = await baseQuery
    .select((eb) => eb.fn.countAll<number>().as("result"))
    .executeTakeFirstOrThrow();

  const chests = await baseQuery
    .innerJoin("rarity", "chest.rarityId", "rarity.id")
    .innerJoin("account", "chest.accountId", "account.id")
    .innerJoin("event", "chest.eventId", "event.id")
    .innerJoin("reward", "chest.rewardId", "reward.id")
    .select((eb) => [
      "chest.id",
      "chest.amount",
      "rarity.name as rarity",
      "event.name as event",
      "reward.name as reward",
      jsonObjectFrom(
        eb
          .selectFrom("account")
          .select(["account.name", "account.townhall"])
          .whereRef("account.id", "=", "chest.accountId")
      )
        .$notNull()
        .as("account"),
    ])
    .execute();

  return {
    chests: chests,
    count: countQuery.result,
  };
};
