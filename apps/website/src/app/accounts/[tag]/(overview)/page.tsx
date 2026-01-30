import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import {
  getChestCountPerRarity,
  getLatestChest,
  getMostReceivedCategory,
  getMostReceivedReward,
  getTotalChests,
} from "@/actions/chest";
import { calculatePercentage, calculateWeeksAgo } from "@/lib/utils";
import RarityBadge from "@/components/rarity-badge";
import { ChestCountRarityChart } from "@/components/chest-count-rarity-chart";

export default async function Page({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;

  const chest = await getLatestChest(tag);
  const chestCount = await getTotalChests(tag);
  const category = await getMostReceivedCategory(tag);
  const reward = await getMostReceivedReward(tag);
  const rarities = await getChestCountPerRarity(tag);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Card className="shadow-md">
        <CardHeader>
          <CardDescription className="flex justify-between items-center">
            Latest Treasure Chest
            <RarityBadge rarity={chest.rarity} />
          </CardDescription>
          <CardTitle className="text-2xl">
            {chest.amount === 1
              ? `${chest.reward}`
              : `${chest.amount.toLocaleString()} ${chest.reward}`}
          </CardTitle>
        </CardHeader>
        <CardFooter className="text-sm italic text-muted-foreground">
          {calculateWeeksAgo(new Date(chest.openedAt))}
        </CardFooter>
      </Card>

      <Card className="shadow-md">
        <CardHeader>
          <CardDescription>Most Received Reward</CardDescription>
          <CardTitle className="text-2xl">{reward.name}</CardTitle>
        </CardHeader>
        <CardFooter className="text-sm text-muted-foreground">
          with {reward.count} times in {chestCount} treasure chests・
          <i>{calculatePercentage(reward.count, chestCount)}</i>
        </CardFooter>
      </Card>

      <Card className="shadow-md">
        <CardHeader>
          <CardDescription>Most Received Category</CardDescription>
          <CardTitle className="text-2xl">{category.name}</CardTitle>
        </CardHeader>
        <CardFooter className="text-sm text-muted-foreground">
          with {category.count} times in {chestCount} treasure chests・
          <i>{calculatePercentage(category.count, chestCount)}</i>
        </CardFooter>
      </Card>
      <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChestCountRarityChart rarities={rarities} />
      </div>
    </div>
  );
}
