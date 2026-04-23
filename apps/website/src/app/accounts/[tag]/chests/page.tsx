import { getAccountByTag } from "@/queries/account";
import AccountInformationItem from "@/components/account-information-item";
import { notFound } from "next/navigation";
import AccountActions from "@/components/account-actions";
import AuthGuard from "@/components/auth-guard";
import { Separator } from "@/components/ui/separator";
import { getAllChests, getTotalChests } from "@/queries/chest";
import ChestTable from "@/components/chest-table";
import { Card, CardContent } from "@/components/ui/card";
import Pagination from "@/components/pagination";
import { chestSearchParamsSchema } from "@/schemas/chest";
import SearchBar from "@/components/searchbar";
import SortingMenu from "@/components/sorting-menu";
import {
  CHEST_SORT_OPTIONS,
  DEFAULT_CHEST_SORT_DIRECTION,
  DEFAULT_CHEST_SORT_OPTION,
} from "@/constants/chest";
import AccountTabs from "@/components/account-tabs";
import { FilterConfig } from "@/types/common";

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

  const filters = {
    accountId: account.id,
  } satisfies FilterConfig;

  const totalChests = await getTotalChests(filters);

  return (
    <div className="flex flex-col gap-4">
      <AccountInformationItem account={account} />
      <AuthGuard>
        <AccountActions account={account} />
      </AuthGuard>
      <Separator />
      <AccountTabs accountTag={account.tag} />
      <Card>
        <CardContent className="flex flex-col gap-4">
          <div className="flex justify-between gap-2">
            <SearchBar rows={rows} />
            <SortingMenu
              defaultSort={DEFAULT_CHEST_SORT_OPTION}
              defaultDirection={DEFAULT_CHEST_SORT_DIRECTION}
              sortingOptions={CHEST_SORT_OPTIONS}
            />
          </div>
          <ChestTable chests={chests} totalChests={totalChests} />
          {totalPages > 0 && <Pagination totalPages={totalPages} />}
        </CardContent>
      </Card>
    </div>
  );
}
