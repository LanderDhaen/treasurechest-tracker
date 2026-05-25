import { Kysely } from "kysely";
import { RELEASE_DATE } from "@/constants/event";

const NOW = new Date();

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
        updatedAt: NOW,
        name: "DL✨Lander.",
        tag: "L00PRVC",
        townhallId: 18,
        clanId: 2, // Dutch Legion CW
      },
      {
        createdAt: RELEASE_DATE,
        updatedAt: NOW,
        name: "DL✨Lander™",
        tag: "PVPV2U0JG",
        townhallId: 17,
        clanId: 3, // Dutch Legion 4
      },
      {
        createdAt: RELEASE_DATE,
        updatedAt: NOW,
        name: "Lander",
        tag: "9UQGJYLCV",
        townhallId: 17,
        clanId: 3, // Dutch Legion 4
      },
      {
        createdAt: "2025-12-03T02:30:00Z",
        updatedAt: NOW,
        name: "Lander.",
        tag: "YVCLRY98U",
        townhallId: 17,
        clanId: 3, // Dutch Legion 4
      },
      {
        createdAt: RELEASE_DATE,
        updatedAt: NOW,
        name: "Lander™",
        tag: "8UQ9LGYQ",
        isTracked: false,
        townhallId: 16,
        clanId: 4, // DL Mini
      },
      {
        createdAt: RELEASE_DATE,
        updatedAt: NOW,
        name: "SyNx_Viiper",
        tag: "ULP0Y98C",
        isTracked: false,
        townhallId: 15,
        clanId: 3, // Dutch Legion 4
      },
      {
        createdAt: RELEASE_DATE,
        updatedAt: NOW,
        name: "DL Lander",
        tag: "G2V990J",
        isTracked: false,
        townhallId: 14,
        clanId: 3, // Dutch Legion 4
      },
      {
        createdAt: RELEASE_DATE,
        updatedAt: NOW,
        name: "Lvl.12 Lander",
        tag: "G2P0LP0LL",
        isTracked: false,
        townhallId: 12,
        clanId: 3, // Dutch Legion 4
      },
      {
        createdAt: RELEASE_DATE,
        updatedAt: NOW,
        name: "FC Gods",
        tag: "PULUP0L9",
        isTracked: false,
        townhallId: 11,
        clanId: 4, // DL Mini
      },
      {
        createdAt: RELEASE_DATE,
        updatedAt: NOW,
        name: "EXP Flickzie",
        tag: "88G9UPCU",
        isTracked: false,
        townhallId: 10,
        clanId: 4, // DL Mini
      },
      {
        createdAt: RELEASE_DATE,
        updatedAt: NOW,
        name: "Lvl.10 Lander",
        tag: "L2VP2C2P0",
        isTracked: false,
        townhallId: 8,
        clanId: 4, // DL Mini
      },
      {
        createdAt: RELEASE_DATE,
        updatedAt: NOW,
        name: "Peace",
        tag: "28U8RUVL",
        isTracked: false,
        townhallId: 10,
        clanId: 4, // DL Mini
      },
      {
        createdAt: RELEASE_DATE,
        updatedAt: NOW,
        name: "Lvl.9 Lander",
        tag: "PUCV28QP9",
        isTracked: false,
        townhallId: 9,
        clanId: 4, // DL Mini
      },
      {
        createdAt: RELEASE_DATE,
        updatedAt: NOW,
        name: "Lander - TH8",
        tag: "YGJL820VP",
        isTracked: false,
        townhallId: 8,
        clanId: 4, // DL Mini
      },
      {
        createdAt: RELEASE_DATE,
        updatedAt: NOW,
        name: "Lvl.8 Lander",
        tag: "QY0RVPYQ",
        isTracked: false,
        townhallId: 8,
        clanId: 4, // DL Mini
      },
      {
        createdAt: RELEASE_DATE,
        updatedAt: NOW,
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
    ])
    .execute();
};
