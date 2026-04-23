import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { FIRST_EVENT_START_DATE } from "@/constants/event";

const RELEASE_YEAR = FIRST_EVENT_START_DATE.getFullYear();
const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from(
  { length: CURRENT_YEAR - RELEASE_YEAR + 1 },
  (_, i) => CURRENT_YEAR - i,
);

export default function DashboardYearFilter() {
  return (
    <Select>
      <SelectTrigger className="w-32 bg-white">
        <SelectValue placeholder="Filter by year" />
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectGroup>
          <SelectLabel>Year</SelectLabel>
          {YEARS.map((year) => (
            <SelectItem key={year} value={year.toString()}>
              {year}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
