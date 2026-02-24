import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { calculatePercentage } from "@/lib/utils";

interface TotalChestCardProps {
  actualChestCount: number;
  possibleChestCount: number;
}

export default function TotalChestCard({
  actualChestCount,
  possibleChestCount,
}: TotalChestCardProps) {
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
