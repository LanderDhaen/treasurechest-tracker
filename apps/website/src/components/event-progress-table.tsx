import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import GiftBadge from "./gift-badge";
import { EventStatus } from "@/constants/event";
import StatusBadge from "./status-badge";
import EventProgress from "./event-progress";
import { formatEventName } from "@/lib/event";

interface ChestCountEventTableProps {
  events: {
    code: string;
    status: EventStatus;
    edition: number;
    maxChests: number;
    openedChests: number;
    series: {
      name: string;
      isGift: boolean;
    };
  }[];
}

export default function EventProgressTable({
  events,
}: ChestCountEventTableProps) {
  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted">
            <TableHead className="font-bold w-24">Code</TableHead>
            <TableHead className="font-bold w-24">Status</TableHead>
            <TableHead className="font-bold">Event</TableHead>
            <TableHead className="font-bold min-w-40">Progress</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event) => (
            <TableRow key={event.code}>
              <TableCell>#{event.code}</TableCell>
              <TableCell>
                <StatusBadge status={event.status} />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {formatEventName(event.series.name, event.edition)}
                  <GiftBadge isGift={event.series.isGift} />
                </div>
              </TableCell>

              <TableCell>
                <EventProgress
                  openedChests={event.openedChests}
                  maxChests={event.maxChests}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
