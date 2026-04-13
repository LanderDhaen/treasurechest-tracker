import { getAccountByTag } from "@/queries/account";
import AccountInformationItem from "@/components/account-information-item";
import { FilterConfig } from "@/types/common";
import { notFound } from "next/navigation";
import Dashboard from "@/components/dashboard";
import AccountActions from "@/components/account-actions";
import AuthGuard from "@/components/auth-guard";
import { Separator } from "@/components/ui/separator";
import { getHighestTownhall } from "@/queries/townhall";
import AccountTabs from "@/components/account-tabs";

export default async function Page({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;

  const account = await getAccountByTag(tag);

  if (!account) {
    return notFound();
  }

  // Actions

  const highestTownhall = await getHighestTownhall();
  const isMaxTownhall = account.townhall >= highestTownhall.level;

  // Dashboard

  const filters = {
    accountId: account.id,
  } satisfies FilterConfig;

  return (
    <div className="flex flex-col gap-4">
      <AccountInformationItem account={account} />
      <AuthGuard>
        <AccountActions account={account} isMaxTownhall={isMaxTownhall} />
      </AuthGuard>
      <Separator />
      <AccountTabs accountTag={account.tag} />
      <Dashboard filters={filters} hideAccountCard />
    </div>
  );
}
