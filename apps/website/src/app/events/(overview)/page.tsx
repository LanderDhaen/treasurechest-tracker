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
import { SORT_OPTIONS } from "@/constants/event";
import SearchBar from "@/components/searchbar";
import { getServerSession } from "@/queries/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

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

  const session = await getServerSession();

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Events</CardTitle>
        <CardDescription>
          {`Currently ${totalEvents} event${totalEvents !== 1 ? "s" : ""} have been created.`}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex justify-between gap-2">
          <SearchBar currentSearch={search} rows={rows} />
          <SortingMenu
            currentSort={sortBy}
            currentDirection={direction}
            sortingOptions={SORT_OPTIONS}
          />
          {session && (
            <Button asChild variant="outline" size="icon">
              <Link
                href={{
                  pathname: "/events/add",
                  query: {
                    returnTo: "/events",
                  },
                }}
              >
                <Plus />
              </Link>
            </Button>
          )}
        </div>
        <EventTable events={events} />
        {totalPages > 0 && (
          <Pagination
            currentPage={page}
            currentPageSize={pageSize}
            totalPages={totalPages}
          />
        )}
      </CardContent>
    </Card>
  );
}
