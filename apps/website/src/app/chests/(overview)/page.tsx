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
import {
  CHEST_SORT_OPTIONS,
  DEFAULT_CHEST_SORT_OPTION,
  DEFAULT_CHEST_SORT_DIRECTION,
} from "@/constants/chest";
import { chestSearchParamsSchema } from "@/schemas/chest";
import { FilterConfig } from "@/types/common";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PackagePlus } from "lucide-react";
import AuthGuard from "@/components/auth-guard";

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

  const totalChests = await getTotalChests(filters);

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Treasure Chests</CardTitle>
        <CardDescription>
          {`Currently ${totalChests} treasure chest${totalChests !== 1 ? "s" : ""} have been opened.`}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <SearchBar rows={rows} />
          <div className="flex gap-2">
            <SortingMenu
              defaultSort={DEFAULT_CHEST_SORT_OPTION}
              defaultDirection={DEFAULT_CHEST_SORT_DIRECTION}
              sortingOptions={CHEST_SORT_OPTIONS}
            />
            <AuthGuard>
              <Button asChild variant="outline" size="icon">
                <Link href="/chests/add">
                  <PackagePlus />
                </Link>
              </Button>
            </AuthGuard>
          </div>
        </div>
        <ChestTable chests={chests} totalChests={totalChests} />
        {totalPages > 0 && <Pagination totalPages={totalPages} />}
      </CardContent>
    </Card>
  );
}
