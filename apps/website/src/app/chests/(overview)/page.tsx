import { getAllChests } from "@/actions/chest";
import ChestTable from "@/components/chest-table";
import Pagination from "@/components/pagination";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { chestSearchParamsSchema } from "@/schemas/chest";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const rawParams = await searchParams;
  const parsedParams = chestSearchParamsSchema.parse(rawParams);
  const { page, pageSize } = parsedParams;

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
      <CardContent className="flex flex-col gap-4">
        <ChestTable chests={chests} />
        <Pagination
          currentPage={page}
          currentPageSize={pageSize}
          totalPages={totalPages}
        />
      </CardContent>
    </Card>
  );
}
