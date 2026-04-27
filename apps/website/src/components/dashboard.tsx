import LatestChestCard from "@/components/latest-chest-card";
import PeakOpeningHourCard from "@/components/peak-opening-hour-card";
import TotalChestCard from "@/components/total-chest-card";
import { FilterConfig } from "@/types/common";
import { Suspense } from "react";
import StatisticCardSkeleton from "./skeletons/statistic-card-skeleton";
import ChartCardSkeleton from "./skeletons/chart-card-skeleton";
import CategoryChartCard from "@/components/category-chart-card";
import RarityChartCard from "@/components/rarity-chart-card";
import RewardChartCard from "@/components/reward-chart-card";
import AccountChartCard from "@/components/account-chart-card";
import EventSeriesChartCard from "./event-series-chart-card";
import EventTypeChartCard from "./event-type-chart-card";
import TownhallChartCard from "./townhall-chart-card";

interface DashboardProps {
  filters: FilterConfig;
  hideEventCards?: boolean;
  hideAccountCard?: boolean;
}

export default function Dashboard({
  filters,
  hideAccountCard = false,
  hideEventCards = false,
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
              description="Shows the number of treasure chests opened per rarity"
            />
          }
        >
          <RarityChartCard filters={filters} />
        </Suspense>
        <Suspense
          fallback={
            <ChartCardSkeleton
              title="Categories"
              description="Shows the number of treasure chests opened per category"
            />
          }
        >
          <CategoryChartCard filters={filters} />
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
        <RewardChartCard filters={filters} />
      </Suspense>
      {!hideAccountCard && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Suspense
            fallback={
              <ChartCardSkeleton
                title="Accounts"
                description="Shows the number of treasure chests opened per account"
              />
            }
          >
            <AccountChartCard filters={filters} />
          </Suspense>
          <Suspense
            fallback={
              <ChartCardSkeleton
                title="Townhalls"
                description="Shows the number of treasure chests opened per townhall"
              />
            }
          >
            <TownhallChartCard filters={filters} />
          </Suspense>
        </div>
      )}
      {!hideEventCards && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Suspense
            fallback={
              <ChartCardSkeleton
                title="Series"
                description="Shows the number of treasure chests opened per series"
              />
            }
          >
            <EventSeriesChartCard filters={filters} />
          </Suspense>
          <Suspense
            fallback={
              <ChartCardSkeleton
                title="Types"
                description="Shows the number of treasure chests opened per type"
              />
            }
          >
            <EventTypeChartCard filters={filters} />
          </Suspense>
        </div>
      )}
    </div>
  );
}
