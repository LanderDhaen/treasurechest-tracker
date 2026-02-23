import { getTotalAccounts } from "@/actions/account";
import { getChestCountPerCategory } from "@/actions/category";
import {
  getLatestChest,
  getPeakOpeningHourData,
  getTotalChests,
} from "@/actions/chest";
import { getEventByCode } from "@/actions/event";
import { getChestCountPerRarity } from "@/actions/rarity";
import ChestCountCategoryChart from "@/components/chest-count-category-chart";
import ChestCountRarityChart from "@/components/chest-count-rarity-chart";
import LatestChestCard from "@/components/latest-chest-card";
import PeakOpeningHourCard from "@/components/peak-opening-hour-card";
import TotalChestCard from "@/components/total-chest-card";

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

  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <TotalChestCard
          chestCount={chestCount}
          description={`during ${event.name}・${accountCount} accounts`}
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
    </div>
  );
}
