import { Database } from "@/db/types/database";
import { FilterConfig } from "@/types/common";
import { Expression, expressionBuilder } from "kysely";
import { withFilteredChests } from "./chest";
import { db } from "@/db";
import { jsonArrayFrom } from "kysely/helpers/postgres";

export const getChestCountPerType = async (filters: FilterConfig) => {
  const types = await db
    .with("filtered_chest", () => withFilteredChests(filters))
    .selectFrom("type")
    .leftJoin("series", "series.typeId", "type.id")
    .leftJoin("event", "event.seriesId", "series.id")
    .leftJoin("filtered_chest", "filtered_chest.eventId", "event.id")

    .select((eb) => [
      "type.name",
      eb.fn.count<number>("filtered_chest.id").as("count"),
      jsonArrayFrom(
        eb
          .selectFrom("rarity")
          .innerJoin("filtered_chest", "filtered_chest.rarityId", "rarity.id")
          .innerJoin("event", "event.id", "filtered_chest.eventId")
          .innerJoin("series", "series.id", "event.seriesId")
          .select((eb) => [
            "rarity.name",
            eb.fn.count<number>("filtered_chest.id").as("count"),
          ])
          .whereRef("series.typeId", "=", "type.id")
          .groupBy(["rarity.id", "rarity.name"])
          .orderBy("rarity.chance", "desc"),
      ).as("rarities"),
    ])
    .groupBy(["type.id", "type.name"])
    .orderBy("count", "desc")
    .execute();

  return types;
};

export const Type = {
  getById: (typeId: Expression<number>) => {
    const eb = expressionBuilder<Database, never>();

    return eb
      .selectFrom("type")
      .select(["type.name"])
      .whereRef("id", "=", typeId);
  },
};
