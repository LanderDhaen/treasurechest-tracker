"use client";

import { formatDateTime } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import RarityBadge from "./rarity-badge";
import { formatEventName } from "@/lib/event";
import { formatReward } from "@/lib/chest";
import NoChests from "./no-chests";
import NoSearchResults from "./no-search-results";

interface ChestTableProps {
  chests: {
    id: number;
    amount: number;
    openedAt: Date;
    rarity: string;
    reward: string;
    account: {
      name: string;
    };
    event: {
      edition: number;
      name: string;
    };
  }[];
  totalChests: number;
}

export default function ChestTable({ chests, totalChests }: ChestTableProps) {
  const isEmpty = chests.length === 0;
  const hasStoredChests = totalChests > 0;

  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted">
            <TableHead className="font-bold w-12">#</TableHead>
            <TableHead className="font-bold w-24">Rarity</TableHead>
            <TableHead className="font-bold">Reward</TableHead>
            <TableHead className="font-bold">Opened At</TableHead>
            <TableHead className="font-bold">Account</TableHead>
            <TableHead className="font-bold">Event</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isEmpty ? (
            <TableRow className="bg-white hover:bg-white">
              <TableCell colSpan={6}>
                {hasStoredChests ? <NoSearchResults /> : <NoChests />}
              </TableCell>
            </TableRow>
          ) : (
            chests.map((chest) => (
              <TableRow key={chest.id}>
                <TableCell>{chest.id}</TableCell>
                <TableCell>
                  <RarityBadge rarity={chest.rarity} />
                </TableCell>
                <TableCell>
                  {formatReward(chest.amount, chest.reward)}
                </TableCell>
                <TableCell>{formatDateTime(chest.openedAt)}</TableCell>
                <TableCell>{chest.account.name}</TableCell>
                <TableCell>
                  {formatEventName(chest.event.name, chest.event.edition)}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
