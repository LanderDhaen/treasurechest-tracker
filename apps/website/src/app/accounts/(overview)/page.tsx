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
import TownhallBadge from "@/components/townhall-badge";

export default async function Page() {
  const { accounts, count } = await getAllAccounts();

  return (
    <div className="p-20">
      <Table>
        <TableCaption>Currently tracking {count} accounts.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Tag</TableHead>
            <TableHead>Account</TableHead>
            <TableHead>Clan</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {accounts.map((account) => (
            <TableRow key={account.tag}>
              <TableCell>#{account.tag}</TableCell>
              <TableCell className="flex items-center gap-2">
                <TownhallBadge level={account.townhall} />
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
