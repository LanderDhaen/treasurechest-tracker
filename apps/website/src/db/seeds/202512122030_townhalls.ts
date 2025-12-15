import { Kysely } from "kysely";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const seed = async (db: Kysely<any>) => {
  await db.deleteFrom("townhall").execute();

  await db
    .insertInto("townhall")
    .values([
      {
        createdAt: "2025-12-12 20:30:00",
        updatedAt: "2025-12-12 20:30:00",
        level: 7,
        releasedAt: "2025-11-17 20:30:00",
      },
      {
        createdAt: "2025-12-12 20:30:00",
        updatedAt: "2025-12-12 20:30:00",
        level: 8,
        releasedAt: "2025-11-17 20:30:00",
      },
      {
        createdAt: "2025-12-12 20:30:00",
        updatedAt: "2025-12-12 20:30:00",
        level: 9,
        releasedAt: "2025-11-17 20:30:00",
      },
      {
        createdAt: "2025-12-12 20:30:00",
        updatedAt: "2025-12-12 20:30:00",
        level: 10,
        releasedAt: "2025-11-17 20:30:00",
      },
      {
        createdAt: "2025-12-12 20:30:00",
        updatedAt: "2025-12-12 20:30:00",
        level: 11,
        releasedAt: "2025-11-17 20:30:00",
      },
      {
        createdAt: "2025-12-12 20:30:00",
        updatedAt: "2025-12-12 20:30:00",
        level: 12,
        releasedAt: "2025-11-17 20:30:00",
      },
      {
        createdAt: "2025-12-12 20:30:00",
        updatedAt: "2025-12-12 20:30:00",
        level: 13,
        releasedAt: "2025-11-17 20:30:00",
      },
      {
        createdAt: "2025-12-12 20:30:00",
        updatedAt: "2025-12-12 20:30:00",
        level: 14,
        releasedAt: "2025-11-17 20:30:00",
      },
      {
        createdAt: "2025-12-12 20:30:00",
        updatedAt: "2025-12-12 20:30:00",
        level: 15,
        releasedAt: "2025-11-17 20:30:00",
      },
      {
        createdAt: "2025-12-12 20:30:00",
        updatedAt: "2025-12-12 20:30:00",
        level: 16,
        releasedAt: "2025-11-17 20:30:00",
      },
      {
        createdAt: "2025-12-12 20:30:00",
        updatedAt: "2025-12-12 20:30:00",
        level: 17,
        releasedAt: "2025-11-17 20:30:00",
      },
      {
        createdAt: "2025-12-12 20:30:00",
        updatedAt: "2025-12-12 20:30:00",
        level: 18,
        releasedAt: "2025-11-17 20:30:00",
      },
    ])
    .execute();
};
