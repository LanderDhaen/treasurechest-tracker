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

interface ChestCountCategoryChartProps {
  categories: {
    name: string;
    count: number;
  }[];
}

export default function ChestCountCategoryChart({
  categories,
}: ChestCountCategoryChartProps) {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Categories</CardTitle>
        <CardDescription>
          Shows the number of treasure chests opened per category
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-50 w-full">
          <BarChart
            accessibilityLayer
            data={categories}
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
