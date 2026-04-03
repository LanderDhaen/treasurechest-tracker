import { Kysely } from "kysely";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const seed = async (db: Kysely<any>) => {
  await db.deleteFrom("account").execute();

  await db
    .insertInto("account")
    .values([
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "DL✨Lander",
        tag: "8RRG0LJR2",
        townhallId: 18,
        clanId: 1, // Dutch Legion 3
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "DL✨Lander.",
        tag: "L00PRVC",
        townhallId: 18,
        clanId: 2, // Dutch Legion CW
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "DL✨Lander™",
        tag: "PVPV2U0JG",
        townhallId: 17,
        clanId: 3, // Dutch Legion 4
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "Lander",
        tag: "9UQGJYLCV",
        townhallId: 17,
        clanId: 3, // Dutch Legion 4
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "Lander.",
        tag: "YVCLRY98U",
        townhallId: 17,
        clanId: 3, // Dutch Legion 4
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "Lander™",
        tag: "8UQ9LGYQ",
        townhallId: 16,
        isTracked: false,
        clanId: 4, // DL Mini
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "SyNx_Viiper",
        tag: "ULP0Y98C",
        townhallId: 15,
        clanId: 3, // Dutch Legion 4
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "DL Lander",
        tag: "G2V990J",
        townhallId: 14,
        clanId: 3, // Dutch Legion 4
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "Lvl.1 Lander",
        tag: "G2P0LP0LL",
        townhallId: 12,
        clanId: 3, // Dutch Legion 4
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "FC Gods",
        tag: "PULUP0L9",
        townhallId: 11,
        isTracked: false,
        clanId: 4, // DL Mini
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "EXP Flickzie",
        tag: "88G9UPCU",
        townhallId: 10,
        isTracked: false,
        clanId: 4, // DL Mini
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "Lvl.10 Lander",
        tag: "L2VP2C2P0",
        townhallId: 10,
        isTracked: false,
        clanId: 4, // DL Mini
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "Peace",
        tag: "28U8RUVL",
        townhallId: 10,
        isTracked: false,
        clanId: 4, // DL Mini
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "Lvl.9 Lander",
        tag: "PUCV28QP9",
        townhallId: 9,
        isTracked: false,
        clanId: 4, // DL Mini
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "Lander - TH8",
        tag: "YGJL820VP",
        townhallId: 8,
        isTracked: false,
        clanId: 4, // DL Mini
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "Lvl.8 Lander",
        tag: "QY0RVPYQ",
        isTracked: false,
        townhallId: 8,
        clanId: 4, // DL Mini
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "Lvl.7 Lander",
        isTracked: false,
        tag: "LYC0RRUUL",
        townhallId: 7,
        clanId: 4, // DL Mini
      },
    ])
    .execute();
};
