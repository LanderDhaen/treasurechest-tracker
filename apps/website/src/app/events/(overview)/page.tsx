import { getAllEvents, getTotalEvents } from "@/actions/event";
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
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import AddButton from "@/components/add-button";

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
          {`Currently tracking ${totalEvents} event${totalEvents !== 1 ? "s" : ""}.`}
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
          <AddButton />
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
