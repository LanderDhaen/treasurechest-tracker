import { getAllChests } from "@/actions/chest";
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
            <TableHead>Rarity</TableHead>
            <TableHead>Reward</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {chests.map((chest) => (
            <TableRow key={chest.id}>
              <TableCell>{chest.id}</TableCell>
              <TableCell>{chest.account.name}</TableCell>
              <TableCell>{chest.event}</TableCell>
              <TableCell>{chest.rarity}</TableCell>
              <TableCell>{chest.reward}</TableCell>
              <TableCell>{chest.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
