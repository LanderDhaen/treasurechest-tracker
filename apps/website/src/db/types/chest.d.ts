import {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from "kysely";

export interface ChestTable {
  id: Generated<number>;
  createdAt: ColumnType<Date, never, never>;
  updatedAt: ColumnType<Date, never, Date>;
  isActive: ColumnType<boolean, never, boolean>;
  amount: ColumnType<number>;
  openedAt: ColumnType<Date>;
  rarityId: ColumnType<number>;
  accountId: ColumnType<number>;
  eventId: ColumnType<number>;
  rewardId: ColumnType<number>;
}

export type Chest = Selectable<ChestTable>;
export type InsertableChest = Insertable<ChestTable>;
export type UpdateableChest = Updateable<ChestTable>;
