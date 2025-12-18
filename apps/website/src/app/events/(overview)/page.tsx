import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { getAllEvents } from "@/actions/event";
import StatusBadge from "@/components/status-badge";
import { formatDate } from "@/lib/utils";

export default async function Page() {
  const { events, count } = await getAllEvents();

  return (
    <div className="p-20">
      <Table>
        <TableCaption>Currently tracking {count} events.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Event</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Max Chests</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event) => (
            <TableRow key={event.name}>
              <TableCell>{event.id}</TableCell>
              <TableCell className="flex items-center gap-2">
                <StatusBadge status={event.status} />
                {event.name}
              </TableCell>
              <TableCell>{formatDate(event.startDate)}</TableCell>
              <TableCell>{formatDate(event.endDate)}</TableCell>
              <TableCell>{event.maxChests}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
