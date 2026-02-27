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

interface ChestCountEventTableProps {
  events: {
    status: EventStatus;
    code: string;
    name: string;
    isGift: boolean;
    maxChests: number;
    count: number;
  }[];
  accountCount: number;
}

export default function EventProgressTable({
  events,
  accountCount,
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
                  {event.name}
                  <GiftBadge isGift={event.isGift} />
                </div>
              </TableCell>

              <TableCell>
                <EventProgress
                  count={event.count}
                  maxChests={event.maxChests * accountCount}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
