import { getAllChests, getTotalChests } from "@/queries/chest";
import ChestTable from "@/components/chest-table";
import Pagination from "@/components/pagination";
import SearchBar from "@/components/searchbar";
import SortingMenu from "@/components/sorting-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SORT_OPTIONS } from "@/constants/chest";
import { chestSearchParamsSchema } from "@/schemas/chest";
import { FilterConfig } from "@/types/common";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";
import { getServerSession } from "@/queries/auth";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const rawParams = await searchParams;
  const parsedParams = chestSearchParamsSchema.parse(rawParams);
  const { search, page, pageSize, sortBy, direction } = parsedParams;

  const { chests, rows, totalPages } = await getAllChests({
    search,
    page,
    pageSize,
    sortBy,
    direction,
  });

  const filters = {} satisfies FilterConfig;

  const count = await getTotalChests(filters);

  const session = await getServerSession();

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Treasure Chests</CardTitle>
        <CardDescription>
          {`Currently ${count} treasure chest${count !== 1 ? "s" : ""} have been opened.`}
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
              <Link href="/chests/add">
                <Plus />
              </Link>
            </Button>
          )}
        </div>
        <ChestTable chests={chests} />
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
