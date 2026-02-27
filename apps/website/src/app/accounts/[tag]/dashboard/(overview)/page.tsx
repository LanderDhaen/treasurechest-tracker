import {
  getLatestChest,
  getTotalChests,
  getPeakOpeningHourData,
} from "@/actions/chest";
import { getChestCountPerEvent, getPossibleChestCount } from "@/actions/event";
import { getAccountByTag } from "@/actions/account";
import LatestChestCard from "@/components/latest-chest-card";
import TotalChestCard from "@/components/total-chest-card";
import { getChestCountPerReward } from "@/actions/reward";
import ChestCountEventTable from "@/components/chest-count-event-table";
import ChestCountRewardChart from "@/components/chest-count-reward-chart";
import PeakOpeningHourCard from "@/components/peak-opening-hour-card";
import AccountInformationItem from "@/components/account-information-item";
import { FilterConfig } from "@/types/common";
import RarityCard from "@/components/rarity-card";
import CategoryCard from "@/components/category-card";

export default async function Page({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;

  const account = await getAccountByTag(tag);

  const filters = {
    accountId: account?.id,
  } satisfies FilterConfig;

  const chest = await getLatestChest({ accountId: account.id });
  const possibleChestCount = await getPossibleChestCount();
  const chestCount = await getTotalChests({ accountId: account.id });
  const events = await getChestCountPerEvent({ accountId: account.id });
  const rewards = await getChestCountPerReward({ accountId: account.id });
  const peakOpeningHourData = await getPeakOpeningHourData({
    accountId: account.id,
  });

  return (
    <div className="grid grid-cols-1 gap-4">
      <AccountInformationItem account={account} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <TotalChestCard
          actualChestCount={chestCount}
          possibleChestCount={possibleChestCount}
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
      <ChestCountRewardChart rewards={rewards} />
      <ChestCountEventTable events={events} accountCount={1} />
    </div>
  );
}
