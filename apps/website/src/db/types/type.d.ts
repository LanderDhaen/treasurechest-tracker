import {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from "kysely";

export interface TypeTable {
  id: Generated<number>;
  createdAt: ColumnType<Date>;
  updatedAt: ColumnType<Date>;
  isActive: ColumnType<boolean>;
  name: ColumnType<string>;
}

export type Type = Selectable<TypeTable>;
export type InsertableType = Insertable<TypeTable>;
export type UpdateableType = Updateable<TypeTable>;
