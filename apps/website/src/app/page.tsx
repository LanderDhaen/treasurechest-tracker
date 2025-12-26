import {
  getChestCountPerAccount,
  getChestCountPerRarity,
} from "@/actions/chest";
import { getChestCountPerEvent } from "@/actions/event";
import { ChestCountAccountChart } from "@/components/chest-count-account-chart";
import { ChestCountEventChart } from "@/components/chest-count-event-chart";
import { ChestCountRarityChart } from "@/components/chest-count-rarity-chart";

export default async function Dashboard() {
  const chestCountPerAccount = await getChestCountPerAccount();
  const chestCountPerRarity = await getChestCountPerRarity();
  const chestCountPerEvent = await getChestCountPerEvent();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <ChestCountAccountChart chestCountPerAccount={chestCountPerAccount} />
      <ChestCountRarityChart chestCountPerRarity={chestCountPerRarity} />
      <ChestCountEventChart chestCountPerEvent={chestCountPerEvent} />
    </div>
  );
}
