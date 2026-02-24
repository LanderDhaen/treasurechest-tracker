import ChartSkeleton from "@/components/skeletons/chart-skeleton";
import StatisticCardSkeleton from "@/components/skeletons/statistic-card-skeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <StatisticCardSkeleton title="Total Treasure Chests" />
        <StatisticCardSkeleton title="Latest Treasure Chest" />
        <StatisticCardSkeleton title="Peak Opening Hours" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChartSkeleton
          title="Rarities"
          description="Shows the number of treasure chest opened per rarity"
        />
        <ChartSkeleton
          title="Categories"
          description="Shows the number of treasure chests opened per category"
        />
      </div>
      <ChartSkeleton
        title="Rewards"
        description="Shows the number of treasure chests opened per reward"
      />
    </div>
  );
}
