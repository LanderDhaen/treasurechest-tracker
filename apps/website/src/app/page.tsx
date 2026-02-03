import { getChestCountPerAccount, getTotalAccounts } from "@/actions/account";
import {
  getTotalChests,
  getLatestChest,
  getMostReceivedReward,
  getChestCountPerRarity,
  getChestCountPerCategory,
} from "@/actions/chest";
import { getTotalEvents } from "@/actions/event";
import { ChestCountAccountChart } from "@/components/chest-count-account-chart";
import { ChestCountCategoryChart } from "@/components/chest-count-category-chart";
import { ChestCountRarityChart } from "@/components/chest-count-rarity-chart";
import RarityBadge from "@/components/rarity-badge";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  calculatePercentage,
  calculateTimeAgo,
  formatDateTime,
} from "@/lib/utils";

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
        <Card className="shadow-md">
          <CardHeader>
            <CardDescription>Total Treasure Chests</CardDescription>
            <CardTitle className="text-2xl">
              {chestCount.toLocaleString()}
            </CardTitle>
          </CardHeader>
          <CardFooter className="text-sm text-muted-foreground">
            across {accountCount} accounts・{eventCount} events
          </CardFooter>
        </Card>
        <Card className="shadow-md">
          <CardHeader>
            <CardDescription>Latest Treasure Chest</CardDescription>
            <CardTitle className="text-2xl">
              {chest.amount === 1
                ? `${chest.reward}`
                : `${chest.amount.toLocaleString()} ${chest.reward}`}
            </CardTitle>
          </CardHeader>
          <CardFooter className="text-sm text-muted-foreground">
            <RarityBadge rarity={chest.rarity} />・
            <Tooltip>
              <TooltipTrigger className="italic">
                {calculateTimeAgo(new Date(chest.openedAt))}
              </TooltipTrigger>
              <TooltipContent side="bottom">
                Opened on {formatDateTime(new Date(chest.openedAt))}
              </TooltipContent>
            </Tooltip>
          </CardFooter>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardDescription>Most Received Reward</CardDescription>
            <CardTitle className="text-2xl">{reward.name}</CardTitle>
          </CardHeader>
          <CardFooter className="text-sm text-muted-foreground">
            with {reward.count} times・
            {calculatePercentage(reward.count, chestCount)}
          </CardFooter>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 subgrid">
        <ChestCountRarityChart rarities={rarities} />
        <ChestCountCategoryChart categories={categories} />
        <ChestCountAccountChart accounts={accounts} />
      </div>
    </div>
  );
}
