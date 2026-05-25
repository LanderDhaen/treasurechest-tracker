import { Kysely } from "kysely";
import { RELEASE_DATE } from "../../constants/event";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const seed = async (db: Kysely<any>) => {
  await db.deleteFrom("account").execute();

  await db
    .insertInto("account")
    .values([
      {
        createdAt: RELEASE_DATE,
        updatedAt: "2025-11-17T14:00:00Z",
        name: "DL✨Lander",
        tag: "8RRG0LJR2",
        townhallId: 18,
        clanId: 1, // Dutch Legion 3
      },
      {
        createdAt: "2025-12-03T02:30:00Z",
        updatedAt: "2026-01-03T08:14:00Z",
        name: "DL✨Lander.",
        tag: "L00PRVC",
        townhallId: 18,
        clanId: 2, // Dutch Legion CW
      },
      {
        createdAt: RELEASE_DATE,
        updatedAt: "2025-04-05T17:38:00Z",
        name: "DL✨Lander™",
        tag: "PVPV2U0JG",
        townhallId: 17,
        clanId: 3, // Dutch Legion 4
      },
      {
        createdAt: RELEASE_DATE,
        updatedAt: "2025-08-01T13:42:00Z",
        name: "Lander",
        tag: "9UQGJYLCV",
        townhallId: 17,
        clanId: 3, // Dutch Legion 4
      },
      {
        createdAt: "2025-12-03T02:30:00Z",
        updatedAt: "2026-05-02T16:20:00Z",
        name: "Lander.",
        tag: "YVCLRY98U",
        townhallId: 18,
        clanId: 3, // Dutch Legion 4
      },
      {
        createdAt: RELEASE_DATE,
        updatedAt: RELEASE_DATE,
        name: "Lander™",
        tag: "8UQ9LGYQ",
        isTracked: false,
        townhallId: 16,
        clanId: 4, // DL Mini
      },
      {
        createdAt: RELEASE_DATE,
        updatedAt: "2026-03-22T10:44:00Z",
        name: "SyNx_Viiper",
        tag: "ULP0Y98C",
        isTracked: false,
        townhallId: 15,
        clanId: 4, // DL Mini
      },
      {
        createdAt: RELEASE_DATE,
        updatedAt: "2026-03-22T11:02:00Z",
        name: "DL Lander",
        tag: "G2V990J",
        isTracked: false,
        townhallId: 14,
        clanId: 4, // DL Mini
      },
      {
        createdAt: RELEASE_DATE,
        updatedAt: "2025-12-20T12:10:00Z",
        name: "Lvl.12 Lander",
        tag: "G2P0LP0LL",
        isTracked: false,
        townhallId: 12,
        clanId: 4, // DL Mini
      },
      {
        createdAt: RELEASE_DATE,
        updatedAt: "2025-03-25T08:07:00Z",
        name: "FC Gods",
        tag: "PULUP0L9",
        isTracked: false,
        townhallId: 11,
        clanId: 4, // DL Mini
      },
      {
        createdAt: RELEASE_DATE,
        updatedAt: RELEASE_DATE,
        name: "EXP Flickzie",
        tag: "88G9UPCU",
        isTracked: false,
        townhallId: 10,
        clanId: 4, // DL Mini
      },
      {
        createdAt: RELEASE_DATE,
        updatedAt: "2025-03-17T13:30:00Z",
        name: "Lvl.10 Lander",
        tag: "L2VP2C2P0",
        isTracked: false,
        townhallId: 8,
        clanId: 4, // DL Mini
      },
      {
        createdAt: RELEASE_DATE,
        updatedAt: "2026-04-27T18:04:00Z",
        name: "Peace",
        tag: "28U8RUVL",
        isTracked: false,
        townhallId: 10,
        clanId: 4, // DL Mini
      },
      {
        createdAt: RELEASE_DATE,
        updatedAt: "2025-03-18T12:36:00Z",
        name: "Lvl.9 Lander",
        tag: "PUCV28QP9",
        isTracked: false,
        townhallId: 9,
        clanId: 4, // DL Mini
      },
      {
        createdAt: RELEASE_DATE,
        updatedAt: "2025-03-18T12:40:00Z",
        name: "Lander - TH8",
        tag: "YGJL820VP",
        isTracked: false,
        townhallId: 8,
        clanId: 4, // DL Mini
      },
      {
        createdAt: RELEASE_DATE,
        updatedAt: "2025-03-18T12:43:00Z",
        name: "Lvl.8 Lander",
        tag: "QY0RVPYQ",
        isTracked: false,
        townhallId: 8,
        clanId: 4, // DL Mini
      },
      {
        createdAt: RELEASE_DATE,
        updatedAt: "2025-03-18T12:48:00Z",
        name: "Lvl.7 Lander",
        tag: "LYC0RRUUL",
        isTracked: false,
        townhallId: 7,
        clanId: 4, // DL Mini
      },
    ])
    .execute();

  // History

  await db
    .insertInto("account_history")
    .values([
      {
        validFrom: RELEASE_DATE,
        validTo: "2024-11-25T13:30:00Z",
        name: "Lander",
        tag: "8RRG0LJR2",
        isTracked: true,
        townhallId: 16,
        clanId: 1, // Dutch Legion 3
        accountId: 1, // DL✨Lander
      },
      {
        validFrom: "2024-11-25T13:30:00Z",
        validTo: "2025-01-12T20:07:00Z",
        name: "Lander",
        tag: "8RRG0LJR2",
        isTracked: true,
        townhallId: 17,
        clanId: 1, // Dutch Legion 3
        accountId: 1, // DL✨Lander
      },
      {
        validFrom: "2025-01-12T20:07:00Z",
        validTo: "2025-11-17T14:00:00Z",
        name: "DL✨Lander",
        tag: "8RRG0LJR2",
        isTracked: true,
        townhallId: 17,
        clanId: 1, // Dutch Legion 3
        accountId: 1, // DL✨Lander
      },

      {
        validFrom: "2025-12-03T02:30:00Z",
        validTo: "2026-01-03T08:14:00Z",
        name: "DL✨Lander.",
        tag: "L00PRVC",
        isTracked: true,
        townhallId: 17,
        clanId: 2, // Dutch Legion CW
        accountId: 2, // DL✨Lander.
      },

      {
        validFrom: RELEASE_DATE,
        validTo: "2025-04-05T17:38:00Z",
        name: "DL✨Lander™",
        tag: "PVPV2U0JG",
        isTracked: true,
        townhallId: 16,
        clanId: 3, // Dutch Legion 4
        accountId: 3, // DL✨Lander™
      },

      {
        validFrom: RELEASE_DATE,
        validTo: "2024-12-26T21:58:00Z",
        name: "Lander",
        tag: "9UQGJYLCV",
        isTracked: true,
        townhallId: 15,
        clanId: 3, // Dutch Legion 4
        accountId: 4, // Lander
      },
      {
        validFrom: "2024-12-26T21:58:00Z",
        validTo: "2025-08-01T13:42:00Z",
        name: "Lander",
        tag: "9UQGJYLCV",
        isTracked: true,
        townhallId: 16,
        clanId: 3, // Dutch Legion 4
        accountId: 4, // Lander
      },

      {
        validFrom: RELEASE_DATE,
        validTo: "2026-05-02T16:20:00Z",
        name: "Lander.",
        tag: "YVCLRY98U",
        isTracked: true,
        townhallId: 17,
        clanId: 3, // Dutch Legion 4
        accountId: 5, // Lander.
      },

      {
        validFrom: RELEASE_DATE,
        validTo: "2025-01-12T23:06:00Z",
        name: "SyNx_Viiper",
        tag: "ULP0Y98C",
        isTracked: true,
        townhallId: 14,
        clanId: 4, // DL Mini
        accountId: 7, // SyNx_Viiper
      },
      {
        validFrom: "2025-01-12T23:06:00Z",
        validTo: "2026-03-22T10:44:00Z",
        name: "SyNx_Viiper",
        tag: "ULP0Y98C",
        isTracked: true,
        townhallId: 15,
        clanId: 4, // DL Mini
        accountId: 7, // SyNx_Viiper
      },

      {
        validFrom: RELEASE_DATE,
        validTo: "2025-12-20T21:09:00Z",
        name: "DL Lander",
        tag: "G2V990J",
        isTracked: true,
        townhallId: 13,
        clanId: 4, // DL Mini
        accountId: 8, // DL Lander
      },
      {
        validFrom: "2025-12-20T21:09:00Z",
        validTo: "2026-03-22T11:02:00Z",
        name: "DL Lander",
        tag: "G2V990J",
        isTracked: true,
        townhallId: 14,
        clanId: 4, // DL Mini
        accountId: 8, // DL Lander
      },

      {
        validFrom: RELEASE_DATE,
        validTo: "2025-12-20T12:10:00Z",
        name: "Lvl.12 Lander",
        tag: "G2P0LP0LL",
        isTracked: true,
        townhallId: 12,
        clanId: 4, // DL Mini
        accountId: 9, // Lvl.12 Lander
      },

      {
        validFrom: RELEASE_DATE,
        validTo: "2025-03-25T08:07:00Z",
        name: "FC Gods",
        tag: "PULUP0L9",
        isTracked: true,
        townhallId: 11,
        clanId: 4, // DL Mini
        accountId: 10, // FC Gods
      },

      {
        validFrom: RELEASE_DATE,
        validTo: RELEASE_DATE,
        name: "EXP Flickzie",
        tag: "PULUP0L9",
        isTracked: true,
        townhallId: 10,
        clanId: 4, // DL Mini
        accountId: 11, // EXP Flickzie
      },

      {
        validFrom: RELEASE_DATE,
        validTo: "2025-03-18T12:30:00Z",
        name: "Lvl.10 Lander",
        tag: "L2VP2C2P0",
        isTracked: true,
        townhallId: 8,
        clanId: 4, // DL Mini
        accountId: 12, // Lvl.10 Lander
      },

      {
        validFrom: RELEASE_DATE,
        validTo: "2025-03-17T12:32:00Z",
        name: "Peace",
        tag: "L2VP2C2P0",
        isTracked: true,
        townhallId: 8,
        clanId: 4, // DL Mini
        accountId: 13, // Peace
      },
      {
        validFrom: "2025-03-17T12:32:00Z",
        validTo: "2025-12-26T10:10:00Z",
        name: "Peace",
        tag: "L2VP2C2P0",
        isTracked: false,
        townhallId: 8,
        clanId: 4, // DL Mini
        accountId: 13, // Peace
      },
      {
        validFrom: "2025-12-26T10:10:00Z",
        validTo: "2026-04-27T18:04:00Z",
        name: "Peace",
        tag: "L2VP2C2P0",
        isTracked: false,
        townhallId: 9,
        clanId: 4, // DL Mini
        accountId: 13, // Peace
      },

      {
        validFrom: RELEASE_DATE,
        validTo: "2025-03-18T12:36:00Z",
        name: "Lvl.9 Lander",
        tag: "PUCV28QP9",
        isTracked: true,
        townhallId: 9,
        clanId: 4, // DL Mini
        accountId: 14, // Lvl.9 Lander
      },

      {
        validFrom: RELEASE_DATE,
        validTo: "2025-03-18T12:40:00Z",
        name: "Lander - TH8",
        tag: "YGJL820VP",
        isTracked: true,
        townhallId: 8,
        clanId: 4, // DL Mini
        accountId: 15, // Lander - TH8
      },

      {
        validFrom: RELEASE_DATE,
        validTo: "2025-03-18T12:43:00Z",
        name: "Lvl.8 Lander",
        tag: "QY0RVPYQ",
        isTracked: true,
        townhallId: 8,
        clanId: 4, // DL Mini
        accountId: 16, // Lvl.8 Lander
      },

      {
        validFrom: RELEASE_DATE,
        validTo: "2025-03-18T12:48:00Z",
        name: "Lvl.7 Lander",
        tag: "LYC0RRUUL",
        isTracked: true,
        townhallId: 7,
        clanId: 4, // DL Mini
        accountId: 17, // Lvl.7 Lander
      },
    ])
    .execute();
};
