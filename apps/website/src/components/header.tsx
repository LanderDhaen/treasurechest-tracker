import { Separator } from "./ui/separator";
import { SidebarTrigger } from "./ui/sidebar";

export function Header() {
  return (
    <header className="flex h-12 items-center px-4 gap-2 border-b">
      <SidebarTrigger />
      <Separator
        orientation="vertical"
        className="mx-2 data-[orientation=vertical]:h-4"
      />
      <span className="text-muted-foreground">Dashboard</span>
    </header>
  );
}
