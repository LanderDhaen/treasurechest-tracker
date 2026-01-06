import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllAccounts } from "@/actions/account";
import TownhallBadge from "@/components/townhall-badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Pagination from "@/components/pagination";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const pageSize = Number(params.pageSize) || 10;

  const { accounts, count, totalPages } = await getAllAccounts({
    page,
    pageSize,
  });

  return (
    <Card className="shadow-md">
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tag</TableHead>
              <TableHead>Account</TableHead>
              <TableHead>Clan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {accounts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} className="text-center italic">
                  No accounts found.
                </TableCell>
              </TableRow>
            ) : (
              accounts.map((account) => (
                <TableRow key={account.tag}>
                  <TableCell>#{account.tag}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <TownhallBadge level={account.townhall} />
                      {account.name}
                    </div>
                  </TableCell>
                  <TableCell>{account.clan.name}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>

      <CardFooter className="flex gap-4 flex-col md:flex-row justify-between">
        <span className="text-muted-foreground">
          {`Currently tracking ${count} account${count !== 1 ? "s" : ""}.`}
        </span>
        <Pagination
          currentPage={page}
          currentPageSize={pageSize}
          totalPages={totalPages}
        />
      </CardFooter>
    </Card>
  );
}
