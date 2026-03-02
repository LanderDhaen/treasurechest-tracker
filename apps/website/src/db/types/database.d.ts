import { ClanTable } from "./clan";
import { AccountTable } from "./account";
import { EventTable } from "./event";
import { ChestTable } from "./chest";
import { RarityTable } from "./rarity";
import { CategoryTable } from "./category";
import { RewardTable } from "./reward";
import { EditionTable } from "./edition";

export interface Database {
  clan: ClanTable;
  account: AccountTable;
  event: EventTable;
  edition: EditionTable;
  rarity: RarityTable;
  category: CategoryTable;
  reward: RewardTable;
  chest: ChestTable;
}
