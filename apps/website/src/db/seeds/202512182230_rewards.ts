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
        minRarityId: 1,
        maxRarityId: 1,
        minTownhallId: 3,
        categoryId: 1, // Magic Snacks
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Bite",
        slug: "builder-bite",
        minRarityId: 1,
        maxRarityId: 1,
        minTownhallId: 3,
        categoryId: 1, // Magic Snacks
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Study Soup",
        slug: "study-soup",
        minRarityId: 1,
        maxRarityId: 1,
        minTownhallId: 3,
        categoryId: 1, // Magic Snacks
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Power Pancakes",
        slug: "power-pancakes",
        minRarityId: 1,
        maxRarityId: 1,
        minTownhallId: 3,
        categoryId: 1, // Magic Snacks
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Clan Castle Cake",
        slug: "clan-castle-cake",
        minRarityId: 1,
        maxRarityId: 1,
        minTownhallId: 4,
        categoryId: 1, // Magic Snacks
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Mighty Morsel",
        slug: "mighty-morsel",
        minRarityId: 1,
        maxRarityId: 1,
        minTownhallId: 7,
        categoryId: 1, // Magic Snacks
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Gold",
        slug: "gold",
        minRarityId: 1,
        maxRarityId: 2,
        minTownhallId: 1,
        categoryId: 2, // Resources
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Elixer",
        slug: "elixer",
        minRarityId: 1,
        maxRarityId: 2,
        minTownhallId: 1,
        categoryId: 2, // Resources
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Dark Elixer",
        slug: "dark-elixer",
        minRarityId: 1,
        maxRarityId: 2,
        minTownhallId: 7,
        categoryId: 2, // Resources
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Gold",
        slug: "builder-gold",
        minRarityId: 1,
        maxRarityId: 2,
        minTownhallId: 4,
        categoryId: 2, // Resources
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Elixer",
        slug: "builder-elixer",
        minRarityId: 1,
        maxRarityId: 2,
        minTownhallId: 4,
        categoryId: 2, // Resources
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Capital Gold",
        slug: "capital-gold",
        minRarityId: 1,
        maxRarityId: 2,
        minTownhallId: 6,
        categoryId: 2, // Resources
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Training Potion",
        slug: "training-potion",
        isObtainable: false,
        minRarityId: 2,
        maxRarityId: 2,
        minTownhallId: 1,
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Resource Potion",
        slug: "resource-potion",
        minRarityId: 2,
        maxRarityId: 2,
        minTownhallId: 1,
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Potion",
        slug: "builder-potion",
        minRarityId: 2,
        maxRarityId: 3,
        minTownhallId: 1,
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Power Potion",
        slug: "power-potion",
        minRarityId: 2,
        maxRarityId: 2,
        minTownhallId: 3,
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Research Potion",
        slug: "research-potion",
        minRarityId: 2,
        maxRarityId: 2,
        minTownhallId: 3,
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Clock Tower Potion",
        slug: "clock-tower-potion",
        minRarityId: 2,
        maxRarityId: 2,
        minTownhallId: 5,
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Star Jar",
        slug: "builder-star-jar",
        minRarityId: 2,
        maxRarityId: 2,
        minTownhallId: 4,
        categoryId: 4, // Magic Items
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Hero Potion",
        slug: "hero-potion",
        minRarityId: 2,
        maxRarityId: 2,
        minTownhallId: 7,
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Wall Ring",
        slug: "wall-ring",
        minRarityId: 2,
        maxRarityId: 2,
        minTownhallId: 9,
        categoryId: 4, // Magic Items
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Super Potion",
        slug: "super-potion",
        minRarityId: 2,
        maxRarityId: 2,
        minTownhallId: 11,
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Pet Potion",
        slug: "pet-potion",
        minRarityId: 2,
        maxRarityId: 2,
        minTownhallId: 14,
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Book of Building",
        slug: "book-of-building",
        minRarityId: 3,
        maxRarityId: 3,
        minTownhallId: 1,
        categoryId: 5, // Magic Books
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Book of Fighting",
        slug: "book-of-fighting",
        minRarityId: 3,
        maxRarityId: 3,
        minTownhallId: 3,
        categoryId: 5, // Magic Books
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Book of Spells",
        slug: "book-of-spells",
        minRarityId: 3,
        maxRarityId: 3,
        minTownhallId: 5,
        categoryId: 5, // Magic Books
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Book of Heroes",
        slug: "book-of-heroes",
        minRarityId: 3,
        maxRarityId: 3,
        minTownhallId: 7,
        categoryId: 5, // Magic Books
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Shovel of Obstacles",
        slug: "shovel-of-obstacles",
        minRarityId: 3,
        maxRarityId: 3,
        minTownhallId: 3,
        categoryId: 4, // Magic Items
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Rune of Builder Gold",
        slug: "rune-of-builder-gold",
        minRarityId: 3,
        maxRarityId: 3,
        minTownhallId: 4,
        categoryId: 6, // Magic Runes
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Rune of Builder Elixer",
        slug: "rune-of-builder-elixer",
        minRarityId: 3,
        maxRarityId: 3,
        minTownhallId: 4,
        categoryId: 6, // Magic Runes
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Book of Everything",
        slug: "book-of-everything",
        minRarityId: 4,
        maxRarityId: 4,
        minTownhallId: 1,
        categoryId: 5, // Magic Books
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Hammer of Building",
        slug: "hammer-of-building",
        minRarityId: 4,
        maxRarityId: 4,
        minTownhallId: 1,
        categoryId: 7, // Magic Hammers
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Hammer of Fighting",
        slug: "hammer-of-fighting",
        minRarityId: 4,
        maxRarityId: 4,
        minTownhallId: 3,
        categoryId: 7, // Magic Hammers
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Hammer of Spells",
        slug: "hammer-of-spells",
        minRarityId: 4,
        maxRarityId: 4,
        minTownhallId: 5,
        categoryId: 7, // Magic Hammers
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Hammer of Heroes",
        slug: "hammer-of-heroes",
        minRarityId: 4,
        maxRarityId: 4,
        minTownhallId: 7,
        categoryId: 7, // Magic Hammers
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Rune of Gold",
        slug: "rune-of-gold",
        minRarityId: 4,
        maxRarityId: 4,
        minTownhallId: 3,
        categoryId: 6, // Magic Runes
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Rune of Elixer",
        slug: "rune-of-elixer",
        minRarityId: 4,
        maxRarityId: 4,
        minTownhallId: 3,
        categoryId: 6, // Magic Runes
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Rune of Dark Elixer",
        slug: "rune-of-dark-elixer",
        minRarityId: 4,
        maxRarityId: 4,
        minTownhallId: 7,
        categoryId: 6, // Magic Runes
      },

      // Ores

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Shiny Ore",
        slug: "shiny-ore",
        minRarityId: 2,
        maxRarityId: 3,
        minTownhallId: 8,
        categoryId: 8, // Ores
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Glowy Ore",
        slug: "glowy-ore",
        minRarityId: 2,
        maxRarityId: 3,
        minTownhallId: 8,
        categoryId: 8, // Ores
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Starry Ore",
        slug: "starry-ore",
        minRarityId: 2,
        maxRarityId: 3,
        minTownhallId: 8,
        categoryId: 8, // Ores
      },

      // Decorations

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Home Village (Shop)",
        slug: "home-village-shop",
        minRarityId: 3,
        maxRarityId: 3,
        minTownhallId: 1,
        categoryId: 9, // Decorations
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Home Village (Limited)",
        slug: "home-village-limited",
        minRarityId: 3,
        maxRarityId: 3,
        minTownhallId: 1,
        categoryId: 9, // Decorations
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Base (Shop)",
        slug: "builder-base-shop",
        minRarityId: 3,
        maxRarityId: 3,
        minTownhallId: 1,
        categoryId: 9, // Decorations
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Base (Limited)",
        slug: "builder-base-limited",
        minRarityId: 3,
        maxRarityId: 3,
        minTownhallId: 1,
        categoryId: 9, // Decorations
      },

      // Clan House

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Roof (Trader)",
        slug: "roof-trader",
        minRarityId: 3,
        maxRarityId: 3,
        minTownhallId: 6,
        categoryId: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Walls (Trader)",
        slug: "walls-trader",
        minRarityId: 3,
        maxRarityId: 3,
        minTownhallId: 6,
        categoryId: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Floor (Trader)",
        slug: "floor-trader",
        minRarityId: 3,
        maxRarityId: 3,
        minTownhallId: 6,
        categoryId: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Decoration (Trader)",
        slug: "decoration-trader",
        minRarityId: 3,
        maxRarityId: 3,
        minTownhallId: 6,
        categoryId: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Roof (Limited)",
        slug: "roof-limited",
        minRarityId: 3,
        maxRarityId: 3,
        minTownhallId: 6,
        categoryId: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Walls (Limited)",
        slug: "walls-limited",
        minRarityId: 3,
        maxRarityId: 3,
        minTownhallId: 6,
        categoryId: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Floor (Limited)",
        slug: "floor-limited",
        minRarityId: 3,
        maxRarityId: 3,
        minTownhallId: 6,
        categoryId: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Decoration (Limited)",
        slug: "decoration-limited",
        minRarityId: 3,
        maxRarityId: 3,
        minTownhallId: 6,
        categoryId: 10, // Clan House
      },

      // Hero Skins

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "King Skin",
        slug: "king-skin",
        minRarityId: 4,
        maxRarityId: 4,
        minTownhallId: 7,
        categoryId: 11, // Hero Skins
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Queen Skin",
        slug: "queen-skin",
        minRarityId: 4,
        maxRarityId: 4,
        minTownhallId: 8,
        categoryId: 11, // Hero Skins
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Grand Warden Skin",
        slug: "grand-warden-skin",
        minRarityId: 4,
        maxRarityId: 4,
        minTownhallId: 11,
        categoryId: 11, // Hero Skins
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Royal Champion Skin",
        slug: "royal-champion-skin",
        minRarityId: 4,
        maxRarityId: 4,
        minTownhallId: 13,
        categoryId: 11, // Hero Skins
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Battle Machine Skin",
        slug: "battle-machine-skin",
        minRarityId: 4,
        maxRarityId: 4,
        minTownhallId: 4,
        categoryId: 11, // Hero Skins
      },

      // Hero Equipment

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "King Equipment",
        slug: "king-equipment",
        minRarityId: 4,
        maxRarityId: 4,
        minTownhallId: 8,
        categoryId: 12, // Hero Equipment
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Queen Equipment",
        slug: "queen-equipment",
        minTownhallId: 8,
        minRarityId: 4,
        maxRarityId: 4,
        categoryId: 12, // Hero Equipment
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Grand Warden Equipment",
        slug: "grand-warden-equipment",
        minRarityId: 4,
        maxRarityId: 4,
        minTownhallId: 11,
        categoryId: 12, // Hero Equipment
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Royal Champion Equipment",
        slug: "royal-champion-equipment",
        minRarityId: 4,
        maxRarityId: 4,
        minTownhallId: 13,
        categoryId: 12, // Hero Equipment
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Minion Prince Equipment",
        slug: "minion-prince-equipment",
        minRarityId: 4,
        maxRarityId: 4,
        minTownhallId: 9,
        categoryId: 12, // Hero Equipment
      },
    ])
    .execute();
};
