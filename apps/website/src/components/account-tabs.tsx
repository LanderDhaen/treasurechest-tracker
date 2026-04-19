"use client";

import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Box, LayoutDashboard, Scroll } from "lucide-react";
import { usePathname } from "next/navigation";

export default function AccountTabs({ accountTag }: { accountTag: string }) {
  const pathname = usePathname();

  const tabs = [
    {
      name: "Dashboard",
      href: `/accounts/${accountTag}`,
      icon: LayoutDashboard,
    },
    {
      name: "Chests",
      href: `/accounts/${accountTag}/chests`,
      icon: Box,
    },
    {
      name: "Timeline",
      href: `/accounts/${accountTag}/timeline`,
      icon: Scroll,
    },
  ];

  return (
    <ButtonGroup>
      {tabs.map((tab) => (
        <Button
          key={tab.name}
          size="sm"
          variant="outline"
          className={
            tab.href === pathname
              ? "bg-white hover:bg-white"
              : "text-muted-foreground"
          }
          asChild
        >
          <Link href={tab.href}>
            <tab.icon data-icon="inline-start" />
            {tab.name}
          </Link>
        </Button>
      ))}
    </ButtonGroup>
  );
}
