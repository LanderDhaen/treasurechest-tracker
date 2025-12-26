"use client";

import { TrendingUp } from "lucide-react";
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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { getChestCountPerAccount } from "@/actions/chest";

export const description = "A horizontal bar chart";

const chartConfig = {
  count: {
    label: "Opened:",
  },
} satisfies ChartConfig;

interface ChestCountAccountChartProps {
  chestCountPerAccount: {
    account: string;
    townhall: number;
    count: number;
  }[];
}

export function ChestCountAccountChart({
  chestCountPerAccount,
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
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chestCountPerAccount}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="account"
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
            <Bar dataKey="count" layout="vertical" radius={24} fill="#a3a3a3">
              {chestCountPerAccount.map((entry, index) => (
                <Cell key={index} fill={defineColor(entry.townhall)} />
              ))}
              <LabelList
                dataKey="account"
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
