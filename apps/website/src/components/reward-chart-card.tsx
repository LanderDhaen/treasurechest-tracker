import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FilterConfig } from "@/types/common";
import { getChestCountPerReward } from "@/actions/reward";
import RewardChart from "./reward-chart";

interface RewardChartCardProps {
  filters: FilterConfig;
}

export default async function RewardChartCard({
  filters,
}: RewardChartCardProps) {
  const rewards = await getChestCountPerReward(filters);

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Rewards</CardTitle>
        <CardDescription>
          Shows the number of treasure chests opened per reward
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RewardChart rewards={rewards} />
      </CardContent>
    </Card>
  );
}
