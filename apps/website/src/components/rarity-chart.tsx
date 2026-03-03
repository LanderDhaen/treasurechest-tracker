"use client";

import { LabelList, Pie, PieChart } from "recharts";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { chartConfig } from "@/constants/common";

interface RarityChartProps {
  rarities: {
    name: string;
    count: number;
  }[];
}

export default function RarityChart({ rarities }: RarityChartProps) {
  const chartData = rarities.map(({ name, count }) => ({
    name: name.toLowerCase(),
    count,
    fill: chartConfig[name.toLowerCase() as keyof typeof chartConfig]?.color,
  }));

  return (
    <ChartContainer config={chartConfig} className="min-h-52">
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie data={chartData} dataKey="count" nameKey="name">
          <LabelList
            dataKey="count"
            position="outside"
            fill="var(--foreground)"
            offset={10}
            stroke="none"
            fontSize={12}
          />
        </Pie>
        <ChartLegend content={<ChartLegendContent nameKey="name" />} />
      </PieChart>
    </ChartContainer>
  );
}
