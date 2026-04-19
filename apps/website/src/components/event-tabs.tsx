"use client";

import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Box, LayoutDashboard } from "lucide-react";
import { usePathname } from "next/navigation";

export default function EventTabs({ eventCode }: { eventCode: string }) {
  const pathname = usePathname();

  const tabs = [
    {
      name: "Dashboard",
      href: `/events/${eventCode}`,
      icon: LayoutDashboard,
    },
    {
      name: "Chests",
      href: `/events/${eventCode}/chests`,
      icon: Box,
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
