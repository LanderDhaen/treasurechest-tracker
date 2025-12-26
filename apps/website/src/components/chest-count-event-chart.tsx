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
} from "@/components/ui/table";
import GiftBadge from "@/components/gift-badge";

interface ChestCountEventChartProps {
  chestCountPerEvent: {
    id: number;
    name: string;
    isGift: boolean;
    count: number;
  }[];
}

export function ChestCountEventChart({
  chestCountPerEvent,
}: ChestCountEventChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Events</CardTitle>
        <CardDescription>
          Shows the number of treasure chests rewards per event
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">#</TableHead>
              <TableHead className="font-bold">Event</TableHead>
              <TableHead className="font-bold">Chests</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {chestCountPerEvent.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center italic">
                  No events found.
                </TableCell>
              </TableRow>
            ) : (
              chestCountPerEvent.map((event) => (
                <TableRow key={event.id}>
                  <TableCell>{event.id}</TableCell>
                  <TableCell className="flex items-center gap-2">
                    {event.name} <GiftBadge isGift={event.isGift} />
                  </TableCell>
                  <TableCell>{event.count}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
