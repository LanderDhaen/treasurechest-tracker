import { ClanTable } from "./clan";
import { AccountHistoryTable, AccountTable } from "./account";
import { EventHistoryTable, EventTable } from "./event";
import { ChestTable } from "./chest";
import { RarityTable } from "./rarity";
import { CategoryTable } from "./category";
import { RewardTable } from "./reward";
import { SeriesTable } from "./series";
import { TypeTable } from "./type";
import { TownhallTable } from "./townhall";

export interface Database {
  townhall: TownhallTable;
  clan: ClanTable;
  account: AccountTable;
  account_history: AccountHistoryTable;
  type: TypeTable;
  series: SeriesTable;
  event: EventTable;
  event_history: EventHistoryTable;
  rarity: RarityTable;
  category: CategoryTable;
  reward: RewardTable;
  chest: ChestTable;
}
