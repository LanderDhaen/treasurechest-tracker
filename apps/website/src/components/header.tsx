"use client";

import { Separator } from "./ui/separator";
import { SidebarTrigger } from "./ui/sidebar";
import AuthGuard from "./auth-guard";
import SignOutButton from "./sign-out-button";

export function Header() {
  return (
    <header className="flex justify-between h-13 items-center gap-2">
      <SidebarTrigger />
      <Separator
        orientation="vertical"
        className="mx-2 data-[orientation=vertical]:h-4"
      />
      <div className="flex items-center gap-4">
        <AuthGuard>
          <SignOutButton />
        </AuthGuard>
      </div>
    </header>
  );
}
