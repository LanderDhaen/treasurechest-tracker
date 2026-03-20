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
        slug: "gifted",
      },
      {
        createdAt: "2025-12-18 00:00:00",
        updatedAt: "2025-12-18 00:00:00",
        name: "Personal",
        slug: "personal",
      },
      {
        createdAt: "2025-12-18 00:00:00",
        updatedAt: "2025-12-18 00:00:00",
        name: "Clan",
        slug: "clan",
      },
      {
        createdAt: "2025-12-18 00:00:00",
        updatedAt: "2025-12-18 00:00:00",
        name: "Community",
        slug: "community",
      },
    ])
    .execute();
};
