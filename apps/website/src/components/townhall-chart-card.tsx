import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FilterConfig } from "@/types/common";
import { getChestCountPerTownhall } from "@/queries/townhall";

interface TownhallChartCardProps {
  filters: FilterConfig;
}

export default async function TownhallChartCard({
  filters,
}: TownhallChartCardProps) {
  const townhalls = await getChestCountPerTownhall(filters);

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Townhalls</CardTitle>
        <CardDescription>
          Shows the number of treasure chests opened per townhall
        </CardDescription>
      </CardHeader>
      <CardContent>
        {townhalls.map((townhall) => (
          <div key={townhall.level} className="flex justify-between">
            <span>Townhall {townhall.level}</span>
            <span>{townhall.count}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
