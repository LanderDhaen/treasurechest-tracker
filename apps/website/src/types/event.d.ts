import { EventStatus } from "@/constants/event";

export interface EventTableEntry {
  id: number;
  status: EventStatus;
  name: string;
  isGift: boolean;
  startDate: Date;
  endDate: Date;
  maxChests: number;
}
