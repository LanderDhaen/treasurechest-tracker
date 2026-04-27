import { getHighestTownhall } from "@/queries/townhall";
import DashboardFilterSeparator from "./dashboard-filter-separator";
import DashboardTownhallFilter from "./dashboard-townhall-filter";
import DashboardTrackedFilter from "./dashboard-tracked-filter";

export default async function DashboardAccountFilters() {
  const highestTownhall = await getHighestTownhall();

  return (
    <div className="flex items-center gap-4">
      <DashboardTownhallFilter highestTownhall={highestTownhall.level} />
      <DashboardFilterSeparator />
      <DashboardTrackedFilter />
    </div>
  );
}
