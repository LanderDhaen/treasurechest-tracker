import { db } from "@/db";

export const getChestCountPerRarity = async (filters?: {
  accountId?: number;
  eventId?: number;
}) => {
  const rarities = await db
    .selectFrom("rarity")
    .leftJoin("chest", (join) => {
      let query = join.onRef("chest.rarityId", "=", "rarity.id"); // Include all rarities

      if (filters?.accountId) {
        query = query.on("chest.accountId", "=", filters.accountId);
      }

      if (filters?.eventId) {
        query = query.on("chest.eventId", "=", filters.eventId);
      }

      return query;
    })
    .select((eb) => [
      "rarity.name",
      eb.fn.count<number>("chest.id").as("count"),
    ])
    .groupBy(["rarity.name", "rarity.chance"])
    .orderBy("rarity.chance", "desc") // Common - Rare - Epic - Legendary
    .execute();

  return rarities;
};
