import DashboardFilterSeparator from "./dashboard-filter-separator";
import DashboardOngoingFilter from "./dashboard-ongoing-filter";
import DashboardYearFilter from "./dashboard-year-filter";

export default function DashboardEventFilters() {
  return (
    <div className="flex flex-col items-start md:flex-row md:items-center gap-4">
      <DashboardYearFilter />
      <DashboardFilterSeparator />
      <DashboardOngoingFilter />
    </div>
  );
}
