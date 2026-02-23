import {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from "kysely";

export interface RewardTable {
  id: Generated<number>;
  createdAt: ColumnType<Date>;
  updatedAt: ColumnType<Date>;
  isActive: ColumnType<boolean>;
  name: ColumnType<string>;
  isObtainable: ColumnType<boolean>;
  categoryId: ColumnType<number>;
}

export type Reward = Selectable<RewardTable>;
export type InsertableReward = Insertable<RewardTable>;
export type UpdateableReward = Updateable<RewardTable>;
