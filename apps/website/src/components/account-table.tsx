"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { AccountSearchParams } from "@/schemas/account";
import useQueryParams from "@/hooks/use-query-params";

interface Account {
  name: string;
  tag: string;
  townhall: number;
  clan: {
    id: number;
    name: string;
    tag: string;
  };
}

interface AccountTableProps {
  accounts: Account[];
  orderBy: AccountSearchParams["orderBy"];
  orderDirection: AccountSearchParams["orderDirection"];
}

const columns = [
  {
    key: "tag",
    label: "Tag",
    render: (row: Account) => <>#{row.tag}</>,
  },
  {
    key: "townhall",
    label: "TH",
    render: (row: Account) => <>{row.townhall}</>,
  },
  {
    key: "name",
    label: "Name",
    render: (row: Account) => <>{row.name}</>,
  },
  {
    key: "clan",
    label: "Clan",
    render: (row: Account) => <>{row.clan.name}</>,
  },
];

export default function AccountTable({
  accounts,
  orderBy,
  orderDirection,
}: AccountTableProps) {
  const { searchParams, pushUrl } = useQueryParams();

  const handleSort = (columnKey: string) => {
    const nextDirection =
      orderBy === columnKey && orderDirection === "asc" ? "desc" : "asc";

    searchParams.set("page", "1");
    searchParams.set("orderBy", columnKey);
    searchParams.set("orderDirection", nextDirection);

    pushUrl(searchParams);
  };

  const SortIcon = () =>
    orderDirection === "asc" ? (
      <ChevronUp size={16} />
    ) : (
      <ChevronDown size={16} />
    );

  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader className="bg-muted">
          <TableRow>
            {columns.map(({ key, label }) => (
              <TableHead
                key={key}
                onClick={() => handleSort(key)}
                className="cursor-pointer select-none font-bold"
              >
                <div className="flex items-center gap-2">
                  {label}
                  {orderBy === key && <SortIcon />}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {accounts.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="text-center italic"
              >
                No accounts found.
              </TableCell>
            </TableRow>
          ) : (
            accounts.map((account) => (
              <TableRow key={account.tag}>
                {columns.map(({ key, render }) => (
                  <TableCell key={key}>{render(account)}</TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
