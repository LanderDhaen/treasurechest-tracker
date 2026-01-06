import { getAllChests } from "@/actions/chest";
import GiftBadge from "@/components/gift-badge";
import Pagination from "@/components/pagination";
import RarityBadge from "@/components/rarity-badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDateTime } from "@/lib/utils";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const pageSize = Number(params.pageSize) || 10;

  const { chests, chestCount, accountCount, totalPages } = await getAllChests({
    page: page,
    pageSize: pageSize,
  });

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Treasure Chests</CardTitle>
        <CardDescription>
          {`Currently opened ${chestCount} treasure chest${
            chestCount !== 1 ? "s" : ""
          } across ${accountCount} account${accountCount !== 1 ? "s" : ""}.`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Account</TableHead>
              <TableHead>Event</TableHead>
              <TableHead>Reward</TableHead>
              <TableHead>Opened At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {chests.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center italic">
                  No treasure chests rewards found.
                </TableCell>
              </TableRow>
            ) : (
              chests.map((chest) => (
                <TableRow key={chest.id}>
                  <TableCell>{chest.id}</TableCell>
                  <TableCell>{chest.account.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {chest.event.name}{" "}
                      <GiftBadge isGift={chest.event.isGift} />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <RarityBadge rarity={chest.rarity} />
                      {chest.amount === 1
                        ? `${chest.reward}`
                        : `${chest.amount.toLocaleString()} ${chest.reward}`}
                    </div>
                  </TableCell>
                  <TableCell>{formatDateTime(chest.openedAt)}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
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
