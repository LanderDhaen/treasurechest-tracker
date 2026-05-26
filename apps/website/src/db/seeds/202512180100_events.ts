import { Kysely } from "kysely";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const seed = async (db: Kysely<any>) => {
  await db.deleteFrom("event").execute();

  await db
    .insertInto("event")
    .values([
      {
        createdAt: "2024-09-19T10:00:00Z",
        updatedAt: "2024-09-19T10:00:00Z",
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
        createdAt: "2024-09-10T10:00:00Z",
        updatedAt: "2024-09-10T10:00:00Z",
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
        createdAt: "2024-12-04T10:00:00Z",
        updatedAt: "2024-12-04T10:00:00Z",
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
        createdAt: "2024-12-25T10:00:00Z",
        updatedAt: "2024-12-25T10:00:00Z",
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
        createdAt: "2025-03-17T10:00:00Z",
        updatedAt: "2025-03-17T10:00:00Z",
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
        createdAt: "2025-03-17T10:00:00Z",
        updatedAt: "2025-03-17T10:00:00Z",
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
        createdAt: "2025-04-14T10:00:00Z",
        updatedAt: "2025-04-14T10:00:00Z",
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
        createdAt: "2025-04-24T10:00:00Z",
        updatedAt: "2025-04-24T10:00:00Z",
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
        createdAt: "2025-05-17T10:00:00Z",
        updatedAt: "2025-05-17T10:00:00Z",
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
        createdAt: "2025-07-17T10:00:00Z",
        updatedAt: "2025-07-17T10:00:00Z",
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
        createdAt: "2025-08-08T10:00:00Z",
        updatedAt: "2025-08-08T10:00:00Z",
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
        createdAt: "2025-08-13T10:00:00Z",
        updatedAt: "2025-08-13T10:00:00Z",
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
        createdAt: "2025-09-28T10:00:00Z",
        updatedAt: "2025-09-28T10:00:00Z",
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
        createdAt: "2025-10-24T10:00:00Z",
        updatedAt: "2025-10-24T10:00:00Z",
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
        createdAt: "2025-10-24T10:00:00Z",
        updatedAt: "2025-10-24T10:00:00Z",
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
        createdAt: "2025-11-28T10:00:00Z",
        updatedAt: "2025-11-28T10:00:00Z",
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
        createdAt: "2025-12-12T10:00:00Z",
        updatedAt: "2025-12-12T10:00:00Z",
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
        createdAt: "2026-01-28T10:00:00Z",
        updatedAt: "2026-01-28T10:00:00Z",
        edition: 8,
        code: "TH8",
        startDate: "2026-01-28",
        endDate: "2026-02-02",
        maxChests: 20,
        typeId: 2, // Personal
        seriesId: 2, // Treasure Hunt
      },
      {
        createdAt: "2026-02-24T10:00:00Z",
        updatedAt: "2026-02-24T10:00:00Z",
        edition: 1,
        code: "UTD1",
        startDate: "2026-02-24",
        endDate: "2026-03-01",
        maxChests: 12,
        typeId: 4, // Community
        seriesId: 9, // Unleash The Duke
      },
      {
        createdAt: "2026-03-01T10:00:00Z",
        updatedAt: "2026-03-01T10:00:00Z",
        edition: 1,
        code: "GP1",
        startDate: "2026-03-01",
        endDate: "2026-04-01",
        maxChests: 11,
        typeId: 2, // Personal
        seriesId: 10, // Gold Pass
      },
      {
        createdAt: "2026-03-13T10:00:00Z",
        updatedAt: "2026-03-13T10:00:00Z",
        edition: 2,
        code: "CR2",
        startDate: "2026-03-13",
        endDate: "2026-03-20",
        maxChests: 15,
        typeId: 3, // Clan
        seriesId: 8, // Clan Rush
      },
      {
        createdAt: "2026-04-01T10:00:00Z",
        updatedAt: "2026-04-01T10:00:00Z",
        edition: 2,
        code: "GP2",
        startDate: "2026-04-01",
        endDate: "2026-05-01",
        maxChests: 11,
        typeId: 2, // Personal
        seriesId: 10, // Gold Pass
      },
      {
        createdAt: "2026-04-25T10:00:00Z",
        updatedAt: "2026-04-25T10:00:00Z",
        name: "Clash On | New Guardian, Siege Machine & CWL changes!",
        edition: 5,
        code: "V5",
        startDate: "2026-04-25",
        endDate: "2026-04-25",
        maxChests: 1,
        typeId: 1, // Gift
        seriesId: 1, // Voucher
      },
      {
        createdAt: "2026-04-28T10:00:00Z",
        updatedAt: "2026-04-28T10:00:00Z",
        edition: 9,
        code: "TH9",
        startDate: "2026-04-28",
        endDate: "2026-05-03",
        maxChests: 20,
        typeId: 2, // Personal
        seriesId: 2, // Treasure Hunt
      },
      {
        createdAt: "2026-05-01T10:00:00Z",
        updatedAt: "2026-05-01T10:00:00Z",
        edition: 3,
        code: "GP3",
        startDate: "2026-05-01",
        endDate: "2026-06-01",
        maxChests: 11,
        typeId: 2, // Personal
        seriesId: 10, // Gold Pass
      },
      {
        createdAt: "2026-05-04T10:00:00Z",
        updatedAt: "2026-05-18T08:57:00Z",
        edition: 1,
        code: "CVS1",
        startDate: "2026-05-04",
        endDate: "2026-05-19",
        maxChests: 13,
        typeId: 4, // Community
        seriesId: 11, // Clash vs. Skeletons
      },
      {
        createdAt: "2026-05-16T10:00:00Z",
        updatedAt: "2026-05-16T10:00:00Z",
        name: "Inside The Builder's Hut | Episode 4",
        edition: 6,
        code: "V6",
        startDate: "2026-05-16",
        endDate: "2026-05-16",
        maxChests: 1,
        typeId: 1, // Gift
        seriesId: 1, // Voucher
      },
    ])
    .execute();

  // History

  db.insertInto("event_history")
    .values([
      {
        validFrom: "2026-05-04T10:00:00Z",
        validTo: "2026-05-18T08:57:00Z",
        edition: 1,
        code: "CVS1",
        startDate: "2026-05-04",
        endDate: "2026-05-18",
        maxChests: 13,
        isChestCreationAllowed: true,
        typeId: 4, // Community
        seriesId: 11, // Clash vs. Skeletons
        eventId: 26, // Clash vs. Skeletons 1
      },
    ])
    .execute();
};
