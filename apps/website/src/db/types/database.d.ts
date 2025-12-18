import { ClanTable } from "./clan";
import { AccountTable } from "./account";
import { EventTable } from "./event";

export interface Database {
  clan: ClanTable;
  account: AccountTable;
  event: EventTable;
}
