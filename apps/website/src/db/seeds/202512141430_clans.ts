import { Kysely } from "kysely";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const seed = async (db: Kysely<any>) => {
  await db.deleteFrom("clan").execute();

  await db
    .insertInto("clan")
    .values([
      {
        createdAt: "2025-12-14 14:30:00",
        updatedAt: "2025-12-14 14:30:00",
        name: "Dutch Legion 3",
        tag: "28UYR0CVU",
        rank: 1,
      },
      {
        createdAt: "2025-12-14 14:30:00",
        updatedAt: "2025-12-14 14:30:00",
        name: "Dutch Legion CW",
        tag: "29RPVGYU8",
        rank: 2,
      },
      {
        createdAt: "2025-12-14 14:30:00",
        updatedAt: "2025-12-14 14:30:00",
        name: "Dutch Legion 4",
        tag: "2J0C28R2J",
        rank: 3,
      },
      {
        createdAt: "2025-12-14 14:30:00",
        updatedAt: "2025-12-14 14:30:00",
        name: "DL Mini",
        tag: "2JY9C0L0P",
        rank: 4,
      },
    ])
    .execute();
};
