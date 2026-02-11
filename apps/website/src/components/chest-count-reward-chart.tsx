"use client";

import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";

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
  category: {
    name: string;
    count: number;
    rewards: {
      id: number;
      name: string;
      count: number;
      amount: number;
    }[];
  };
}

export default function ChestCountRewardChart({
  category,
}: ChestCountRewardChartProps) {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>{category.name}</CardTitle>
        <CardDescription>
          Shows the number of treasure chests opened per reward
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-50 w-full">
          <BarChart
            accessibilityLayer
            data={category.rewards}
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
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="count" radius={80} fill="var(--primary)">
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
