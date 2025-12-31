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
        townhall: 18,
        clanId: 1, // Dutch Legion 3
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "DL Senne",
        tag: "L00PRVC",
        townhall: 17,
        clanId: 2, // Dutch Legion CW
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "DL✨Lander™",
        tag: "PVPV2U0JG",
        townhall: 17,
        clanId: 3, // Dutch Legion 4
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "Lander",
        tag: "9UQGJYLCV",
        townhall: 17,
        clanId: 3, // Dutch Legion 4
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "DL✨Senne",
        tag: "YVCLRY98U",
        townhall: 17,
        clanId: 3, // Dutch Legion 4
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "Lander™",
        tag: "8UQ9LGYQ",
        townhall: 16,
        clanId: 4, // DL Mini
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "SyNx_Viiper",
        tag: "ULP0Y98C",
        townhall: 15,
        clanId: 3, // Dutch Legion 4
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "DL Lander",
        tag: "G2V990J",
        townhall: 14,
        clanId: 3, // Dutch Legion 4
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "Lvl.1 Lander",
        tag: "G2P0LP0LL",
        townhall: 12,
        clanId: 3, // Dutch Legion 4
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "FC Gods",
        tag: "PULUP0L9",
        townhall: 11,
        clanId: 4, // DL Mini
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "EXP Flickzie",
        tag: "88G9UPCU",
        townhall: 10,
        clanId: 4, // DL Mini
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "Peace",
        tag: "28U8RUVL",
        townhall: 9,
        clanId: 4, // DL Mini
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "Lvl.9 Lander",
        tag: "PUCV28QP9",
        townhall: 9,
        clanId: 4, // DL Mini
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "Lander - TH8",
        tag: "YGJL820VP",
        townhall: 8,
        clanId: 4, // DL Mini
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "Lvl.8 Lander",
        tag: "QY0RVPYQ",
        townhall: 8,
        clanId: 4, // DL Mini
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "Lvl.7 Lander",
        tag: "LYC0RRUUL",
        townhall: 7,
        clanId: 4, // DL Mini
      },
    ])
    .execute();
};
