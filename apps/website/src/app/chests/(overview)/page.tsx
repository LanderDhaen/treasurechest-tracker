import { getAllChests } from "@/actions/chest";
import ChestTable from "@/components/chest-table";
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
        <ChestTable chests={chests} />
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
