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
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./ui/empty";
import { Plus, Users2 } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

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
}: AccountTableProps & { totalAccounts: number }) {
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
            <TableRow className="bg-white hover:bg-white">
              <TableCell colSpan={5}>
                <Empty>
                  <EmptyHeader>
                    <EmptyMedia variant="icon">
                      <Users2 />
                    </EmptyMedia>
                    <EmptyTitle>No accounts yet</EmptyTitle>
                    <EmptyDescription>
                      Create your first account and it will show up here.
                    </EmptyDescription>
                  </EmptyHeader>
                  <EmptyContent>
                    <Button variant="outline" asChild>
                      <Link href="/accounts/add">
                        <Plus />
                        Add account
                      </Link>
                    </Button>
                  </EmptyContent>
                </Empty>
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
