import { db } from "@/db";
import { jsonArrayFrom } from "kysely/helpers/postgres";
import { withFilteredChests } from "./chest";
import { FilterConfig } from "@/types/common";

export const getChestCountPerSeries = async (filters: FilterConfig) => {
  const series = await db
    .with("filtered_chest", () => withFilteredChests(filters))
    .selectFrom("series")
    .leftJoin("event", "event.seriesId", "series.id")
    .leftJoin("filtered_chest", "filtered_chest.eventId", "event.id")
    .select((eb) => [
      "series.name",
      eb.fn.count<number>("filtered_chest.id").as("count"),
      jsonArrayFrom(
        eb
          .selectFrom("rarity")
          .innerJoin("filtered_chest", "filtered_chest.rarityId", "rarity.id")
          .innerJoin("event", "filtered_chest.eventId", "event.id")
          .select((eb) => [
            "rarity.name",
            eb.fn.count<number>("filtered_chest.id").as("count"),
          ])
          .whereRef("event.seriesId", "=", "series.id")
          .groupBy(["rarity.id", "rarity.name"])
          .orderBy("rarity.chance", "desc"), // Common - Rare - Epic - Legendary
      ).as("rarities"),
    ])
    .groupBy(["series.id", "series.name"])
    .orderBy("count", "desc")
    .orderBy("series.name", "asc")
    .execute();

  return series;
};
