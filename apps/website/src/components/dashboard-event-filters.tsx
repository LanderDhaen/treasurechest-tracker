import DashboardFilterSeparator from "./dashboard-filter-separator";
import DashboardOngoingFilter from "./dashboard-ongoing-filter";
import DashboardYearFilter from "./dashboard-year-filter";

export default function DashboardEventFilters() {
  return (
    <div className="flex items-center gap-4">
      <DashboardYearFilter />
      <DashboardFilterSeparator />
      <DashboardOngoingFilter />
    </div>
  );
}
