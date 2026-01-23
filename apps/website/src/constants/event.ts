export enum EventStatus {
  Ongoing = "Ongoing",
  Finished = "Finished",
  Upcoming = "Upcoming",
}

export const SORT_OPTIONS = [
  { label: "Status", value: "status" },
  { label: "Name", value: "name" },
  { label: "Start Date", value: "startDate" },
  { label: "End Date", value: "endDate" },
  { label: "Rewards", value: "maxChests" },
];

export const DEFAULT_SORT_OPTION = "endDate";
export const DEFAULT_SORT_DIRECTION = "desc";
