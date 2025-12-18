import { Kysely } from "kysely";
import { jsonObjectFrom } from "kysely/helpers/postgres";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const seed = async (db: Kysely<any>) => {
  await db.deleteFrom("reward").execute();

  const result = await db
    .selectFrom("category")
    .select((eb) => [
      jsonObjectFrom(
        eb
          .selectFrom("category")
          .selectAll()
          .where("category.name", "=", "Magic Snacks")
      )
        .$notNull()
        .as("magicSnacks"),
      jsonObjectFrom(
        eb
          .selectFrom("category")
          .selectAll()
          .where("category.name", "=", "Resources")
      )
        .$notNull()
        .as("resources"),
      jsonObjectFrom(
        eb
          .selectFrom("category")
          .selectAll()
          .where("category.name", "=", "Magic Items")
      )
        .$notNull()
        .as("magicItems"),
      jsonObjectFrom(
        eb
          .selectFrom("category")
          .selectAll()
          .where("category.name", "=", "Ores")
      )
        .$notNull()
        .as("ores"),
      jsonObjectFrom(
        eb
          .selectFrom("category")
          .selectAll()
          .where("category.name", "=", "Decorations")
      )
        .$notNull()
        .as("decorations"),
      jsonObjectFrom(
        eb
          .selectFrom("category")
          .selectAll()
          .where("category.name", "=", "Clan House")
      )
        .$notNull()
        .as("clanHouse"),
      jsonObjectFrom(
        eb
          .selectFrom("category")
          .selectAll()
          .where("category.name", "=", "Hero Skins")
      )
        .$notNull()
        .as("heroSkins"),
      jsonObjectFrom(
        eb
          .selectFrom("category")
          .selectAll()
          .where("category.name", "=", "Hero Equipment")
      )
        .$notNull()
        .as("heroEquipment"),
    ])
    .executeTakeFirstOrThrow();

  await db
    .insertInto("reward")
    .values([
      // Magic Snacks

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Bite",
        category: result.magicSnacks.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Study Soup",
        category: result.magicSnacks.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Power Pancakes",
        category: result.magicSnacks.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Clan Castle Cake",
        category: result.magicSnacks.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Mighty Morsel",
        category: result.magicSnacks.id,
      },

      // Resources

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Gold",
        category: result.resources.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Elixer",
        category: result.resources.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Dark Elixer",
        category: result.resources.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Gold",
        category: result.resources.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Elixer",
        category: result.resources.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Capital Gold",
        category: result.resources.id,
      },

      // Magic Items

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Resource Potion",
        category: result.magicItems.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Potion",
        category: result.magicItems.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Power Potion",
        category: result.magicItems.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Research Potion",
        category: result.magicItems.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Clock Tower Potion",
        category: result.magicItems.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Builder Star Jar",
        category: result.magicItems.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Hero Potion",
        category: result.magicItems.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Wall Ring",
        category: result.magicItems.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Super Potion",
        category: result.magicItems.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Pet Potion",
        category: result.magicItems.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Book of Building",
        category: result.magicItems.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Book of Fighting",
        category: result.magicItems.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Book of Spells",
        category: result.magicItems.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Book of Heroes",
        category: result.magicItems.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Shovel of Obstacles",
        category: result.magicItems.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Rune of Builder Gold",
        category: result.magicItems.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Rune of Builder Elixer",
        category: result.magicItems.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Book of Everything",
        category: result.magicItems.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Hammer of Building",
        category: result.magicItems.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Hammer of Fighting",
        category: result.magicItems.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Hammer of Spells",
        category: result.magicItems.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Hammer of Heroes",
        category: result.magicItems.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Rune of Gold",
        category: result.magicItems.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Rune of Elixer",
        category: result.magicItems.id,
      },

      // Ores

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Shiny Ore",
        category: result.ores.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Glowy Ore",
        category: result.ores.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Starry Ore",
        category: result.ores.id,
      },

      // Decorations

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Shop Decoration (Home Village)",
        category: result.decorations.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Limited Decoration (Home Village)",
        category: result.decorations.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Shop Decoration (Builder Base)",
        category: result.decorations.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Limited Decoration (Builder Base)",
        category: result.decorations.id,
      },

      // Clan House

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Trader Clan House Roof",
        category: result.clanHouse.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Trader Clan House Walls",
        category: result.clanHouse.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Trader Clan House Floor",
        category: result.clanHouse.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Trader Clan House Decoration",
        category: result.clanHouse.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Limited Clan House Roof",
        category: result.clanHouse.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Limited Clan House Walls",
        category: result.clanHouse.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Limited Clan House Floor",
        category: result.clanHouse.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Limited Clan House Decoration",
        category: result.clanHouse.id,
      },

      // Hero Skins

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "King Skin",
        category: result.heroSkins.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Queen Skin",
        category: result.heroSkins.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Grand Warden Skin",
        category: result.heroSkins.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Royal Champion Skin",
        category: result.heroSkins.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Battle Machine Skin",
        category: result.heroSkins.id,
      },

      // Hero Equipment

      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "King Equipment",
        category: result.heroEquipment.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Queen Equipment",
        category: result.heroEquipment.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Grand Warden Equipment",
        category: result.heroEquipment.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Royal Champion Equipment",
        category: result.heroEquipment.id,
      },
      {
        createdAt: "2025-12-18 22:30:00",
        updatedAt: "2025-12-18 22:30:00",
        name: "Minion Prince Equipment",
        category: result.heroEquipment.id,
      },
    ])
    .execute();
};
