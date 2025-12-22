import {
  getChestCountPerAccount,
  getChestCountPerRarity,
  getChestCountPerYear,
} from "@/actions/chest";
import { ChestCountAccountChart } from "@/components/chest-count-account-chart";
import { ChestCountRarityChart } from "@/components/chest-count-rarity-chart";
import { ChestCountYearlyChart } from "@/components/chest-count-yearly-chart";

export default async function Dashboard() {
  const chestCountPerAccount = await getChestCountPerAccount();
  const chestCountPerRarity = await getChestCountPerRarity();
  const chestCountPerYear = await getChestCountPerYear(2025);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <ChestCountAccountChart chestCountPerAccount={chestCountPerAccount} />
      <ChestCountRarityChart chestCountPerRarity={chestCountPerRarity} />
      <ChestCountYearlyChart chestCountPerYear={chestCountPerYear} />
    </div>
  );
}
