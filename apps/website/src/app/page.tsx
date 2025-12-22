import { getAccountsCount } from "@/actions/account";
import {
  getChestCountPerAccount,
  getChestCountPerRarity,
} from "@/actions/chest";
import { ChestCountAccountChart } from "@/components/chest-count-account-chart";
import { ChestCountRarityChart } from "@/components/chest-count-rarity-chart";

export default async function Dashboard() {
  const chestCountPerAccount = await getChestCountPerAccount();
  const accountCount = await getAccountsCount();
  const chestCountPerRarity = await getChestCountPerRarity();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <ChestCountAccountChart
        chestCountPerAccount={chestCountPerAccount}
        accountCount={accountCount}
      />
      <ChestCountRarityChart chestCountPerRarity={chestCountPerRarity} />
    </div>
  );
}
