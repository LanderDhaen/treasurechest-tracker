import { getChestCountPerAccount } from "@/actions/account";
import {
  getTotalChests,
  // getHighestPerformingDay,
  getLatestChest,
  getMostReceivedReward,
  getMostReceivedCategory,
  getChestCountPerRarity,
  // getLastestLegendaryChest,
} from "@/actions/chest";
// import { getHighestEvent } from "@/actions/event";
import { ChestCountAccountChart } from "@/components/chest-count-account-chart";
import { ChestCountRarityChart } from "@/components/chest-count-rarity-chart";
import RarityBadge from "@/components/rarity-badge";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import { calculatePercentage, calculateWeeksAgo } from "@/lib/utils";

export default async function Dashboard() {
  const chestCount = await getTotalChests();
  const chestCountPerAccount = await getChestCountPerAccount();
  const chestCountPerRarity = await getChestCountPerRarity();
  const mostReceivedReward = await getMostReceivedReward();
  const mostReceivedCategory = await getMostReceivedCategory();
  const latestChest = await getLatestChest();
  // const latestLegendaryChest = await getLastestLegendaryChest();
  // const highestEvent = await getHighestEvent();
  // const highestPerformingDay = await getHighestPerformingDay();

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
            <i>{calculateWeeksAgo(new Date(latestChest.openedAt))}</i>
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

        <Card className="shadow-md">
          <CardHeader>
            <CardDescription>Most Received Category</CardDescription>
            <CardTitle className="text-2xl">
              {mostReceivedCategory.name}
            </CardTitle>
          </CardHeader>
          <CardFooter className="text-sm text-muted-foreground">
            with {mostReceivedCategory.count} times in {chestCount} treasure
            chests・
            <i>{calculatePercentage(mostReceivedCategory.count, chestCount)}</i>
          </CardFooter>
        </Card>

        {/* 
        
        TODO: Move these cards to dedicated statistics pages

        <Card>
          <CardHeader>
            <CardDescription>Latest Legendary</CardDescription>
            <CardTitle className="flex gap-2 start text-2xl">
              {latestLegendaryChest.amount === 1
                ? `${latestLegendaryChest.reward}`
                : `${latestLegendaryChest.amount.toLocaleString()} ${
                    latestLegendaryChest.reward
                  }`}
            </CardTitle>
          </CardHeader>
          <CardFooter className="text-sm text-muted-foreground">
            on {latestChest.account}・
            <i>{calculateWeeksAgo(new Date(latestChest.openedAt))}</i>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardDescription>Highest Performing Event</CardDescription>
            <CardTitle className="text-2xl">{highestEvent.name}</CardTitle>
          </CardHeader>
          <CardFooter className="text-sm text-muted-foreground">
            with {highestEvent.count} treasure chests opened・
            <i>{calculateWeeksAgo(new Date(highestEvent.endDate))}</i>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardDescription>Highest Performing Day</CardDescription>
            <CardTitle className="text-2xl">
              {formatDate(highestPerformingDay.day)}
            </CardTitle>
          </CardHeader>
          <CardFooter className="text-sm text-muted-foreground">
            with {highestPerformingDay.count} treasure chests opened・
            <i>{calculateWeeksAgo(new Date(highestPerformingDay.day))}</i>
          </CardFooter>
        </Card> */}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 subgrid">
        <ChestCountAccountChart chestCountPerAccount={chestCountPerAccount} />
        <ChestCountRarityChart rarities={chestCountPerRarity} />
      </div>
    </div>
  );
}
