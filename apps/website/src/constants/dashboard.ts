import { ChartConfig } from "@/components/ui/chart";

export const DEFAULT_ONLY_TRACKED = false;

export const chartConfig = {
  common: { label: "Common", color: "#a3a3a3" },
  rare: { label: "Rare", color: "#93c5fd" },
  epic: { label: "Epic", color: "#a855f7" },
  legendary: { label: "Legendary", color: "#facc15" },
  count: { label: "Opened", color: "var(--primary)" },
} satisfies ChartConfig;
