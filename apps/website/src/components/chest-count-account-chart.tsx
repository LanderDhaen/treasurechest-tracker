"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "A horizontal bar chart";

const chartConfig = {
  count: {
    label: "Opened:",
  },
} satisfies ChartConfig;

interface ChestCountChartProps {
  chestCounts: {
    account: string;
    count: number;
  }[];
  accountCount: number;
}

export function ChestCountAccountChart({
  chestCounts,
  accountCount,
}: ChestCountChartProps) {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Treasure Chests / Account</CardTitle>
        <CardDescription>
          Currently tracking {accountCount} accounts
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chestCounts}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="account"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="count" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar dataKey="count" layout="vertical" radius={4}>
              <LabelList
                dataKey="account"
                position="insideLeft"
                offset={8}
                className="fill-background font-semibold"
                fontSize={12}
              />
              <LabelList
                dataKey="count"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
