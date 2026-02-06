import { getChestCountPerAccount, getTotalAccounts } from "@/actions/account";
import {
  getTotalChests,
  getLatestChest,
  getMostReceivedReward,
  getChestCountPerCategory,
} from "@/actions/chest";
import { getTotalEvents } from "@/actions/event";
import { getChestCountPerRarity } from "@/actions/rarity";
import ChestCountAccountChart from "@/components/chest-count-account-chart";
import ChestCountCategoryChart from "@/components/chest-count-category-chart";
import ChestCountRarityChart from "@/components/chest-count-rarity-chart";
import LatestChestCard from "@/components/latest-chest-card";
import MostReceivedRewardCard from "@/components/most-received-reward-card";
import TotalChestCard from "@/components/total-chest-card";

export default async function Dashboard() {
  const chestCount = await getTotalChests();
  const accountCount = await getTotalAccounts();
  const eventCount = await getTotalEvents();
  const accounts = await getChestCountPerAccount();
  const rarities = await getChestCountPerRarity();
  const reward = await getMostReceivedReward();
  const chest = await getLatestChest();
  const categories = await getChestCountPerCategory();

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 subgrid">
        <TotalChestCard
          chestCount={chestCount}
          description={`across ${accountCount} accounts・${eventCount} events`}
        />
        <LatestChestCard chest={chest} />
        <MostReceivedRewardCard reward={reward} total={chestCount} />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 subgrid">
        <ChestCountRarityChart rarities={rarities} />
        <ChestCountCategoryChart categories={categories} />
        <ChestCountAccountChart accounts={accounts} />
      </div>
    </div>
  );
}
