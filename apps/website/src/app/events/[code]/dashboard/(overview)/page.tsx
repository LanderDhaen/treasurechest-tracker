import { getChestCountPerAccount, getTotalAccounts } from "@/actions/account";
import { getChestCountPerCategory } from "@/actions/category";
import {
  getLatestChest,
  getPeakOpeningHourData,
  getTotalChests,
} from "@/actions/chest";
import { getEventByCode } from "@/actions/event";
import { getChestCountPerRarity } from "@/actions/rarity";
import { getChestCountPerReward } from "@/actions/reward";
import ChestCountAccountChart from "@/components/chest-count-account-chart";
import ChestCountCategoryChart from "@/components/chest-count-category-chart";
import ChestCountRarityChart from "@/components/chest-count-rarity-chart";
import ChestCountRewardChart from "@/components/chest-count-reward-chart";
import GiftBadge from "@/components/gift-badge";
import LatestChestCard from "@/components/latest-chest-card";
import PeakOpeningHourCard from "@/components/peak-opening-hour-card";
import StatusBadge from "@/components/status-badge";
import TotalChestCard from "@/components/total-chest-card";

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { formatDate } from "@/lib/utils";

export default async function Page({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;

  const event = await getEventByCode(code);

  if (!event) {
    return <div>Event not found</div>;
  }

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
  const rarities = await getChestCountPerRarity({
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
      <Item className="p-0">
        <ItemContent>
          <ItemTitle className="text-xl font-bold">
            {event.name} <StatusBadge status={event.status} />
            <GiftBadge isGift={event.isGift} />
          </ItemTitle>
          <ItemDescription>
            {formatDate(event.startDate)} - {formatDate(event.endDate)}
          </ItemDescription>
        </ItemContent>
      </Item>
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
        <ChestCountRarityChart rarities={rarities} />
        <ChestCountCategoryChart categories={categories} />
      </div>
      <ChestCountRewardChart rewards={rewards} />
      <ChestCountAccountChart accounts={accounts} />
    </div>
  );
}
