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
        minRarity: 1, // Common
        maxRarity: 2, // Rare
      },
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Resources",
        minRarity: 1, // Common
        maxRarity: 2, // Rare
      },
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Magic Potions",
        minRarity: 2, // Rare
        maxRarity: 3, // Epic
      },
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Magic Items",
        minRarity: 2, // Rare
        maxRarity: 3, // Epic
      },
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Magic Books",
        minRarity: 3, // Epic
        maxRarity: 4, // Legendary
      },
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Magic Runes",
        minRarity: 3, // Epic
        maxRarity: 4, // Legendary
      },
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Magic Hammers",
        minRarity: 4, // Legendary
        maxRarity: 4, // Legendary
      },
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Ores",
        minRarity: 2, // Rare
        maxRarity: 3, // Epic
      },
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Decorations",
        minRarity: 3, // Epic
        maxRarity: 3, // Epic
      },
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Clan House",
        minRarity: 3, // Epic
        maxRarity: 3, // Epic
      },
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Hero Skins",
        minRarity: 4, // Legendary
        maxRarity: 4, // Legendary
      },
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Hero Equipment",
        minRarity: 4, // Legendary
        maxRarity: 4, // Legendary
      },
    ])
    .execute();
};
