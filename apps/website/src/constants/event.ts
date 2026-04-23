export enum EventStatus {
  Ongoing = "Ongoing",
  Finished = "Finished",
  Upcoming = "Upcoming",
}

export const EVENT_SORT_OPTIONS = [
  { label: "Code", value: "code" },
  { label: "Status", value: "status" },
  { label: "Type", value: "type" },
  { label: "Name", value: "name" },
  { label: "Start Date", value: "startDate" },
  { label: "End Date", value: "endDate" },
  { label: "Rewards", value: "maxChests" },
];

export const DEFAULT_EVENT_SORT_OPTION = "endDate";
export const DEFAULT_EVENT_SORT_DIRECTION = "desc";

export const FIRST_EVENT_START_DATE = new Date(2025, 8, 19);
