import { getTotalAccounts } from "@/actions/account";
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
  const possibleChestCount = await getPossibleChestCount();

  // If accountId filter is applied, we can assume there's only 1 account. Otherwise, we need to get the total account count for the progress calculation in the table.

  const accountCount = filters.accountId ? 1 : await getTotalAccounts();

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardDescription>Total Treasure Chests</CardDescription>
        <CardTitle className="text-2xl">{actualChestCount}</CardTitle>
      </CardHeader>
      <CardFooter className="text-sm text-muted-foreground">
        out of {possibleChestCount * accountCount} possible chests・
        {calculatePercentage(
          actualChestCount,
          possibleChestCount * accountCount,
        )}
      </CardFooter>
    </Card>
  );
}
