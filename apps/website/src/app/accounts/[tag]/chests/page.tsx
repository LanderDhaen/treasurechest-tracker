import { getAccountByTag } from "@/queries/account";
import AccountInformationItem from "@/components/account-information-item";
import { notFound } from "next/navigation";
import AccountActions from "@/components/account-actions";
import AuthGuard from "@/components/auth-guard";
import { Separator } from "@/components/ui/separator";
import { getHighestTownhall } from "@/queries/townhall";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Box, LayoutDashboard } from "lucide-react";
import { getAllChests } from "@/queries/chest";
import ChestTable from "@/components/chest-table";
import { Card, CardContent } from "@/components/ui/card";
import Pagination from "@/components/pagination";
import { chestSearchParamsSchema } from "@/schemas/chest";
import SearchBar from "@/components/searchbar";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ tag: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { tag } = await params;

  const account = await getAccountByTag(tag);

  if (!account) {
    return notFound();
  }

  const highestTownhall = await getHighestTownhall();
  const isMaxTownhall = account.townhall >= highestTownhall.level;

  const rawParams = await searchParams;
  const parsedParams = chestSearchParamsSchema.parse(rawParams);
  const { search, page, pageSize, sortBy, direction } = parsedParams;

  const { chests, rows, totalPages } = await getAllChests({
    search,
    page,
    pageSize,
    sortBy,
    direction,
    accounts: [account.tag],
  });

  return (
    <div className="flex flex-col gap-4">
      <AccountInformationItem account={account} />
      <AuthGuard>
        <AccountActions account={account} isMaxTownhall={isMaxTownhall} />
      </AuthGuard>
      <Separator />
      <ButtonGroup>
        <Button
          variant="outline"
          size="sm"
          className="text-muted-foreground"
          asChild
        >
          <Link href={`/accounts/${account.tag}`}>
            <LayoutDashboard data-icon="inline-start" /> Dashboard
          </Link>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-white hover:bg-white"
          asChild
        >
          <Link href={`/accounts/${account.tag}/chests`}>
            <Box data-icon="inline-start" /> Treasure Chests
          </Link>
        </Button>
      </ButtonGroup>
      <Card>
        <CardContent className="flex flex-col gap-4">
          <div className="flex justify-between gap-2">
            <SearchBar currentSearch={search} rows={rows} />
          </div>
          <ChestTable chests={chests} />
          {totalPages > 0 && (
            <Pagination
              currentPage={page}
              currentPageSize={pageSize}
              totalPages={totalPages}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
