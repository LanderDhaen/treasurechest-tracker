import { getChestCountPerAccount, getTotalAccounts } from "@/actions/account";
import { getChestCountPerCategory } from "@/actions/category";
import { getTotalChests, getLatestChest } from "@/actions/chest";
import { getChestCountPerEvent, getTotalEvents } from "@/actions/event";
import { getChestCountPerRarity } from "@/actions/rarity";
import {
  getChestCountPerReward,
  getMostReceivedReward,
} from "@/actions/reward";
import ChestCountAccountChart from "@/components/chest-count-account-chart";
import ChestCountCategoryChart from "@/components/chest-count-category-chart";
import ChestCountEventTable from "@/components/chest-count-event-table";
import ChestCountRarityChart from "@/components/chest-count-rarity-chart";
import ChestCountRewardChart from "@/components/chest-count-reward-chart";
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
  const events = await getChestCountPerEvent();
  const rewards = await getChestCountPerReward();

  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <TotalChestCard
          chestCount={chestCount}
          description={`across ${accountCount} accounts・${eventCount} events`}
        />
        <LatestChestCard chest={chest} />
        <MostReceivedRewardCard reward={reward} total={chestCount} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChestCountRarityChart rarities={rarities} />
        <ChestCountCategoryChart categories={categories} />
      </div>
      <ChestCountRewardChart rewards={rewards} />
      <ChestCountAccountChart accounts={accounts} />
      <ChestCountEventTable events={events} accountCount={accountCount} />
    </div>
  );
}
