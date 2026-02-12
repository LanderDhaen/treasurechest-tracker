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
        category: 1, // Magic Snacks
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Bite",
        category: 1, // Magic Snacks
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Study Soup",
        category: 1, // Magic Snacks
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Power Pancakes",
        category: 1, // Magic Snacks
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Clan Castle Cake",
        category: 1, // Magic Snacks
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Mighty Morsel",
        category: 1, // Magic Snacks
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Gold",
        category: 2, // Resources
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Elixer",
        category: 2, // Resources
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Dark Elixer",
        category: 2, // Resources
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Gold",
        category: 2, // Resources
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Elixer",
        category: 2, // Resources
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Capital Gold",
        category: 2, // Resources
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Training Potion",
        isObtainable: false,
        category: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Resource Potion",
        category: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Potion",
        category: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Power Potion",
        category: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Research Potion",
        category: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Clock Tower Potion",
        category: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Star Jar",
        category: 4, // Magic Items
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Hero Potion",
        category: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Wall Ring",
        category: 4, // Magic Items
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Super Potion",
        category: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Pet Potion",
        category: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Book of Building",
        category: 5, // Magic Books
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Book of Fighting",
        category: 5, // Magic Books
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Book of Spells",
        category: 5, // Magic Books
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Book of Heroes",
        category: 5, // Magic Books
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Shovel of Obstacles",
        category: 4, // Magic Items
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Rune of Builder Gold",
        category: 6, // Magic Runes
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Rune of Builder Elixer",
        category: 6, // Magic Runes
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Book of Everything",
        category: 5, // Magic Books
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Hammer of Building",
        category: 7, // Magic Hammers
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Hammer of Fighting",
        category: 7, // Magic Hammers
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Hammer of Spells",
        category: 7, // Magic Hammers
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Hammer of Heroes",
        category: 7, // Magic Hammers
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Rune of Gold",
        category: 6, // Magic Runes
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Rune of Elixer",
        category: 6, // Magic Runes
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Rune of Dark Elixer",
        category: 6, // Magic Runes
      },

      // Ores

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Shiny Ore",
        category: 8, // Ores
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Glowy Ore",
        category: 8, // Ores
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Starry Ore",
        category: 8, // Ores
      },

      // Decorations

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Home Village (Shop)",
        category: 9, // Decorations
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Home Village (Limited)",
        category: 9, // Decorations
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Base (Shop)",
        category: 9, // Decorations
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Base (Limited)",
        category: 9, // Decorations
      },

      // Clan House

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Roof (Trader)",
        category: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Walls (Trader)",
        category: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Floor (Trader)",
        category: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Decoration (Trader)",
        category: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Roof (Limited)",
        category: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Walls (Limited)",
        category: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Floor (Limited)",
        category: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Decoration (Limited)",
        category: 10, // Clan House
      },

      // Hero Skins

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "King Skin",
        category: 11, // Hero Skins
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Queen Skin",
        category: 11, // Hero Skins
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Grand Warden Skin",
        category: 11, // Hero Skins
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Royal Champion Skin",
        category: 11, // Hero Skins
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Battle Machine Skin",
        category: 11, // Hero Skins
      },

      // Hero Equipment

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "King Equipment",
        category: 12, // Hero Equipment
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Queen Equipment",
        category: 12, // Hero Equipment
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Grand Warden Equipment",
        category: 12, // Hero Equipment
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Royal Champion Equipment",
        category: 12, // Hero Equipment
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Minion Prince Equipment",
        category: 12, // Hero Equipment
      },
    ])
    .execute();
};
