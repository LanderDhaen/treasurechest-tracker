"use client";

import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { chartConfig } from "@/constants/common";

interface AccountChartProps {
  accounts: {
    name: string;
    count: number;
    rarities: {
      name: string;
      count: number;
    }[];
  }[];
}

export default function AccountChart({ accounts }: AccountChartProps) {
  const chartData = accounts.map(({ name, rarities, count }) => ({
    name,
    ...Object.fromEntries(
      rarities.map(({ name, count }) => [name.toLowerCase(), count]),
    ),
    count,
  }));
  return (
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
  );
}
