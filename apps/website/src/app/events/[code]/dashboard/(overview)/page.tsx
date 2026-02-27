import { getChestCountPerAccount, getTotalAccounts } from "@/actions/account";
import { getChestCountPerCategory } from "@/actions/category";
import {
  getLatestChest,
  getPeakOpeningHourData,
  getTotalChests,
} from "@/actions/chest";
import { getEventByCode } from "@/actions/event";
import { getChestCountPerReward } from "@/actions/reward";
import ChestCountAccountChart from "@/components/chest-count-account-chart";
import ChestCountCategoryChart from "@/components/chest-count-category-chart";
import ChestCountRewardChart from "@/components/chest-count-reward-chart";
import LatestChestCard from "@/components/latest-chest-card";
import PeakOpeningHourCard from "@/components/peak-opening-hour-card";
import TotalChestCard from "@/components/total-chest-card";
import EventInformationItem from "@/components/event-information-item";
import EventNotFound from "@/components/event-not-found";
import RarityCard from "@/components/rarity-card";
import { FilterConfig } from "@/types/common";

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
  const chest = await getLatestChest({
    eventId: event.id,
  });
  const peakOpeningHourData = await getPeakOpeningHourData({
    eventId: event.id,
  });
  const categories = await getChestCountPerCategory({
    eventId: event.id,
  });
  const rewards = await getChestCountPerReward({
    eventId: event.id,
  });
  const accounts = await getChestCountPerAccount({
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
        <LatestChestCard chest={chest} />
        <PeakOpeningHourCard
          peakOpeningHourData={peakOpeningHourData}
          totalChests={chestCount}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <RarityCard filters={filters} />
        <ChestCountCategoryChart categories={categories} />
      </div>
      <ChestCountRewardChart rewards={rewards} />
      <ChestCountAccountChart accounts={accounts} />
    </div>
  );
}
