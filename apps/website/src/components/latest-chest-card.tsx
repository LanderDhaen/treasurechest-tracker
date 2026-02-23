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

interface LatestChestCardProps {
  chest?: {
    amount: number;
    openedAt: Date;
    reward: string;
    rarity: string;
    account: string;
  };
}

export default function LatestChestCard({ chest }: LatestChestCardProps) {
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
          {chest.amount === 1
            ? chest.reward
            : `${chest.amount.toLocaleString()} ${chest.reward}`}
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
