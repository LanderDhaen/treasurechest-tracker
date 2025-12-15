import { Kysely } from "kysely";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const seed = async (db: Kysely<any>) => {
  await db.deleteFrom("account").execute();

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
        townhall: 18,
        clanId: clan.id,
      },
    ])
    .execute();
};
