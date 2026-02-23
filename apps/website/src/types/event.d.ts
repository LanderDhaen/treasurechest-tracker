import { EventStatus } from "@/constants/event";

export interface EventTableEntry {
  status: EventStatus;
  name: string;
  code: string;
  isGift: boolean;
  startDate: Date;
  endDate: Date;
  maxChests: number;
}
