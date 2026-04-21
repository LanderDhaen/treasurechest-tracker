"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useRouter } from "next/navigation";
import AccountTrackedBadge from "./account-tracked-badge";
import NoSearchResults from "./no-search-results";
import NoAccounts from "./no-accounts";

interface AccountTableProps {
  accounts: {
    name: string;
    tag: string;
    isTracked: boolean;
    townhall: number;
    clan: {
      id: number;
      name: string;
      tag: string;
    };
  }[];
  totalAccounts: number;
}

export default function AccountTable({
  accounts,
  totalAccounts,
}: AccountTableProps) {
  const router = useRouter();

  const handleRowClick = (tag: string) => {
    router.push(`/accounts/${tag}`);
  };

  const isEmpty = accounts.length === 0;
  const hasStoredAccounts = totalAccounts > 0;

  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader className="bg-muted">
          <TableRow>
            <TableHead className="font-bold w-36">Tag</TableHead>
            <TableHead className="font-bold w-24">Status</TableHead>
            <TableHead className="font-bold w-24">Townhall</TableHead>
            <TableHead className="font-bold">Name</TableHead>
            <TableHead className="font-bold">Clan</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isEmpty ? (
            <TableRow className="bg-white hover:bg-white">
              <TableCell colSpan={5}>
                {hasStoredAccounts ? <NoSearchResults /> : <NoAccounts />}
              </TableCell>
            </TableRow>
          ) : (
            accounts.map((account) => (
              <TableRow
                key={account.tag}
                onClick={() => handleRowClick(account.tag)}
                className="hover:cursor-pointer"
              >
                <TableCell>#{account.tag}</TableCell>
                <TableCell>
                  <AccountTrackedBadge isTracked={account.isTracked} />
                </TableCell>
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
