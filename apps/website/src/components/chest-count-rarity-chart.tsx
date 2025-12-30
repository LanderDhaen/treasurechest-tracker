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
  chestCountPerRarity: {
    rarity: string;
    count: number;
  }[];
}

export function ChestCountRarityChart({
  chestCountPerRarity,
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
            <Pie data={chestCountPerRarity} dataKey="count" nameKey="rarity">
              {chestCountPerRarity.map((entry) => (
                <Cell
                  key={entry.rarity}
                  fill={
                    chartConfig[entry.rarity as keyof typeof chartConfig]?.color
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
            <ChartLegend content={<ChartLegendContent nameKey="rarity" />} />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
