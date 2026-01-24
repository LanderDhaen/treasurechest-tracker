export interface ChestTableEntry {
  id: number;
  rarity: string;
  reward: string;
  amount: number;
  openedAt: Date;
  account: {
    name: string;
    townhall: number;
  };
  event: {
    name: string;
    isGift: boolean;
  };
}
