"use client";

import { X } from "lucide-react";
import { Button } from "./ui/button";
import { ButtonGroup } from "./ui/button-group";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { useDashboardFilters } from "@/hooks/use-dashboard-filters";
import { debounce } from "nuqs";

export default function DashboardTownhallFilter() {
  const [{ townhall }, setDashboardFilters] = useDashboardFilters();

  return (
    <ButtonGroup>
      <ButtonGroup>
        <InputGroup className="w-25 bg-white shadow-md">
          <InputGroupInput
            type="number"
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
        </InputGroup>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          variant="outline"
          size="icon"
          className="bg-white shadow-md hover:bg-white"
          onClick={() => setDashboardFilters({ townhall: null })}
          disabled={!townhall}
        >
          <X />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  );
}
