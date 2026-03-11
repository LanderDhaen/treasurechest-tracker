import { db } from "@/db";

export const getAllClans = async () => {
  const clans = await db
    .selectFrom("clan")
    .select(["clan.tag", "clan.name"])
    .orderBy("clan.rank", "asc")
    .execute();

  return clans;
};

export const getClanByTag = async (tag: string) => {
  const clan = await db
    .selectFrom("clan")
    .select(["clan.id"])
    .where("clan.tag", "=", tag)
    .executeTakeFirst();

  return clan;
};
