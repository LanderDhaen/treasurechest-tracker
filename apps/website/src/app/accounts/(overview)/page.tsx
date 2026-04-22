import { getAllAccounts, getTotalAccounts } from "@/queries/account";
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
import AuthGuard from "@/components/auth-guard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserRoundPlus } from "lucide-react";

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

  const totalAccounts = await getTotalAccounts();

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Accounts</CardTitle>
        <CardDescription>
          {`Currently  ${totalAccounts} account${totalAccounts !== 1 ? "s" : ""} have been created.`}
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
          <AuthGuard>
            <Button asChild variant="outline" size="icon">
              <Link
                href={{
                  pathname: "/accounts/add",
                  query: { returnTo: "/accounts" },
                }}
              >
                <UserRoundPlus />
              </Link>
            </Button>
          </AuthGuard>
        </div>
        <AccountTable accounts={accounts} totalAccounts={totalAccounts} />
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
