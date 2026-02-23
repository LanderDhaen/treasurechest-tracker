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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartConfig = {
  common: { label: "Common", color: "#a3a3a3" },
  rare: { label: "Rare", color: "#93c5fd" },
  epic: { label: "Epic", color: "#a855f7" },
  legendary: { label: "Legendary", color: "#facc15" },
  count: { label: "Opened", color: "var(--primary)" },
} satisfies ChartConfig;

interface ChestCountAccountChartProps {
  accounts: {
    name: string;
    count: number;
    rarities: {
      name: string;
      count: number;
    }[];
  }[];
}

export default function ChestCountAccountChart({
  accounts,
}: ChestCountAccountChartProps) {
  const chartData = accounts.map(({ name, rarities, count }) => ({
    name,
    ...Object.fromEntries(
      rarities.map(({ name, count }) => [name.toLowerCase(), count]),
    ),
    count,
  }));
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Accounts</CardTitle>
        <CardDescription>
          Shows the number of treasure chests opened per account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-100 w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
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
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar
              dataKey="common"
              stackId="a"
              radius={100}
              fill={chartConfig.common.color}
            />
            <Bar
              dataKey="rare"
              stackId="a"
              radius={100}
              fill={chartConfig.rare.color}
            />

            <Bar
              dataKey="epic"
              stackId="a"
              radius={100}
              fill={chartConfig.epic.color}
            />
            <Bar
              dataKey="legendary"
              stackId="a"
              radius={100}
              fill={chartConfig.legendary.color}
            >
              <LabelList
                dataKey="count"
                position="right"
                fill={chartConfig.count.color}
              />
            </Bar>
            <ChartLegend content={<ChartLegendContent />} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
