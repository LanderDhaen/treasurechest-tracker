"use client";

import { formatDate } from "@/lib/utils";
import StatusBadge from "./event-status-badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useRouter } from "next/navigation";
import { formatEventName } from "@/lib/event";
import { EventStatus } from "@/constants/event";
import EventTypeBadge from "./event-type-badge";
import NoSearchResults from "./no-search-results";
import NoEvents from "./no-events";

interface EventTableProps {
  events: {
    code: string;
    edition: number;
    startDate: Date;
    endDate: Date;
    maxChests: number;
    status: EventStatus;
    name: string;
    type: string;
  }[];
  totalEvents: number;
}

export default function EventTable({ events, totalEvents }: EventTableProps) {
  const router = useRouter();

  const handleRowClick = (eventCode: string) => {
    router.push(`/events/${eventCode}`);
  };

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
              <TableRow
                key={event.code}
                onClick={() => handleRowClick(event.code)}
                className="hover:cursor-pointer"
              >
                <TableCell>#{event.code}</TableCell>
                <TableCell>
                  <StatusBadge status={event.status} />
                </TableCell>
                <TableCell>
                  <EventTypeBadge type={event.type} />
                </TableCell>
                <TableCell>
                  {formatEventName(event.name, event.edition)}
                </TableCell>
                <TableCell>{formatDate(event.startDate)}</TableCell>
                <TableCell>{formatDate(event.endDate)}</TableCell>
                <TableCell>
                  {event.maxChests == 1
                    ? "1 Chest"
                    : `${event.maxChests} Chests`}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
