import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
        </CardDescription>
      </CardHeader>
      <CardContent>
        <TownhallChart townhalls={townhalls} />
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        Based on the townhall level of the account at the time of opening the
        chest.
      </CardFooter>
    </Card>
  );
}
