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

export default async function Page() {
  const { events, count } = await getAllEvents();

  return (
    <div className="p-20">
      <Table>
        <TableCaption>Currently tracking {count} events.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Event</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Max Chests</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event) => (
            <TableRow key={event.name}>
              <TableCell>{event.name}</TableCell>
              <TableCell>{event.status}</TableCell>
              <TableCell>{event.startDate.toDateString()}</TableCell>
              <TableCell>{event.endDate.toDateString()}</TableCell>
              <TableCell>{event.maxChests}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
