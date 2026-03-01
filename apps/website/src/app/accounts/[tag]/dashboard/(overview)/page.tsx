import { getAccountByTag } from "@/actions/account";
import LatestChestCard from "@/components/latest-chest-card";
import TotalChestCard from "@/components/total-chest-card";
import PeakOpeningHourCard from "@/components/peak-opening-hour-card";
import AccountInformationItem from "@/components/account-information-item";
import { FilterConfig } from "@/types/common";
import RarityCard from "@/components/rarity-card";
import CategoryCard from "@/components/category-card";
import RewardCard from "@/components/reward-card";
import EventCard from "@/components/event-card";
import { notFound } from "next/navigation";

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

  const filters = {
    accountId: account.id,
  } satisfies FilterConfig;

  return (
    <div className="grid grid-cols-1 gap-4">
      <AccountInformationItem account={account} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <TotalChestCard filters={filters} />
        <LatestChestCard filters={filters} />
        <PeakOpeningHourCard filters={filters} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <RarityCard filters={filters} />
        <CategoryCard filters={filters} />
      </div>
      <RewardCard filters={filters} />
      <EventCard filters={filters} />
    </div>
  );
}
