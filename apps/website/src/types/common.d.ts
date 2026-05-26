import { LucideIcon } from "lucide-react";

export type FilterConfig = {
  accountId?: number;
  eventId?: number;
  year?: number;
  onlyTracked?: boolean;
  onlyOngoing?: boolean;
};

export type HistoryEntry = {
  title: string;
  description: string;
  date: Date;
  icon: LucideIcon;
};
