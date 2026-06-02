import DesktopSeparator from "../desktop-separator";
import { Skeleton } from "../ui/skeleton";

export default function ToolbarSkeleton() {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2">
      <Skeleton className="w-full h-9" />
      <DesktopSeparator />
      <Skeleton className="w-41 h-9" />
    </div>
  );
}
