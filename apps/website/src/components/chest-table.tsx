"use client";

import { formatDateTime } from "@/lib/utils";
import GiftBadge from "./gift-badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import RarityBadge from "./rarity-badge";
import { ChestTableEntry } from "@/types/chest";

interface ChestTableProps {
  chests: ChestTableEntry[];
}

export default function ChestTable({ chests }: ChestTableProps) {
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
          {chests.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center italic">
                No treasure chests rewards found.
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
                  {chest.amount === 1
                    ? `${chest.reward}`
                    : `${chest.amount.toLocaleString()} ${chest.reward}`}
                </TableCell>
                <TableCell>{formatDateTime(chest.openedAt)}</TableCell>
                <TableCell>{chest.account.name}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {chest.event.name} <GiftBadge isGift={chest.event.isGift} />
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
