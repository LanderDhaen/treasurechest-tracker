import { TownhallTable } from "./townhall";
import { ClanTable } from "./clan";
import { AccountTable } from "./account";

export interface Database {
  townhall: TownhallTable;
  clan: ClanTable;
  account: AccountTable;
}
