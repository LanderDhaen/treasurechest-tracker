import {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from "kysely";

export interface RarityTable {
  id: Generated<number>;
  createdAt: ColumnType<Date>;
  updatedAt: ColumnType<Date>;
  isActive: ColumnType<boolean>;
  name: ColumnType<string>;
  chance: ColumnType<number>;
}

export type Rarity = Selectable<RarityTable>;
export type InsertableRarity = Insertable<RarityTable>;
export type UpdateableRarity = Updateable<RarityTable>;
