import { Kysely } from "kysely";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const seed = async (db: Kysely<any>) => {
  await db.deleteFrom("account").execute();

  const dl3 = await db
    .selectFrom("clan")
    .select("id")
    .where("tag", "=", "28UYR0CVU")
    .executeTakeFirstOrThrow();

  const dlcw = await db
    .selectFrom("clan")
    .select("id")
    .where("tag", "=", "29RPVGYU8")
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
        clanId: dl3.id,
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "DL✨Lander™",
        tag: "PVPV2U0JG",
        townhall: 17,
        clanId: dlcw.id,
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "Lander",
        tag: "9UQGJYLCV",
        townhall: 17,
        clanId: dlcw.id,
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "DL Senne",
        tag: "L00PRVC",
        townhall: 17,
        clanId: dlcw.id,
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "DL✨Senne",
        tag: "YVCLRY98U",
        townhall: 17,
        clanId: dlcw.id,
      },
    ])
    .execute();
};
