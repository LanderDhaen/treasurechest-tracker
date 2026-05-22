import { Kysely } from "kysely";

const NOW = new Date();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const seed = async (db: Kysely<any>) => {
  await db.deleteFrom("event").execute();

  await db
    .insertInto("event")
    .values([
      {
        createdAt: "2025-12-18T0:00:00Z",
        updatedAt: NOW,
        name: "Treasure Chest Launch",
        edition: 1,
        code: "V1",
        startDate: "2024-09-19",
        endDate: "2024-09-19",
        maxChests: 5,
        typeId: 1, // Gifted
        seriesId: 1, // Voucher
        isChestCreationAllowed: false,
      },
      {
        createdAt: "2025-12-18T00:00:00Z",
        updatedAt: NOW,
        edition: 1,
        code: "TH1",
        startDate: "2024-09-19",
        endDate: "2024-10-09",
        maxChests: 30,
        typeId: 2, // Personal
        seriesId: 2, // Treasure Hunt
        isChestCreationAllowed: false,
      },
      {
        createdAt: "2025-12-18T00:00:00Z",
        updatedAt: NOW,
        edition: 1,
        code: "CH",
        startDate: "2024-12-04",
        endDate: "2024-12-30",
        maxChests: 20,
        typeId: 2, // Personal
        seriesId: 3, // Controllable Heroes
        isChestCreationAllowed: false,
      },
      {
        createdAt: "2025-12-18T00:00:00Z",
        updatedAt: NOW,
        name: "Christmas Chest",
        edition: 2,
        code: "V2",
        startDate: "2024-12-25",
        endDate: "2024-12-25",
        maxChests: 1,
        typeId: 1, // Gifted
        seriesId: 1, // Voucher
        isChestCreationAllowed: false,
      },
      {
        createdAt: "2025-12-18T00:00:00Z",
        updatedAt: NOW,
        name: "Content Creator Chests",
        edition: 3,
        code: "V3",
        startDate: "2025-03-17",
        endDate: "2025-03-17",
        maxChests: 5,
        typeId: 1, // Gifted
        seriesId: 1, // Voucher
        isChestCreationAllowed: false,
      },
      {
        createdAt: "2025-12-18T00:00:00Z",
        updatedAt: NOW,
        edition: 2,
        code: "TH2",
        startDate: "2025-03-17",
        endDate: "2025-03-25",
        maxChests: 24,
        typeId: 2, // Personal
        seriesId: 2, // Treasure Hunt
        isChestCreationAllowed: false,
      },
      {
        createdAt: "2025-12-18T00:00:00Z",
        updatedAt: NOW,
        edition: 1,
        code: "GR1",
        startDate: "2025-04-14",
        endDate: "2025-04-21",
        maxChests: 20,
        typeId: 3, // Clan
        seriesId: 4, // Gold Rush
        isChestCreationAllowed: false,
      },
      {
        createdAt: "2025-12-18T00:00:00Z",
        updatedAt: NOW,
        name: "Friend or Foe",
        edition: 4,
        code: "V4",
        startDate: "2025-04-24",
        endDate: "2025-04-24",
        maxChests: 1,
        typeId: 1, // Gifted
        seriesId: 1, // Voucher
        isChestCreationAllowed: false,
      },
      {
        createdAt: "2025-12-18T00:00:00Z",
        updatedAt: NOW,
        edition: 3,
        code: "TH3",
        startDate: "2025-05-17",
        endDate: "2025-05-22",
        maxChests: 20,
        typeId: 2, // Personal
        seriesId: 2, // Treasure Hunt
        isChestCreationAllowed: false,
      },
      {
        createdAt: "2025-12-18T00:00:00Z",
        updatedAt: NOW,
        edition: 4,
        code: "TH4",
        startDate: "2025-07-17",
        endDate: "2025-07-21",
        maxChests: 20,
        typeId: 2, // Personal
        seriesId: 2, // Treasure Hunt
        isChestCreationAllowed: false,
      },
      {
        createdAt: "2025-12-18T00:00:00Z",
        updatedAt: NOW,
        edition: 1,
        code: "SB1",
        startDate: "2025-08-08",
        endDate: "2025-08-31",
        maxChests: 1,
        typeId: 2, // Personal
        seriesId: 5, // Splash Bash
        isChestCreationAllowed: false,
      },
      {
        createdAt: "2025-12-18T00:00:00Z",
        updatedAt: NOW,
        edition: 1,
        code: "HR1",
        startDate: "2025-08-13",
        endDate: "2025-08-20",
        maxChests: 20,
        typeId: 3, // Clan
        seriesId: 6, // Hero Rush
        isChestCreationAllowed: false,
      },
      {
        createdAt: "2025-12-18T00:00:00Z",
        updatedAt: NOW,
        edition: 5,
        code: "TH5",
        startDate: "2025-09-28",
        endDate: "2025-10-03",
        maxChests: 20,
        typeId: 2, // Personal
        seriesId: 2, // Treasure Hunt
        isChestCreationAllowed: false,
      },
      {
        createdAt: "2025-12-18T00:00:00Z",
        updatedAt: NOW,
        edition: 6,
        code: "TH6",
        startDate: "2025-10-24",
        endDate: "2025-10-28",
        maxChests: 12,
        typeId: 2, // Personal
        seriesId: 2, // Treasure Hunt
        isChestCreationAllowed: false,
      },
      {
        createdAt: "2025-12-18T00:00:00Z",
        updatedAt: NOW,
        edition: 1,
        code: "MC1",
        startDate: "2025-10-24",
        endDate: "2025-10-28",
        maxChests: 13,
        typeId: 4, // Community
        seriesId: 7, // Meteor Catcher
        isChestCreationAllowed: false,
      },
      {
        createdAt: "2025-12-18T00:00:00Z",
        updatedAt: NOW,
        edition: 7,
        code: "TH7",
        startDate: "2025-11-28",
        endDate: "2025-12-03",
        maxChests: 20,
        typeId: 2, // Personal
        seriesId: 2, // Treasure Hunt
        isChestCreationAllowed: false,
      },
      {
        createdAt: "2025-12-18T00:00:00Z",
        updatedAt: NOW,
        edition: 1,
        code: "CR1",
        startDate: "2025-12-12",
        endDate: "2025-12-19",
        maxChests: 20,
        typeId: 3, // Clan
        seriesId: 8, // Clan Rush
        isChestCreationAllowed: false,
      },
      {
        createdAt: "2025-12-18T00:00:00Z",
        updatedAt: NOW,
        edition: 8,
        code: "TH8",
        startDate: "2026-01-28",
        endDate: "2026-02-02",
        maxChests: 20,
        typeId: 2, // Personal
        seriesId: 2, // Treasure Hunt
      },
      {
        createdAt: "2025-12-18T00:00:00Z",
        updatedAt: NOW,
        edition: 1,
        code: "UTD1",
        startDate: "2026-02-24",
        endDate: "2026-03-01",
        maxChests: 12,
        typeId: 4, // Community
        seriesId: 9, // Unleash The Duke
      },
      {
        createdAt: "2025-12-18T00:00:00Z",
        updatedAt: NOW,
        edition: 1,
        code: "GP1",
        startDate: "2026-03-01",
        endDate: "2026-04-01",
        maxChests: 11,
        typeId: 2, // Personal
        seriesId: 10, // Gold Pass
      },
      {
        createdAt: "2025-12-18T00:00:00Z",
        updatedAt: NOW,
        edition: 2,
        code: "GP2",
        startDate: "2026-04-01",
        endDate: "2026-05-01",
        maxChests: 11,
        typeId: 2, // Personal
        seriesId: 10, // Gold Pass
      },
    ])
    .execute();

  // History

  db.insertInto("event_history")
    .values([
      {
        validFrom: "2026-01-17T10:47:20Z",
        validTo: NOW,
        edition: 1,
        code: "TH1",
        startDate: "2024-09-19",
        endDate: "2024-10-09",
        maxChests: 30,
        typeId: 2,
        seriesId: 2,
        isChestCreationAllowed: false,
        eventId: 2,
      },
      {
        validFrom: "2026-01-02T22:17:09Z",
        validTo: "2026-01-17T10:47:20Z",
        edition: 1,
        code: "TH1",
        startDate: "2024-09-19",
        endDate: "2024-10-09",
        maxChests: 20,
        typeId: 2,
        seriesId: 2,
        isChestCreationAllowed: false,
        eventId: 2,
      },
      {
        validFrom: "2025-12-18T00:00:00Z",
        validTo: "2026-01-02T22:17:09Z",
        edition: 1,
        code: "TH1",
        startDate: "2024-09-11",
        endDate: "2024-09-30",
        maxChests: 20,
        typeId: 2,
        seriesId: 2,
        isChestCreationAllowed: false,
        eventId: 2,
      },
    ])
    .execute();
};
