import { getTotalChests } from "@/actions/chest";
import { getPossibleChestCount } from "@/actions/event";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { calculatePercentage } from "@/lib/utils";
import { FilterConfig } from "@/types/common";

interface TotalChestCardProps {
  filters: FilterConfig;
}

export default async function TotalChestCard({ filters }: TotalChestCardProps) {
  const actualChestCount = await getTotalChests(filters);
  const possibleChestCount = await getPossibleChestCount(filters);

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardDescription>Total Treasure Chests</CardDescription>
        <CardTitle className="text-2xl">{actualChestCount}</CardTitle>
      </CardHeader>
      <CardFooter className="text-sm text-muted-foreground">
        out of {possibleChestCount} possible chests・
        {calculatePercentage(actualChestCount, possibleChestCount)}
      </CardFooter>
    </Card>
  );
}
