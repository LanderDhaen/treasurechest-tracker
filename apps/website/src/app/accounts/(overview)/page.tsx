import { getAllAccounts, getTotalAccounts } from "@/actions/account";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Pagination from "@/components/pagination";
import AccountTable from "@/components/account-table";
import { accountSearchParamsSchema } from "@/schemas/account";
import SortingMenu from "@/components/sorting-menu";
import { SORT_OPTIONS } from "@/constants/account";
import SearchBar from "@/components/searchbar";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const rawParams = await searchParams;
  const parsedParams = accountSearchParamsSchema.parse(rawParams);
  const { search, page, pageSize, sortBy, direction } = parsedParams;

  const { accounts, rows, totalPages } = await getAllAccounts({
    search,
    page,
    pageSize,
    sortBy,
    direction,
  });

  const count = await getTotalAccounts();

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Accounts</CardTitle>
        <CardDescription>
          {`Currently tracking ${count} account${count !== 1 ? "s" : ""}.`}
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
        </div>
        <AccountTable accounts={accounts} />
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
