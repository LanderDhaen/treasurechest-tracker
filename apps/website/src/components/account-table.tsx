"use client";

import { AccountTableEntry } from "@/types/account";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface AccountTableProps {
  accounts: AccountTableEntry[];
}

export default function AccountTable({ accounts }: AccountTableProps) {
  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader className="bg-muted">
          <TableRow>
            <TableHead className="font-bold">Tag</TableHead>
            <TableHead className="font-bold">Townhall</TableHead>
            <TableHead className="font-bold">Name</TableHead>
            <TableHead className="font-bold">Clan</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {accounts.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center italic">
                No accounts found.
              </TableCell>
            </TableRow>
          ) : (
            accounts.map((account) => (
              <TableRow key={account.tag}>
                <TableCell>#{account.tag}</TableCell>
                <TableCell>{account.townhall}</TableCell>
                <TableCell>{account.name}</TableCell>
                <TableCell>{account.clan.name}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
