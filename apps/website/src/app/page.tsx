import { getAccountsCount } from "@/actions/account";
import { getChestCountPerAccount } from "@/actions/chest";
import { ChestCountAccountChart } from "@/components/chest-count-account-chart";

export default async function Dashboard() {
  const chestCounts = await getChestCountPerAccount();
  const accountCount = await getAccountsCount();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <ChestCountAccountChart
        chestCounts={chestCounts}
        accountCount={accountCount}
      />
    </div>
  );
}
