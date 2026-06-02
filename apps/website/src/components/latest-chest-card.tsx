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

import { calculateTimeAgo, formatDateTime } from "@/lib/utils";

import RarityBadge from "@/components/rarity-badge";
import { FilterConfig } from "@/types/common";
import { getLatestChest } from "@/queries/chest";
import { formatReward } from "@/lib/chest";

interface LatestChestCardProps {
  filters: FilterConfig;
}

export default async function LatestChestCard({
  filters,
}: LatestChestCardProps) {
  const chest = await getLatestChest(filters);

  if (!chest) {
    return (
      <Card className="shadow-md">
        <CardHeader>
          <CardDescription>Latest Treasure Chest</CardDescription>
          <CardTitle className="text-2xl">-</CardTitle>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardDescription>Latest Treasure Chest</CardDescription>
        <CardTitle className="text-2xl">
          {formatReward(chest.amount, chest.reward)}
        </CardTitle>
      </CardHeader>

      <CardFooter className="text-sm text-muted-foreground">
        <RarityBadge rarity={chest.rarity} /> ・
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
  );
}
