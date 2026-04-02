import { Kysely } from "kysely";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const seed = async (db: Kysely<any>) => {
  await db.deleteFrom("rarity").execute();

  await db
    .insertInto("rarity")
    .values([
      {
        createdAt: "2025-12-18 21:30:00",
        updatedAt: "2025-12-18 21:30:00",
        name: "Common",
        slug: "common",
        chance: 58,
        rank: 1,
      },
      {
        createdAt: "2025-12-18 21:30:00",
        updatedAt: "2025-12-18 21:30:00",
        name: "Rare",
        slug: "rare",
        chance: 32,
        rank: 2,
      },
      {
        createdAt: "2025-12-18 21:30:00",
        updatedAt: "2025-12-18 21:30:00",
        name: "Epic",
        slug: "epic",
        chance: 8,
        rank: 3,
      },
      {
        createdAt: "2025-12-18 21:30:00",
        updatedAt: "2025-12-18 21:30:00",
        name: "Legendary",
        slug: "legendary",
        chance: 2,
        rank: 4,
      },
    ])
    .execute();
};
