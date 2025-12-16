import { ClanTable } from "./clan";
import { AccountTable } from "./account";

export interface Database {
  clan: ClanTable;
  account: AccountTable;
}
