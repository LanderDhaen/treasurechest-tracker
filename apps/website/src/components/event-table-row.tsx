"use client";

import { EventStatus } from "@/constants/event";
import { TableCell, TableRow } from "./ui/table";
import { useRouter } from "next/navigation";
import EventTypeBadge from "./event-type-badge";
import { formatDate } from "@/lib/utils";
import EventStatusBadge from "./event-status-badge";

interface EventTableRowProps {
  event: {
    code: string;
    name: string;
    startDate: Date;
    endDate: Date;
    maxChests: number;
    status: EventStatus;
    type: string;
  };
}

export default function EventTableRow({ event }: EventTableRowProps) {
  const router = useRouter();

  const handleRowClick = (eventCode: string) => {
    router.push(`/events/${eventCode}`);
  };

  return (
    <TableRow
      onClick={() => handleRowClick(event.code)}
      className="hover:cursor-pointer"
    >
      <TableCell>#{event.code}</TableCell>
      <TableCell>
        <EventStatusBadge status={event.status} />
      </TableCell>
      <TableCell>
        <EventTypeBadge type={event.type} />
      </TableCell>
      <TableCell>{event.name}</TableCell>
      <TableCell>{formatDate(event.startDate)}</TableCell>
      <TableCell>{formatDate(event.endDate)}</TableCell>
      <TableCell>
        {event.maxChests == 1 ? "1 Chest" : `${event.maxChests} Chests`}
      </TableCell>
    </TableRow>
  );
}
