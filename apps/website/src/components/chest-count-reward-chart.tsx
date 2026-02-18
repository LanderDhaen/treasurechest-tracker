"use client";

import { Bar, BarChart, Cell, LabelList, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartConfig = {
  count: {
    label: "Opened:",
  },
} satisfies ChartConfig;

interface ChestCountRewardChartProps {
  rewards: {
    name: string;
    count: number;
  }[];
}

export default function ChestCountRewardChart({
  rewards,
}: ChestCountRewardChartProps) {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Rewards</CardTitle>
        <CardDescription>
          Shows the number of treasure chests opened per reward
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-50 w-full">
          <BarChart
            accessibilityLayer
            data={rewards}
            layout="vertical"
            margin={{
              right: 20,
            }}
          >
            <XAxis type="number" dataKey="count" hide />
            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              width={110}
              interval={0}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideIndicator />}
            />
            <Bar dataKey="count" radius={24} fill="#cbd5e1">
              <LabelList
                dataKey="count"
                position="right"
                fill="var(--foreground)"
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
