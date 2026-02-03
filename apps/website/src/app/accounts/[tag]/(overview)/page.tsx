import {
  getChestCountPerCategory,
  getChestCountPerRarity,
  getLatestChest,
  getMostReceivedReward,
  getTotalChests,
} from "@/actions/chest";
import ChestCountRarityChart from "@/components/chest-count-rarity-chart";
import ChestCountCategoryChart from "@/components/chest-count-category-chart";
import { getTotalEvents } from "@/actions/event";
import { getAccountByTag } from "@/actions/account";
import LatestChestCard from "@/components/latest-chest-card";
import MostReceivedRewardCard from "@/components/most-received-reward-card";
import TotalChestCard from "@/components/total-chest-card";

export default async function Page({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;

  const account = await getAccountByTag(tag);
  const chest = await getLatestChest(tag);
  const eventCount = await getTotalEvents();
  const chestCount = await getTotalChests(tag);
  const reward = await getMostReceivedReward(tag);
  const categories = await getChestCountPerCategory(tag);
  const rarities = await getChestCountPerRarity(tag);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <TotalChestCard
        chestCount={chestCount}
        description={`on ${account.name}・${eventCount} events`}
      />
      <LatestChestCard chest={chest} />
      <MostReceivedRewardCard reward={reward} total={chestCount} />

      <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChestCountRarityChart rarities={rarities} />
        <ChestCountCategoryChart categories={categories} />
      </div>
    </div>
  );
}
