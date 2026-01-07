import { getAllAccounts } from "@/actions/account";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Pagination from "@/components/pagination";
import AccountTable from "@/components/account-table";

interface SearchParams {
  page?: number;
  pageSize?: number;
  orderBy?: "tag" | "townhall" | "name" | "clan";
  orderDirection?: "asc" | "desc";
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const pageSize = Number(params.pageSize) || 10;
  const orderBy = params.orderBy || "townhall";
  const orderDirection = params.orderDirection || "desc";

  const { accounts, count, totalPages } = await getAllAccounts({
    page,
    pageSize,
    orderBy,
    orderDirection,
  });

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Accounts</CardTitle>
        <CardDescription>
          {`Currently tracking ${count} account${count !== 1 ? "s" : ""}.`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AccountTable
          accounts={accounts}
          orderBy={orderBy}
          orderDirection={orderDirection}
        />
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
