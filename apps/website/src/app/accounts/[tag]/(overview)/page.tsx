import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import {
  getChestCountPerCategory,
  getChestCountPerRarity,
  getLatestChest,
  getMostReceivedReward,
  getTotalChests,
} from "@/actions/chest";
import {
  calculatePercentage,
  calculateTimeAgo,
  formatDateTime,
} from "@/lib/utils";
import RarityBadge from "@/components/rarity-badge";
import { ChestCountRarityChart } from "@/components/chest-count-rarity-chart";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChestCountCategoryChart } from "@/components/chest-count-category-chart";
import { getTotalEvents } from "@/actions/event";
import { getAccountByTag } from "@/actions/account";

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
      <Card className="shadow-md">
        <CardHeader>
          <CardDescription>Total Treasure Chests</CardDescription>
          <CardTitle className="text-2xl">
            {chestCount.toLocaleString()}
          </CardTitle>
        </CardHeader>
        <CardFooter className="text-sm text-muted-foreground">
          on {account.name}・<i>{eventCount} events</i>
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

      <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChestCountRarityChart rarities={rarities} />
        <ChestCountCategoryChart categories={categories} />
      </div>
    </div>
  );
}
