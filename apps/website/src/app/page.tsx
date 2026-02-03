import { getChestCountPerAccount } from "@/actions/account";
import {
  getTotalChests,
  getLatestChest,
  getMostReceivedReward,
  getChestCountPerRarity,
  getChestCountPerCategory,
} from "@/actions/chest";
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
  const chestCountPerAccount = await getChestCountPerAccount();
  const chestCountPerRarity = await getChestCountPerRarity();
  const mostReceivedReward = await getMostReceivedReward();
  const latestChest = await getLatestChest();
  const categories = await getChestCountPerCategory();

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 subgrid">
        <Card className="shadow-md">
          <CardHeader>
            <CardDescription className="flex justify-between items-center">
              Latest Treasure Chest
              <RarityBadge rarity={latestChest.rarity} />
            </CardDescription>
            <CardTitle className="text-2xl">
              {latestChest.amount === 1
                ? `${latestChest.reward}`
                : `${latestChest.amount.toLocaleString()} ${latestChest.reward}`}
            </CardTitle>
          </CardHeader>
          <CardFooter className="text-sm text-muted-foreground">
            on {latestChest.account}・
            <Tooltip>
              <TooltipTrigger className="italic">
                {calculateTimeAgo(new Date(latestChest.openedAt))}
              </TooltipTrigger>
              <TooltipContent side="bottom">
                Opened on {formatDateTime(new Date(latestChest.openedAt))}
              </TooltipContent>
            </Tooltip>
          </CardFooter>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardDescription>Most Received Reward</CardDescription>
            <CardTitle className="text-2xl">
              {mostReceivedReward.name}
            </CardTitle>
          </CardHeader>
          <CardFooter className="text-sm text-muted-foreground">
            with {mostReceivedReward.count} times in {chestCount} treasure
            chests・
            <i>{calculatePercentage(mostReceivedReward.count, chestCount)}</i>
          </CardFooter>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 subgrid">
        <ChestCountRarityChart rarities={chestCountPerRarity} />
        <ChestCountCategoryChart categories={categories} />
        <ChestCountAccountChart chestCountPerAccount={chestCountPerAccount} />
      </div>
    </div>
  );
}
