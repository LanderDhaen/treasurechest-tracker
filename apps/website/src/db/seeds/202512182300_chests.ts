import { Kysely } from "kysely";
import { jsonArrayFrom, jsonObjectFrom } from "kysely/helpers/postgres";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const seed = async (db: Kysely<any>) => {
  await db.deleteFrom("chest").execute();

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

  const dlLander = await db
    .selectFrom("account")
    .selectAll()
    .where("tag", "=", "8RRG0LJR2")
    .executeTakeFirstOrThrow();
  const dlLanderTM = await db
    .selectFrom("account")
    .selectAll()
    .where("tag", "=", "PVPV2U0JG")
    .executeTakeFirstOrThrow();

  const events = await db
    .selectFrom("event")
    .select((eb) => [
      jsonObjectFrom(
        eb
          .selectFrom("event")
          .selectAll()
          .where("event.name", "=", "Meteor Catcher")
      )
        .$notNull()
        .as("meteorCatcher"),
      jsonObjectFrom(
        eb
          .selectFrom("event")
          .selectAll()
          .where("event.name", "=", "Treasure Hunt 7")
      )
        .$notNull()
        .as("treasureHunt7"),
      jsonObjectFrom(
        eb.selectFrom("event").selectAll().where("event.name", "=", "Clan Rush")
      )
        .$notNull()
        .as("clanRush"),
    ])
    .executeTakeFirstOrThrow();

  const rewards = await db
    .selectFrom("reward")
    .select((eb) => [
      // ───────────────────────────
      // Magic Snacks
      // ───────────────────────────
      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Builder Bite")
      )
        .$notNull()
        .as("builderBite"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Study Soup")
      )
        .$notNull()
        .as("studySoup"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Power Pancakes")
      )
        .$notNull()
        .as("powerPancakes"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Clan Castle Cake")
      )
        .$notNull()
        .as("clanCastleCake"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Mighty Morsel")
      )
        .$notNull()
        .as("mightyMorsel"),

      // ───────────────────────────
      // Resources
      // ───────────────────────────
      jsonObjectFrom(
        eb.selectFrom("reward").selectAll().where("reward.name", "=", "Gold")
      )
        .$notNull()
        .as("gold"),

      jsonObjectFrom(
        eb.selectFrom("reward").selectAll().where("reward.name", "=", "Elixer")
      )
        .$notNull()
        .as("elixer"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Dark Elixer")
      )
        .$notNull()
        .as("darkElixer"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Builder Gold")
      )
        .$notNull()
        .as("builderGold"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Builder Elixer")
      )
        .$notNull()
        .as("builderElixer"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Capital Gold")
      )
        .$notNull()
        .as("capitalGold"),

      // ───────────────────────────
      // Magic Items
      // ───────────────────────────
      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Resource Potion")
      )
        .$notNull()
        .as("resourcePotion"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Builder Potion")
      )
        .$notNull()
        .as("builderPotion"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Power Potion")
      )
        .$notNull()
        .as("powerPotion"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Research Potion")
      )
        .$notNull()
        .as("researchPotion"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Clock Tower Potion")
      )
        .$notNull()
        .as("clockTowerPotion"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Builder Star Jar")
      )
        .$notNull()
        .as("builderStarJar"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Hero Potion")
      )
        .$notNull()
        .as("heroPotion"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Wall Ring")
      )
        .$notNull()
        .as("wallRing"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Super Potion")
      )
        .$notNull()
        .as("superPotion"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Pet Potion")
      )
        .$notNull()
        .as("petPotion"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Book of Building")
      )
        .$notNull()
        .as("bookOfBuilding"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Book of Fighting")
      )
        .$notNull()
        .as("bookOfFighting"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Book of Spells")
      )
        .$notNull()
        .as("bookOfSpells"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Book of Heroes")
      )
        .$notNull()
        .as("bookOfHeroes"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Shovel of Obstacles")
      )
        .$notNull()
        .as("shovelOfObstacles"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Rune of Builder Gold")
      )
        .$notNull()
        .as("runeOfBuilderGold"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Rune of Builder Elixer")
      )
        .$notNull()
        .as("runeOfBuilderElixer"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Book of Everything")
      )
        .$notNull()
        .as("bookOfEverything"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Hammer of Building")
      )
        .$notNull()
        .as("hammerOfBuilding"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Hammer of Fighting")
      )
        .$notNull()
        .as("hammerOfFighting"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Hammer of Spells")
      )
        .$notNull()
        .as("hammerOfSpells"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Hammer of Heroes")
      )
        .$notNull()
        .as("hammerOfHeroes"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Rune of Gold")
      )
        .$notNull()
        .as("runeOfGold"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Rune of Elixer")
      )
        .$notNull()
        .as("runeOfElixer"),

      // ───────────────────────────
      // Ores
      // ───────────────────────────
      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Shiny Ore")
      )
        .$notNull()
        .as("shinyOre"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Glowy Ore")
      )
        .$notNull()
        .as("glowyOre"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Starry Ore")
      )
        .$notNull()
        .as("starryOre"),
      // ───────────────────────────
      // Decorations
      // ───────────────────────────
      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Shop Decoration (Home Village)")
      )
        .$notNull()
        .as("shopDecorationHomeVillage"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Limited Decoration (Home Village)")
      )
        .$notNull()
        .as("limitedDecorationHomeVillage"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Shop Decoration (Builder Base)")
      )
        .$notNull()
        .as("shopDecorationBuilderBase"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Limited Decoration (Builder Base)")
      )
        .$notNull()
        .as("limitedDecorationBuilderBase"),

      // ───────────────────────────
      // Clan House
      // ───────────────────────────
      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Trader Clan House Roof")
      )
        .$notNull()
        .as("traderClanHouseRoof"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Trader Clan House Walls")
      )
        .$notNull()
        .as("traderClanHouseWalls"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Trader Clan House Floor")
      )
        .$notNull()
        .as("traderClanHouseFloor"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Trader Clan House Decoration")
      )
        .$notNull()
        .as("traderClanHouseDecoration"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Limited Clan House Roof")
      )
        .$notNull()
        .as("limitedClanHouseRoof"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Limited Clan House Walls")
      )
        .$notNull()
        .as("limitedClanHouseWalls"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Limited Clan House Floor")
      )
        .$notNull()
        .as("limitedClanHouseFloor"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Limited Clan House Decoration")
      )
        .$notNull()
        .as("limitedClanHouseDecoration"),

      // ───────────────────────────
      // Hero Skins
      // ───────────────────────────
      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "King Skin")
      )
        .$notNull()
        .as("kingSkin"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Queen Skin")
      )
        .$notNull()
        .as("queenSkin"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Grand Warden Skin")
      )
        .$notNull()
        .as("grandWardenSkin"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Royal Champion Skin")
      )
        .$notNull()
        .as("royalChampionSkin"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Battle Machine Skin")
      )
        .$notNull()
        .as("battleMachineSkin"),

      // ───────────────────────────
      // Hero Equipment
      // ───────────────────────────
      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "King Equipment")
      )
        .$notNull()
        .as("kingEquipment"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Queen Equipment")
      )
        .$notNull()
        .as("queenEquipment"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Grand Warden Equipment")
      )
        .$notNull()
        .as("grandWardenEquipment"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Royal Champion Equipment")
      )
        .$notNull()
        .as("royalChampionEquipment"),

      jsonObjectFrom(
        eb
          .selectFrom("reward")
          .selectAll()
          .where("reward.name", "=", "Minion Prince Equipment")
      )
        .$notNull()
        .as("minionPrinceEquipment"),
    ])
    .executeTakeFirstOrThrow();

  await db
    .insertInto("chest")
    .values([
      // ───────────────────────────
      // Chests for DL✨Lander (Meteor Catcher)
      // ───────────────────────────

      {
        openedAt: "2025-11-04T17:27:00Z",
        rarityId: rarities.rare.id,
        accountId: dlLander.id,
        eventId: events.meteorCatcher.id,
        rewardId: rewards.builderStarJar.id,
      },
      {
        openedAt: "2025-11-07T17:01:00Z",
        rarityId: rarities.rare.id,
        accountId: dlLander.id,
        eventId: events.meteorCatcher.id,
        rewardId: rewards.resourcePotion.id,
      },
      {
        openedAt: "2025-11-13T17:48:00Z",
        rarityId: rarities.common.id,
        accountId: dlLander.id,
        eventId: events.meteorCatcher.id,
        rewardId: rewards.mightyMorsel.id,
      },
      {
        amount: 18800,
        openedAt: "2025-11-13T17:48:01Z",
        rarityId: rarities.rare.id,
        accountId: dlLander.id,
        eventId: events.meteorCatcher.id,
        rewardId: rewards.darkElixer.id,
      },
      {
        openedAt: "2025-11-13T17:50:00Z",
        rarityId: rarities.rare.id,
        accountId: dlLander.id,
        eventId: events.meteorCatcher.id,
        rewardId: rewards.clockTowerPotion.id,
      },
      {
        amount: 6,
        openedAt: "2025-11-13T17:50:01Z",
        rarityId: rarities.rare.id,
        accountId: dlLander.id,
        eventId: events.meteorCatcher.id,
        rewardId: rewards.starryOre.id,
      },
      {
        amount: 1010000,
        openedAt: "2025-11-16T23:55:01Z",
        rarityId: rarities.common.id,
        accountId: dlLander.id,
        eventId: events.meteorCatcher.id,
        rewardId: rewards.elixer.id,
      },
      {
        amount: 913000,
        openedAt: "2025-11-16T23:56:00Z",
        rarityId: rarities.common.id,
        accountId: dlLander.id,
        eventId: events.meteorCatcher.id,
        rewardId: rewards.elixer.id,
      },
      {
        openedAt: "2025-11-16T23:57:00Z",
        rarityId: rarities.common.id,
        accountId: dlLander.id,
        eventId: events.meteorCatcher.id,
        rewardId: rewards.mightyMorsel.id,
      },
      {
        openedAt: "2025-11-16T23:57:01Z",
        rarityId: rarities.common.id,
        accountId: dlLander.id,
        eventId: events.meteorCatcher.id,
        rewardId: rewards.builderBite.id,
      },
      {
        openedAt: "2025-11-16T23:57:02Z",
        rarityId: rarities.epic.id,
        accountId: dlLander.id,
        eventId: events.meteorCatcher.id,
        rewardId: rewards.traderClanHouseDecoration.id,
      },
      {
        amount: 1080000,
        openedAt: "2025-11-16T23:57:03Z",
        rarityId: rarities.common.id,
        accountId: dlLander.id,
        eventId: events.meteorCatcher.id,
        rewardId: rewards.elixer.id,
      },
      {
        amount: 1700000,
        openedAt: "2025-11-16T23:57:04Z",
        rarityId: rarities.common.id,
        accountId: dlLander.id,
        eventId: events.meteorCatcher.id,
        rewardId: rewards.gold.id,
      },
      // ───────────────────────────
      // Chests for DL✨Lander (Treasure Hunt 7)
      // ───────────────────────────
      {
        openedAt: "2025-11-28T14:07:00Z",
        rarityId: rarities.rare.id,
        accountId: dlLander.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.heroPotion.id,
      },
      {
        openedAt: "2025-11-29T00:49:00Z",
        rarityId: rarities.common.id,
        accountId: dlLander.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.powerPancakes.id,
      },
      {
        amount: 2390000,
        openedAt: "2025-11-29T00:53:00Z",
        rarityId: rarities.rare.id,
        accountId: dlLander.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.elixer.id,
      },
      {
        openedAt: "2025-11-29T00:57:00Z",
        rarityId: rarities.common.id,
        accountId: dlLander.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.clanCastleCake.id,
      },
      {
        amount: 10300,
        openedAt: "2025-11-30T22:19:00Z",
        rarityId: rarities.common.id,
        accountId: dlLander.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.darkElixer.id,
      },
      {
        openedAt: "2025-11-30T22:25:00Z",
        rarityId: rarities.common.id,
        accountId: dlLander.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.studySoup.id,
      },
      {
        amount: 2470000,
        openedAt: "2025-11-30T22:29:00Z",
        rarityId: rarities.rare.id,
        accountId: dlLander.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.gold.id,
      },
      {
        openedAt: "2025-11-30T22:32:00Z",
        rarityId: rarities.rare.id,
        accountId: dlLander.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.resourcePotion.id,
      },
      {
        openedAt: "2025-11-30T22:47:00Z",
        rarityId: rarities.common.id,
        accountId: dlLander.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.studySoup.id,
      },
      {
        amount: 13400,
        openedAt: "2025-11-30T22:49:00Z",
        rarityId: rarities.rare.id,
        accountId: dlLander.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.darkElixer.id,
      },
      {
        openedAt: "2025-11-30T22:53:00Z",
        rarityId: rarities.epic.id,
        accountId: dlLander.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.traderClanHouseDecoration.id,
      },
      {
        amount: 953000,
        openedAt: "2025-11-30T22:58:00Z",
        rarityId: rarities.common.id,
        accountId: dlLander.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.gold.id,
      },
      {
        openedAt: "2025-12-01T17:14:00Z",
        rarityId: rarities.common.id,
        accountId: dlLander.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.mightyMorsel.id,
      },
      {
        openedAt: "2025-12-01T18:28:00Z",
        rarityId: rarities.rare.id,
        accountId: dlLander.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.researchPotion.id,
      },
      {
        amount: 1150000,
        openedAt: "2025-12-01T18:33:00Z",
        rarityId: rarities.common.id,
        accountId: dlLander.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.elixer.id,
      },
      {
        amount: 843000,
        openedAt: "2025-12-01T18:43:00Z",
        rarityId: rarities.rare.id,
        accountId: dlLander.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.builderElixer.id,
      },
      {
        amount: 2180000,
        openedAt: "2025-12-02T12:22:00Z",
        rarityId: rarities.rare.id,
        accountId: dlLander.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.elixer.id,
      },
      {
        openedAt: "2025-12-02T12:33:00Z",
        rarityId: rarities.common.id,
        accountId: dlLander.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.powerPancakes.id,
      },
      {
        amount: 10600,
        openedAt: "2025-12-02T12:38:00Z",
        rarityId: rarities.common.id,
        accountId: dlLander.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.darkElixer.id,
      },
      {
        openedAt: "2025-12-02T14:43:00Z",
        rarityId: rarities.common.id,
        accountId: dlLander.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.powerPancakes.id,
      },
      // ───────────────────────────
      // Chests for DL✨Lander™ (Meteor Catcher)
      // ───────────────────────────
      {
        openedAt: "2025-11-03T20:30:00Z",
        rarityId: rarities.epic.id,
        accountId: dlLanderTM.id,
        eventId: events.meteorCatcher.id,
        rewardId: rewards.shopDecorationHomeVillage.id,
      },
      {
        amount: 544,
        openedAt: "2025-11-07T17:05:00Z",
        rarityId: rarities.rare.id,
        accountId: dlLanderTM.id,
        eventId: events.meteorCatcher.id,
        rewardId: rewards.shinyOre.id,
      },
      {
        openedAt: "2025-11-13T17:46:00Z",
        rarityId: rarities.common.id,
        accountId: dlLanderTM.id,
        eventId: events.meteorCatcher.id,
        rewardId: rewards.mightyMorsel.id,
      },
      {
        openedAt: "2025-11-13T17:47:00Z",
        rarityId: rarities.common.id,
        accountId: dlLanderTM.id,
        eventId: events.meteorCatcher.id,
        rewardId: rewards.clanCastleCake.id,
      },
      {
        amount: 403000,
        openedAt: "2025-11-13T17:51:00Z",
        rarityId: rarities.common.id,
        accountId: dlLanderTM.id,
        eventId: events.meteorCatcher.id,
        rewardId: rewards.builderGold.id,
      },
      {
        openedAt: "2025-11-13T17:51:01Z",
        rarityId: rarities.common.id,
        accountId: dlLanderTM.id,
        eventId: events.meteorCatcher.id,
        rewardId: rewards.studySoup.id,
      },
      {
        amount: 1140000,
        openedAt: "2025-11-17T01:38:00Z",
        rarityId: rarities.common.id,
        accountId: dlLanderTM.id,
        eventId: events.meteorCatcher.id,
        rewardId: rewards.elixer.id,
      },
      {
        amount: 1020000,
        openedAt: "2025-11-17T01:39:00Z",
        rarityId: rarities.common.id,
        accountId: dlLanderTM.id,
        eventId: events.meteorCatcher.id,
        rewardId: rewards.gold.id,
      },
      {
        openedAt: "2025-11-17T01:40:00Z",
        rarityId: rarities.common.id,
        accountId: dlLanderTM.id,
        eventId: events.meteorCatcher.id,
        rewardId: rewards.mightyMorsel.id,
      },
      {
        amount: 394000,
        openedAt: "2025-11-17T01:40:01Z",
        rarityId: rarities.common.id,
        accountId: dlLanderTM.id,
        eventId: events.meteorCatcher.id,
        rewardId: rewards.builderElixer.id,
      },
      {
        openedAt: "2025-11-17T01:40:02Z",
        rarityId: rarities.common.id,
        accountId: dlLanderTM.id,
        eventId: events.meteorCatcher.id,
        rewardId: rewards.studySoup.id,
      },
      {
        openedAt: "2025-11-17T01:40:03Z",
        rarityId: rarities.common.id,
        accountId: dlLanderTM.id,
        eventId: events.meteorCatcher.id,
        rewardId: rewards.mightyMorsel.id,
      },
      {
        openedAt: "2025-11-17T01:40:04Z",
        rarityId: rarities.rare.id,
        accountId: dlLanderTM.id,
        eventId: events.meteorCatcher.id,
        rewardId: rewards.builderPotion.id,
      },
      // ───────────────────────────
      // Chests for DL✨Lander™ (Treasure Hunt 7)
      // ───────────────────────────
      {
        openedAt: "2025-11-30T23:31:00Z",
        rarityId: rarities.common.id,
        accountId: dlLanderTM.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.studySoup.id,
      },
      {
        amount: 590000,
        openedAt: "2025-11-30T23:35:00Z",
        rarityId: rarities.common.id,
        accountId: dlLanderTM.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.builderElixer.id,
      },
      {
        amount: 6,
        openedAt: "2025-11-30T23:41:00Z",
        rarityId: rarities.rare.id,
        accountId: dlLanderTM.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.starryOre.id,
      },
      {
        amount: 10800,
        openedAt: "2025-11-30T23:44:00Z",
        rarityId: rarities.common.id,
        accountId: dlLanderTM.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.darkElixer.id,
      },
      {
        amount: 24200,
        openedAt: "2025-11-30T23:51:00Z",
        rarityId: rarities.rare.id,
        accountId: dlLanderTM.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.darkElixer.id,
      },
      {
        amount: 923000,
        openedAt: "2025-11-30T23:55:00Z",
        rarityId: rarities.common.id,
        accountId: dlLanderTM.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.gold.id,
      },
      {
        amount: 6,
        openedAt: "2025-11-30T23:58:00Z",
        rarityId: rarities.rare.id,
        accountId: dlLanderTM.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.starryOre.id,
      },
      {
        openedAt: "2025-12-01T00:01:00Z",
        rarityId: rarities.common.id,
        accountId: dlLanderTM.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.studySoup.id,
      },
      {
        openedAt: "2025-12-01T00:04:00Z",
        rarityId: rarities.rare.id,
        accountId: dlLanderTM.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.resourcePotion.id,
      },
      {
        amount: 10200,
        openedAt: "2025-12-01T00:08:00Z",
        rarityId: rarities.common.id,
        accountId: dlLanderTM.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.darkElixer.id,
      },
      {
        amount: 9900,
        openedAt: "2025-12-01T00:18:00Z",
        rarityId: rarities.common.id,
        accountId: dlLanderTM.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.darkElixer.id,
      },
      {
        amount: 1400,
        openedAt: "2025-12-01T00:23:00Z",
        rarityId: rarities.common.id,
        accountId: dlLanderTM.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.capitalGold.id,
      },
      {
        amount: 6,
        openedAt: "2025-12-02T23:21:00Z",
        rarityId: rarities.rare.id,
        accountId: dlLanderTM.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.starryOre.id,
      },
      {
        openedAt: "2025-12-02T23:26:00Z",
        rarityId: rarities.epic.id,
        accountId: dlLanderTM.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.traderClanHouseRoof.id,
      },
      {
        amount: 598,
        openedAt: "2025-12-02T23:30:00Z",
        rarityId: rarities.rare.id,
        accountId: dlLanderTM.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.shinyOre.id,
      },
      {
        amount: 558,
        openedAt: "2025-12-02T23:34:00Z",
        rarityId: rarities.rare.id,
        accountId: dlLanderTM.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.shinyOre.id,
      },
      {
        amount: 2,
        openedAt: "2025-12-02T23:38:00Z",
        rarityId: rarities.rare.id,
        accountId: dlLanderTM.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.wallRing.id,
      },
      {
        openedAt: "2025-12-02T23:40:00Z",
        rarityId: rarities.common.id,
        accountId: dlLanderTM.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.builderBite.id,
      },
      {
        amount: 753000,
        openedAt: "2025-12-02T23:43:00Z",
        rarityId: rarities.common.id,
        accountId: dlLanderTM.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.gold.id,
      },
      {
        openedAt: "2025-12-02T23:47:00Z",
        rarityId: rarities.common.id,
        accountId: dlLanderTM.id,
        eventId: events.treasureHunt7.id,
        rewardId: rewards.builderBite.id,
      },
    ])
    .execute();
};
