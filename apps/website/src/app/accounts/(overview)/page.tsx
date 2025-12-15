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

export default async function DemoPage() {
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
                <Badge
                  style={{
                    backgroundColor: `#${account.townhall.color}`,
                  }}
                >
                  TH{account.townhall.level}
                </Badge>
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
