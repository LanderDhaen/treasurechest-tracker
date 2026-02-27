import { getChestCountPerAccount, getTotalAccounts } from "@/actions/account";
import { getChestCountPerCategory } from "@/actions/category";
import {
  getTotalChests,
  getLatestChest,
  getPeakOpeningHourData,
} from "@/actions/chest";
import { getChestCountPerEvent, getPossibleChestCount } from "@/actions/event";
import { getChestCountPerReward } from "@/actions/reward";
import ChestCountAccountChart from "@/components/chest-count-account-chart";
import ChestCountCategoryChart from "@/components/chest-count-category-chart";
import ChestCountEventTable from "@/components/chest-count-event-table";
import ChestCountRewardChart from "@/components/chest-count-reward-chart";
import LatestChestCard from "@/components/latest-chest-card";
import PeakOpeningHourCard from "@/components/peak-opening-hour-card";
import RarityCard from "@/components/rarity-card";
import TotalChestCard from "@/components/total-chest-card";
import { FilterConfig } from "@/types/common";

export default async function Dashboard() {
  const chestCount = await getTotalChests();
  const accountCount = await getTotalAccounts();
  const possibleChestCount = await getPossibleChestCount();
  const accounts = await getChestCountPerAccount();
  const chest = await getLatestChest();
  const categories = await getChestCountPerCategory();
  const events = await getChestCountPerEvent();
  const rewards = await getChestCountPerReward();
  const peakOpeningHourData = await getPeakOpeningHourData();

  const filters = {} satisfies FilterConfig;

  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <TotalChestCard
          actualChestCount={chestCount}
          possibleChestCount={possibleChestCount * accountCount}
        />
        <LatestChestCard chest={chest} />
        <PeakOpeningHourCard
          peakOpeningHourData={peakOpeningHourData}
          totalChests={chestCount}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <RarityCard filters={filters} />
        <ChestCountCategoryChart categories={categories} />
      </div>
      <ChestCountRewardChart rewards={rewards} />
      <ChestCountAccountChart accounts={accounts} />
      <ChestCountEventTable events={events} accountCount={accountCount} />
    </div>
  );
}
