import DashboardOngoingFilter from "./dashboard-ongoing-filter";
import DashboardResetFiltersButton from "./dashboard-reset-filters-button";
import DashboardTownhallFilter from "./dashboard-townhall-filter";
import DashboardTrackedFilter from "./dashboard-tracked-filter";
import DashboardYearFilter from "./dashboard-year-filter";
import { Separator } from "./ui/separator";

interface DashboardFiltersProps {
  hideAccountFilters?: boolean;
  hideEventFilters?: boolean;
}

export default function DashboardFilters({
  hideAccountFilters = false,
  hideEventFilters = false,
}: DashboardFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row  md:items-center md:justify-between gap-4">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {!hideEventFilters && (
          <>
            <DashboardYearFilter />
            <Separator
              orientation="vertical"
              className="data-[orientation=vertical]:h-6 hidden md:block"
            />
            <DashboardOngoingFilter />
            <Separator
              orientation="vertical"
              className="data-[orientation=vertical]:h-6 hidden md:block"
            />
          </>
        )}
        {!hideAccountFilters && (
          <>
            <DashboardTownhallFilter />
            <Separator
              orientation="vertical"
              className="data-[orientation=vertical]:h-6 hidden md:block"
            />
            <DashboardTrackedFilter />
          </>
        )}
      </div>
      <DashboardResetFiltersButton />
    </div>
  );
}
