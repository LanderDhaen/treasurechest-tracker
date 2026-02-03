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
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartConfig = {
  count: {
    label: "Opened:",
  },
} satisfies ChartConfig;

interface ChestCountAccountChartProps {
  accounts: {
    name: string;
    townhall: number;
    count: number;
  }[];
}

export default function ChestCountAccountChart({
  accounts,
}: ChestCountAccountChartProps) {
  const defineColor = (townhall: number) => {
    switch (townhall) {
      case 9:
        return "#9ca3af"; // bg-gray-400
      case 10:
        return "#f87171"; // bg-red-400
      case 11:
        return "#facc15"; // bg-yellow-400
      case 12:
        return "#93c5fd"; // bg-blue-300
      case 13:
        return "#3b82f6"; // bg-blue-500
      case 14:
        return "#16a34a"; // bg-green-600
      case 15:
        return "#c084fc"; // bg-violet-400
      case 16:
        return "#fb923c"; // bg-orange-400
      case 17:
        return "#000000"; // bg-black
      case 18:
        return "#bfdbfe"; // bg-blue-200
      default:
        return "#fed7aa"; // bg-orange-200
    }
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Accounts</CardTitle>
        <CardDescription>
          Shows the number of treasure chests opened per account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-50 w-full">
          <BarChart
            accessibilityLayer
            data={accounts}
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
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideIndicator />}
            />
            <Bar dataKey="count" radius={24}>
              {accounts.map((account, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={defineColor(account.townhall)}
                />
              ))}
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
