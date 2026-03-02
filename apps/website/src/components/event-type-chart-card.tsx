import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FilterConfig } from "@/types/common";
import EventTypeChart from "./event-type-chart";
import { getChestCountPerType } from "@/actions/type";

interface EventTypeChartCardProps {
  filters: FilterConfig;
}

export default async function EventTypeChartCard({
  filters,
}: EventTypeChartCardProps) {
  const types = await getChestCountPerType(filters);

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Types</CardTitle>
        <CardDescription>
          Shows the number of treasure chest opened per type
        </CardDescription>
      </CardHeader>
      <CardContent>
        <EventTypeChart types={types} />
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        A type groups events together based on the way the treasure chests are
        obtained.
      </CardFooter>
    </Card>
  );
}
