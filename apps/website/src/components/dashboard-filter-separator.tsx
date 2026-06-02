import { Separator } from "./ui/separator";

export default function DashboardFilterSeparator() {
  return (
    <Separator
      orientation="vertical"
      className="data-[orientation=vertical]:h-6 hidden md:block"
    />
  );
}
