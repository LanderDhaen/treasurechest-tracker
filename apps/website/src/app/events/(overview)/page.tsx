import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { getAllEvents } from "@/actions/event";
import StatusBadge from "@/components/status-badge";
import { formatDate } from "@/lib/utils";
import GiftBadge from "@/components/gift-badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Pagination from "@/components/pagination";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const pageSize = Number(params.pageSize) || 10;

  const { events, count, totalPages } = await getAllEvents({
    page,
    pageSize,
  });

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Events</CardTitle>
        <CardDescription>
          {`Currently tracking ${count} event${count !== 1 ? "s" : ""}.`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>Rewards</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center italic">
                  No events found.
                </TableCell>
              </TableRow>
            ) : (
              events.map((event) => (
                <TableRow key={event.id}>
                  <TableCell>{event.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <StatusBadge status={event.status} />
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
      </CardContent>
      <CardFooter className="justify-end">
        <Pagination
          currentPage={page}
          currentPageSize={pageSize}
          totalPages={totalPages}
        />
      </CardFooter>
    </Card>
  );
}
