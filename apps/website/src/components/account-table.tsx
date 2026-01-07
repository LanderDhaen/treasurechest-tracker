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
  { key: "tag", label: "Tag" },
  { key: "name", label: "Name" },
  { key: "clan", label: "Clan" },
];

export default function AccountTable({
  accounts,
  orderBy,
  orderDirection,
}: AccountTableProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleSort = (column: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const nextDirection =
      orderBy === column && orderDirection === "asc" ? "desc" : "asc";

    params.set("page", "1");
    params.set("orderBy", column);
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
    <div className="rounded-xl border overflow-hidden">
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
                <TableCell>#{account.tag}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <TownhallBadge level={account.townhall} />
                    {account.name}
                  </div>
                </TableCell>
                <TableCell>{account.clan.name}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
