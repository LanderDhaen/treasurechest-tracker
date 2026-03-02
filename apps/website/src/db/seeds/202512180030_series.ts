import { Kysely } from "kysely";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const seed = async (db: Kysely<any>) => {
  await db.deleteFrom("series").execute();

  await db
    .insertInto("series")
    .values([
      {
        createdAt: "2025-12-18 00:30:00",
        updatedAt: "2025-12-18 00:30:00",
        name: "Treasure Chest Launch",
        code: "TCL",
        isGift: true,
      },
      {
        createdAt: "2025-12-18 00:30:00",
        updatedAt: "2025-12-18 00:30:00",
        name: "Treasure Hunt",
        code: "TH",
      },
      {
        createdAt: "2025-12-18 00:30:00",
        updatedAt: "2025-12-18 00:30:00",
        name: "Controllable Heroes",
        code: "CH",
      },
      {
        createdAt: "2025-12-18 00:30:00",
        updatedAt: "2025-12-18 00:30:00",
        name: "Christmas Chest",
        code: "CC",
        isGift: true,
      },
      {
        createdAt: "2025-12-18 00:30:00",
        updatedAt: "2025-12-18 00:30:00",
        name: "Content Creator Chests",
        code: "CCC",
        isGift: true,
      },
      {
        createdAt: "2025-12-18 00:30:00",
        updatedAt: "2025-12-18 00:30:00",
        name: "Gold Rush",
        code: "GR",
      },
      {
        createdAt: "2025-12-18 00:30:00",
        updatedAt: "2025-12-18 00:30:00",
        name: "Friend or Foe",
        code: "FF",
        isGift: true,
      },
      {
        createdAt: "2025-12-18 00:30:00",
        updatedAt: "2025-12-18 00:30:00",
        name: "Splash Bash",
        code: "SB",
      },
      {
        createdAt: "2025-12-18 00:30:00",
        updatedAt: "2025-12-18 00:30:00",
        name: "Hero Rush",
        code: "HR",
      },
      {
        createdAt: "2025-12-18 00:30:00",
        updatedAt: "2025-12-18 00:30:00",
        name: "Meteor Catcher",
        code: "MC",
      },
      {
        createdAt: "2025-12-18 00:30:00",
        updatedAt: "2025-12-18 00:30:00",
        name: "Clan Rush",
        code: "CR",
      },
      {
        createdAt: "2025-12-18 00:30:00",
        updatedAt: "2025-12-18 00:30:00",
        name: "Unleash The Duke",
        code: "UTD",
      },
    ])
    .execute();
};
