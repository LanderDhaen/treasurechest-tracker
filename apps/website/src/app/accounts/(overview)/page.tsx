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
import * as z from "zod";

const searchParamsSchema = z.object({
  page: z.coerce.number().int().min(1).catch(1),
  pageSize: z.coerce.number().int().catch(10),
  orderBy: z.enum(["tag", "townhall", "name", "clan"]).catch("name"),
  orderDirection: z.enum(["asc", "desc"]).catch("asc"),
});

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const rawParams = await searchParams;
  const parsedParams = searchParamsSchema.parse(rawParams);
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
