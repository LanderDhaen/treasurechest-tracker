import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FilterConfig } from "@/types/common";
import { getChestCountPerSeries } from "@/actions/series";
import EventSeriesChart from "./event-series-chart";

interface EventSeriesChartCardProps {
  filters: FilterConfig;
}

export default async function EventSeriesChartCard({
  filters,
}: EventSeriesChartCardProps) {
  const series = await getChestCountPerSeries(filters);

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Series</CardTitle>
        <CardDescription>
          Shows the number of treasure chests opened per series
        </CardDescription>
      </CardHeader>
      <CardContent>
        <EventSeriesChart series={series} />
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        A series groups reoccuring events like all Treasure Hunt events or the
        Gold Passes together.
      </CardFooter>
    </Card>
  );
}
