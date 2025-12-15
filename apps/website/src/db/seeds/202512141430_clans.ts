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
      },
    ])
    .execute();
};
