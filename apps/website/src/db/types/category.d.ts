import {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from "kysely";

export interface CategoryTable {
  id: Generated<number>;
  createdAt: ColumnType<Date>;
  updatedAt: ColumnType<Date>;
  isActive: ColumnType<boolean>;
  name: ColumnType<string>;
  minRarity: ColumnType<number>;
  maxRarity: ColumnType<number>;
}

export type Category = Selectable<CategoryTable>;
export type InsertableCategory = Insertable<CategoryTable>;
export type UpdateableCategory = Updateable<CategoryTable>;
