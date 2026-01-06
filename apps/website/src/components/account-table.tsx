"use client";

import TownhallBadge from "./townhall-badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface AccountTableProps {
  accounts: {
    name: string;
    tag: string;
    townhall: number;
    clan: {
      id: number;
      name: string;
      tag: string;
    };
  }[];
}

export default function AccountTable({ accounts }: AccountTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Tag</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Clan</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {accounts.length === 0 ? (
          <TableRow>
            <TableCell colSpan={3} className="text-center italic">
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
  );
}
