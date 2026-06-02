import { Percent } from "lucide-react";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "./ui/popover";
import { calculatePercentage } from "@/lib/utils";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "./ui/table";

interface RarityChancesButtonProps {
  rarities: {
    name: string;
    chance: number;
    count: number;
  }[];
  totalChests: number;
}

export default function RarityChancesButton({
  rarities,
  totalChests,
}: RarityChancesButtonProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <Percent />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end">
        <div className="rounded-sm border overflow-hidden">
          <Table>
            <TableHeader className="bg-muted">
              <TableRow>
                <TableHead className="font-bold">Rarity</TableHead>
                <TableHead className="font-bold w-40 text-right">
                  Expected
                </TableHead>
                <TableHead className="font-bold w-40 text-right">
                  Actual
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rarities.map(({ name, chance, count }) => (
                <TableRow key={name}>
                  <TableHead>{name}</TableHead>
                  <TableHead className="text-right">{chance}%</TableHead>
                  <TableHead className="text-right">
                    {calculatePercentage(count, totalChests)}
                  </TableHead>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </PopoverContent>
    </Popover>
  );
}
