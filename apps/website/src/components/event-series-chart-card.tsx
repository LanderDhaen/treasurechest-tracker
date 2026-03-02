import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FilterConfig } from "@/types/common";
import { getChestCountPerSeries } from "@/actions/series";
import SeriesChart from "./event-series-chart";

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
        <CardTitle>Event Series</CardTitle>
        <CardDescription>
          Shows the number of treasure chest opened per event series
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SeriesChart series={series} />
      </CardContent>
    </Card>
  );
}
