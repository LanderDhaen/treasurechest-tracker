"use client";

import { useRouter } from "next/navigation";
import AccountTrackedBadge from "./account-tracked-badge";
import { TableCell, TableRow } from "./ui/table";

interface AccountTableRowProps {
  account: {
    name: string;
    tag: string;
    isTracked: boolean;
    townhall: number;
    clan: {
      id: number;
      name: string;
      tag: string;
    };
  };
}

export default function AccountTableRow({ account }: AccountTableRowProps) {
  const router = useRouter();

  const handleRowClick = (tag: string) => {
    router.push(`/accounts/${tag}`);
  };

  return (
    <TableRow
      onClick={() => handleRowClick(account.tag)}
      className="hover:cursor-pointer"
    >
      <TableCell>#{account.tag}</TableCell>
      <TableCell>
        <AccountTrackedBadge isTracked={account.isTracked} />
      </TableCell>
      <TableCell>{account.townhall}</TableCell>
      <TableCell>{account.name}</TableCell>
      <TableCell>{account.clan.name}</TableCell>
    </TableRow>
  );
}
