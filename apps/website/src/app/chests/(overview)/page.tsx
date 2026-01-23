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
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted">
                <TableHead className="font-bold w-12">#</TableHead>
                <TableHead className="font-bold w-24">Rarity</TableHead>
                <TableHead className="font-bold">Reward</TableHead>
                <TableHead className="font-bold">Opened At</TableHead>
                <TableHead className="font-bold">Account</TableHead>
                <TableHead className="font-bold">Event</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {chests.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center italic">
                    No treasure chests rewards found.
                  </TableCell>
                </TableRow>
              ) : (
                chests.map((chest) => (
                  <TableRow key={chest.id}>
                    <TableCell>{chest.id}</TableCell>
                    <TableCell>
                      <RarityBadge rarity={chest.rarity} />
                    </TableCell>
                    <TableCell>
                      {chest.amount === 1
                        ? `${chest.reward}`
                        : `${chest.amount.toLocaleString()} ${chest.reward}`}
                    </TableCell>
                    <TableCell>{formatDateTime(chest.openedAt)}</TableCell>
                    <TableCell>{chest.account.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {chest.event.name}{" "}
                        <GiftBadge isGift={chest.event.isGift} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
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
