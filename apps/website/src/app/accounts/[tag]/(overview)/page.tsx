import { getAccountByTag } from "@/queries/account";
import AccountInformationItem from "@/components/account-information-item";
import { FilterConfig } from "@/types/common";
import { notFound } from "next/navigation";
import Dashboard from "@/components/dashboard";
import AccountActions from "@/components/account-actions";
import AuthGuard from "@/components/auth-guard";
import { Separator } from "@/components/ui/separator";
import AccountTabs from "@/components/account-tabs";
import DashboardYearFilter from "@/components/dashboard-year-filter";
import { dashboardFiltersSchema } from "@/schemas/common";
import DashboardTrackedFilter from "@/components/dashboard-tracked-filter";
import DashboardResetFiltersButton from "@/components/dashboard-reset-filters-button";
import DashboardOngoingFilter from "@/components/dashboard-ongoing-filter";

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
  const parsedParams = dashboardFiltersSchema.parse(rawParams);
  const { year, ongoing } = parsedParams;

  const filters = {
    year: year,
    onlyOngoing: ongoing,
    accountId: account.id,
  } satisfies FilterConfig;

  return (
    <div className="flex flex-col gap-4">
      <AccountInformationItem account={account} />
      <AuthGuard>
        <AccountActions account={account} />
      </AuthGuard>
      <Separator />
      <AccountTabs accountTag={account.tag} />
      <div className="flex flex-col md:flex-row  md:items-center md:justify-between gap-4">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <DashboardYearFilter />
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-6 hidden md:block"
          />
          <DashboardOngoingFilter />
        </div>
        <DashboardResetFiltersButton />
      </div>
      <Dashboard filters={filters} hideAccountCard />
    </div>
  );
}
