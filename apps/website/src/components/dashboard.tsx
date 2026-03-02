import LatestChestCard from "@/components/latest-chest-card";
import PeakOpeningHourCard from "@/components/peak-opening-hour-card";
import TotalChestCard from "@/components/total-chest-card";
import RarityCard from "@/components/rarity-card";
import { FilterConfig } from "@/types/common";
import CategoryCard from "@/components/category-card";
import RewardCard from "@/components/reward-card";
import AccountCard from "@/components/account-card";
import EventCard from "./event-card";
import { Suspense } from "react";
import StatisticCardSkeleton from "./skeletons/statistic-card-skeleton";
import ChartCardSkeleton from "./skeletons/chart-card-skeleton";

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
        <Suspense
          fallback={<StatisticCardSkeleton title="Total Treasure Chests" />}
        >
          <TotalChestCard filters={filters} />
        </Suspense>

        <Suspense
          fallback={<StatisticCardSkeleton title="Latest Treasure Chest" />}
        >
          <LatestChestCard filters={filters} />
        </Suspense>
        <Suspense
          fallback={<StatisticCardSkeleton title="Peak Opening Hour" />}
        >
          <PeakOpeningHourCard filters={filters} />
        </Suspense>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Suspense
          fallback={
            <ChartCardSkeleton
              title="Rarities"
              description="Shows the number of treasure chest opened per rarity"
            />
          }
        >
          <RarityCard filters={filters} />
        </Suspense>
        <Suspense
          fallback={
            <ChartCardSkeleton
              title="Categories"
              description="Shows the number of treasure chests opened per category"
            />
          }
        >
          <CategoryCard filters={filters} />
        </Suspense>
      </div>
      <Suspense
        fallback={
          <ChartCardSkeleton
            title="Rewards"
            description="Shows the number of treasure chests opened per reward"
          />
        }
      >
        <RewardCard filters={filters} />
      </Suspense>
      {!hideAccountCard && (
        <Suspense
          fallback={
            <ChartCardSkeleton
              title="Accounts"
              description="Shows the number of treasure chest opened per account"
            />
          }
        >
          <AccountCard filters={filters} />
        </Suspense>
      )}
      {!hideEventCard && (
        <Suspense
          fallback={
            <ChartCardSkeleton
              title="Events"
              description="Shows the number of treasure chest opened per event"
            />
          }
        >
          <EventCard filters={filters} />
        </Suspense>
      )}
    </div>
  );
}
