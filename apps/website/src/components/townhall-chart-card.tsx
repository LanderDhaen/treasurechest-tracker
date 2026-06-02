import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FilterConfig } from "@/types/common";
import { getChestCountPerTownhall } from "@/queries/townhall";
import TownhallChart from "./townhall-chart";

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
          <span className="italic text-xs"> (at opening)</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <TownhallChart townhalls={townhalls} />
      </CardContent>
    </Card>
  );
}
