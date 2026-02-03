import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { calculatePercentage } from "@/lib/utils";

interface MostReceivedRewardCardProps {
  reward: {
    name: string;
    count: number;
  };
  total: number;
}

export default function MostReceivedRewardCard({
  reward,
  total,
}: MostReceivedRewardCardProps) {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardDescription>Most Received Reward</CardDescription>
        <CardTitle className="text-2xl">{reward.name}</CardTitle>
      </CardHeader>
      <CardFooter className="text-sm text-muted-foreground">
        with {reward.count} times・
        {calculatePercentage(reward.count, total)}
      </CardFooter>
    </Card>
  );
}
