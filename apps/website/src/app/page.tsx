import { getChestCountPerAccount } from "@/actions/account";
import { getMostReceivedCategory } from "@/actions/category";
import { getHighestEvent } from "@/actions/event";
import { getChestCountPerRarity } from "@/actions/rarity";
import { getMostReceivedReward } from "@/actions/reward";
import { ChestCountAccountChart } from "@/components/chest-count-account-chart";
import { ChestCountRarityChart } from "@/components/chest-count-rarity-chart";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import { calculateWeeksAgo } from "@/lib/utils";

export default async function Dashboard() {
  const chestCountPerAccount = await getChestCountPerAccount();
  const chestCountPerRarity = await getChestCountPerRarity();
  const highestEvent = await getHighestEvent();
  const mostReceivedReward = await getMostReceivedReward();
  const mostReceivedCategory = await getMostReceivedCategory();

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
            <CardDescription>Most Received Reward</CardDescription>
            <CardTitle className="text-2xl">
              {mostReceivedReward.name}
            </CardTitle>
          </CardHeader>
          <CardFooter className="text-sm text-muted-foreground">
            with {mostReceivedReward.count} times
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Most Received Category</CardDescription>
            <CardTitle className="text-2xl">
              {mostReceivedCategory.name}
            </CardTitle>
          </CardHeader>
          <CardFooter className="text-sm text-muted-foreground">
            with {mostReceivedCategory.count} times
          </CardFooter>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChestCountAccountChart chestCountPerAccount={chestCountPerAccount} />
        <ChestCountRarityChart chestCountPerRarity={chestCountPerRarity} />
      </div>
    </div>
  );
}
