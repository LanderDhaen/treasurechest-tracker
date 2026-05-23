import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { EventStatus } from "@/constants/event";
import NoSearchResults from "./no-search-results";
import NoEvents from "./no-events";
import EventTableRow from "./event-table-row";

interface EventTableProps {
  events: {
    code: string;
    name: string;
    startDate: Date;
    endDate: Date;
    maxChests: number;
    status: EventStatus;
    type: string;
  }[];
  totalEvents: number;
}

export default function EventTable({ events, totalEvents }: EventTableProps) {
  const isEmpty = events.length === 0;
  const hasStoredEvents = totalEvents > 0;

  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader className="bg-muted">
          <TableRow>
            <TableHead className="font-bold w-24">Code</TableHead>
            <TableHead className="font-bold w-24">Status</TableHead>
            <TableHead className="font-bold w-24">Type</TableHead>
            <TableHead className="font-bold">Name</TableHead>
            <TableHead className="font-bold">Start Date</TableHead>
            <TableHead className="font-bold">End Date</TableHead>
            <TableHead className="font-bold">Rewards</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isEmpty ? (
            <TableRow className="bg-white hover:bg-white">
              <TableCell colSpan={7}>
                {hasStoredEvents ? <NoSearchResults /> : <NoEvents />}
              </TableCell>
            </TableRow>
          ) : (
            events.map((event) => (
              <EventTableRow key={event.code} event={event} />
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
