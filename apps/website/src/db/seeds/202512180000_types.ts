import { Kysely } from "kysely";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const seed = async (db: Kysely<any>) => {
  await db.deleteFrom("type").execute();

  await db
    .insertInto("type")
    .values([
      {
        createdAt: "2025-12-18 00:00:00",
        updatedAt: "2025-12-18 00:00:00",
        name: "Gifted",
      },
      {
        createdAt: "2025-12-18 00:00:00",
        updatedAt: "2025-12-18 00:00:00",
        name: "Personal",
      },
      {
        createdAt: "2025-12-18 00:00:00",
        updatedAt: "2025-12-18 00:00:00",
        name: "Clan",
      },
      {
        createdAt: "2025-12-18 00:00:00",
        updatedAt: "2025-12-18 00:00:00",
        name: "Community",
      },
    ])
    .execute();
};
