import { getEventByCode } from "@/queries/event";
import EventInformationItem from "@/components/event-information-item";
import { notFound } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import AuthGuard from "@/components/auth-guard";
import EventActions from "@/components/event-actions";
import EventTabs from "@/components/event-tabs";
import { getAllChests, getTotalChests } from "@/queries/chest";
import { Card, CardContent } from "@/components/ui/card";
import ChestTable from "@/components/chest-table";
import { chestSearchParamsSchema } from "@/schemas/chest";
import SearchBar from "@/components/searchbar";
import SortingMenu from "@/components/sorting-menu";
import { SORT_OPTIONS } from "@/constants/chest";
import Pagination from "@/components/pagination";
import { FilterConfig } from "@/types/common";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ code: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { code } = await params;

  const event = await getEventByCode(code);

  if (!event) {
    return notFound();
  }

  const rawParams = await searchParams;
  const parsedParams = chestSearchParamsSchema.parse(rawParams);
  const { search, page, pageSize, sortBy, direction } = parsedParams;

  const { chests, rows, totalPages } = await getAllChests({
    search,
    page,
    pageSize,
    sortBy,
    direction,
    events: [event.code],
  });

  const filters = {
    eventId: event.id,
  } satisfies FilterConfig;

  const totalChests = await getTotalChests(filters);

  return (
    <div className="flex flex-col gap-4">
      <EventInformationItem event={event} />
      <AuthGuard>
        <EventActions event={event} />
      </AuthGuard>
      <Separator />
      <EventTabs eventCode={code} />
      <Card>
        <CardContent className="flex flex-col gap-4">
          <div className="flex justify-between gap-2">
            <SearchBar currentSearch={search} rows={rows} />
            <SortingMenu
              currentSort={sortBy}
              currentDirection={direction}
              sortingOptions={SORT_OPTIONS}
            />
          </div>
          <ChestTable chests={chests} totalChests={totalChests} />
          {totalPages > 0 && (
            <Pagination
              currentPage={page}
              currentPageSize={pageSize}
              totalPages={totalPages}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
