"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";
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
  count: { label: "Opened:" },
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
  const defineColor = (rarity: string) => {
    switch (rarity) {
      case "Common":
        return "#a3a3a3";
      case "Rare":
        return "#93c5fd";
      case "Epic":
        return "#a855f7";
      case "Legendary":
        return "#facc15";
      default:
        return "#ffffff";
    }
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Rarities</CardTitle>
        <CardDescription>
          Shows the number of treasure chest rewards per rarity
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chestCountPerRarity}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="rarity"
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
            <Bar dataKey="count" layout="vertical" radius={24}>
              {chestCountPerRarity.map((entry, index) => (
                <Cell key={index} fill={defineColor(entry.rarity)} />
              ))}

              <LabelList
                dataKey="rarity"
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
