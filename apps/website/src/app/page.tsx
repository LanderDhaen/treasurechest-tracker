import Dashboard from "@/components/dashboard";
import { FilterConfig } from "@/types/common";

export default function Page() {
  const filters = {
    excludeUntrackedAccounts: false,
  } satisfies FilterConfig;

  return <Dashboard filters={filters} />;
}
