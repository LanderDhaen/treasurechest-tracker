import { Kysely } from "kysely";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const seed = async (db: Kysely<any>) => {
  await db.deleteFrom("chest").execute();

  await db
    .insertInto("chest")
    .values([
      // ───────────────────────────
      // Chests for DL✨Lander (Meteor Catcher)
      // ───────────────────────────

      {
        openedAt: "2025-11-04T17:27:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 15, // Meteor Catcher
        rewardId: 17, // Builder Star Jar
      },
      {
        openedAt: "2025-11-07T17:01:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 15, // Meteor Catcher
        rewardId: 12, // Resource Potion
      },
      {
        openedAt: "2025-11-13T17:48:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 15, // Meteor Catcher
        rewardId: 5, // Mighty Morsel
      },
      {
        amount: 18800,
        openedAt: "2025-11-13T17:48:01Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 15, // Meteor Catcher
        rewardId: 8, // Dark Elixer
      },
      {
        openedAt: "2025-11-13T17:50:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 15, // Meteor Catcher
        rewardId: 16, // Clock Tower Potion
      },
      {
        amount: 6,
        openedAt: "2025-11-13T17:50:01Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 15, // Meteor Catcher
        rewardId: 38, // Starry Ore
      },
      {
        amount: 1010000,
        openedAt: "2025-11-16T23:55:01Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 15, // Meteor Catcher
        rewardId: 7, // Elixer
      },
      {
        amount: 913000,
        openedAt: "2025-11-16T23:56:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 15, // Meteor Catcher
        rewardId: 7, // Elixer
      },
      {
        openedAt: "2025-11-16T23:57:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 15, // Meteor Catcher
        rewardId: 5, // Mighty Morsel
      },
      {
        openedAt: "2025-11-16T23:57:01Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 15, // Meteor Catcher
        rewardId: 1, // Builder Bite,
      },
      {
        openedAt: "2025-11-16T23:57:02Z",
        rarityId: 3, // Epic
        accountId: 1, // DL✨Lander
        eventId: 15, // Meteor Catcher
        rewardId: 46, // Trader Clan House Decoration
      },
      {
        amount: 1080000,
        openedAt: "2025-11-16T23:57:03Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 15, // Meteor Catcher
        rewardId: 7, // Elixer
      },
      {
        amount: 1700000,
        openedAt: "2025-11-16T23:57:04Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 15, // Meteor Catcher
        rewardId: 6, // Gold
      },
      // ───────────────────────────
      // Chests for DL✨Lander (Treasure Hunt 7)
      // ───────────────────────────
      {
        openedAt: "2025-11-28T14:07:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 18, // Hero Potion
      },
      {
        openedAt: "2025-11-29T00:49:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 3, // Power Pancakes
      },
      {
        amount: 2390000,
        openedAt: "2025-11-29T00:53:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 7, // Elixer
      },
      {
        openedAt: "2025-11-29T00:57:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 4, // Clan Castle Cake
      },
      {
        amount: 10300,
        openedAt: "2025-11-30T22:19:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 8, // Dark Elixer
      },
      {
        openedAt: "2025-11-30T22:25:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 2, // Study Soup,
      },
      {
        amount: 2470000,
        openedAt: "2025-11-30T22:29:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 6, // Gold
      },
      {
        openedAt: "2025-11-30T22:32:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 12, // Resource Potion
      },
      {
        openedAt: "2025-11-30T22:47:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 2, // Study Soup,
      },
      {
        amount: 13400,
        openedAt: "2025-11-30T22:49:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 8, // Dark Elixer
      },
      {
        openedAt: "2025-11-30T22:53:00Z",
        rarityId: 3, // Epic
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 46, // Trader Clan House Decoration
      },
      {
        amount: 953000,
        openedAt: "2025-11-30T22:58:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 6, // Gold
      },
      {
        openedAt: "2025-12-01T17:14:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 5, // Mighty Morsel
      },
      {
        openedAt: "2025-12-01T18:28:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 15, // Research Potion
      },
      {
        amount: 1150000,
        openedAt: "2025-12-01T18:33:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 7, // Elixer
      },
      {
        amount: 843000,
        openedAt: "2025-12-01T18:43:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 10, // Builder Elixer
      },
      {
        amount: 2180000,
        openedAt: "2025-12-02T12:22:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 7, // Elixer
      },
      {
        openedAt: "2025-12-02T12:33:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 3, // Power Pancakes
      },
      {
        amount: 10600,
        openedAt: "2025-12-02T12:38:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 8, // Dark Elixer
      },
      {
        openedAt: "2025-12-02T14:43:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 3, // Power Pancakes
      },
      // ───────────────────────────
      // Chests for DL✨Lander™ (Meteor Catcher)
      // ───────────────────────────
      {
        openedAt: "2025-11-03T20:30:00Z",
        rarityId: 3, // Epic
        accountId: 3, // DL✨Lander™
        eventId: 15, // Meteor Catcher
        rewardId: 39, // Shop Decoration (Home Village)
      },
      {
        amount: 544,
        openedAt: "2025-11-07T17:05:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 15, // Meteor Catcher
        rewardId: 36, // Shiny Ore
      },
      {
        openedAt: "2025-11-13T17:46:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 15, // Meteor Catcher
        rewardId: 5, // Mighty Morsel
      },
      {
        openedAt: "2025-11-13T17:47:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 15, // Meteor Catcher
        rewardId: 4, // Clan Castle Cake
      },
      {
        amount: 403000,
        openedAt: "2025-11-13T17:51:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 15, // Meteor Catcher
        rewardId: 9, // Builder Gold
      },
      {
        openedAt: "2025-11-13T17:51:01Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 15, // Meteor Catcher
        rewardId: 2, // Study Soup,
      },
      {
        amount: 1140000,
        openedAt: "2025-11-17T01:38:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 15, // Meteor Catcher
        rewardId: 7, // Elixer
      },
      {
        amount: 1020000,
        openedAt: "2025-11-17T01:39:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 15, // Meteor Catcher
        rewardId: 6, // Gold
      },
      {
        openedAt: "2025-11-17T01:40:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 15, // Meteor Catcher
        rewardId: 5, // Mighty Morsel
      },
      {
        amount: 394000,
        openedAt: "2025-11-17T01:40:01Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 15, // Meteor Catcher
        rewardId: 10, // Builder Elixer
      },
      {
        openedAt: "2025-11-17T01:40:02Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 15, // Meteor Catcher
        rewardId: 2, // Study Soup,
      },
      {
        openedAt: "2025-11-17T01:40:03Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 15, // Meteor Catcher
        rewardId: 5, // Mighty Morsel
      },
      {
        openedAt: "2025-11-17T01:40:04Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 15, // Meteor Catcher
        rewardId: 13, // Builder Potion
      },
      // ───────────────────────────
      // Chests for DL✨Lander™ (Treasure Hunt 7)
      // ───────────────────────────
      {
        openedAt: "2025-11-30T23:31:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 2, // Study Soup,
      },
      {
        amount: 590000,
        openedAt: "2025-11-30T23:35:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 10, // Builder Elixer
      },
      {
        amount: 6,
        openedAt: "2025-11-30T23:41:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 38, // Starry Ore
      },
      {
        amount: 10800,
        openedAt: "2025-11-30T23:44:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 8, // Dark Elixer
      },
      {
        amount: 24200,
        openedAt: "2025-11-30T23:51:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 8, // Dark Elixer
      },
      {
        amount: 923000,
        openedAt: "2025-11-30T23:55:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 6, // Gold
      },
      {
        amount: 6,
        openedAt: "2025-11-30T23:58:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 38, // Starry Ore
      },
      {
        openedAt: "2025-12-01T00:01:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 2, // Study Soup,
      },
      {
        openedAt: "2025-12-01T00:04:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 12, // Resource Potion
      },
      {
        amount: 10200,
        openedAt: "2025-12-01T00:08:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 8, // Dark Elixer
      },
      {
        amount: 9900,
        openedAt: "2025-12-01T00:18:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 8, // Dark Elixer
      },
      {
        amount: 1400,
        openedAt: "2025-12-01T00:23:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 11, // Capital Gold
      },
      {
        amount: 6,
        openedAt: "2025-12-02T23:21:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 38, // Starry Ore
      },
      {
        openedAt: "2025-12-02T23:26:00Z",
        rarityId: 3, // Epic
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 43, // Trader Clan House Roof
      },
      {
        amount: 598,
        openedAt: "2025-12-02T23:30:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 36, // Shiny Ore
      },
      {
        amount: 558,
        openedAt: "2025-12-02T23:34:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 36, // Shiny Ore
      },
      {
        amount: 2,
        openedAt: "2025-12-02T23:38:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 19, // Wall Ring
      },
      {
        openedAt: "2025-12-02T23:40:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 1, // Builder Bite,
      },
      {
        amount: 753000,
        openedAt: "2025-12-02T23:43:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 6, // Gold
      },
      {
        openedAt: "2025-12-02T23:47:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 1, // Builder Bite,
      },
      // ───────────────────────────
      // Chests for Lander (Splash Bash)
      // ───────────────────────────
      {
        openedAt: "2025-08-22T18:00:00Z",
        rarityId: 3, // Epic
        accountId: 4, // Lander
        eventId: 11, // Splash Bash
        rewardId: 40, // Limited Decoration (Home Village)
      },
      // ───────────────────────────
      // Chests for Lander (Clan Rush)
      // ───────────────────────────
      {
        openedAt: "2025-12-19T01:02:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 8, // Dark Elixer
        amount: 26200,
      },
      {
        openedAt: "2025-12-19T01:02:01Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 4, // Clan Castle Cake
      },
      {
        openedAt: "2025-12-19T01:02:02Z",
        rarityId: 3, // Epic
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 40, // Limited Decoration (Home Village)
      },
      {
        openedAt: "2025-12-19T01:03:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 1, // Builder Bite,
      },
      {
        openedAt: "2025-12-19T01:03:01Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 6, // Gold
        amount: 951000,
      },
      {
        openedAt: "2025-12-19T01:03:02Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 37, // Glowy Ore
        amount: 69,
      },
      {
        openedAt: "2025-12-19T01:03:03Z",
        rarityId: 3, // Epic
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 40, // Limited Decoration (Home Village)
      },
      {
        openedAt: "2025-12-19T01:03:04Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 15, // Research Potion
      },
      {
        openedAt: "2025-12-19T01:03:05Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 5, // Mighty Morsel
      },
      {
        openedAt: "2025-12-19T01:03:06Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 4, // Clan Castle Cake
      },
      {
        openedAt: "2025-12-19T01:04:07Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 12, // Resource Potion
      },
      {
        openedAt: "2025-12-19T01:04:08Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 1, // Builder Bite,
      },
      {
        openedAt: "2025-12-19T01:04:09Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 19, // Wall Ring
        amount: 2,
      },
      {
        openedAt: "2025-12-19T01:04:10Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 6, // Gold
        amount: 794000,
      },
      {
        openedAt: "2025-12-19T01:04:11Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 14, // Power Potion
      },
      {
        openedAt: "2025-12-19T01:04:12Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 4, // Clan Castle Cake
      },
      {
        openedAt: "2025-12-19T01:04:13Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 10, // Builder Elixer
      },
      {
        openedAt: "2025-12-19T01:04:14Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 1, // Builder Bite,
      },
      {
        openedAt: "2025-12-19T01:05:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 8, // Dark Elixer
        amount: 10800,
      },
      {
        openedAt: "2025-12-19T01:05:01Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 21, // Pet Potion
      },
    ])
    .execute();
};
