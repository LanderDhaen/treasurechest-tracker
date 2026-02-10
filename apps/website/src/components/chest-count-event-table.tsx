import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    name: string;
    isGift: boolean;
    maxChests: number;
    count: number;
  }[];
}

export default function ChestCountEventTable({
  events,
}: ChestCountEventTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Events</CardTitle>
        <CardDescription>
          Shows the number of treasure chests opened per event
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted">
                <TableHead className="font-bold w-12">Status</TableHead>
                <TableHead className="font-bold">Event</TableHead>
                <TableHead className="font-bold min-w-40">Progress</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.name}>
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
                      maxChests={event.maxChests}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
