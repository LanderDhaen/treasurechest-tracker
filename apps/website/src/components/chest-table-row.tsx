import { formatReward } from "@/lib/chest";
import RarityBadge from "./rarity-badge";
import { TableCell, TableRow } from "./ui/table";
import { formatDateTime } from "@/lib/utils";

interface ChestTableRowProps {
  chest: {
    id: number;
    amount: number;
    openedAt: Date;
    rarity: string;
    reward: string;
    account: {
      name: string;
    };
    event: {
      name: string;
    };
  };
}

export default function ChestTableRow({ chest }: ChestTableRowProps) {
  return (
    <TableRow key={chest.id}>
      <TableCell>{chest.id}</TableCell>
      <TableCell>
        <RarityBadge rarity={chest.rarity} />
      </TableCell>
      <TableCell>{formatReward(chest.amount, chest.reward)}</TableCell>
      <TableCell>{formatDateTime(chest.openedAt)}</TableCell>
      <TableCell>{chest.account.name}</TableCell>
      <TableCell>{chest.event.name}</TableCell>
    </TableRow>
  );
}
