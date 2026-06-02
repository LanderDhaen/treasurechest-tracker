"use client";

import { SidebarTrigger } from "./ui/sidebar";

export default function Header() {
  return (
    <header className="flex h-13 items-center gap-2 px-4">
      <SidebarTrigger className="-ml-1" />
    </header>
  );
}
