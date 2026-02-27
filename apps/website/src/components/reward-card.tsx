import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Suspense } from "react";
import { Skeleton } from "./ui/skeleton";
import { FilterConfig } from "@/types/common";
import { getChestCountPerReward } from "@/actions/reward";
import ChestCountRewardChart from "./reward-chart";

interface RewardCardProps {
  filters: FilterConfig;
}

export default async function RewardCard({ filters }: RewardCardProps) {
  const rewards = await getChestCountPerReward(filters);

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Rewards</CardTitle>
        <CardDescription>
          Shows the number of treasure chest opened per reward
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<Skeleton className="aspect-video" />}>
          <ChestCountRewardChart rewards={rewards} />
        </Suspense>
      </CardContent>
    </Card>
  );
}
