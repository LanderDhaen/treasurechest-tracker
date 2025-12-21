import { Kysely } from "kysely";
import { jsonObjectFrom } from "kysely/helpers/postgres";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const seed = async (db: Kysely<any>) => {
  await db.deleteFrom("category").execute();

  const rarities = await db
    .selectFrom("rarity")
    .select((eb) => [
      jsonObjectFrom(
        eb.selectFrom("rarity").selectAll().where("rarity.name", "=", "Common")
      )
        .$notNull()
        .as("common"),
      jsonObjectFrom(
        eb.selectFrom("rarity").selectAll().where("rarity.name", "=", "Rare")
      )
        .$notNull()
        .as("rare"),
      jsonObjectFrom(
        eb.selectFrom("rarity").selectAll().where("rarity.name", "=", "Epic")
      )
        .$notNull()
        .as("epic"),
      jsonObjectFrom(
        eb
          .selectFrom("rarity")
          .selectAll()
          .where("rarity.name", "=", "Legendary")
      )
        .$notNull()
        .as("legendary"),
    ])
    .executeTakeFirstOrThrow();

  await db
    .insertInto("category")
    .values([
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Magic Snacks",
        minRarity: rarities.common.id,
        maxRarity: rarities.rare.id,
      },
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Resources",
        minRarity: rarities.common.id,
        maxRarity: rarities.rare.id,
      },
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Magic Items",
        minRarity: rarities.rare.id,
        maxRarity: rarities.legendary.id,
      },
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Ores",
        minRarity: rarities.rare.id,
        maxRarity: rarities.epic.id,
      },
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Decorations",
        minRarity: rarities.epic.id,
        maxRarity: rarities.epic.id,
      },
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Clan House",
        minRarity: rarities.epic.id,
        maxRarity: rarities.epic.id,
      },
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Hero Skins",
        minRarity: rarities.legendary.id,
        maxRarity: rarities.legendary.id,
      },
      {
        createdAt: "2025-12-18 22:00:00",
        updatedAt: "2025-12-18 22:00:00",
        name: "Hero Equipment",
        minRarity: rarities.legendary.id,
        maxRarity: rarities.legendary.id,
      },
    ])
    .execute();
};
