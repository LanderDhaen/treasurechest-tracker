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
        typeId: 1,
      },
      {
        createdAt: "2025-12-18 00:30:00",
        updatedAt: "2025-12-18 00:30:00",
        name: "Treasure Hunt",
        code: "TH",
        typeId: 2,
      },
      {
        createdAt: "2025-12-18 00:30:00",
        updatedAt: "2025-12-18 00:30:00",
        name: "Controllable Heroes",
        code: "CH",
        typeId: 2,
      },
      {
        createdAt: "2025-12-18 00:30:00",
        updatedAt: "2025-12-18 00:30:00",
        name: "Christmas Chest",
        code: "CC",
        typeId: 1,
      },
      {
        createdAt: "2025-12-18 00:30:00",
        updatedAt: "2025-12-18 00:30:00",
        name: "Content Creator Chests",
        code: "CCC",
        typeId: 1,
      },
      {
        createdAt: "2025-12-18 00:30:00",
        updatedAt: "2025-12-18 00:30:00",
        name: "Gold Rush",
        code: "GR",
        typeId: 3,
      },
      {
        createdAt: "2025-12-18 00:30:00",
        updatedAt: "2025-12-18 00:30:00",
        name: "Friend or Foe",
        code: "FF",
        typeId: 1,
      },
      {
        createdAt: "2025-12-18 00:30:00",
        updatedAt: "2025-12-18 00:30:00",
        name: "Splash Bash",
        code: "SB",
        typeId: 2,
      },
      {
        createdAt: "2025-12-18 00:30:00",
        updatedAt: "2025-12-18 00:30:00",
        name: "Hero Rush",
        code: "HR",
        typeId: 3,
      },
      {
        createdAt: "2025-12-18 00:30:00",
        updatedAt: "2025-12-18 00:30:00",
        name: "Meteor Catcher",
        code: "MC",
        typeId: 4,
      },
      {
        createdAt: "2025-12-18 00:30:00",
        updatedAt: "2025-12-18 00:30:00",
        name: "Clan Rush",
        code: "CR",
        typeId: 3,
      },
      {
        createdAt: "2025-12-18 00:30:00",
        updatedAt: "2025-12-18 00:30:00",
        name: "Unleash The Duke",
        code: "UTD",
        typeId: 4,
      },
      {
        createdAt: "2025-12-18 00:30:00",
        updatedAt: "2025-12-18 00:30:00",
        name: "Gold Pass",
        code: "GP",
        typeId: 2,
      },
    ])
    .execute();
};
