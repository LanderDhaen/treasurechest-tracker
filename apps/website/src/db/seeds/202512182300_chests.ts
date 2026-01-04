import { Kysely } from "kysely";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const seed = async (db: Kysely<any>) => {
  await db.deleteFrom("chest").execute();

  // DL✨Lander

  await db
    .insertInto("chest")
    .values([
      {
        amount: 11500,
        openedAt: "2024-09-19T12:13:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 1, // Treasure Chest Launch
        rewardId: 9, // Dark Elixer
      },
      {
        amount: 675000,
        openedAt: "2024-09-19T12:13:01Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 1, // Treasure Chest Launch
        rewardId: 8, // Elixer
      },
      {
        amount: 637,
        openedAt: "2024-09-19T12:13:02Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 1, // Treasure Chest Launch
        rewardId: 38, // Shiny Ore
      },
      {
        amount: 10200,
        openedAt: "2024-09-19T12:13:03Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 1, // Treasure Chest Launch
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2024-09-19T12:13:04Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 1, // Treasure Chest Launch
        rewardId: 5, // Clan Castle Cake
      },
      {
        amount: 9590,
        openedAt: "2024-09-19T12:42:18Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2024-09-20T16:11:47Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 14, // Resource Potion
      },
      {
        amount: 7760,
        openedAt: "2024-09-21T01:37:29Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 9, // Dark Elixer
      },
      {
        amount: 1860000,
        openedAt: "2024-09-21T11:26:03Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 8, // Elixer
      },
      {
        amount: 569000,
        openedAt: "2024-09-22T18:02:41Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 10, // Builder Gold
      },
      {
        openedAt: "2024-09-23T00:48:56Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 18, // Clock Tower Potion
      },
      {
        openedAt: "2024-09-23T10:19:34Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 20, // Hero Potion
      },
      {
        amount: 11600,
        openedAt: "2024-09-24T17:06:22Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2024-09-25T01:12:08Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 6, // Mighty Morsel
      },
      {
        openedAt: "2024-09-25T11:41:55Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 6, // Mighty Morsel
      },
      {
        openedAt: "2024-09-26T19:03:27Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 16, // Power Potion
      },
      {
        openedAt: "2024-09-27T00:57:44Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 1, // Training Treat
      },
      {
        amount: 1320000,
        openedAt: "2024-09-27T10:33:18Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 8, // Elixer
      },
      {
        openedAt: "2024-09-28T15:22:49Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 13, // Training Potion
      },
      {
        openedAt: "2024-09-29T01:46:11Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 3, // Study Soup
      },
      {
        amount: 1050000,
        openedAt: "2024-09-29T10:54:37Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 7, // Gold
      },
      {
        openedAt: "2024-09-30T18:09:52Z",
        rarityId: 3, // Epic
        accountId: 1, // DL✨Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 51, // Limited Clan House Floor
      },
      {
        openedAt: "2024-10-01T01:58:26Z",
        rarityId: 3, // Epic
        accountId: 1, // DL✨Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 24, // Book of Building
      },
      {
        amount: 932000,
        openedAt: "2024-10-01T11:13:09Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 7, // Gold
      },
      {
        amount: 11500,
        openedAt: "2024-10-02T17:34:48Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 9, // Dark Elixer
      },
      {
        amount: 879000,
        openedAt: "2024-10-03T01:21:57Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 7, // Gold
      },
      {
        openedAt: "2024-10-03T10:47:16Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 5, // Clan Castle Cake
      },
      {
        openedAt: "2024-10-04T16:28:39Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 4, // Power Pancakes
      },
      {
        amount: 718000,
        openedAt: "2024-10-05T00:42:05Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 8, // Elixer
      },
      {
        openedAt: "2024-10-05T11:09:44Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 19, // Builder Star Jar
      },
      {
        openedAt: "2024-10-06T18:17:32Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 16, // Power Potion
      },
      {
        amount: 1010000,
        openedAt: "2024-10-07T01:53:08Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 10, // Builder Gold
      },
      {
        openedAt: "2024-10-07T10:36:21Z",
        rarityId: 3, // Epic
        accountId: 1, // DL✨Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 49, // Limited Clan House Roof
      },
      {
        openedAt: "2024-10-08T17:44:59Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 6, // Mighty Morsel
      },
      {
        openedAt: "2024-10-09T01:26:43Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 16, // Power Potion
      },
      {
        openedAt: "2024-12-04T10:00:01Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 3, // Controllable Heroes
        rewardId: 1, // Training Treat
      },
      {
        openedAt: "2024-12-05T10:00:01Z",
        rarityId: 4, // Legendary
        accountId: 1, // DL✨Lander
        eventId: 3, // Controllable Heroes
        rewardId: 31, // Book of Everything
      },
      {
        openedAt: "2024-12-06T10:00:01Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 3, // Controllable Heroes
        rewardId: 5, // Clan Castle Cake
      },
      {
        openedAt: "2024-12-07T10:00:01Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 3, // Controllable Heroes
        rewardId: 2, // Builder Bite
      },
      {
        amount: 1880000,
        openedAt: "2024-12-08T10:00:01Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 3, // Controllable Heroes
        rewardId: 7, // Gold
      },
      {
        amount: 930000,
        openedAt: "2024-12-08T10:00:02Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 3, // Controllable Heroes
        rewardId: 7, // Gold
      },
      {
        openedAt: "2024-12-09T10:00:01Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 3, // Controllable Heroes
        rewardId: 3, // Study Soup
      },
      {
        amount: 548000,
        openedAt: "2024-12-09T10:00:02Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 3, // Controllable Heroes
        rewardId: 11, // Builder Elixer
      },
      {
        openedAt: "2024-12-10T10:00:01Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 3, // Controllable Heroes
        rewardId: 6, // Mighty Morsel
      },
      {
        openedAt: "2024-12-10T10:00:02Z",
        rarityId: 3, // Epic
        accountId: 1, // DL✨Lander
        eventId: 3, // Controllable Heroes
        rewardId: 41, // Shop Decoration (Home Village)
      },
      {
        openedAt: "2024-12-11T10:00:01Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 3, // Controllable Heroes
        rewardId: 20, // Hero Potion
      },
      {
        openedAt: "2024-12-11T10:00:02Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 3, // Controllable Heroes
        rewardId: 16, // Power Potion
      },
      {
        amount: 11200,
        openedAt: "2024-12-12T10:00:01Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 3, // Controllable Heroes
        rewardId: 9, // Dark Elixer
      },
      {
        amount: 12000,
        openedAt: "2024-12-12T10:00:02Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 3, // Controllable Heroes
        rewardId: 9, // Dark Elixer
      },
      {
        amount: 2590,
        openedAt: "2024-12-12T10:00:03Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 3, // Controllable Heroes
        rewardId: 12, // Capital Gold
      },
      {
        openedAt: "2024-12-12T10:00:04Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 3, // Controllable Heroes
        rewardId: 1, // Training Treat
      },
      {
        openedAt: "2024-12-12T10:00:05Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 3, // Controllable Heroes
        rewardId: 4, // Power Pancakes
      },
      {
        openedAt: "2024-12-12T10:00:06Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 3, // Controllable Heroes
        rewardId: 20, // Hero Potion
      },
      {
        amount: 570000,
        openedAt: "2024-12-12T10:00:07Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 3, // Controllable Heroes
        rewardId: 10, // Builder Gold
      },
      {
        amount: 7840,
        openedAt: "2024-12-13T10:00:01Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 3, // Controllable Heroes
        rewardId: 9, // Dark Elixer
      },

      {
        amount: 11000,
        openedAt: "2024-12-25T14:26:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 4, // Christmas Chest
        rewardId: 9, // Dark Elixer
      },

      {
        openedAt: "2025-03-17T16:51:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 5, // Content Creator Chests
        rewardId: 1, // Training Treat
      },
      {
        amount: 225,
        openedAt: "2025-03-17T16:51:01Z",
        rarityId: 3, // Epic
        accountId: 1, // DL✨Lander
        eventId: 5, // Content Creator Chests
        rewardId: 39, // Glowy Ore
      },
      {
        openedAt: "2025-03-17T16:51:02Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 5, // Content Creator Chests
        rewardId: 6, // Mighty Morsel
      },
      {
        openedAt: "2025-03-17T16:51:03Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 5, // Content Creator Chests
        rewardId: 17, // Research Potion
      },
      {
        amount: 7,
        openedAt: "2025-03-17T16:51:04Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 5, // Content Creator Chests
        rewardId: 40, // Starry Ore
      },

      {
        openedAt: "2025-03-17T17:13:04Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 20, // Hero Potion
      },
      {
        openedAt: "2025-03-17T17:18:04Z",
        rarityId: 4, // Legendary
        accountId: 1, // DL✨Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 31, // Book of Everything
      },
      {
        openedAt: "2025-03-17T17:24:04Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 6, // Mighty Morsel
      },

      {
        openedAt: "2025-03-18T12:28:04Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 1, // Training Treat
      },
      {
        openedAt: "2025-03-18T12:33:35Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 6, // Mighty Morsel
      },
      {
        amount: 19800,
        openedAt: "2025-03-18T12:39:06Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 9, // Dark Elixer
      },

      {
        amount: 13400,
        openedAt: "2025-03-19T12:35:47Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 9, // Dark Elixer
      },
      {
        amount: 30,
        openedAt: "2025-03-19T12:40:47Z",
        rarityId: 3, // Epic
        accountId: 1, // DL✨Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 38, // Starry Ore
      },
      {
        openedAt: "2025-03-19T12:45:47Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 19, // Builder Star Jar
      },

      {
        openedAt: "2025-03-20T10:22:03Z",
        rarityId: 3, // Epic
        accountId: 1, // DL✨Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 49, // Clan House Roof
      },
      {
        openedAt: "2025-03-20T10:27:03Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 15, // Builder Potion
      },
      {
        openedAt: "2025-03-20T10:32:03Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 6, // Mighty Morsel
      },

      {
        amount: 12500,
        openedAt: "2025-03-21T23:50:59Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 9, // Dark Elixer
      },
      {
        amount: 1020,
        openedAt: "2025-03-21T23:55:59Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 12, // Capital Gold
      },
      {
        amount: 3,
        openedAt: "2025-03-21T23:59:59Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 21, // Wall Ring
      },

      {
        openedAt: "2025-03-22T17:14:22Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 22, // Super Potion
      },
      {
        openedAt: "2025-03-22T17:19:22Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 6, // Mighty Morsel
      },
      {
        amount: 831000,
        openedAt: "2025-03-22T17:24:22Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 7, // Gold
      },

      {
        amount: 13100,
        openedAt: "2025-03-23T20:28:12Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 9, // Dark Elixer
      },
      {
        amount: 13200,
        openedAt: "2025-03-23T21:01:12Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2025-03-23T21:56:12Z",
        rarityId: 3, // Epic
        accountId: 1, // DL✨Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 25, // Book of Fighting
      },

      {
        openedAt: "2025-03-24T20:05:48Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 20, // Hero Potion
      },
      {
        openedAt: "2025-03-24T20:14:48Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 2, // Builder Bite
      },
      {
        openedAt: "2025-03-24T21:04:48Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 20, // Hero Potion
      },

      {
        amount: 770000,
        openedAt: "2025-04-14T18:23:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 7, // Gold Rush
        rewardId: 11, // Builder Elixer
      },
      {
        openedAt: "2025-04-14T18:23:01Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 7, // Gold Rush
        rewardId: 4, // Clan Castle Cake
      },
      {
        amount: 1160000,
        openedAt: "2025-04-14T18:23:02Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 7, // Gold Rush
        rewardId: 7, // Gold
      },
      {
        openedAt: "2025-04-14T18:23:03Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 7, // Gold Rush
        rewardId: 16, // Power Potion
      },
      {
        openedAt: "2025-04-14T18:23:04Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 7, // Gold Rush
        rewardId: 3, // Study Soup
      },
      {
        openedAt: "2025-04-14T18:24:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 7, // Gold Rush
        rewardId: 3, // Study Soup
      },
      {
        openedAt: "2025-04-14T18:24:01Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 7, // Gold Rush
        rewardId: 6, // Mighty Morsel
      },
      {
        openedAt: "2025-04-14T18:24:02Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 7, // Gold Rush
        rewardId: 4, // Power Pancakes
      },
      {
        amount: 1000000,
        openedAt: "2025-04-14T18:24:03Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 7, // Gold Rush
        rewardId: 7, // Gold
      },
      {
        openedAt: "2025-04-14T18:24:04Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 7, // Gold Rush
        rewardId: 22, // Super Potion
      },
      {
        openedAt: "2025-04-15T19:30:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 7, // Gold Rush
        rewardId: 6, // Mighty Morsel
      },
      {
        openedAt: "2025-04-15T19:30:01Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 7, // Gold Rush
        rewardId: 14, // Resource Potion
      },
      {
        openedAt: "2025-04-15T19:30:02Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 7, // Gold Rush
        rewardId: 4, // Power Pancakes
      },
      {
        openedAt: "2025-04-15T19:30:03Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 7, // Gold Rush
        rewardId: 3, // Study Soup
      },
      {
        amount: 2040000,
        openedAt: "2025-04-15T19:30:04Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 7, // Gold Rush
        rewardId: 7, // Gold
      },
      {
        openedAt: "2025-04-15T19:31:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 7, // Gold Rush
        rewardId: 16, // Power Potion
      },
      {
        amount: 938000,
        openedAt: "2025-04-15T19:31:01Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 7, // Gold Rush
        rewardId: 7, // Gold
      },
      {
        amount: 1170000,
        openedAt: "2025-04-15T19:31:02Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 7, // Gold Rush
        rewardId: 8, // Elixer
      },
      {
        openedAt: "2025-04-15T19:31:03Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 7, // Gold Rush
        rewardId: 4, // Power Pancakes
      },
      {
        amount: 541000,
        openedAt: "2025-04-15T19:31:04Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 7, // Gold Rush
        rewardId: 10, // Builder Gold
      },

      {
        amount: 11000,
        openedAt: "2025-04-24T12:01:00Z",
        rarityId: 3, // Epic
        accountId: 1, // DL✨Lander
        eventId: 8, // WWE Chest
        rewardId: 9, // Starry Ore
      },

      {
        amount: 673,
        openedAt: "2025-05-17T21:22:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 9, // Treasure Hunt 3
        rewardId: 38, // Shiny Ore
      },
      {
        openedAt: "2025-05-17T21:45:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 9, // Treasure Hunt 3
        rewardId: 3, // Study Soup
      },
      {
        amount: 10400,
        openedAt: "2025-05-17T21:48:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 9, // Treasure Hunt 3
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2025-05-17T22:00:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 9, // Treasure Hunt 3
        rewardId: 5, // Clan Castle Cake
      },
      {
        openedAt: "2025-05-18T21:12:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 9, // Treasure Hunt 3
        rewardId: 3, // Study Soup
      },
      {
        openedAt: "2025-05-18T21:28:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 9, // Treasure Hunt 3
        rewardId: 18, // Clock Tower Potion
      },
      {
        openedAt: "2025-05-18T21:33:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 9, // Treasure Hunt 3
        rewardId: 2, // Builder Bite
      },
      {
        openedAt: "2025-05-18T21:44:00Z",
        rarityId: 4, // Legendary
        accountId: 1, // DL✨Lander
        eventId: 9, // Treasure Hunt 3
        rewardId: 32, // Hammer of Building
      },
      {
        amount: 432000,
        openedAt: "2025-05-19T11:52:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 9, // Treasure Hunt 3
        rewardId: 10, // Builder Gold
      },
      {
        amount: 12300,
        openedAt: "2025-05-19T11:58:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 9, // Treasure Hunt 3
        rewardId: 9, // Dark Elixer
      },
      {
        amount: 221,
        openedAt: "2025-05-19T12:03:00Z",
        rarityId: 3, // Epic
        accountId: 1, // DL✨Lander
        eventId: 9, // Treasure Hunt 3
        rewardId: 39, // Glowy Ore
      },
      {
        amount: 1600000,
        openedAt: "2025-05-19T12:07:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 9, // Treasure Hunt 3
        rewardId: 7, // Gold
      },
      {
        amount: 10200,
        openedAt: "2025-05-20T19:54:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 9, // Treasure Hunt 3
        rewardId: 9, // Dark Elixer
      },
      {
        amount: 1400,
        openedAt: "2025-05-20T19:58:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 9, // Treasure Hunt 3
        rewardId: 12, // Capital Gold
      },
      {
        openedAt: "2025-05-20T20:03:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 9, // Treasure Hunt 3
        rewardId: 23, // Pet Potion
      },
      {
        amount: 939000,
        openedAt: "2025-05-20T20:08:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 9, // Treasure Hunt 3
        rewardId: 8, // Elixer
      },
      {
        amount: 624000,
        openedAt: "2025-05-21T13:36:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 9, // Treasure Hunt 3
        rewardId: 10, // Builder Gold
      },
      {
        openedAt: "2025-05-21T13:41:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 9, // Treasure Hunt 3
        rewardId: 2, // Builder Bite
      },
      {
        amount: 2400,
        openedAt: "2025-05-21T13:46:00Z",
        rarityId: 3, // Epic
        accountId: 1, // DL✨Lander
        eventId: 9, // Treasure Hunt 3
        rewardId: 38, // Shiny Ore
      },
      {
        amount: 827000,
        openedAt: "2025-05-21T13:49:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 9, // Treasure Hunt 3
        rewardId: 7, // Gold
      },

      {
        amount: 12900,
        openedAt: "2025-07-17T13:55:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 10, // Treasure Hunt 4
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2025-07-17T14:02:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 10, // Treasure Hunt 4
        rewardId: 14, // Resource Potion
      },
      {
        amount: 6,
        openedAt: "2025-07-17T14:06:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 10, // Treasure Hunt 4
        rewardId: 40, // Starry Ore
      },
      {
        amount: 2080000,
        openedAt: "2025-07-17T14:10:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 10, // Treasure Hunt 4
        rewardId: 7, // Gold
      },
      {
        amount: 1700000,
        openedAt: "2025-07-18T20:52:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 10, // Treasure Hunt 4
        rewardId: 8, // Elixer
      },
      {
        amount: 887000,
        openedAt: "2025-07-18T21:04:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 10, // Treasure Hunt 4
        rewardId: 8, // Elixer
      },
      {
        amount: 30,
        openedAt: "2025-07-18T21:08:00Z",
        rarityId: 3, // Epic
        accountId: 1, // DL✨Lander
        eventId: 10, // Treasure Hunt 4
        rewardId: 40, // Starry Ore
      },
      {
        openedAt: "2025-07-18T21:51:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 10, // Treasure Hunt 4
        rewardId: 6, // Mighty Morsel
      },
      {
        amount: 1190000,
        openedAt: "2025-07-20T23:54:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 10, // Treasure Hunt 4
        rewardId: 8, // Elixer
      },
      {
        amount: 65,
        openedAt: "2025-07-21T00:11:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 10, // Treasure Hunt 4
        rewardId: 39, // Glowy Ore
      },
      {
        openedAt: "2025-07-21T00:32:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 10, // Treasure Hunt 4
        rewardId: 2, // Builder Bite
      },
      {
        amount: 383000,
        openedAt: "2025-07-21T00:45:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 10, // Treasure Hunt 4
        rewardId: 10, // Builder Gold
      },
      {
        openedAt: "2025-07-21T00:53:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 10, // Treasure Hunt 4
        rewardId: 14, // Resource Potion
      },
      {
        amount: 1000000,
        openedAt: "2025-07-21T01:06:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 10, // Treasure Hunt 4
        rewardId: 7, // Gold
      },
      {
        openedAt: "2025-07-21T01:10:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 10, // Treasure Hunt 4
        rewardId: 5, // Clan Castle Cake
      },
      {
        openedAt: "2025-07-21T01:15:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 10, // Treasure Hunt 4
        rewardId: 17, // Research Potion
      },
      {
        amount: 559000,
        openedAt: "2025-07-22T00:32:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 10, // Treasure Hunt 4
        rewardId: 10, // Builder Gold
      },
      {
        openedAt: "2025-07-22T00:35:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 10, // Treasure Hunt 4
        rewardId: 2, // Builder Bite
      },
      {
        openedAt: "2025-07-22T00:39:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 10, // Treasure Hunt 4
        rewardId: 3, // Study Soup
      },
      {
        amount: 634,
        openedAt: "2025-07-22T00:42:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 10, // Treasure Hunt 4
        rewardId: 38, // Shiny Ore
      },

      {
        amount: 2260,
        openedAt: "2025-08-14T23:12:00Z",
        rarityId: 3, // Epic
        accountId: 1, // DL✨Lander
        eventId: 11, // Splash Bash
        rewardId: 38, // Shiny Ore
      },

      {
        amount: 2,
        openedAt: "2025-08-15T00:14:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 12, // Hero Rush
        rewardId: 21, // Wall Ring
      },
      {
        openedAt: "2025-08-15T00:14:01Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 12, // Hero Rush
        rewardId: 2, // Builder Bite
      },
      {
        amount: 2010,
        openedAt: "2025-08-15T00:14:02Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 12, // Hero Rush
        rewardId: 12, // Capital Gold
      },
      {
        amount: 1640000,
        openedAt: "2025-08-15T00:14:03Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 12, // Hero Rush
        rewardId: 7, // Gold
      },
      {
        openedAt: "2025-08-15T00:14:04Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 12, // Hero Rush
        rewardId: 3, // Study Soup
      },
      {
        amount: 7,
        openedAt: "2025-08-15T00:15:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 12, // Hero Rush
        rewardId: 40, // Starry Ore
      },
      {
        amount: 138000,
        openedAt: "2025-08-15T00:15:01Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 12, // Hero Rush
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2025-08-15T00:15:02Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 12, // Hero Rush
        rewardId: 3, // Study Soup
      },
      {
        openedAt: "2025-08-15T00:15:03Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 12, // Hero Rush
        rewardId: 3, // Study Soup
      },
      {
        openedAt: "2025-08-15T00:15:04Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 12, // Hero Rush
        rewardId: 22, // Super Potion
      },
      {
        amount: 60,
        openedAt: "2025-08-15T00:16:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 12, // Hero Rush
        rewardId: 39, // Glowy Ore
      },
      {
        openedAt: "2025-08-15T00:16:01Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 12, // Hero Rush
        rewardId: 2, // Builder Bite
      },
      {
        openedAt: "2025-08-15T00:16:02Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 12, // Hero Rush
        rewardId: 6, // Mighty Morsel
      },
      {
        openedAt: "2025-08-15T00:16:03Z",
        rarityId: 3, // Epic
        accountId: 1, // DL✨Lander
        eventId: 12, // Hero Rush
        rewardId: 52, // Limited Clan House Decoration
      },
      {
        amount: 1180000,
        openedAt: "2025-08-15T00:16:04Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 12, // Hero Rush
        rewardId: 8, // Elixer
      },
      {
        openedAt: "2025-08-15T15:28:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 12, // Hero Rush
        rewardId: 3, // Study Soup
      },
      {
        openedAt: "2025-08-15T15:28:01Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 12, // Hero Rush
        rewardId: 5, // Clan Castle Cake
      },
      {
        amount: 18800,
        openedAt: "2025-08-15T15:28:02Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 12, // Hero Rush
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2025-08-15T15:28:03Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 12, // Hero Rush
        rewardId: 3, // Study Soup
      },
      {
        openedAt: "2025-08-15T15:28:04Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 12, // Hero Rush
        rewardId: 2, // Builder Bite
      },

      {
        openedAt: "2025-10-03T08:32:00Z",
        rarityId: 4, // Legendary
        accountId: 1, // DL✨Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 37, // Rune of Elixer
      },
      {
        openedAt: "2025-10-03T08:34:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 6, // Mighty Morsel
      },
      {
        openedAt: "2025-10-03T08:47:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 3, // Study Soup
      },
      {
        openedAt: "2025-10-03T08:48:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 17, // Research Potion
      },
      {
        amount: 1230,
        openedAt: "2025-10-03T08:49:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 12, // Capital Gold
      },
      {
        openedAt: "2025-10-03T08:50:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 22, // Super Potion
      },
      {
        openedAt: "2025-10-03T08:50:01Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 4, // Power Pancakes
      },
      {
        amount: 505000,
        openedAt: "2025-10-03T08:51:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 11, // Builder Elixer
      },
      {
        openedAt: "2025-10-03T08:51:01Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 2, // Builder Bite
      },
      {
        amount: 75,
        openedAt: "2025-10-03T08:53:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 39, // Glowy Ore
      },
      {
        openedAt: "2025-10-03T09:52:00Z",
        rarityId: 3, // Epic
        accountId: 1, // DL✨Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 47, // Limited Clan House Roof
      },
      {
        openedAt: "2025-10-03T09:53:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 4, // Power Pancakes
      },
      {
        openedAt: "2025-10-03T09:53:01Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 4, // Power Pancakes
      },
      {
        openedAt: "2025-10-03T09:54:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 5, // Clan Castle Cake
      },
      {
        openedAt: "2025-10-03T09:55:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 6, // Mighty Morsel
      },
      {
        openedAt: "2025-10-03T09:55:01Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 5, // Clan Castle Cake
      },
      {
        openedAt: "2025-10-03T09:56:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 17, // Research Potion
      },
      {
        openedAt: "2025-10-03T09:57:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 3, // Study Soup
      },

      {
        openedAt: "2025-10-28T13:11:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 14, // Treasure Hunt 6
        rewardId: 4, // Power Pancakes
      },
      {
        openedAt: "2025-10-28T13:14:00Z",
        rarityId: 3, // Epic
        accountId: 1, // DL✨Lander
        eventId: 14, // Treasure Hunt 6
        rewardId: 42, // Limited Decoration (Home Village)
      },
      {
        openedAt: "2025-10-28T13:18:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 14, // Treasure Hunt 6
        rewardId: 14, // Resource Potion
      },
      {
        amount: 2170000,
        openedAt: "2025-10-28T13:29:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 14, // Treasure Hunt 6
        rewardId: 7, // Gold
      },
      {
        amount: 9890,
        openedAt: "2025-10-28T13:33:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 14, // Treasure Hunt 6
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2025-10-28T13:34:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 14, // Treasure Hunt 6
        rewardId: 17, // Research Potion
      },
      {
        openedAt: "2025-10-28T13:37:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 14, // Treasure Hunt 6
        rewardId: 16, // Power Potion
      },
      {
        amount: 11900,
        openedAt: "2025-10-28T13:38:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 14, // Treasure Hunt 6
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2025-10-28T13:38:01Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 14, // Treasure Hunt 6
        rewardId: 2, // Builder Bite
      },
      {
        amount: 2000,
        openedAt: "2025-10-28T13:39:00Z",
        rarityId: 3, // Epic
        accountId: 1, // DL✨Lander
        eventId: 14, // Treasure Hunt 6
        rewardId: 38, // Shiny Ore
      },
      {
        amount: 1640000,
        openedAt: "2025-10-28T13:40:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 14, // Treasure Hunt 6
        rewardId: 7, // Gold
      },
      {
        amount: 9280,
        openedAt: "2025-10-28T13:41:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 14, // Treasure Hunt 6
        rewardId: 9, // Dark Elixer
      },

      {
        openedAt: "2025-11-04T17:27:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 15, // Meteor Catcher
        rewardId: 19, // Builder Star Jar
      },
      {
        openedAt: "2025-11-07T17:01:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 15, // Meteor Catcher
        rewardId: 14, // Resource Potion
      },
      {
        openedAt: "2025-11-13T17:48:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 15, // Meteor Catcher
        rewardId: 6, // Mighty Morsel
      },
      {
        amount: 18800,
        openedAt: "2025-11-13T17:48:01Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 15, // Meteor Catcher
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2025-11-13T17:50:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 15, // Meteor Catcher
        rewardId: 18, // Clock Tower Potion
      },
      {
        amount: 6,
        openedAt: "2025-11-13T17:50:01Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 15, // Meteor Catcher
        rewardId: 40, // Starry Ore
      },
      {
        amount: 1010000,
        openedAt: "2025-11-16T23:55:01Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 15, // Meteor Catcher
        rewardId: 8, // Elixer
      },
      {
        amount: 913000,
        openedAt: "2025-11-16T23:56:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 15, // Meteor Catcher
        rewardId: 8, // Elixer
      },
      {
        openedAt: "2025-11-16T23:57:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 15, // Meteor Catcher
        rewardId: 6, // Mighty Morsel
      },
      {
        openedAt: "2025-11-16T23:57:01Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 15, // Meteor Catcher
        rewardId: 2, // Builder Bite,
      },
      {
        openedAt: "2025-11-16T23:57:02Z",
        rarityId: 3, // Epic
        accountId: 1, // DL✨Lander
        eventId: 15, // Meteor Catcher
        rewardId: 48, // Trader Clan House Decoration
      },
      {
        amount: 1080000,
        openedAt: "2025-11-16T23:57:03Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 15, // Meteor Catcher
        rewardId: 8, // Elixer
      },
      {
        amount: 1700000,
        openedAt: "2025-11-16T23:57:04Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 15, // Meteor Catcher
        rewardId: 7, // Gold
      },

      {
        openedAt: "2025-11-28T14:07:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 20, // Hero Potion
      },
      {
        openedAt: "2025-11-29T00:49:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 4, // Power Pancakes
      },
      {
        amount: 2390000,
        openedAt: "2025-11-29T00:53:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 8, // Elixer
      },
      {
        openedAt: "2025-11-29T00:57:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 5, // Clan Castle Cake
      },
      {
        amount: 10300,
        openedAt: "2025-11-30T22:19:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2025-11-30T22:25:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 3, // Study Soup,
      },
      {
        amount: 2470000,
        openedAt: "2025-11-30T22:29:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 7, // Gold
      },
      {
        openedAt: "2025-11-30T22:32:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 14, // Resource Potion
      },
      {
        openedAt: "2025-11-30T22:47:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 3, // Study Soup,
      },
      {
        amount: 13400,
        openedAt: "2025-11-30T22:49:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2025-11-30T22:53:00Z",
        rarityId: 3, // Epic
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 48, // Trader Clan House Decoration
      },
      {
        amount: 953000,
        openedAt: "2025-11-30T22:58:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 7, // Gold
      },
      {
        openedAt: "2025-12-01T17:14:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 6, // Mighty Morsel
      },
      {
        openedAt: "2025-12-01T18:28:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 17, // Research Potion
      },
      {
        amount: 1150000,
        openedAt: "2025-12-01T18:33:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 8, // Elixer
      },
      {
        amount: 843000,
        openedAt: "2025-12-01T18:43:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 11, // Builder Elixer
      },
      {
        amount: 2180000,
        openedAt: "2025-12-02T12:22:00Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 8, // Elixer
      },
      {
        openedAt: "2025-12-02T12:33:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 4, // Power Pancakes
      },
      {
        amount: 10600,
        openedAt: "2025-12-02T12:38:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2025-12-02T14:43:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 4, // Power Pancakes
      },

      {
        openedAt: "2025-12-19T00:51:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 17, // Clan Rush
        rewardId: 6, // Mighty Morsel
      },
      {
        openedAt: "2025-12-19T00:51:01Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 17, // Clan Rush
        rewardId: 17, // Research Potion
      },
      {
        amount: 12900,
        openedAt: "2025-12-19T00:51:02Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 17, // Clan Rush
        rewardId: 9, // Dark Elixer
      },
      {
        amount: 3,
        openedAt: "2025-12-19T00:51:03Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 17, // Clan Rush
        rewardId: 21, // Wall Ring
      },
      {
        amount: 33,
        openedAt: "2025-12-19T00:51:04Z",
        rarityId: 3, // Epic
        accountId: 1, // DL✨Lander
        eventId: 17, // Clan Rush
        rewardId: 40, // Starry Ore
      },
      {
        amount: 10100,
        openedAt: "2025-12-19T00:53:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 17, // Clan Rush
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2025-12-19T00:53:01Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 17, // Clan Rush
        rewardId: 17, // Research Potion
      },
      {
        openedAt: "2025-12-19T00:53:02Z",
        rarityId: 4, // Legendary
        accountId: 1, // DL✨Lander
        eventId: 17, // Clan Rush
        rewardId: 31, // Book of Everything
      },
      {
        openedAt: "2025-12-19T00:53:03Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 17, // Clan Rush
        rewardId: 5, // Clan Castle Cake
      },
      {
        openedAt: "2025-12-19T00:53:04Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 17, // Clan Rush
        rewardId: 17, // Research Potion
      },
      {
        amount: 941000,
        openedAt: "2025-12-19T00:54:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 17, // Clan Rush
        rewardId: 7, // Gold
      },
      {
        amount: 964000,
        openedAt: "2025-12-19T00:54:01Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 17, // Clan Rush
        rewardId: 7, // Gold
      },
      {
        amount: 6,
        openedAt: "2025-12-19T00:54:02Z",
        rarityId: 2, // Rare
        accountId: 1, // DL✨Lander
        eventId: 17, // Clan Rush
        rewardId: 40, // Starry Ore
      },
      {
        amount: 811000,
        openedAt: "2025-12-19T00:54:03Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 17, // Clan Rush
        rewardId: 7, // Gold
      },
      {
        openedAt: "2025-12-19T00:54:04Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 17, // Clan Rush
        rewardId: 3, // Study Soup
      },
      {
        openedAt: "2025-12-19T00:55:00Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 17, // Clan Rush
        rewardId: 3, // Study Soup
      },
      {
        amount: 1120000,
        openedAt: "2025-12-19T00:55:01Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 17, // Clan Rush
        rewardId: 7, // Gold
      },
      {
        amount: 2410,
        openedAt: "2025-12-19T00:55:02Z",
        rarityId: 3, // Epic
        accountId: 1, // DL✨Lander
        eventId: 17, // Clan Rush
        rewardId: 38, // Shiny Ore
      },
      {
        openedAt: "2025-12-19T00:55:03Z",
        rarityId: 1, // Common
        accountId: 1, // DL✨Lander
        eventId: 17, // Clan Rush
        rewardId: 5, // Clan Castle Cake
      },
      {
        openedAt: "2025-12-19T00:55:04Z",
        rarityId: 4, // Legendary
        accountId: 1, // DL✨Lander
        eventId: 17, // Clan Rush
        rewardId: 53, // King Skin
      },
    ])
    .execute();

  // DL Senne

  await db
    .insertInto("chest")
    .values([
      {
        amount: 74,
        openedAt: "2025-12-03T02:39:00Z",
        rarityId: 2, // Rare
        accountId: 2, // DL Senne
        eventId: 16, // Treasure Hunt 7
        rewardId: 39, // Glowy Ore
      },
      {
        openedAt: "2025-12-03T02:56:00Z",
        rarityId: 2, // Rare
        accountId: 2, // DL Senne
        eventId: 16, // Treasure Hunt 7
        rewardId: 16, // Power Potion
      },
      {
        amount: 1040000,
        openedAt: "2025-12-03T03:06:00Z",
        rarityId: 1, // Common
        accountId: 2, // DL Senne
        eventId: 16, // Treasure Hunt 7
        rewardId: 7, // Gold
      },
      {
        amount: 9440,
        openedAt: "2025-12-03T03:10:00Z",
        rarityId: 1, // Common
        accountId: 2, // DL Senne
        eventId: 16, // Treasure Hunt 7
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2025-12-03T03:13:00Z",
        rarityId: 2, // Rare
        accountId: 2, // DL Senne
        eventId: 16, // Treasure Hunt 7
        rewardId: 16, // Power Potion
      },
      {
        amount: 1890000,
        openedAt: "2025-12-03T03:15:00Z",
        rarityId: 2, // Rare
        accountId: 2, // DL Senne
        eventId: 16, // Treasure Hunt 7
        rewardId: 7, // Gold
      },
      {
        openedAt: "2025-12-03T03:19:00Z",
        rarityId: 2, // Rare
        accountId: 2, // DL Senne
        eventId: 16, // Treasure Hunt 7
        rewardId: 14, // Resource Potion
      },
      {
        amount: 432000,
        openedAt: "2025-12-03T03:22:00Z",
        rarityId: 1, // Common
        accountId: 2, // DL Senne
        eventId: 16, // Treasure Hunt 7
        rewardId: 11, // Builder Elixer
      },
      {
        openedAt: "2025-12-03T03:25:00Z",
        rarityId: 1, // Common
        accountId: 2, // DL Senne
        eventId: 16, // Treasure Hunt 7
        rewardId: 2, // Builder Bite
      },
      {
        openedAt: "2025-12-03T03:37:00Z",
        rarityId: 2, // Rare
        accountId: 2, // DL Senne
        eventId: 16, // Treasure Hunt 7
        rewardId: 15, // Builder Potion
      },
      {
        amount: 863000,
        openedAt: "2025-12-03T03:40:00Z",
        rarityId: 1, // Common
        accountId: 2, // DL Senne
        eventId: 16, // Treasure Hunt 7
        rewardId: 7, // Gold
      },
      {
        openedAt: "2025-12-03T03:43:00Z",
        rarityId: 2, // Rare
        accountId: 2, // DL Senne
        eventId: 16, // Treasure Hunt 7
        rewardId: 19, // Builder Star Jar
      },
      {
        amount: 13100,
        openedAt: "2025-12-03T03:46:00Z",
        rarityId: 1, // Common
        accountId: 2, // DL Senne
        eventId: 16, // Treasure Hunt 7
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2025-12-03T03:49:00Z",
        rarityId: 2, // Rare
        accountId: 2, // DL Senne
        eventId: 16, // Treasure Hunt 7
        rewardId: 18, // Clock Tower Potion
      },
      {
        amount: 3,
        openedAt: "2025-12-03T03:51:00Z",
        rarityId: 2, // Rare
        accountId: 2, // DL Senne
        eventId: 16, // Treasure Hunt 7
        rewardId: 21, // Wall Ring
      },
      {
        openedAt: "2025-12-03T03:54:00Z",
        rarityId: 1, // Common
        accountId: 2, // DL Senne
        eventId: 16, // Treasure Hunt 7
        rewardId: 5, // Clan Castle Cake
      },
      {
        amount: 1060000,
        openedAt: "2025-12-03T03:57:00Z",
        rarityId: 1, // Common
        accountId: 2, // DL Senne
        eventId: 16, // Treasure Hunt 7
        rewardId: 7, // Gold
      },
      {
        amount: 855000,
        openedAt: "2025-12-03T03:57:01Z",
        rarityId: 1, // Common
        accountId: 2, // DL Senne
        eventId: 16, // Treasure Hunt 7
        rewardId: 8, // Elixer
      },
      {
        openedAt: "2025-12-03T03:58:00Z",
        rarityId: 2, // Rare
        accountId: 2, // DL Senne
        eventId: 16, // Treasure Hunt 7
        rewardId: 15, // Builder Potion
      },
      {
        openedAt: "2025-12-03T04:05:00Z",
        rarityId: 3, // Epic
        accountId: 2, // DL Senne
        eventId: 16, // Treasure Hunt 7
        rewardId: 47, // Limited Clan House Roof
      },

      {
        openedAt: "2025-12-19T01:06:00Z",
        rarityId: 2, // Rare
        accountId: 2, // DL Senne
        eventId: 17, // Clan Rush
        rewardId: 18, // Clock Tower Potion
      },
      {
        openedAt: "2025-12-19T01:06:01Z",
        rarityId: 1, // Common
        accountId: 2, // DL Senne
        eventId: 17, // Clan Rush
        rewardId: 2, // Builder Bite
      },
      {
        openedAt: "2025-12-19T01:06:02Z",
        rarityId: 2, // Rare
        accountId: 2, // DL Senne
        eventId: 17, // Clan Rush
        rewardId: 17, // Research Potion
      },
      {
        openedAt: "2025-12-19T01:06:03Z",
        rarityId: 1, // Common
        accountId: 2, // DL Senne
        eventId: 17, // Clan Rush
        rewardId: 4, // Power Pancakes
      },
      {
        openedAt: "2025-12-19T01:06:04Z",
        rarityId: 2, // Rare
        accountId: 2, // DL Senne
        eventId: 17, // Clan Rush
        rewardId: 14, // Resource Potion
      },
      {
        openedAt: "2025-12-19T01:07:00Z",
        rarityId: 1, // Common
        accountId: 2, // DL Senne
        eventId: 17, // Clan Rush
        rewardId: 3, // Study Soup
      },
      {
        openedAt: "2025-12-19T01:07:01Z",
        rarityId: 3, // Epic
        accountId: 2, // DL Senne
        eventId: 17, // Clan Rush
        rewardId: 42, // Limited Decoration (Home Village)
      },
      {
        openedAt: "2025-12-19T01:07:02Z",
        rarityId: 1, // Common
        accountId: 2, // DL Senne
        eventId: 17, // Clan Rush
        rewardId: 4, // Power Pancakes
      },
      {
        openedAt: "2025-12-19T01:07:03Z",
        rarityId: 1, // Common
        accountId: 2, // DL Senne
        eventId: 17, // Clan Rush
        rewardId: 6, // Mighty Morsel
      },
      {
        openedAt: "2025-12-19T01:07:04Z",
        rarityId: 1, // Common
        accountId: 2, // DL Senne
        eventId: 17, // Clan Rush
        rewardId: 5, // Clan Castle Cake
      },
      {
        openedAt: "2025-12-19T01:08:00Z",
        rarityId: 1, // Common
        accountId: 2, // DL Senne
        eventId: 17, // Clan Rush
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2025-12-19T01:08:01Z",
        rarityId: 4, // Legendary
        accountId: 2, // DL Senne
        eventId: 17, // Clan Rush
        rewardId: 54, // Queen Skin
      },
      {
        amount: 2230,
        openedAt: "2025-12-19T01:08:02Z",
        rarityId: 3, // Epic
        accountId: 2, // DL Senne
        eventId: 17, // Clan Rush
        rewardId: 38, // Shiny Ore
      },
      {
        amount: 846000,
        openedAt: "2025-12-19T01:08:03Z",
        rarityId: 1, // Common
        accountId: 2, // DL Senne
        eventId: 17, // Clan Rush
        rewardId: 7, // Gold
      },
      {
        openedAt: "2025-12-19T01:08:04Z",
        rarityId: 1, // Common
        accountId: 2, // DL Senne
        eventId: 17, // Clan Rush
        rewardId: 4, // Power Pancakes
      },
      {
        openedAt: "2025-12-19T01:09:00Z",
        rarityId: 1, // Common
        accountId: 2, // DL Senne
        eventId: 17, // Clan Rush
        rewardId: 4, // Power Pancakes
      },
      {
        openedAt: "2025-12-19T01:09:01Z",
        rarityId: 1, // Common
        accountId: 2, // DL Senne
        eventId: 17, // Clan Rush
        rewardId: 6, // Mighty Morsel
      },
      {
        amount: 32,
        openedAt: "2025-12-19T01:09:02Z",
        rarityId: 3, // Epic
        accountId: 2, // DL Senne
        eventId: 17, // Clan Rush
        rewardId: 40, // Starry Ore
      },
      {
        openedAt: "2025-12-19T01:09:03Z",
        rarityId: 3, // Epic
        accountId: 2, // DL Senne
        eventId: 17, // Clan Rush
        rewardId: 45, // Trader Clan House Roof
      },
      {
        amount: 775000,
        openedAt: "2025-12-19T01:09:04Z",
        rarityId: 1, // Common
        accountId: 2, // DL Senne
        eventId: 17, // Clan Rush
        rewardId: 8, // Elixer
      },
    ])
    .execute();

  // DL✨Lander™

  await db
    .insertInto("chest")
    .values([
      {
        amount: 1450000,
        openedAt: "2024-09-19T12:20:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 1, // Treasure Chest Launch
        rewardId: 7, // Gold
      },
      {
        openedAt: "2024-09-19T12:20:01Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 1, // Treasure Chest Launch
        rewardId: 4, // Power Pancakes
      },
      {
        openedAt: "2024-09-19T12:20:02Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 1, // Treasure Chest Launch
        rewardId: 14, // Resource Potion
      },
      {
        openedAt: "2024-09-19T12:20:03Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 1, // Treasure Chest Launch
        rewardId: 13, // Training Potion
      },
      {
        openedAt: "2024-09-19T12:20:04Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 1, // Treasure Chest Launch
        rewardId: 13, // Training Potion
      },

      {
        amount: 530,
        openedAt: "2024-09-19T12:45:01Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 2, // Treasure Hunt 1
        rewardId: 39, // Glowy Ore
      },
      {
        amount: 547000,
        openedAt: "2024-09-20T16:15:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 2, // Treasure Hunt 1
        rewardId: 7, // Gold
      },
      {
        openedAt: "2024-09-21T01:42:00Z",
        rarityId: 3, // Epic
        accountId: 3, // DL✨Lander™
        eventId: 2, // Treasure Hunt 1
        rewardId: 25, // Book of Fighting
      },
      {
        amount: 13700,
        openedAt: "2024-09-21T11:31:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 2, // Treasure Hunt 1
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2024-09-22T18:08:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 2, // Treasure Hunt 1
        rewardId: 14, // Resource Potion
      },
      {
        amount: 1460,
        openedAt: "2024-09-23T00:48:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 2, // Treasure Hunt 1
        rewardId: 12, // Capital Gold
      },
      {
        amount: 2010000,
        openedAt: "2024-09-23T10:19:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 2, // Treasure Hunt 1
        rewardId: 7, // Gold
      },
      {
        openedAt: "2024-09-24T10:20:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 2, // Treasure Hunt 1
        rewardId: 6, // Mighty Morsel
      },

      {
        amount: 2,
        openedAt: "2025-04-16T21:10:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 7, // Gold Rush
        rewardId: 21, // Wall Ring
      },
      {
        openedAt: "2025-04-16T21:10:01Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 7, // Gold Rush
        rewardId: 16, // Power Potion
      },
      {
        openedAt: "2025-04-16T21:10:02Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 7, // Gold Rush
        rewardId: 20, // Hero Potion
      },
      {
        openedAt: "2025-04-16T21:10:03Z",
        rarityId: 3, // Epic
        accountId: 3, // DL✨Lander™
        eventId: 7, // Gold Rush
        rewardId: 27, // Book of Heroes
      },
      {
        openedAt: "2025-04-16T21:10:04Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 7, // Gold Rush
        rewardId: 2, // Builder Bite
      },
      {
        openedAt: "2025-04-16T21:11:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 7, // Gold Rush
        rewardId: 14, // Resource Potion
      },
      {
        openedAt: "2025-04-16T21:11:01Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 7, // Gold Rush
        rewardId: 16, // Power Potion
      },
      {
        openedAt: "2025-04-16T21:11:02Z",
        rarityId: 3, // Epic
        accountId: 3, // DL✨Lander™
        eventId: 7, // Gold Rush
        rewardId: 26, // Book of Spells
      },
      {
        amount: 504000,
        openedAt: "2025-04-16T21:11:03Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 7, // Gold Rush
        rewardId: 11, // Builder Elixer
      },
      {
        amount: 857000,
        openedAt: "2025-04-16T21:11:04Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 7, // Gold Rush
        rewardId: 7, // Gold
      },
      {
        openedAt: "2025-04-16T21:12:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 7, // Gold Rush
        rewardId: 4, // Power Pancakes
      },
      {
        amount: 764000,
        openedAt: "2025-04-16T21:12:01Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 7, // Gold Rush
        rewardId: 7, // Gold
      },
      {
        openedAt: "2025-04-16T21:12:02Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 7, // Gold Rush
        rewardId: 3, // Study Soup
      },
      {
        openedAt: "2025-04-16T21:12:03Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 7, // Gold Rush
        rewardId: 2, // Builder Bite
      },
      {
        openedAt: "2025-04-16T21:12:04Z",
        rarityId: 3, // Epic
        accountId: 3, // DL✨Lander™
        eventId: 7, // Gold Rush
        rewardId: 41, // Shop Decoration (Home Village)
      },
      {
        amount: 12800,
        openedAt: "2025-04-16T21:13:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 7, // Gold Rush
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2025-04-16T21:13:01Z",
        rarityId: 4, // Legendary
        accountId: 3, // DL✨Lander™
        eventId: 7, // Gold Rush
        rewardId: 29, // Book of Everything
      },
      {
        openedAt: "2025-04-16T21:13:02Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 7, // Gold Rush
        rewardId: 2, // Builder Bite
      },
      {
        openedAt: "2025-04-16T21:13:03Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 7, // Gold Rush
        rewardId: 3, // Study Soup
      },
      {
        openedAt: "2025-04-16T21:13:04Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 7, // Gold Rush
        rewardId: 4, // Power Pancakes
      },

      {
        amount: 1070000,
        openedAt: "2025-05-17T22:42:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 9, // Treasure Hunt 3
        rewardId: 7, // Gold
      },
      {
        amount: 9780,
        openedAt: "2025-05-17T22:46:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 9, // Treasure Hunt 3
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2025-05-17T23:08:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 9, // Treasure Hunt 3
        rewardId: 17, // Research Potion
      },
      {
        openedAt: "2025-05-17T23:13:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 9, // Treasure Hunt 3
        rewardId: 16, // Power Potion
      },
      {
        amount: 889000,
        openedAt: "2025-05-18T22:29:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 9, // Treasure Hunt 3
        rewardId: 8, // Elixer
      },
      {
        amount: 949000,
        openedAt: "2025-05-18T22:43:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 9, // Treasure Hunt 3
        rewardId: 8, // Elixer
      },
      {
        openedAt: "2025-05-18T22:59:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 9, // Treasure Hunt 3
        rewardId: 17, // Research Potion
      },
      {
        amount: 9530,
        openedAt: "2025-05-18T23:06:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 9, // Treasure Hunt 3
        rewardId: 9, // Dark Elixer
      },
      {
        amount: 11900,
        openedAt: "2025-05-19T15:32:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 9, // Treasure Hunt 3
        rewardId: 9, // Dark Elixer
      },
      {
        amount: 1140000,
        openedAt: "2025-05-19T15:37:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 9, // Treasure Hunt 3
        rewardId: 8, // Elixer
      },
      {
        amount: 1260,
        openedAt: "2025-05-19T15:44:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 9, // Treasure Hunt 3
        rewardId: 12, // Capital Gold
      },
      {
        amount: 1130000,
        openedAt: "2025-05-19T15:50:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 9, // Treasure Hunt 3
        rewardId: 8, // Elixer
      },
      {
        openedAt: "2025-05-20T21:52:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 9, // Treasure Hunt 3
        rewardId: 5, // Clan Castle Cake
      },
      {
        openedAt: "2025-05-20T21:59:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 9, // Treasure Hunt 3
        rewardId: 3, // Study Soup
      },
      {
        amount: 23200,
        openedAt: "2025-05-21T00:39:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 9, // Treasure Hunt 3
        rewardId: 9, // Dark Elixer
      },
      {
        amount: 1070000,
        openedAt: "2025-05-21T00:43:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 9, // Treasure Hunt 3
        rewardId: 8, // Elixer
      },
      {
        amount: 1020000,
        openedAt: "2025-05-21T23:13:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 9, // Treasure Hunt 3
        rewardId: 7, // Gold
      },
      {
        amount: 26,
        openedAt: "2025-05-21T23:17:00Z",
        rarityId: 3, // Epic
        accountId: 3, // DL✨Lander™
        eventId: 9, // Treasure Hunt 3
        rewardId: 40, // Starry Ore
      },
      {
        openedAt: "2025-05-21T23:21:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 9, // Treasure Hunt 3
        rewardId: 19, // Builder Star Jar
      },
      {
        amount: 1010000,
        openedAt: "2025-05-22T06:20:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 9, // Treasure Hunt 3
        rewardId: 8, // Elixer
      },

      {
        openedAt: "2025-07-17T14:27:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 10, // Treasure Hunt 4
        rewardId: 3, // Study Soup
      },
      {
        openedAt: "2025-07-17T14:31:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 10, // Treasure Hunt 4
        rewardId: 6, // Mighty Morsel
      },
      {
        amount: 1040,
        openedAt: "2025-07-17T14:35:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 10, // Treasure Hunt 4
        rewardId: 12, // Capital Gold
      },
      {
        openedAt: "2025-07-17T14:39:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 10, // Treasure Hunt 4
        rewardId: 16, // Power Potion
      },
      {
        amount: 1140000,
        openedAt: "2025-07-20T23:59:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 10, // Treasure Hunt 4
        rewardId: 7, // Gold
      },
      {
        openedAt: "2025-07-21T00:02:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 10, // Treasure Hunt 4
        rewardId: 3, // Study Soup
      },
      {
        amount: 1040000,
        openedAt: "2025-07-21T00:07:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 10, // Treasure Hunt 4
        rewardId: 11, // Builder Elixer
      },
      {
        amount: 817000,
        openedAt: "2025-07-21T00:27:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 10, // Treasure Hunt 4
        rewardId: 8, // Elixer
      },
      {
        openedAt: "2025-07-21T00:36:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 10, // Treasure Hunt 4
        rewardId: 4, // Power Pancakes
      },
      {
        openedAt: "2025-07-21T00:40:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 10, // Treasure Hunt 4
        rewardId: 18, // Clock Tower Potion
      },
      {
        amount: 948000,
        openedAt: "2025-07-21T00:50:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 10, // Treasure Hunt 4
        rewardId: 8, // Elixer
      },
      {
        openedAt: "2025-07-21T22:45:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 10, // Treasure Hunt 4
        rewardId: 2, // Builder Bite
      },
      {
        amount: 7,
        openedAt: "2025-07-21T22:49:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 10, // Treasure Hunt 4
        rewardId: 40, // Starry Ore
      },
      {
        openedAt: "2025-07-21T22:56:00Z",
        rarityId: 4, // Legendary
        accountId: 3, // DL✨Lander™
        eventId: 10, // Treasure Hunt 4
        rewardId: 54, // Queen Skin
      },
      {
        openedAt: "2025-07-21T23:00:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 10, // Treasure Hunt 4
        rewardId: 3, // Study Soup
      },
      {
        amount: 1090000,
        openedAt: "2025-07-21T23:05:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 10, // Treasure Hunt 4
        rewardId: 7, // Gold
      },
      {
        amount: 1120000,
        openedAt: "2025-07-22T00:47:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 10, // Treasure Hunt 4
        rewardId: 11, // Builder Elixer
      },
      {
        openedAt: "2025-07-22T00:50:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 10, // Treasure Hunt 4
        rewardId: 4, // Power Pancakes
      },
      {
        amount: 771000,
        openedAt: "2025-07-22T00:54:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 10, // Treasure Hunt 4
        rewardId: 7, // Gold
      },

      {
        amount: 1900,
        openedAt: "2025-08-27T00:06:00Z",
        rarityId: 3, // Epic
        accountId: 3, // DL✨Lander™
        eventId: 11, // Splash Bash
        rewardId: 39, // Glowy Ore
      },

      {
        amount: 1090000,
        openedAt: "2025-08-15T00:09:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 12, // Hero Rush
        rewardId: 7, // Gold
      },
      {
        openedAt: "2025-08-15T00:09:01Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 12, // Hero Rush
        rewardId: 4, // Power Pancakes
      },
      {
        amount: 9320,
        openedAt: "2025-08-15T00:09:02Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 12, // Hero Rush
        rewardId: 9, // Dark Elixer
      },
      {
        amount: 573000,
        openedAt: "2025-08-15T00:09:03Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 12, // Hero Rush
        rewardId: 10, // Builder Gold
      },
      {
        amount: 1180,
        openedAt: "2025-08-15T00:09:04Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 12, // Hero Rush
        rewardId: 12, // Capital Gold
      },
      {
        openedAt: "2025-08-15T00:10:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 12, // Hero Rush
        rewardId: 2, // Builder Bite
      },
      {
        openedAt: "2025-08-15T00:10:01Z",
        rarityId: 3, // Epic
        accountId: 3, // DL✨Lander™
        eventId: 12, // Hero Rush
        rewardId: 25, // Book of Fighting
      },
      {
        openedAt: "2025-08-15T00:10:02Z",
        rarityId: 3, // Epic
        accountId: 3, // DL✨Lander™
        eventId: 12, // Hero Rush
        rewardId: 41, // Shop Decoration (Home Village)
      },
      {
        amount: 741,
        openedAt: "2025-08-15T00:10:03Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 12, // Hero Rush
        rewardId: 38, // Shiny Ore
      },
      {
        amount: 2370,
        openedAt: "2025-08-15T00:10:04Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 12, // Hero Rush
        rewardId: 12, // Capital Gold
      },
      {
        openedAt: "2025-08-15T00:12:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 12, // Hero Rush
        rewardId: 5, // Clan Castle Cake
      },
      {
        amount: 3,
        openedAt: "2025-08-15T00:12:01Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 12, // Hero Rush
        rewardId: 21, // Wall Ring
      },
      {
        openedAt: "2025-08-15T00:12:02Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 12, // Hero Rush
        rewardId: 22, // Super Potion
      },
      {
        amount: 2020000,
        openedAt: "2025-08-15T00:12:03Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 12, // Hero Rush
        rewardId: 8, // Elixer
      },
      {
        amount: 12500,
        openedAt: "2025-08-15T00:12:04Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 12, // Hero Rush
        rewardId: 9, // Dark Elixer
      },
      {
        amount: 68,
        openedAt: "2025-08-17T23:07:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 12, // Hero Rush
        rewardId: 39, // Glowy Ore
      },
      {
        openedAt: "2025-08-17T23:07:01Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 12, // Hero Rush
        rewardId: 16, // Power Potion
      },
      {
        amount: 808000,
        openedAt: "2025-08-17T23:07:02Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 12, // Hero Rush
        rewardId: 10, // Builder Gold
      },
      {
        openedAt: "2025-08-17T23:07:03Z",
        rarityId: 3, // Epic
        accountId: 3, // DL✨Lander™
        eventId: 12, // Hero Rush
        rewardId: 25, // Book of Fighting
      },

      {
        amount: 2350000,
        openedAt: "2025-10-03T09:58:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 13, // Treasure Hunt 5
        rewardId: 8, // Elixer
      },
      {
        openedAt: "2025-10-03T09:59:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 13, // Treasure Hunt 5
        rewardId: 5, // Clan Castle Cake
      },
      {
        amount: 706,
        openedAt: "2025-10-03T09:59:01Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 13, // Treasure Hunt 5
        rewardId: 38, // Shiny Ore
      },
      {
        openedAt: "2025-10-03T10:00:00Z",
        rarityId: 3, // Epic
        accountId: 3, // DL✨Lander™
        eventId: 13, // Treasure Hunt 5
        rewardId: 49, // Limited Clan House Roof
      },

      {
        openedAt: "2025-10-28T11:14:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 14, // Treasure Hunt 6
        rewardId: 6, // Mighty Morsel
      },
      {
        openedAt: "2025-10-28T11:18:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 14, // Treasure Hunt 6
        rewardId: 20, // Hero Potion
      },
      {
        amount: 1150000,
        openedAt: "2025-10-28T13:34:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 14, // Treasure Hunt 6
        rewardId: 7, // Gold
      },
      {
        openedAt: "2025-10-28T15:03:00Z",
        rarityId: 3, // Epic
        accountId: 3, // DL✨Lander™
        eventId: 14, // Treasure Hunt 6
        rewardId: 41, // Shop Decoration (Home Village)
      },
      {
        amount: 1890000,
        openedAt: "2025-10-28T15:04:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 14, // Treasure Hunt 6
        rewardId: 7, // Gold
      },
      {
        openedAt: "2025-10-28T15:05:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 14, // Treasure Hunt 6
        rewardId: 6, // Mighty Morsel
      },
      {
        amount: 805000,
        openedAt: "2025-10-28T15:05:01Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 14, // Treasure Hunt 6
        rewardId: 8, // Elixer
      },
      {
        amount: 1070000,
        openedAt: "2025-10-28T15:06:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 14, // Treasure Hunt 6
        rewardId: 8, // Elixer
      },
      {
        openedAt: "2025-10-28T15:06:01Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 14, // Treasure Hunt 6
        rewardId: 6, // Mighty Morsel
      },
      {
        amount: 74,
        openedAt: "2025-10-28T15:07:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 14, // Treasure Hunt 6
        rewardId: 39, // Glowy Ore
      },
      {
        openedAt: "2025-10-28T15:08:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 14, // Treasure Hunt 6
        rewardId: 3, // Study Soup
      },
      {
        openedAt: "2025-10-28T15:09:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 14, // Treasure Hunt 6
        rewardId: 17, // Research Potion
      },

      {
        openedAt: "2025-11-03T20:30:00Z",
        rarityId: 3, // Epic
        accountId: 3, // DL✨Lander™
        eventId: 15, // Meteor Catcher
        rewardId: 41, // Shop Decoration (Home Village)
      },
      {
        amount: 544,
        openedAt: "2025-11-07T17:05:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 15, // Meteor Catcher
        rewardId: 38, // Shiny Ore
      },
      {
        openedAt: "2025-11-13T17:46:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 15, // Meteor Catcher
        rewardId: 6, // Mighty Morsel
      },
      {
        openedAt: "2025-11-13T17:47:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 15, // Meteor Catcher
        rewardId: 5, // Clan Castle Cake
      },
      {
        amount: 403000,
        openedAt: "2025-11-13T17:51:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 15, // Meteor Catcher
        rewardId: 10, // Builder Gold
      },
      {
        openedAt: "2025-11-13T17:51:01Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 15, // Meteor Catcher
        rewardId: 3, // Study Soup,
      },
      {
        amount: 1140000,
        openedAt: "2025-11-17T01:38:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 15, // Meteor Catcher
        rewardId: 8, // Elixer
      },
      {
        amount: 1020000,
        openedAt: "2025-11-17T01:39:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 15, // Meteor Catcher
        rewardId: 7, // Gold
      },
      {
        openedAt: "2025-11-17T01:40:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 15, // Meteor Catcher
        rewardId: 6, // Mighty Morsel
      },
      {
        amount: 394000,
        openedAt: "2025-11-17T01:40:01Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 15, // Meteor Catcher
        rewardId: 11, // Builder Elixer
      },
      {
        openedAt: "2025-11-17T01:40:02Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 15, // Meteor Catcher
        rewardId: 3, // Study Soup,
      },
      {
        openedAt: "2025-11-17T01:40:03Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 15, // Meteor Catcher
        rewardId: 6, // Mighty Morsel
      },
      {
        openedAt: "2025-11-17T01:40:04Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 15, // Meteor Catcher
        rewardId: 15, // Builder Potion
      },
      {
        openedAt: "2025-11-30T23:31:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 3, // Study Soup,
      },
      {
        amount: 590000,
        openedAt: "2025-11-30T23:35:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 11, // Builder Elixer
      },
      {
        amount: 6,
        openedAt: "2025-11-30T23:41:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 40, // Starry Ore
      },
      {
        amount: 10800,
        openedAt: "2025-11-30T23:44:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 9, // Dark Elixer
      },
      {
        amount: 24200,
        openedAt: "2025-11-30T23:51:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 9, // Dark Elixer
      },
      {
        amount: 923000,
        openedAt: "2025-11-30T23:55:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 7, // Gold
      },
      {
        amount: 6,
        openedAt: "2025-11-30T23:58:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 40, // Starry Ore
      },
      {
        openedAt: "2025-12-01T00:01:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 3, // Study Soup,
      },
      {
        openedAt: "2025-12-01T00:04:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 14, // Resource Potion
      },
      {
        amount: 10200,
        openedAt: "2025-12-01T00:08:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 9, // Dark Elixer
      },
      {
        amount: 9900,
        openedAt: "2025-12-01T00:18:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 9, // Dark Elixer
      },
      {
        amount: 1400,
        openedAt: "2025-12-01T00:23:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 12, // Capital Gold
      },
      {
        amount: 6,
        openedAt: "2025-12-02T23:21:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 40, // Starry Ore
      },
      {
        openedAt: "2025-12-02T23:26:00Z",
        rarityId: 3, // Epic
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 45, // Trader Clan House Roof
      },
      {
        amount: 598,
        openedAt: "2025-12-02T23:30:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 38, // Shiny Ore
      },
      {
        amount: 558,
        openedAt: "2025-12-02T23:34:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 38, // Shiny Ore
      },
      {
        amount: 2,
        openedAt: "2025-12-02T23:38:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 21, // Wall Ring
      },
      {
        openedAt: "2025-12-02T23:40:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 2, // Builder Bite,
      },
      {
        amount: 753000,
        openedAt: "2025-12-02T23:43:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 7, // Gold
      },
      {
        openedAt: "2025-12-02T23:47:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 16, // Treasure Hunt 7
        rewardId: 2, // Builder Bite,
      },

      {
        openedAt: "2025-12-19T00:58:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 17, // Clan Rush
        rewardId: 3, // Study Soup
      },
      {
        amount: 57,
        openedAt: "2025-12-19T00:58:01Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 17, // Clan Rush
        rewardId: 39, // Glowy Ore
      },
      {
        openedAt: "2025-12-19T00:58:02Z",
        rarityId: 4, // Legendary
        accountId: 3, // DL✨Lander™
        eventId: 17, // Clan Rush
        rewardId: 35, // Hammer of Heroes
      },
      {
        amount: 1560000,
        openedAt: "2025-12-19T00:58:03Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 17, // Clan Rush
        rewardId: 8, // Elixer
      },
      {
        openedAt: "2025-12-19T00:58:04Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 17, // Clan Rush
        rewardId: 3, // Study Soup
      },
      {
        openedAt: "2025-12-19T01:00:00Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 17, // Clan Rush
        rewardId: 14, // Resource Potion
      },
      {
        amount: 1840000,
        openedAt: "2025-12-19T01:00:01Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 17, // Clan Rush
        rewardId: 7, // Gold
      },
      {
        amount: 23400,
        openedAt: "2025-12-19T01:00:02Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 17, // Clan Rush
        rewardId: 9, // Dark Elixer
      },
      {
        amount: 1800000,
        openedAt: "2025-12-19T01:00:03Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 17, // Clan Rush
        rewardId: 8, // Elixer
      },
      {
        amount: 766000,
        openedAt: "2025-12-19T01:00:04Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 17, // Clan Rush
        rewardId: 8, // Elixer
      },
      {
        openedAt: "2025-12-19T01:01:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 17, // Clan Rush
        rewardId: 5, // Clan Castle Cake
      },
      {
        amount: 436000,
        openedAt: "2025-12-19T01:01:01Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 17, // Clan Rush
        rewardId: 11, // Builder Elixer
      },
      {
        openedAt: "2025-12-19T01:01:02Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 17, // Clan Rush
        rewardId: 18, // Clock Tower Potion
      },
      {
        amount: 1000000,
        openedAt: "2025-12-19T01:01:03Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 17, // Clan Rush
        rewardId: 7, // Gold
      },
      {
        openedAt: "2025-12-19T01:01:04Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 17, // Clan Rush
        rewardId: 5, // Clan Castle Cake
      },
      {
        amount: 822000,
        openedAt: "2025-12-19T01:02:00Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 17, // Clan Rush
        rewardId: 8, // Elixer
      },
      {
        openedAt: "2025-12-19T01:02:01Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 17, // Clan Rush
        rewardId: 3, // Study Soup
      },
      {
        openedAt: "2025-12-19T01:02:02Z",
        rarityId: 2, // Rare
        accountId: 3, // DL✨Lander™
        eventId: 17, // Clan Rush
        rewardId: 11, // Builder Elixer
      },
      {
        amount: 938000,
        openedAt: "2025-12-19T01:02:03Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 17, // Clan Rush
        rewardId: 7, // Gold
      },
      {
        openedAt: "2025-12-19T01:02:04Z",
        rarityId: 1, // Common
        accountId: 3, // DL✨Lander™
        eventId: 17, // Clan Rush
        rewardId: 6, // Mighty Morsel
      },
    ])
    .execute();

  // Lander

  await db
    .insertInto("chest")
    .values([
      {
        amount: 620000,
        openedAt: "2024-09-19T12:30:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 1, // Treasure Chest Launch
        rewardId: 8, // Elixer
      },
      {
        amount: 599,
        openedAt: "2024-09-19T12:30:01Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 1, // Treasure Chest Launch
        rewardId: 38, // Shiny Ore
      },
      {
        amount: 10800,
        openedAt: "2024-09-19T12:30:02Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 1, // Treasure Chest Launch
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2024-09-19T12:30:03Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 1, // Treasure Chest Launch
        rewardId: 18, // Clock Tower Potion
      },
      {
        openedAt: "2024-09-19T12:30:04Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 1, // Treasure Chest Launch
        rewardId: 18, // Clock Tower Potion
      },

      {
        amount: 1750,
        openedAt: "2024-09-19T12:50:00Z",
        rarityId: 3, // Epic
        accountId: 4, // Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 38, // Shiny Ore
      },
      {
        openedAt: "2024-09-20T16:20:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 6, // Mighty Morsel
      },
      {
        amount: 9030,
        openedAt: "2024-09-21T01:47:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2024-09-21T11:36:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 16, // Power Potion
      },
      {
        amount: 7850,
        openedAt: "2024-09-22T18:13:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2024-09-23T00:54:00Z",
        rarityId: 3, // Epic
        accountId: 4, // Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 27, // Book of Heroes
      },
      {
        openedAt: "2024-09-23T10:26:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 4, // Power Pancakes
      },
      {
        amount: 11000,
        openedAt: "2024-09-24T10:26:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2024-09-24T17:14:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 2, // Treasure Hunt 1
        rewardId: 3, // Study Soup
      },

      {
        amount: 767000,
        openedAt: "2025-03-17T17:00:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 5, // Content Creator Chests
        rewardId: 7, // Gold
      },
      {
        openedAt: "2025-03-17T17:00:01Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 5, // Content Creator Chests
        rewardId: 5, // Clan Castle Cake
      },
      {
        openedAt: "2025-03-17T17:00:02Z",
        rarityId: 3, // Epic
        accountId: 4, // Lander
        eventId: 5, // Content Creator Chests
        rewardId: 24, // Book of Building
      },
      {
        openedAt: "2025-03-17T17:00:03Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 5, // Content Creator Chests
        rewardId: 12, // Capital Gold
      },
      {
        amount: 906000,
        openedAt: "2025-03-17T17:00:04Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 5, // Content Creator Chests
        rewardId: 7, // Gold
      },

      {
        openedAt: "2025-03-17T17:33:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 5, // Clan Castle Cake
      },
      {
        openedAt: "2025-03-17T17:38:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 18, // Research Potion
      },
      {
        amount: 2160000,
        openedAt: "2025-03-17T17:43:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 7, // Gold
      },
      {
        openedAt: "2025-03-18T12:48:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 9, // Study Soup
      },
      {
        amount: 63,
        openedAt: "2025-03-18T12:53:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 33, // Glowy Ore
      },
      {
        openedAt: "2025-03-18T12:49:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 20, // Resource Potion
      },
      {
        amount: 3,
        openedAt: "2025-03-19T12:55:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 22, // Wall Ring
      },
      {
        openedAt: "2025-03-19T13:00:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 15, // Power Potion
      },
      {
        amount: 547,
        openedAt: "2025-03-19T13:05:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 31, // Shiny Ore
      },
      {
        openedAt: "2025-03-20T10:42:00Z",
        rarityId: 3, // Epic
        accountId: 4, // Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 48, // Trader Clan House Floor,
      },
      {
        openedAt: "2025-03-24T20:17:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 10, // Mighty Morsel
      },
      {
        amount: 1090000,
        openedAt: "2025-03-24T20:19:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 8, // Elixer
      },
      {
        amount: 11300,
        openedAt: "2025-03-24T20:58:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 11, // Dark Elixir
      },
      {
        openedAt: "2025-03-24T22:02:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 9, // Study Soup
      },
      {
        openedAt: "2025-03-24T22:04:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 5, // Clan Castle Cake
      },
      {
        openedAt: "2025-03-24T22:26:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 9, // Study Soup
      },
      {
        openedAt: "2025-03-24T23:04:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 9, // Study Soup
      },
      {
        openedAt: "2025-03-24T23:06:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 10, // Mighty Morsel
      },
      {
        amount: 6,
        openedAt: "2025-03-25T00:03:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 32, // Starry Ore
      },
      {
        amount: 7,
        openedAt: "2025-03-25T00:07:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 32, // Starry Ore
      },
      {
        amount: 719000,
        openedAt: "2025-03-25T00:12:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 8, // Elixer
      },
      {
        amount: 860000,
        openedAt: "2025-03-25T00:14:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 7, // Gold
      },
      {
        amount: 423000,
        openedAt: "2025-03-25T00:15:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 14, // Builder Gold
      },
      {
        amount: 2250000,
        openedAt: "2025-03-25T00:16:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 6, // Treasure Hunt 2
        rewardId: 8, // Elixer
      },

      {
        openedAt: "2025-04-14T16:38:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 7, // Gold Rush
        rewardId: 15, // Builder Potion
      },
      {
        amount: 524,
        openedAt: "2025-04-14T16:38:01Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 7, // Gold Rush
        rewardId: 38, // Shiny Ore
      },
      {
        openedAt: "2025-04-14T16:38:02Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 7, // Gold Rush
        rewardId: 6, // Mighty Morsel
      },
      {
        openedAt: "2025-04-14T16:38:03Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 7, // Gold Rush
        rewardId: 3, // Study Soup
      },
      {
        amount: 1430,
        openedAt: "2025-04-14T16:38:04Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 7, // Gold Rush
        rewardId: 12, // Capital Gold
      },
      {
        amount: 1310,
        openedAt: "2025-04-14T16:39:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 7, // Gold Rush
        rewardId: 12, // Capital Gold
      },
      {
        openedAt: "2025-04-14T16:39:01Z",
        rarityId: 3, // Epic
        accountId: 4, // Lander
        eventId: 7, // Gold Rush
        rewardId: 50, // Limited Clan House Walls
      },
      {
        amount: 760000,
        openedAt: "2025-04-14T16:39:02Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 7, // Gold Rush
        rewardId: 14, // Builder Gold
      },
      {
        amount: 54,
        openedAt: "2025-04-14T16:39:03Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 7, // Gold Rush
        rewardId: 37, // Glowy Ore
      },
      {
        amount: 528000,
        openedAt: "2025-04-14T16:39:04Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 7, // Gold Rush
        rewardId: 14, // Builder Gold
      },
      {
        openedAt: "2025-04-14T17:00:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 7, // Gold Rush
        rewardId: 6, // Mighty Morsel
      },
      {
        openedAt: "2025-04-14T17:00:01Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 7, // Gold Rush
        rewardId: 6, // Mighty Morsel
      },
      {
        amount: 19200,
        openedAt: "2025-04-14T17:00:02Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 7, // Gold Rush
        rewardId: 9, // Dark Elixer
      },
      {
        amount: 20700,
        openedAt: "2025-04-14T17:00:03Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 7, // Gold Rush
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2025-04-14T17:00:04Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 7, // Gold Rush
        rewardId: 6, // Mighty Morsel
      },
      {
        openedAt: "2025-04-14T20:29:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 7, // Gold Rush
        rewardId: 4, // Power Pancakes
      },
      {
        amount: 13600,
        openedAt: "2025-04-14T20:29:01Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 7, // Gold Rush
        rewardId: 9, // Dark Elixer
      },
      {
        amount: 7,
        openedAt: "2025-04-14T20:29:02Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 7, // Gold Rush
        rewardId: 32, // Starry Ore
      },
      {
        amount: 1110000,
        openedAt: "2025-04-14T20:29:03Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 7, // Gold Rush
        rewardId: 8, // Elixer
      },
      {
        amount: 9510,
        openedAt: "2025-04-14T20:29:04Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 7, // Gold Rush
        rewardId: 9, // Dark Elixer
      },

      {
        amount: 32,
        openedAt: "2025-05-17T23:59:00Z",
        rarityId: 3, // Epic
        accountId: 4, // Lander
        eventId: 9, // Treasure Hunt 3
        rewardId: 40, // Starry Ore
      },
      {
        openedAt: "2025-05-19T01:13:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 9, // Treasure Hunt 3
        rewardId: 14, // Resource Potion
      },
      {
        openedAt: "2025-05-19T01:17:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 9, // Treasure Hunt 3
        rewardId: 5, // Clan Castle Cake
      },
      {
        amount: 862000,
        openedAt: "2025-05-19T01:21:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 9, // Treasure Hunt 3
        rewardId: 14, // Builder Gold
      },
      {
        openedAt: "2025-05-19T01:30:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 9, // Treasure Hunt 3
        rewardId: 6, // Mighty Morsel
      },
      {
        amount: 59,
        openedAt: "2025-05-19T01:34:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 9, // Treasure Hunt 3
        rewardId: 37, // Glowy Ore
      },

      {
        openedAt: "2025-07-17T15:08:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 10, // Treasure Hunt 4
        rewardId: 20, // Hero Potion
      },
      {
        openedAt: "2025-07-17T15:12:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 10, // Treasure Hunt 4
        rewardId: 4, // Power Pancakes
      },
      {
        amount: 957000,
        openedAt: "2025-07-17T15:15:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 10, // Treasure Hunt 4
        rewardId: 8, // Elixer
      },
      {
        openedAt: "2025-07-17T15:19:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 10, // Treasure Hunt 4
        rewardId: 3, // Study Soup
      },

      {
        openedAt: "2025-08-22T18:00:00Z",
        rarityId: 3, // Epic
        accountId: 4, // Lander
        eventId: 11, // Splash Bash
        rewardId: 42, // Limited Decoration (Home Village)
      },

      {
        openedAt: "2025-08-15T00:04:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 12, // Hero Rush
        rewardId: 4, // Power Pancakes
      },
      {
        amount: 916000,
        openedAt: "2025-08-15T00:04:01Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 12, // Hero Rush
        rewardId: 7, // Gold
      },
      {
        amount: 2,
        openedAt: "2025-08-15T00:04:02Z",
        rarityId: 3, // Epic
        accountId: 4, // Lander
        eventId: 12, // Hero Rush
        rewardId: 15, // Builder Potion
      },
      {
        amount: 2,
        openedAt: "2025-08-15T00:04:03Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 12, // Hero Rush
        rewardId: 21, // Wall Ring
      },
      {
        openedAt: "2025-08-15T00:04:04Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 12, // Hero Rush
        rewardId: 20, // Hero Potion
      },
      {
        openedAt: "2025-08-15T00:06:00Z",
        rarityId: 3, // Epic
        accountId: 4, // Lander
        eventId: 12, // Hero Rush
        rewardId: 42, // Limited Decoration (Home Village)
      },
      {
        openedAt: "2025-08-15T00:06:01Z",
        rarityId: 4, // Legendary
        accountId: 4, // Lander
        eventId: 12, // Hero Rush
        rewardId: 55, // Warden Skin
      },
      {
        openedAt: "2025-08-15T00:06:02Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 12, // Hero Rush
        rewardId: 20, // Hero Potion
      },
      {
        amount: 2390000,
        openedAt: "2025-08-15T00:06:03Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 12, // Hero Rush
        rewardId: 8, // Elixer
      },
      {
        openedAt: "2025-08-15T00:06:04Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 12, // Hero Rush
        rewardId: 4, // Power Pancakes
      },
      {
        openedAt: "2025-08-15T00:08:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 12, // Hero Rush
        rewardId: 4, // Power Pancakes
      },
      {
        amount: 12100,
        openedAt: "2025-08-15T00:08:01Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 12, // Hero Rush
        rewardId: 9, // Dark Elixer
      },
      {
        amount: 523000,
        openedAt: "2025-08-15T00:08:02Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 12, // Hero Rush
        rewardId: 11, // Builder Elixer
      },
      {
        amount: 543,
        openedAt: "2025-08-15T00:08:03Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 12, // Hero Rush
        rewardId: 38, // Shiny Ore
      },
      {
        openedAt: "2025-08-15T00:08:04Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 12, // Hero Rush
        rewardId: 4, // Power Pancakes
      },
      {
        openedAt: "2025-08-15T00:09:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 12, // Hero Rush
        rewardId: 15, // Builder Potion
      },
      {
        openedAt: "2025-08-15T00:09:01Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 12, // Hero Rush
        rewardId: 5, // Clan Castle Cake
      },
      {
        openedAt: "2025-08-15T00:09:02Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 12, // Hero Rush
        rewardId: 4, // Power Pancakes
      },
      {
        amount: 1110000,
        openedAt: "2025-08-15T00:09:03Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 12, // Hero Rush
        rewardId: 8, // Elixer
      },
      {
        amount: 1070,
        openedAt: "2025-08-15T00:09:04Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 12, // Hero Rush
        rewardId: 12, // Capital Gold
      },

      {
        amount: 1140000,
        openedAt: "2025-10-01T00:44:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 8, // Elixer
      },
      {
        amount: 1780,
        openedAt: "2025-10-01T00:53:00Z",
        rarityId: 3, // Epic
        accountId: 4, // Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 38, // Shiny Ore
      },
      {
        openedAt: "2025-10-01T00:59:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 15, // Builder Potion
      },
      {
        openedAt: "2025-10-01T01:02:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 2, // Builder Bite
      },
      {
        amount: 11700,
        openedAt: "2025-10-01T01:05:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 9, // Dark Elixer
      },
      {
        amount: 531000,
        openedAt: "2025-10-01T01:11:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 11, // Builder Elixer
      },
      {
        openedAt: "2025-10-01T01:15:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 22, // Super Potion
      },
      {
        amount: 1150000,
        openedAt: "2025-10-01T01:18:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 7, // Gold
      },
      {
        openedAt: "2025-10-01T01:21:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 21, // Pet Potion
      },
      {
        amount: 13200,
        openedAt: "2025-10-01T01:22:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 9, // Dark Elixer
      },
      {
        amount: 2,
        openedAt: "2025-10-01T01:24:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 22, // Wall Ring
      },
      {
        amount: 10100,
        openedAt: "2025-10-01T01:26:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2025-10-03T00:28:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 4, // Power Pancakes
      },
      {
        amount: 1130000,
        openedAt: "2025-10-03T00:29:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 7, // Gold
      },
      {
        openedAt: "2025-10-03T00:30:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 2, // Builder Bite
      },
      {
        amount: 906000,
        openedAt: "2025-10-03T08:19:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 8, // Elixer
      },
      {
        amount: 12000,
        openedAt: "2025-10-03T08:21:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 9, // Dark Elixer
      },
      {
        amount: 12500,
        openedAt: "2025-10-03T08:22:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2025-10-03T08:23:00Z",
        rarityId: 3, // Epic
        accountId: 4, // Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 45, // Trader Clan House Roof
      },
      {
        amount: 1030000,
        openedAt: "2025-10-03T08:26:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 13, // Treasure Hunt 5
        rewardId: 11, // Builder Elixer
      },

      {
        openedAt: "2025-10-28T15:09:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 14, // Treasure Hunt 6
        rewardId: 17, // Research Potion
      },
      {
        openedAt: "2025-10-28T15:10:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 14, // Treasure Hunt 6
        rewardId: 38, // Shiny Ore
      },
      {
        openedAt: "2025-10-28T15:11:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 14, // Treasure Hunt 6
        rewardId: 5, // Clan Castle Cake
      },
      {
        amount: 2360000,
        openedAt: "2025-10-28T15:12:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 14, // Treasure Hunt 6
        rewardId: 8, // Elixer
      },
      {
        openedAt: "2025-10-28T15:12:01Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 14, // Treasure Hunt 6
        rewardId: 3, // Study Soup
      },
      {
        openedAt: "2025-10-28T15:13:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 14, // Treasure Hunt 6
        rewardId: 2, // Builder Bite
      },
      {
        amount: 3,
        openedAt: "2025-10-28T15:14:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 14, // Treasure Hunt 6
        rewardId: 22, // Wall Ring
      },
      {
        openedAt: "2025-10-28T15:15:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 14, // Treasure Hunt 6
        rewardId: 6, // Mighty Morsel
      },
      {
        openedAt: "2025-10-28T15:16:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 14, // Treasure Hunt 6
        rewardId: 6, // Mighty Morsel
      },
      {
        amount: 24800,
        openedAt: "2025-10-28T15:17:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 14, // Treasure Hunt 6
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2025-10-28T15:17:01Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 14, // Treasure Hunt 6
        rewardId: 3, // Study Soup
      },
      {
        openedAt: "2025-10-28T15:18:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 14, // Treasure Hunt 6
        rewardId: 4, // Power Pancakes
      },

      {
        openedAt: "2025-11-03T18:03:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 15, // Meteor Catcher
        rewardId: 5, // Clan Castle Cake
      },
      {
        amount: 3,
        openedAt: "2025-11-07T17:07:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 15, // Meteor Catcher
        rewardId: 21, // Wall Ring
      },
      {
        amount: 9330,
        openedAt: "2025-11-13T17:55:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 15, // Meteor Catcher
        rewardId: 9, // Dark Elixer
      },
      {
        amount: 9690,
        openedAt: "2025-11-13T17:55:01Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 15, // Meteor Catcher
        rewardId: 9, // Dark Elixer
      },
      {
        amount: 2450,
        openedAt: "2025-11-13T17:56:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 15, // Meteor Catcher
        rewardId: 12, // Capital Gold
      },
      {
        amount: 10200,
        openedAt: "2025-11-13T17:56:01Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 15, // Meteor Catcher
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2025-11-17T01:44:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 15, // Meteor Catcher
        rewardId: 4, // Power Pancakes
      },
      {
        amount: 1150000,
        openedAt: "2025-11-17T01:44:01Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 15, // Meteor Catcher
        rewardId: 14, // Builder Gold
      },
      {
        openedAt: "2025-11-17T01:44:02Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 15, // Meteor Catcher
        rewardId: 2, // Builder Bite
      },
      {
        openedAt: "2025-11-17T01:45:00Z",
        rarityId: 4, // Legendary
        accountId: 4, // Lander
        eventId: 15, // Meteor Catcher
        rewardId: 55, // Battle Machine Skin
      },
      {
        amount: 2720,
        openedAt: "2025-11-17T01:45:01Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 15, // Meteor Catcher
        rewardId: 12, // Capital Gold
      },
      {
        openedAt: "2025-11-17T01:45:02Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 15, // Meteor Catcher
        rewardId: 6, // Mighty Morsel
      },
      {
        amount: 1860000,
        openedAt: "2025-11-17T01:45:03Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 15, // Meteor Catcher
        rewardId: 8, // Elixer
      },

      {
        openedAt: "2025-12-01T01:02:00Z",
        rarityId: 3, // Epic
        accountId: 4, // Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 45, // Trader Clan House Roof
      },
      {
        amount: 1100000,
        openedAt: "2025-12-01T01:05:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 7, // Gold
      },
      {
        openedAt: "2025-12-01T01:09:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 4, // Power Pancakes
      },
      {
        amount: 1040000,
        openedAt: "2025-12-01T01:12:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 7, // Gold
      },
      {
        amount: 624,
        openedAt: "2025-12-01T01:20:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 38, // Shiny Ore
      },
      {
        openedAt: "2025-12-01T01:23:00Z",
        rarityId: 3, // Epic
        accountId: 4, // Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 48, // TraderClan House Decoration
      },
      {
        amount: 13700,
        openedAt: "2025-12-01T01:30:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 9, // Dark Elixer
      },
      {
        openedAt: "2025-12-01T01:35:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 18, // Clock Tower Potion
      },
      {
        openedAt: "2025-12-01T01:40:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 17, // Research Potion
      },
      {
        openedAt: "2025-12-01T01:44:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 2, // Builder Bite
      },
      {
        openedAt: "2025-12-01T01:47:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 2, // Builder Bite
      },
      {
        amount: 1150000,
        openedAt: "2025-12-01T01:50:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 7, // Gold
      },
      {
        openedAt: "2025-12-03T02:35:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 21, // Pet Potion
      },
      {
        amount: 2640,
        openedAt: "2025-12-03T02:43:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 12, // Capital Gold
      },
      {
        openedAt: "2025-12-03T02:52:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 4, // Power Pancakes
      },
      {
        amount: 6,
        openedAt: "2025-12-03T03:28:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 38, // Starry Ore
      },
      {
        amount: 1130000,
        openedAt: "2025-12-03T03:31:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 7, // Gold
      },
      {
        openedAt: "2025-12-03T03:34:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 3, // Study Soup
      },
      {
        amount: 1110000,
        openedAt: "2025-12-03T03:45:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 8, // Elixer
      },
      {
        amount: 24300,
        openedAt: "2025-12-03T04:02:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 16, // Treasure Hunt 7
        rewardId: 9, // Dark Elixer
      },

      {
        openedAt: "2025-12-19T01:02:00Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 9, // Dark Elixer
        amount: 26200,
      },
      {
        openedAt: "2025-12-19T01:02:01Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 5, // Clan Castle Cake
      },
      {
        openedAt: "2025-12-19T01:02:02Z",
        rarityId: 3, // Epic
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 42, // Limited Decoration (Home Village)
      },
      {
        openedAt: "2025-12-19T01:03:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 2, // Builder Bite,
      },
      {
        openedAt: "2025-12-19T01:03:01Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 7, // Gold
        amount: 951000,
      },
      {
        openedAt: "2025-12-19T01:03:02Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 39, // Glowy Ore
        amount: 69,
      },
      {
        openedAt: "2025-12-19T01:03:03Z",
        rarityId: 3, // Epic
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 42, // Limited Decoration (Home Village)
      },
      {
        openedAt: "2025-12-19T01:03:04Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 17, // Research Potion
      },
      {
        openedAt: "2025-12-19T01:03:05Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 6, // Mighty Morsel
      },
      {
        openedAt: "2025-12-19T01:03:06Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 5, // Clan Castle Cake
      },
      {
        openedAt: "2025-12-19T01:04:07Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 14, // Resource Potion
      },
      {
        openedAt: "2025-12-19T01:04:08Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 2, // Builder Bite,
      },
      {
        openedAt: "2025-12-19T01:04:09Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 21, // Wall Ring
        amount: 2,
      },
      {
        openedAt: "2025-12-19T01:04:10Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 7, // Gold
        amount: 794000,
      },
      {
        openedAt: "2025-12-19T01:04:11Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 16, // Power Potion
      },
      {
        openedAt: "2025-12-19T01:04:12Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 5, // Clan Castle Cake
      },
      {
        openedAt: "2025-12-19T01:04:13Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 11, // Builder Elixer
      },
      {
        openedAt: "2025-12-19T01:04:14Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 2, // Builder Bite,
      },
      {
        openedAt: "2025-12-19T01:05:00Z",
        rarityId: 1, // Common
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 9, // Dark Elixer
        amount: 10800,
      },
      {
        openedAt: "2025-12-19T01:05:01Z",
        rarityId: 2, // Rare
        accountId: 4, // Lander
        eventId: 17, // Clan Rush
        rewardId: 23, // Pet Potion
      },
    ])
    .execute();
};
