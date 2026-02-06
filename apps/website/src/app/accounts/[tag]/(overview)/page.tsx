import {
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
import { getChestCountPerRarity } from "@/actions/rarity";
import { getChestCountPerCategory } from "@/actions/category";

export default async function Page({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;

  const account = await getAccountByTag(tag);
  const chest = await getLatestChest(account.id);
  const eventCount = await getTotalEvents();
  const chestCount = await getTotalChests(account.id);
  const reward = await getMostReceivedReward(account.id);
  const categories = await getChestCountPerCategory(account.id);
  const rarities2 = await getChestCountPerRarity(account.id);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <TotalChestCard
        chestCount={chestCount}
        description={`on ${account.name}・${eventCount} events`}
      />
      <LatestChestCard chest={chest} />
      <MostReceivedRewardCard reward={reward} total={chestCount} />

      <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChestCountRarityChart rarities={rarities2} />
        <ChestCountCategoryChart categories={categories} />
      </div>
    </div>
  );
}
