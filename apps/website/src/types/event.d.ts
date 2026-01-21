export enum EventStatus {
  Ongoing = "Ongoing",
  Finished = "Finished",
  Upcoming = "Upcoming",
}

export interface EventTableEntry {
  id: number;
  status: EventStatus;
  name: string;
  isGift: boolean;
  startDate: Date;
  endDate: Date;
  maxChests: number;
}
