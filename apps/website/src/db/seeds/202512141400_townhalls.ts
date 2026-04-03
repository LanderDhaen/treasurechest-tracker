import { Kysely } from "kysely";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const seed = async (db: Kysely<any>) => {
  await db.deleteFrom("clan").execute();

  await db
    .insertInto("townhall")
    .values([
      {
        createdAt: "2025-12-14 14:00:00",
        updatedAt: "2025-12-14 14:00:00",
        level: 1,
        rank: 1,
        releasedOn: "2012-08-02",
      },
      {
        createdAt: "2025-12-14 14:00:00",
        updatedAt: "2025-12-14 14:00:00",
        level: 2,
        rank: 2,
        releasedOn: "2012-08-02",
      },
      {
        createdAt: "2025-12-14 14:00:00",
        updatedAt: "2025-12-14 14:00:00",
        level: 3,
        rank: 3,
        releasedOn: "2012-08-02",
      },
      {
        createdAt: "2025-12-14 14:00:00",
        updatedAt: "2025-12-14 14:00:00",
        level: 4,
        rank: 4,
        releasedOn: "2012-08-02",
      },
      {
        createdAt: "2025-12-14 14:00:00",
        updatedAt: "2025-12-14 14:00:00",
        level: 5,
        rank: 5,
        releasedOn: "2012-08-02",
      },
      {
        createdAt: "2025-12-14 14:00:00",
        updatedAt: "2025-12-14 14:00:00",
        level: 6,
        rank: 6,
        releasedOn: "2012-08-02",
      },
      {
        createdAt: "2025-12-14 14:00:00",
        updatedAt: "2025-12-14 14:00:00",
        level: 7,
        rank: 7,
        releasedOn: "2012-08-02",
      },
      {
        createdAt: "2025-12-14 14:00:00",
        updatedAt: "2025-12-14 14:00:00",
        level: 8,
        rank: 8,
        releasedOn: "2012-08-02",
      },
      {
        createdAt: "2025-12-14 14:00:00",
        updatedAt: "2025-12-14 14:00:00",
        level: 9,
        rank: 9,
        releasedOn: "2012-10-09",
      },
      {
        createdAt: "2025-12-14 14:00:00",
        updatedAt: "2025-12-14 14:00:00",
        level: 10,
        rank: 10,
        releasedOn: "2013-05-23",
      },
      {
        createdAt: "2025-12-14 14:00:00",
        updatedAt: "2025-12-14 14:00:00",
        level: 11,
        rank: 11,
        releasedOn: "2015-12-10",
      },
      {
        createdAt: "2025-12-14 14:00:00",
        updatedAt: "2025-12-14 14:00:00",
        level: 12,
        rank: 12,
        releasedOn: "2018-06-11",
      },
      {
        createdAt: "2025-12-14 14:00:00",
        updatedAt: "2025-12-14 14:00:00",
        level: 13,
        rank: 13,
        releasedOn: "2019-12-09",
      },
      {
        createdAt: "2025-12-14 14:00:00",
        updatedAt: "2025-12-14 14:00:00",
        level: 14,
        rank: 14,
        releasedOn: "2021-04-12",
      },
      {
        createdAt: "2025-12-14 14:00:00",
        updatedAt: "2025-12-14 14:00:00",
        level: 15,
        rank: 15,
        releasedOn: "2022-10-10",
      },
      {
        createdAt: "2025-12-14 14:00:00",
        updatedAt: "2025-12-14 14:00:00",
        level: 16,
        rank: 16,
        releasedOn: "2023-12-12",
      },
      {
        createdAt: "2025-12-14 14:00:00",
        updatedAt: "2025-12-14 14:00:00",
        level: 17,
        rank: 17,
        releasedOn: "2024-11-25",
      },
      {
        createdAt: "2025-12-14 14:00:00",
        updatedAt: "2025-12-14 14:00:00",
        level: 18,
        rank: 18,
        releasedOn: "2025-11-17",
      },
    ])
    .execute();
};
