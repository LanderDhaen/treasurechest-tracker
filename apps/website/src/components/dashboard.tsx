import LatestChestCard from "@/components/latest-chest-card";
import PeakOpeningHourCard from "@/components/peak-opening-hour-card";
import TotalChestCard from "@/components/total-chest-card";
import RarityCard from "@/components/rarity-card";
import { FilterConfig } from "@/types/common";
import CategoryCard from "@/components/category-card";
import RewardCard from "@/components/reward-card";
import AccountCard from "@/components/account-card";
import EventCard from "./event-card";

interface DashboardProps {
  filters: FilterConfig;
  hideEventCard?: boolean;
  hideAccountCard?: boolean;
}

export default function Dashboard({
  filters,
  hideAccountCard = false,
  hideEventCard = false,
}: DashboardProps) {
  return (
    <div className="grid grid-cols-1 gap-4">
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
      {!hideAccountCard && <AccountCard filters={filters} />}
      {!hideEventCard && <EventCard filters={filters} />}
    </div>
  );
}
