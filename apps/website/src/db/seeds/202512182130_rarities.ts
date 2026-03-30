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
      },
      {
        createdAt: "2025-12-18 21:30:00",
        updatedAt: "2025-12-18 21:30:00",
        name: "Rare",
        slug: "rare",
        chance: 32,
      },
      {
        createdAt: "2025-12-18 21:30:00",
        updatedAt: "2025-12-18 21:30:00",
        name: "Epic",
        slug: "epic",
        chance: 8,
      },
      {
        createdAt: "2025-12-18 21:30:00",
        updatedAt: "2025-12-18 21:30:00",
        name: "Legendary",
        slug: "legendary",
        chance: 2,
      },
    ])
    .execute();
};
