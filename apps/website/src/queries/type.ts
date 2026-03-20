import { FilterConfig } from "@/types/common";
import { withFilteredChests } from "./chest";
import { db } from "@/db";
import { jsonArrayFrom } from "kysely/helpers/postgres";

export const getAllTypes = async () => {
  const types = await db
    .selectFrom("type")
    .select(["type.name", "type.slug"])
    .where("type.isActive", "=", true)
    .orderBy("type.name", "asc")
    .execute();

  return types;
};

export const getTypeBySlug = async (slug: string) => {
  const type = await db
    .selectFrom("type")
    .select(["type.id"])
    .where("type.isActive", "=", true)
    .where("type.slug", "=", slug)
    .executeTakeFirst();

  return type;
};

export const getChestCountPerType = async (filters: FilterConfig) => {
  const types = await db
    .with("filtered_chest", () => withFilteredChests(filters))
    .selectFrom("type")
    .leftJoin("event", "event.typeId", "type.id")
    .leftJoin("filtered_chest", "filtered_chest.eventId", "event.id")

    .select((eb) => [
      "type.name",
      eb.fn.count<number>("filtered_chest.id").as("count"),
      jsonArrayFrom(
        eb
          .selectFrom("rarity")
          .innerJoin("filtered_chest", "filtered_chest.rarityId", "rarity.id")
          .innerJoin("event", "event.id", "filtered_chest.eventId")
          .select((eb) => [
            "rarity.name",
            eb.fn.count<number>("filtered_chest.id").as("count"),
          ])
          .whereRef("event.typeId", "=", "type.id")
          .groupBy(["rarity.id", "rarity.name"])
          .orderBy("rarity.chance", "desc"),
      ).as("rarities"),
    ])
    .groupBy(["type.id", "type.name"])
    .orderBy("count", "desc")
    .execute();

  return types;
};
