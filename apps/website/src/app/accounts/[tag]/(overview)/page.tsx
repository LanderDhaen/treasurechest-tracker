import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import { getLatestChests } from "@/actions/chest";
import { calculateWeeksAgo } from "@/lib/utils";
import RarityBadge from "@/components/rarity-badge";

export default async function Page({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;

  const { latest, latestLegendary, latestEpic } = await getLatestChests(tag);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="shadow-md">
        <CardHeader>
          <CardDescription>Latest Treasure Chest</CardDescription>
          <CardTitle className="flex gap-2 start text-2xl">
            {latest &&
              (latest.amount === 1
                ? latest.reward
                : `${latest.amount.toLocaleString()} ${latest.reward}`)}
          </CardTitle>
        </CardHeader>
        {latest && (
          <CardFooter className="text-sm text-muted-foreground">
            during {latest.event}・
            <i>{calculateWeeksAgo(new Date(latest.openedAt))}</i>
          </CardFooter>
        )}
      </Card>

      <Card className="shadow-md">
        <CardHeader>
          <CardDescription>
            Latest <RarityBadge rarity="Legendary" />
          </CardDescription>
          <CardTitle className="flex gap-2 start text-2xl">
            {latestLegendary &&
              (latestLegendary.amount === 1
                ? latestLegendary.reward
                : `${latestLegendary.amount.toLocaleString()} ${latestLegendary.reward}`)}
          </CardTitle>
        </CardHeader>
        {latestLegendary && (
          <CardFooter className="text-sm text-muted-foreground">
            during {latestLegendary.event}・
            <i>{calculateWeeksAgo(new Date(latestLegendary.openedAt))}</i>
          </CardFooter>
        )}
      </Card>

      <Card className="shadow-md">
        <CardHeader>
          <CardDescription>
            Latest <RarityBadge rarity="Epic" />
          </CardDescription>
          <CardTitle className="flex gap-2 start text-2xl">
            {latestEpic &&
              (latestEpic.amount === 1
                ? latestEpic.reward
                : `${latestEpic.amount.toLocaleString()} ${latestEpic.reward}`)}
          </CardTitle>
        </CardHeader>
        {latestEpic && (
          <CardFooter className="text-sm text-muted-foreground">
            during {latestEpic.event}・
            <i>{calculateWeeksAgo(new Date(latestEpic.openedAt))}</i>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
