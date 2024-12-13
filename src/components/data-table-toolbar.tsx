"use client";

import { Table } from "@tanstack/react-table";
import {
  Castle,
  CircleX,
  House,
  Landmark,
  Swords,
  Tent,
  Tractor,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

import { DataTableFacetedFilter } from "./data-table-faceted-filter";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

const clans = [
  {
    label: "Dutch Legion 3",
    value: "Dutch Legion 3",
    icon: Castle,
  },
  {
    label: "Dutch Legion CW",
    value: "Dutch Legion CW",
    icon: Landmark,
  },
  {
    label: "Dutch Legion 4",
    value: "Dutch Legion 4",
    icon: House,
  },
  {
    label: "Lander's Legion",
    value: "Lander's Legion",
    icon: Tent,
  },
];

const statuses = [
  {
    label: "Farming",
    value: "Farming",
    icon: Tractor,
  },
  {
    label: "Wars Only",
    value: "Wars Only",
    icon: Swords,
  },
  {
    label: "Inactive",
    value: "Inactive",
    icon: CircleX,
  },
];

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex flex-1 items-center gap-2">
      <Input
        placeholder="Filter accounts..."
        onChange={(e) => table.setGlobalFilter(e.target.value)}
        className="h-8 w-[150px] lg:w-[250px]"
      />
      {table.getColumn("clan") && (
        <DataTableFacetedFilter
          column={table.getColumn("clan")}
          title="Clan"
          options={clans}
        />
      )}
      {table.getColumn("status") && (
        <DataTableFacetedFilter
          column={table.getColumn("status")}
          title="Status"
          options={statuses}
        />
      )}
      {isFiltered && (
        <Button
          variant="ghost"
          onClick={() => table.resetColumnFilters()}
          className="h-8 px-2 lg:px-3"
        >
          Reset
          <X />
        </Button>
      )}
    </div>
  );
}
