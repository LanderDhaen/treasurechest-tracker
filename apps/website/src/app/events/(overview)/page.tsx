import { getAllEvents, getTotalEvents } from "@/queries/event";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Pagination from "@/components/pagination";
import EventTable from "@/components/event-table";
import { eventSearchParamsSchema } from "@/schemas/event";
import SortingMenu from "@/components/sorting-menu";
import {
  DEFAULT_EVENT_SORT_OPTION,
  DEFAULT_EVENT_SORT_DIRECTION,
  EVENT_SORT_OPTIONS,
} from "@/constants/event";
import SearchBar from "@/components/searchbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CalendarPlus } from "lucide-react";
import AuthGuard from "@/components/auth-guard";
import DesktopSeparator from "@/components/desktop-separator";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const rawParams = await searchParams;
  const parsedParams = eventSearchParamsSchema.parse(rawParams);
  const { search, page, pageSize, sortBy, direction } = parsedParams;

  const { events, rows, totalPages } = await getAllEvents({
    search,
    page,
    pageSize,
    sortBy,
    direction,
  });

  const totalEvents = await getTotalEvents();

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Events</CardTitle>
        <CardDescription>
          {`Currently ${totalEvents} event${totalEvents !== 1 ? "s" : ""} have been created.`}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <SearchBar rows={rows} />
          <DesktopSeparator />
          <div className="flex gap-2">
            <SortingMenu
              defaultSort={DEFAULT_EVENT_SORT_OPTION}
              defaultDirection={DEFAULT_EVENT_SORT_DIRECTION}
              sortingOptions={EVENT_SORT_OPTIONS}
            />
            <AuthGuard>
              <Button asChild variant="outline" size="icon">
                <Link
                  href={{
                    pathname: "/events/add",
                    query: {
                      returnTo: "/events",
                    },
                  }}
                >
                  <CalendarPlus />
                </Link>
              </Button>
            </AuthGuard>
          </div>
        </div>
        <EventTable events={events} totalEvents={totalEvents} />
        {totalPages > 0 && <Pagination totalPages={totalPages} />}
      </CardContent>
    </Card>
  );
}
