import { getTotalAccounts } from "@/actions/account";
import { getPeakOpeningHourData, getTotalChests } from "@/actions/chest";
import { getEventByCode } from "@/actions/event";
import LatestChestCard from "@/components/latest-chest-card";
import PeakOpeningHourCard from "@/components/peak-opening-hour-card";
import TotalChestCard from "@/components/total-chest-card";
import EventInformationItem from "@/components/event-information-item";
import EventNotFound from "@/components/event-not-found";
import RarityCard from "@/components/rarity-card";
import { FilterConfig } from "@/types/common";
import CategoryCard from "@/components/category-card";
import RewardCard from "@/components/reward-card";
import AccountCard from "@/components/account-card";

export default async function Page({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;

  const event = await getEventByCode(code);

  if (!event) {
    return <EventNotFound />;
  }

  const filters = {
    eventId: event.id,
  } satisfies FilterConfig;

  const chestCount = await getTotalChests({
    eventId: event.id,
  });
  const accountCount = await getTotalAccounts();
  const peakOpeningHourData = await getPeakOpeningHourData({
    eventId: event.id,
  });

  return (
    <div className="grid grid-cols-1 gap-4">
      <EventInformationItem event={event} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <TotalChestCard
          actualChestCount={chestCount}
          possibleChestCount={event.maxChests * accountCount}
        />
        <LatestChestCard filters={filters} />
        <PeakOpeningHourCard
          peakOpeningHourData={peakOpeningHourData}
          totalChests={chestCount}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <RarityCard filters={filters} />
        <CategoryCard filters={filters} />
      </div>
      <RewardCard filters={filters} />
      <AccountCard filters={filters} />
    </div>
  );
}
