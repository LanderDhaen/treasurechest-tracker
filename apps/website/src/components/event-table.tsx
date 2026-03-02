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
import { useRouter } from "next/navigation";
import { formatName } from "@/lib/event";
import { EventStatus } from "@/constants/event";

interface EventTableProps {
  events: {
    code: string;
    edition: number;
    startDate: Date;
    endDate: Date;
    maxChests: number;
    status: EventStatus;
    series: {
      name: string;
      isGift: boolean;
    };
  }[];
}

export default function EventTable({ events }: EventTableProps) {
  const router = useRouter();

  const handleClick = (eventCode: string) => {
    router.push(`/events/${eventCode}/dashboard`);
  };

  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader className="bg-muted">
          <TableRow>
            <TableHead className="font-bold w-24">Code</TableHead>
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
              <TableRow
                key={event.code}
                onClick={() => handleClick(event.code)}
                className="hover:cursor-pointer"
              >
                <TableCell>#{event.code}</TableCell>
                <TableCell>
                  <StatusBadge status={event.status} />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {formatName(event.series.name, event.edition)}
                    <GiftBadge isGift={event.series.isGift} />
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
