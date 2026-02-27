"use client";

import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";

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

interface ChestCountRewardChartProps {
  rewards: {
    name: string;
    count: number;
    rarities: {
      name: string;
      count: number;
    }[];
  }[];
}

export default function RewardChart({ rewards }: ChestCountRewardChartProps) {
  const chartData = rewards.map(({ name, rarities, count }) => ({
    name,
    ...Object.fromEntries(
      rarities.map(({ name, count }) => [name.toLowerCase(), count]),
    ),
    count,
  }));

  return (
    <ChartContainer config={chartConfig} className="min-h-400 w-full">
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
          tickFormatter={(value: string) => {
            if (value.length > 12) {
              return value.substring(0, 10) + "..";
            } else return value;
          }}
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
