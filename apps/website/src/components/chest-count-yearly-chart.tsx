"use client";

import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";

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
    label: "Chests",
    color: "#a3a3a3",
  },
} satisfies ChartConfig;

interface ChestCountYearlyChartProps {
  chestCountPerYear: {
    month: string;
    count: number;
  }[];
}

export function ChestCountYearlyChart({
  chestCountPerYear,
}: ChestCountYearlyChartProps) {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Overview 2025</CardTitle>
        <CardDescription>
          Shows the number of treasure chests rewards per month
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chestCountPerYear}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="count"
              type="natural"
              stroke="#a3a3a3"
              strokeWidth={2}
              dot={{
                fill: "#a3a3a3",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
