import {
  getLatestChest,
  getTotalChests,
  getPeakOpeningHourData,
} from "@/actions/chest";
import ChestCountRarityChart from "@/components/chest-count-rarity-chart";
import ChestCountCategoryChart from "@/components/chest-count-category-chart";
import { getChestCountPerEvent, getTotalEvents } from "@/actions/event";
import { getAccountByTag } from "@/actions/account";
import LatestChestCard from "@/components/latest-chest-card";
import TotalChestCard from "@/components/total-chest-card";
import { getChestCountPerRarity } from "@/actions/rarity";
import { getChestCountPerCategory } from "@/actions/category";
import { getChestCountPerReward } from "@/actions/reward";
import ChestCountEventTable from "@/components/chest-count-event-table";
import ChestCountRewardChart from "@/components/chest-count-reward-chart";
import PeakOpeningHourCard from "@/components/peak-opening-hour-card";

export default async function Page({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;

  const account = await getAccountByTag(tag);
  const chest = await getLatestChest({ accountId: account.id });
  const eventCount = await getTotalEvents();
  const chestCount = await getTotalChests({ accountId: account.id });
  const categories = await getChestCountPerCategory({ accountId: account.id });
  const rarities = await getChestCountPerRarity({ accountId: account.id });
  const events = await getChestCountPerEvent(account.id);
  const rewards = await getChestCountPerReward({ accountId: account.id });
  const peakOpeningHourData = await getPeakOpeningHourData({
    accountId: account.id,
  });

  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <TotalChestCard
          chestCount={chestCount}
          description={`on ${account.name}・${eventCount} events`}
        />
        <LatestChestCard chest={chest} />
        <PeakOpeningHourCard
          peakOpeningHourData={peakOpeningHourData}
          totalChests={chestCount}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChestCountRarityChart rarities={rarities} />
        <ChestCountCategoryChart categories={categories} />
      </div>
      <ChestCountRewardChart rewards={rewards} />
      <ChestCountEventTable events={events} />
    </div>
  );
}
