import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FilterConfig } from "@/types/common";
import { getChestCountPerEvent } from "@/actions/event";
import EventProgressTable from "./event-progress-table";

export interface EventProgressCardProps {
  filters: FilterConfig;
}

export default async function EventProgressCard({
  filters,
}: EventProgressCardProps) {
  const events = await getChestCountPerEvent(filters);

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Events</CardTitle>
        <CardDescription>
          Shows the number of treasure chests opened per event
        </CardDescription>
      </CardHeader>
      <CardContent>
        <EventProgressTable events={events} />
      </CardContent>
    </Card>
  );
}
