import Dashboard from "@/components/dashboard";
import { FilterConfig } from "@/types/common";

export default function Page() {
  const filters = {} satisfies FilterConfig;

  return <Dashboard filters={filters} />;
}
