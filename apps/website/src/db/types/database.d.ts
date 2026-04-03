import { ClanTable } from "./clan";
import { AccountTable } from "./account";
import { EventTable } from "./event";
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
  type: TypeTable;
  series: SeriesTable;
  event: EventTable;
  rarity: RarityTable;
  category: CategoryTable;
  reward: RewardTable;
  chest: ChestTable;
}
