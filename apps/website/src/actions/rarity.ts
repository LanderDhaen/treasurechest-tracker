import { db } from "@/db";

export const getChestCountPerRarity = async () => {
  const result = await db
    .selectFrom("rarity")
    .leftJoin("chest", "chest.rarityId", "rarity.id")
    .select((eb) => [
      "rarity.name as rarity",
      eb.fn.count<number>("chest.id").as("count"),
    ])
    .groupBy(["rarity.name", "rarity.chance"])
    .orderBy("rarity.chance", "desc")
    .execute();

  console.log(result);

  return result;
};
