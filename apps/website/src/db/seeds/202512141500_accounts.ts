import { Kysely } from "kysely";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const seed = async (db: Kysely<any>) => {
  await db.deleteFrom("account").execute();

  const townhall = await db
    .selectFrom("townhall")
    .select("id")
    .where("level", "=", 18)
    .executeTakeFirstOrThrow();

  const clan = await db
    .selectFrom("clan")
    .select("id")
    .where("tag", "=", "28UYR0CVU")
    .executeTakeFirstOrThrow();

  await db
    .insertInto("account")
    .values([
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "DL✨Lander",
        tag: "8RRG0LJR2",
        townhallId: townhall.id,
        clanId: clan.id,
      },
    ])
    .execute();
};
