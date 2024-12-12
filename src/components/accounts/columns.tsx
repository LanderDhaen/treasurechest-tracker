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
    accessorKey: "isActive",
    header: "Status",
    cell: ({ row }) => {
      const isActive = row.original.isActive;

      return <AccountStatus isActive={isActive} />;
    },
  },
  {
    accessorKey: "clan",
    header: "Clan",
  },
];
