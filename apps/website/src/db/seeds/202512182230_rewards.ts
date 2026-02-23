import { Kysely } from "kysely";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const seed = async (db: Kysely<any>) => {
  await db.deleteFrom("reward").execute();

  await db
    .insertInto("reward")
    .values([
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Training Treat",
        isObtainable: false,
        categoryId: 1, // Magic Snacks
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Bite",
        categoryId: 1, // Magic Snacks
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Study Soup",
        categoryId: 1, // Magic Snacks
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Power Pancakes",
        categoryId: 1, // Magic Snacks
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Clan Castle Cake",
        categoryId: 1, // Magic Snacks
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Mighty Morsel",
        categoryId: 1, // Magic Snacks
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Gold",
        categoryId: 2, // Resources
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Elixer",
        categoryId: 2, // Resources
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Dark Elixer",
        categoryId: 2, // Resources
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Gold",
        categoryId: 2, // Resources
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Elixer",
        categoryId: 2, // Resources
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Capital Gold",
        categoryId: 2, // Resources
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Training Potion",
        isObtainable: false,
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Resource Potion",
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Potion",
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Power Potion",
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Research Potion",
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Clock Tower Potion",
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Star Jar",
        categoryId: 4, // Magic Items
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Hero Potion",
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Wall Ring",
        categoryId: 4, // Magic Items
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Super Potion",
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Pet Potion",
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Book of Building",
        categoryId: 5, // Magic Books
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Book of Fighting",
        categoryId: 5, // Magic Books
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Book of Spells",
        categoryId: 5, // Magic Books
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Book of Heroes",
        categoryId: 5, // Magic Books
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Shovel of Obstacles",
        categoryId: 4, // Magic Items
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Rune of Builder Gold",
        categoryId: 6, // Magic Runes
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Rune of Builder Elixer",
        categoryId: 6, // Magic Runes
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Book of Everything",
        categoryId: 5, // Magic Books
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Hammer of Building",
        categoryId: 7, // Magic Hammers
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Hammer of Fighting",
        categoryId: 7, // Magic Hammers
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Hammer of Spells",
        categoryId: 7, // Magic Hammers
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Hammer of Heroes",
        categoryId: 7, // Magic Hammers
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Rune of Gold",
        categoryId: 6, // Magic Runes
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Rune of Elixer",
        categoryId: 6, // Magic Runes
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Rune of Dark Elixer",
        categoryId: 6, // Magic Runes
      },

      // Ores

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Shiny Ore",
        categoryId: 8, // Ores
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Glowy Ore",
        categoryId: 8, // Ores
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Starry Ore",
        categoryId: 8, // Ores
      },

      // Decorations

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Home Village (Shop)",
        categoryId: 9, // Decorations
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Home Village (Limited)",
        categoryId: 9, // Decorations
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Base (Shop)",
        categoryId: 9, // Decorations
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Base (Limited)",
        categoryId: 9, // Decorations
      },

      // Clan House

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Roof (Trader)",
        categoryId: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Walls (Trader)",
        categoryId: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Floor (Trader)",
        categoryId: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Decoration (Trader)",
        categoryId: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Roof (Limited)",
        categoryId: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Walls (Limited)",
        categoryId: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Floor (Limited)",
        categoryId: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Decoration (Limited)",
        categoryId: 10, // Clan House
      },

      // Hero Skins

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "King Skin",
        categoryId: 11, // Hero Skins
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Queen Skin",
        categoryId: 11, // Hero Skins
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Grand Warden Skin",
        categoryId: 11, // Hero Skins
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Royal Champion Skin",
        categoryId: 11, // Hero Skins
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Battle Machine Skin",
        categoryId: 11, // Hero Skins
      },

      // Hero Equipment

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "King Equipment",
        categoryId: 12, // Hero Equipment
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Queen Equipment",
        categoryId: 12, // Hero Equipment
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Grand Warden Equipment",
        categoryId: 12, // Hero Equipment
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Royal Champion Equipment",
        categoryId: 12, // Hero Equipment
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Minion Prince Equipment",
        categoryId: 12, // Hero Equipment
      },
    ])
    .execute();
};
