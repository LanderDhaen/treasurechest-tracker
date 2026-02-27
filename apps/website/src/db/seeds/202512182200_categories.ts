import { Kysely } from "kysely";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const seed = async (db: Kysely<any>) => {
  await db.deleteFrom("category").execute();

  await db
    .insertInto("category")
    .values([
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Magic Snacks",
        minRarityId: 1, // Common
        maxRarityId: 2, // Rare
      },
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Resources",
        minRarityId: 1, // Common
        maxRarityId: 2, // Rare
      },
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Magic Potions",
        minRarityId: 2, // Rare
        maxRarityId: 3, // Epic
      },
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Magic Items",
        minRarityId: 2, // Rare
        maxRarityId: 3, // Epic
      },
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Magic Books",
        minRarityId: 3, // Epic
        maxRarityId: 4, // Legendary
      },
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Magic Runes",
        minRarityId: 3, // Epic
        maxRarityId: 4, // Legendary
      },
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Magic Hammers",
        minRarityId: 4, // Legendary
        maxRarityId: 4, // Legendary
      },
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Ores",
        minRarityId: 2, // Rare
        maxRarityId: 3, // Epic
      },
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Decorations",
        minRarityId: 3, // Epic
        maxRarityId: 3, // Epic
      },
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Clan House",
        minRarityId: 3, // Epic
        maxRarityId: 3, // Epic
      },
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Hero Skins",
        minRarityId: 4, // Legendary
        maxRarityId: 4, // Legendary
      },
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Hero Equipment",
        minRarityId: 4, // Legendary
        maxRarityId: 4, // Legendary
      },
    ])
    .execute();
};
