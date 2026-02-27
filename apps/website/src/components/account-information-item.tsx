import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";

interface AccountInformationItemProps {
  account: {
    id: number;
    name: string;
    tag: string;
    townhall: number;
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
        <ItemTitle className="text-xl font-bold">{account.name}</ItemTitle>
        <ItemDescription className="italic">#{account.tag}</ItemDescription>
        <ItemDescription className="text-sm text-muted-foreground">
          TH{account.townhall}・{account.clan.name}
        </ItemDescription>
      </ItemContent>
    </Item>
  );
}
