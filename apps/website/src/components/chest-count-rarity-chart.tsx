"use client";

import { Cell, LabelList, Pie, PieChart } from "recharts";
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
  Common: { label: "Common", color: "#a3a3a3" },
  Rare: { label: "Rare", color: "#93c5fd" },
  Epic: { label: "Epic", color: "#a855f7" },
  Legendary: { label: "Legendary", color: "#facc15" },
} satisfies ChartConfig;

interface ChestCountRarityChartProps {
  rarities: {
    name: string;
    count: number;
  }[];
}

export function ChestCountRarityChart({
  rarities,
}: ChestCountRarityChartProps) {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Rarities</CardTitle>
        <CardDescription>
          Shows the number of treasure chest opened per rarity
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={rarities} dataKey="count" nameKey="name">
              {rarities.map((rarity) => (
                <Cell
                  key={rarity.name}
                  fill={
                    chartConfig[rarity.name as keyof typeof chartConfig]?.color
                  }
                />
              ))}
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
      </CardContent>
    </Card>
  );
}
