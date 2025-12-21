import { getAllChests } from "@/actions/chest";
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

export default async function Page() {
  const { chests, count } = await getAllChests();

  return (
    <div className="p-20">
      <Table>
        <TableCaption>Currently opened {count} treasure chests.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Account</TableHead>
            <TableHead>Event</TableHead>
            <TableHead>Reward</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {chests.map((chest) => (
            <TableRow key={chest.id}>
              <TableCell>{chest.id}</TableCell>
              <TableCell>{chest.account.name}</TableCell>
              <TableCell>{chest.event}</TableCell>
              <TableCell className="flex items-center gap-2">
                <RarityBadge rarity={chest.rarity} />
                {chest.amount === 1
                  ? `${chest.reward}`
                  : `${chest.amount.toLocaleString()} ${chest.reward}`}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
