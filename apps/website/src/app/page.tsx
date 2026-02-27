import { getTotalAccounts } from "@/actions/account";
import {
  getTotalChests,
  getLatestChest,
  getPeakOpeningHourData,
} from "@/actions/chest";
import { getChestCountPerEvent, getPossibleChestCount } from "@/actions/event";
import AccountCard from "@/components/account-card";
import CategoryCard from "@/components/category-card";
import ChestCountEventTable from "@/components/chest-count-event-table";
import LatestChestCard from "@/components/latest-chest-card";
import PeakOpeningHourCard from "@/components/peak-opening-hour-card";
import RarityCard from "@/components/rarity-card";
import RewardCard from "@/components/reward-card";
import TotalChestCard from "@/components/total-chest-card";
import { FilterConfig } from "@/types/common";

export default async function Dashboard() {
  const chestCount = await getTotalChests();
  const accountCount = await getTotalAccounts();
  const possibleChestCount = await getPossibleChestCount();
  const chest = await getLatestChest();
  const events = await getChestCountPerEvent();
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
        <CategoryCard filters={filters} />
      </div>
      <RewardCard filters={filters} />
      <AccountCard filters={filters} />
      <ChestCountEventTable events={events} accountCount={accountCount} />
    </div>
  );
}
