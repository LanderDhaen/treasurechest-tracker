import { ChartConfig } from "@/components/ui/chart";

export const PAGE_SIZES = [5, 10, 20, 50, 100];
export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 10;

export const chartConfig = {
  common: { label: "Common", color: "#a3a3a3" },
  rare: { label: "Rare", color: "#93c5fd" },
  epic: { label: "Epic", color: "#a855f7" },
  legendary: { label: "Legendary", color: "#facc15" },
  count: { label: "Opened", color: "var(--primary)" },
} satisfies ChartConfig;
