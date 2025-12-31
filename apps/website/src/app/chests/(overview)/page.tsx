import { getAllChests } from "@/actions/chest";
import GiftBadge from "@/components/gift-badge";
import RarityBadge from "@/components/rarity-badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDateTime } from "@/lib/utils";

export default async function Page() {
  const { chests, chestCount, accountCount } = await getAllChests();

  return (
    <div className="p-4">
      <Table>
        <TableCaption>
          {`Currently opened ${chestCount} treasure chests across ${accountCount} accounts.`}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Account</TableHead>
            <TableHead>Event</TableHead>
            <TableHead>Reward</TableHead>
            <TableHead>Opened At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {chests.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center italic">
                No treasure chests rewards found.
              </TableCell>
            </TableRow>
          ) : (
            chests.map((chest) => (
              <TableRow key={chest.id}>
                <TableCell>{chest.id}</TableCell>
                <TableCell>{chest.account.name}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {chest.event.name} <GiftBadge isGift={chest.event.isGift} />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <RarityBadge rarity={chest.rarity} />
                    {chest.amount === 1
                      ? `${chest.reward}`
                      : `${chest.amount.toLocaleString()} ${chest.reward}`}
                  </div>
                </TableCell>
                <TableCell>{formatDateTime(chest.openedAt)}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
