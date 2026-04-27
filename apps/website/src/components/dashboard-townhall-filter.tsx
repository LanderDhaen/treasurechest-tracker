"use client";

import { X } from "lucide-react";
import { Button } from "./ui/button";
import { ButtonGroup } from "./ui/button-group";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "./ui/input-group";
import { useDashboardFilters } from "@/hooks/use-dashboard-filters";
import { debounce } from "nuqs";

interface DashboardTownhallFilterProps {
  highestTownhall: number;
}

export default function DashboardTownhallFilter({
  highestTownhall,
}: DashboardTownhallFilterProps) {
  const [{ townhall }, setDashboardFilters] = useDashboardFilters();

  return (
    <InputGroup className="w-30 bg-white shadow-md ">
      <InputGroupInput
        className="[&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        type="number"
        min={1}
        max={highestTownhall}
        value={townhall || ""}
        onChange={(e) =>
          setDashboardFilters(
            { townhall: e.target.valueAsNumber || null },
            {
              limitUrlUpdates: debounce(500),
            },
          )
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setDashboardFilters({
              townhall: e.currentTarget.valueAsNumber || null,
            });
          }

          if (e.key === "Escape") {
            setDashboardFilters({ townhall: null });
          }
        }}
      />
      <InputGroupAddon align="inline-start">TH</InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          size="icon-sm"
          onClick={() => setDashboardFilters({ townhall: null })}
          disabled={!townhall}
        >
          <X />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
