import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { getAllAccounts } from "@/actions/account";
import { Badge } from "@/components/ui/badge";
import TownhallBadge from "@/components/townhall-badge";

export default async function Page() {
  const data = await getAllAccounts();

  return (
    <div className="p-20">
      <Table>
        <TableCaption>List of tracked accounts.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Tag</TableHead>
            <TableHead>Account</TableHead>
            <TableHead>Clan</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((account) => (
            <TableRow key={account.ID}>
              <TableCell>#{account.tag}</TableCell>
              <TableCell className="flex items-center gap-2">
                <TownhallBadge
                  level={account.townhall.level}
                  color={account.townhall.color}
                />
                {account.name}
              </TableCell>
              <TableCell>{account.clan.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
