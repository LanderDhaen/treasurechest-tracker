import { getAllAccounts } from "@/actions/account";
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

const SORTING_OPTIONS = [
  {
    label: "Townhall",
    value: "townhall",
  },
  {
    label: "Name",
    value: "name",
  },
  {
    label: "Clan",
    value: "clan",
  },
];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const rawParams = await searchParams;
  const parsedParams = accountSearchParamsSchema.parse(rawParams);
  const { page, pageSize, orderBy, orderDirection } = parsedParams;

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
      <CardContent className="flex flex-col gap-4">
        <div className="flex justify-end">
          <SortingMenu
            currentSort={orderBy}
            currentDirection={orderDirection}
            sortingOptions={SORTING_OPTIONS}
          />
        </div>
        <AccountTable accounts={accounts} />
        <Pagination
          currentPage={page}
          currentPageSize={pageSize}
          totalPages={totalPages}
        />
      </CardContent>
    </Card>
  );
}
