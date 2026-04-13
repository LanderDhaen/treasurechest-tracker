import { getAccountByTag } from "@/queries/account";
import AccountInformationItem from "@/components/account-information-item";
import { FilterConfig } from "@/types/common";
import { notFound } from "next/navigation";
import Dashboard from "@/components/dashboard";
import AccountActions from "@/components/account-actions";
import AuthGuard from "@/components/auth-guard";
import { Separator } from "@/components/ui/separator";
import { getHighestTownhall } from "@/queries/townhall";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Box, LayoutDashboard } from "lucide-react";

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

  const highestTownhall = await getHighestTownhall();
  const isMaxTownhall = account.townhall >= highestTownhall.level;

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
      <ButtonGroup>
        <Button variant="link" size="sm" asChild>
          <Link href={`/accounts/${account.tag}`}>
            <LayoutDashboard data-icon="inline-start" /> Dashboard
          </Link>
        </Button>
        <Button variant="link" size="sm" className="underline" asChild>
          <Link href={`/accounts/${account.tag}/chests`}>
            <Box data-icon="inline-start" /> Treasure Chests
          </Link>
        </Button>
      </ButtonGroup>
      <div>
        Treasure Chests for {account.name} (Tag: {account.tag})
      </div>
    </div>
  );
}
