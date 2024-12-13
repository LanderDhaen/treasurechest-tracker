"use client";

import { Account } from "@/types/account";
import { ColumnDef } from "@tanstack/react-table";
import { ColoredBadge } from "../ui/colored-badge";
import AccountStatus from "./account-status";

export const columns: ColumnDef<Account>[] = [
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "townhall.level",
    header: "Townhall",
    cell: ({ row }) => {
      const townhall = row.original.townhall;

      return (
        <ColoredBadge color={townhall.color}>TH {townhall.level}</ColoredBadge>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;

      return <AccountStatus status={status} />;
    },
  },
  {
    accessorKey: "clan",
    header: "Clan",
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];
