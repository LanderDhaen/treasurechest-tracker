import { db } from "@/db";

export const getChestCountPerRarity = async (accountId?: number) => {
  const rarities = await db
    .selectFrom("rarity")
    .leftJoin("chest", (join) => {
      let query = join.onRef("chest.rarityId", "=", "rarity.id"); // Include all rarities

      if (accountId) {
        query = query.on("chest.accountId", "=", accountId);
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
