"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";

import TownhallBadge from "./townhall-badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

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
  orderBy: "tag" | "name" | "clan";
  orderDirection: "asc" | "desc";
}

const columns = [
  {
    key: "tag",
    label: "Tag",
    render: (row: Account) => <>#{row.tag}</>,
  },
  {
    key: "name",
    label: "Name",
    render: (row: Account) => (
      <div className="flex items-center gap-2">
        <TownhallBadge level={row.townhall} />
        {row.name}
      </div>
    ),
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
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleSort = (columnKey: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const nextDirection =
      orderBy === columnKey && orderDirection === "asc" ? "desc" : "asc";

    params.set("page", "1");
    params.set("orderBy", columnKey);
    params.set("orderDirection", nextDirection);

    router.push(`${pathname}?${params.toString()}`);
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
