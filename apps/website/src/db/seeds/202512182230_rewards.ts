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
        categoryId: 1, // Magic Snacks
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Bite",
        slug: "builder-bite",
        categoryId: 1, // Magic Snacks
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Study Soup",
        slug: "study-soup",
        categoryId: 1, // Magic Snacks
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Power Pancakes",
        slug: "power-pancakes",
        categoryId: 1, // Magic Snacks
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Clan Castle Cake",
        slug: "clan-castle-cake",
        categoryId: 1, // Magic Snacks
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Mighty Morsel",
        slug: "mighty-morsel",
        categoryId: 1, // Magic Snacks
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Gold",
        slug: "gold",
        categoryId: 2, // Resources
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Elixer",
        slug: "elixer",
        categoryId: 2, // Resources
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Dark Elixer",
        slug: "dark-elixer",
        categoryId: 2, // Resources
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Gold",
        slug: "builder-gold",
        categoryId: 2, // Resources
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Elixer",
        slug: "builder-elixer",
        categoryId: 2, // Resources
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Capital Gold",
        slug: "capital-gold",
        categoryId: 2, // Resources
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Training Potion",
        slug: "training-potion",
        isObtainable: false,
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Resource Potion",
        slug: "resource-potion",
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Potion",
        slug: "builder-potion",
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Power Potion",
        slug: "power-potion",
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Research Potion",
        slug: "research-potion",
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Clock Tower Potion",
        slug: "clock-tower-potion",
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Star Jar",
        slug: "builder-star-jar",
        categoryId: 4, // Magic Items
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Hero Potion",
        slug: "hero-potion",
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Wall Ring",
        slug: "wall-ring",
        categoryId: 4, // Magic Items
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Super Potion",
        slug: "super-potion",
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Pet Potion",
        slug: "pet-potion",
        categoryId: 3, // Magic Potions
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Book of Building",
        slug: "book-of-building",
        categoryId: 5, // Magic Books
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Book of Fighting",
        slug: "book-of-fighting",
        categoryId: 5, // Magic Books
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Book of Spells",
        slug: "book-of-spells",
        categoryId: 5, // Magic Books
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Book of Heroes",
        slug: "book-of-heroes",
        categoryId: 5, // Magic Books
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Shovel of Obstacles",
        slug: "shovel-of-obstacles",
        categoryId: 4, // Magic Items
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Rune of Builder Gold",
        slug: "rune-of-builder-gold",
        categoryId: 6, // Magic Runes
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Rune of Builder Elixer",
        slug: "rune-of-builder-elixer",
        categoryId: 6, // Magic Runes
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Book of Everything",
        slug: "book-of-everything",
        categoryId: 5, // Magic Books
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Hammer of Building",
        slug: "hammer-of-building",
        categoryId: 7, // Magic Hammers
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Hammer of Fighting",
        slug: "hammer-of-fighting",
        categoryId: 7, // Magic Hammers
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Hammer of Spells",
        slug: "hammer-of-spells",
        categoryId: 7, // Magic Hammers
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Hammer of Heroes",
        slug: "hammer-of-heroes",
        categoryId: 7, // Magic Hammers
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Rune of Gold",
        slug: "rune-of-gold",
        categoryId: 6, // Magic Runes
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Rune of Elixer",
        slug: "rune-of-elixer",
        categoryId: 6, // Magic Runes
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Rune of Dark Elixer",
        slug: "rune-of-dark-elixer",
        categoryId: 6, // Magic Runes
      },

      // Ores

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Shiny Ore",
        slug: "shiny-ore",
        categoryId: 8, // Ores
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Glowy Ore",
        slug: "glowy-ore",
        categoryId: 8, // Ores
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Starry Ore",
        slug: "starry-ore",
        categoryId: 8, // Ores
      },

      // Decorations

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Home Village (Shop)",
        slug: "home-village-shop",
        categoryId: 9, // Decorations
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Home Village (Limited)",
        slug: "home-village-limited",
        categoryId: 9, // Decorations
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Base (Shop)",
        slug: "builder-base-shop",
        categoryId: 9, // Decorations
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Base (Limited)",
        slug: "builder-base-limited",
        categoryId: 9, // Decorations
      },

      // Clan House

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Roof (Trader)",
        slug: "roof-trader",
        categoryId: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Walls (Trader)",
        slug: "walls-trader",
        categoryId: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Floor (Trader)",
        slug: "floor-trader",
        categoryId: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Decoration (Trader)",
        slug: "decoration-trader",
        categoryId: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Roof (Limited)",
        slug: "roof-limited",
        categoryId: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Walls (Limited)",
        slug: "walls-limited",
        categoryId: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Floor (Limited)",
        slug: "floor-limited",
        categoryId: 10, // Clan House
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Decoration (Limited)",
        slug: "decoration-limited",
        categoryId: 10, // Clan House
      },

      // Hero Skins

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "King Skin",
        slug: "king-skin",
        categoryId: 11, // Hero Skins
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Queen Skin",
        slug: "queen-skin",
        categoryId: 11, // Hero Skins
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Grand Warden Skin",
        slug: "grand-warden-skin",
        categoryId: 11, // Hero Skins
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Royal Champion Skin",
        slug: "royal-champion-skin",
        categoryId: 11, // Hero Skins
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Battle Machine Skin",
        slug: "battle-machine-skin",
        categoryId: 11, // Hero Skins
      },

      // Hero Equipment

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "King Equipment",
        slug: "king-equipment",
        categoryId: 12, // Hero Equipment
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Queen Equipment",
        slug: "queen-equipment",
        categoryId: 12, // Hero Equipment
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Grand Warden Equipment",
        slug: "grand-warden-equipment",
        categoryId: 12, // Hero Equipment
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Royal Champion Equipment",
        slug: "royal-champion-equipment",
        categoryId: 12, // Hero Equipment
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Minion Prince Equipment",
        slug: "minion-prince-equipment",
        categoryId: 12, // Hero Equipment
      },
    ])
    .execute();
};
