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
import AccountTrackedBage from "./account-tracked-badge";

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
}

export default function AccountTable({ accounts }: AccountTableProps) {
  const router = useRouter();

  const handeClick = (tag: string) => {
    router.push(`/accounts/${tag}`);
  };

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
          {accounts.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center italic">
                No accounts found.
              </TableCell>
            </TableRow>
          ) : (
            accounts.map((account) => (
              <TableRow
                key={account.tag}
                onClick={() => handeClick(account.tag)}
                className="hover:cursor-pointer"
              >
                <TableCell>#{account.tag}</TableCell>
                <TableCell>
                  <AccountTrackedBage isTracked={account.isTracked} />
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
