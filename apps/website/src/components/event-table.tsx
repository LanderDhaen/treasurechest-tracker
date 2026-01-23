"use client";

import { formatDate } from "@/lib/utils";
import GiftBadge from "./gift-badge";
import StatusBadge from "./status-badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { EventTableEntry } from "@/types/event";

interface EventTableProps {
  events: EventTableEntry[];
}

export default function EventTable({ events }: EventTableProps) {
  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader className="bg-muted">
          <TableRow>
            <TableHead className="font-bold w-12">#</TableHead>
            <TableHead className="font-bold w-24">Status</TableHead>
            <TableHead className="font-bold">Name</TableHead>
            <TableHead className="font-bold">Start Date</TableHead>
            <TableHead className="font-bold">End Date</TableHead>
            <TableHead className="font-bold">Rewards</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center italic">
                No events found.
              </TableCell>
            </TableRow>
          ) : (
            events.map((event) => (
              <TableRow key={event.id}>
                <TableCell>{event.id}</TableCell>
                <TableCell>
                  <StatusBadge status={event.status} />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {event.name}
                    <GiftBadge isGift={event.isGift} />
                  </div>
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
