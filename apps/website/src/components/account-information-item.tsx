import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import AccountTrackedBadge from "./account-tracked-badge";

interface AccountInformationItemProps {
  account: {
    id: number;
    name: string;
    tag: string;
    townhall: {
      id: number;
      level: number;
    };
    isTracked: boolean;
    clan: {
      id: number;
      name: string;
    };
  };
}

export default function AccountInformationItem({
  account,
}: AccountInformationItemProps) {
  return (
    <Item className="p-0">
      <ItemContent>
        <ItemTitle className="text-xl font-bold">
          {account.name}
          <AccountTrackedBadge isTracked={account.isTracked} />
        </ItemTitle>
        <ItemDescription className="italic">#{account.tag}</ItemDescription>
        <ItemDescription className="text-sm text-muted-foreground">
          TH{account.townhall.level}・{account.clan.name}
        </ItemDescription>
      </ItemContent>
    </Item>
  );
}
