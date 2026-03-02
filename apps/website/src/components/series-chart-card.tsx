import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FilterConfig } from "@/types/common";
import { getChestCountPerSeries } from "@/actions/series";
import SeriesChart from "./series-chart";

interface SeriesChartCardProps {
  filters: FilterConfig;
}

export default async function SeriesChartCard({
  filters,
}: SeriesChartCardProps) {
  const series = await getChestCountPerSeries(filters);

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Series</CardTitle>
        <CardDescription>
          Shows the number of treasure chest opened per series
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SeriesChart series={series} />
      </CardContent>
    </Card>
  );
}
