import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import { getLatestChest } from "@/actions/chest";
import { calculateWeeksAgo } from "@/lib/utils";
import RarityBadge from "@/components/rarity-badge";

export default async function Page({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;

  const chest = await getLatestChest(tag);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
    </div>
  );
}
