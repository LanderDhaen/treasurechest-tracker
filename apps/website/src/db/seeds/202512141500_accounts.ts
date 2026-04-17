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
        isTracked: false,
        townhallId: 16,
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
        isTracked: false,
        townhallId: 11,
        clanId: 4, // DL Mini
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "EXP Flickzie",
        tag: "88G9UPCU",
        isTracked: false,
        townhallId: 10,
        clanId: 4, // DL Mini
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "Lvl.10 Lander",
        tag: "L2VP2C2P0",
        isTracked: false,
        townhallId: 10,
        clanId: 4, // DL Mini
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "Peace",
        tag: "28U8RUVL",
        isTracked: false,
        townhallId: 10,
        clanId: 4, // DL Mini
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "Lvl.9 Lander",
        tag: "PUCV28QP9",
        isTracked: false,
        townhallId: 9,
        clanId: 4, // DL Mini
      },
      {
        createdAt: "2025-12-14 15:00:00",
        updatedAt: "2025-12-14 15:00:00",
        name: "Lander - TH8",
        tag: "YGJL820VP",
        isTracked: false,
        townhallId: 8,
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
        validFrom: "2026-01-18 21:12:58",
        validTo: "2026-02-02 10:31:01",
        name: "DL✨Lander",
        tag: "8RRG0LJR2",
        isTracked: false,
        townhallId: 18,
        clanId: 1, // Dutch Legion 3
        accountId: 1, // DL✨Lander
      },
      {
        validFrom: "2026-01-18 21:12:58",
        validTo: "2026-01-24 18:04:31",
        name: "DL✨Lander",
        tag: "8RRG0LJR2",
        isTracked: false,
        townhallId: 17,
        clanId: 1, // Dutch Legion 3
        accountId: 1, // DL✨Lander
      },
      {
        validFrom: "2026-01-02 09:44:23",
        validTo: "2026-01-18 21:12:58",
        name: "DL✨Lander",
        tag: "8RRG0LJR2",
        isTracked: true,
        townhallId: 17,
        clanId: 1, // Dutch Legion 3
        accountId: 1, // DL✨Lander
      },
      {
        validFrom: "2025-12-14 15:00:00",
        validTo: "2026-01-02 09:44:23",
        name: "Lander",
        tag: "8RRG0LJR2",
        isTracked: true,
        townhallId: 17,
        clanId: 1, // Dutch Legion 3
        accountId: 1, // DL✨Lander
      },
    ])
    .execute();
};
