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
        slug: "training-treat",
        isObtainable: false,
        minTownhallId: 3,
        categoryId: 1, // Magic Snacks
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Bite",
        slug: "builder-bite",
        minTownhallId: 3,
        categoryId: 1, // Magic Snacks
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Study Soup",
        slug: "study-soup",
        minTownhallId: 3,
        categoryId: 1, // Magic Snacks
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Power Pancakes",
        slug: "power-pancakes",
        minTownhallId: 3,
        categoryId: 1, // Magic Snacks
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Clan Castle Cake",
        slug: "clan-castle-cake",
        minTownhallId: 4,
        categoryId: 1, // Magic Snacks
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Mighty Morsel",
        slug: "mighty-morsel",
        minTownhallId: 7,
        categoryId: 1, // Magic Snacks
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Gold",
        slug: "gold",
        minTownhallId: 1,
        categoryId: 2, // Resources
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Elixer",
        slug: "elixer",
        minTownhallId: 1,
        categoryId: 2, // Resources
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Dark Elixer",
        slug: "dark-elixer",
        minTownhallId: 7,
        categoryId: 2, // Resources
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Gold",
        slug: "builder-gold",
        minTownhallId: 4,
        categoryId: 2, // Resources
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Elixer",
        slug: "builder-elixer",
        minTownhallId: 4,
        categoryId: 2, // Resources
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Capital Gold",
        slug: "capital-gold",
        minTownhallId: 6,
        categoryId: 2, // Resources
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Training Potion",
        slug: "training-potion",
        isObtainable: false,
        minTownhallId: 1,
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Resource Potion",
        slug: "resource-potion",
        minTownhallId: 1,
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Potion",
        slug: "builder-potion",
        minTownhallId: 1,
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Power Potion",
        slug: "power-potion",
        minTownhallId: 3,
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Research Potion",
        slug: "research-potion",
        minTownhallId: 3,
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Clock Tower Potion",
        slug: "clock-tower-potion",
        minTownhallId: 5,
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Star Jar",
        slug: "builder-star-jar",
        minTownhallId: 4,
        categoryId: 4, // Magic Items
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Hero Potion",
        slug: "hero-potion",
        minTownhallId: 7,
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Wall Ring",
        slug: "wall-ring",
        minTownhallId: 9,
        categoryId: 4, // Magic Items
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Super Potion",
        slug: "super-potion",
        minTownhallId: 11,
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Pet Potion",
        slug: "pet-potion",
        minTownhallId: 14,
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Book of Building",
        slug: "book-of-building",
        minTownhallId: 1,
        categoryId: 5, // Magic Books
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Book of Fighting",
        slug: "book-of-fighting",
        minTownhallId: 3,
        categoryId: 5, // Magic Books
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Book of Spells",
        slug: "book-of-spells",
        minTownhallId: 5,
        categoryId: 5, // Magic Books
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Book of Heroes",
        slug: "book-of-heroes",
        minTownhallId: 7,
        categoryId: 5, // Magic Books
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Shovel of Obstacles",
        slug: "shovel-of-obstacles",
        minTownhallId: 3,
        categoryId: 4, // Magic Items
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Rune of Builder Gold",
        slug: "rune-of-builder-gold",
        minTownhallId: 4,
        categoryId: 6, // Magic Runes
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Rune of Builder Elixer",
        slug: "rune-of-builder-elixer",
        minTownhallId: 4,
        categoryId: 6, // Magic Runes
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Book of Everything",
        slug: "book-of-everything",
        minTownhallId: 1,
        categoryId: 5, // Magic Books
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Hammer of Building",
        slug: "hammer-of-building",
        minTownhallId: 1,
        categoryId: 7, // Magic Hammers
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Hammer of Fighting",
        slug: "hammer-of-fighting",
        minTownhallId: 3,
        categoryId: 7, // Magic Hammers
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Hammer of Spells",
        slug: "hammer-of-spells",
        minTownhallId: 5,
        categoryId: 7, // Magic Hammers
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Hammer of Heroes",
        slug: "hammer-of-heroes",
        minTownhallId: 7,
        categoryId: 7, // Magic Hammers
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Rune of Gold",
        slug: "rune-of-gold",
        minTownhallId: 3,
        categoryId: 6, // Magic Runes
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Rune of Elixer",
        slug: "rune-of-elixer",
        minTownhallId: 3,
        categoryId: 6, // Magic Runes
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Rune of Dark Elixer",
        slug: "rune-of-dark-elixer",
        minTownhallId: 7,
        categoryId: 6, // Magic Runes
      },

      // Ores

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Shiny Ore",
        slug: "shiny-ore",
        minTownhallId: 8,
        categoryId: 8, // Ores
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Glowy Ore",
        slug: "glowy-ore",
        minTownhallId: 8,
        categoryId: 8, // Ores
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Starry Ore",
        slug: "starry-ore",
        minTownhallId: 8,
        categoryId: 8, // Ores
      },

      // Decorations

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Home Village (Shop)",
        slug: "home-village-shop",
        minTownhallId: 1,
        categoryId: 9, // Decorations
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Home Village (Limited)",
        slug: "home-village-limited",
        minTownhallId: 1,
        categoryId: 9, // Decorations
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Base (Shop)",
        slug: "builder-base-shop",
        minTownhallId: 1,
        categoryId: 9, // Decorations
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Base (Limited)",
        slug: "builder-base-limited",
        minTownhallId: 1,
        categoryId: 9, // Decorations
      },

      // Clan House

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Roof (Trader)",
        slug: "roof-trader",
        minTownhallId: 6,
        categoryId: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Walls (Trader)",
        slug: "walls-trader",
        minTownhallId: 6,
        categoryId: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Floor (Trader)",
        slug: "floor-trader",
        minTownhallId: 6,
        categoryId: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Decoration (Trader)",
        slug: "decoration-trader",
        minTownhallId: 6,
        categoryId: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Roof (Limited)",
        slug: "roof-limited",
        minTownhallId: 6,
        categoryId: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Walls (Limited)",
        slug: "walls-limited",
        minTownhallId: 6,
        categoryId: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Floor (Limited)",
        slug: "floor-limited",
        minTownhallId: 6,
        categoryId: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Decoration (Limited)",
        slug: "decoration-limited",
        minTownhallId: 6,
        categoryId: 10, // Clan House
      },

      // Hero Skins

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "King Skin",
        slug: "king-skin",
        minTownhallId: 7,
        categoryId: 11, // Hero Skins
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Queen Skin",
        slug: "queen-skin",
        minTownhallId: 8,
        categoryId: 11, // Hero Skins
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Grand Warden Skin",
        slug: "grand-warden-skin",
        minTownhallId: 11,
        categoryId: 11, // Hero Skins
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Royal Champion Skin",
        slug: "royal-champion-skin",
        minTownhallId: 13,
        categoryId: 11, // Hero Skins
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Battle Machine Skin",
        slug: "battle-machine-skin",
        minTownhallId: 4,
        categoryId: 11, // Hero Skins
      },

      // Hero Equipment

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "King Equipment",
        slug: "king-equipment",
        minTownhallId: 8,
        categoryId: 12, // Hero Equipment
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Queen Equipment",
        slug: "queen-equipment",
        minTownhallId: 8,
        categoryId: 12, // Hero Equipment
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Grand Warden Equipment",
        slug: "grand-warden-equipment",
        minTownhallId: 11,
        categoryId: 12, // Hero Equipment
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Royal Champion Equipment",
        slug: "royal-champion-equipment",
        minTownhallId: 13,
        categoryId: 12, // Hero Equipment
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Minion Prince Equipment",
        slug: "minion-prince-equipment",
        minTownhallId: 9,
        categoryId: 12, // Hero Equipment
      },
    ])
    .execute();
};
