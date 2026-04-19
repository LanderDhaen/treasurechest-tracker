import { Separator } from "./ui/separator";
import AccountUpgradeTownhallButton from "./account-upgrade-townhall-button";
import AccountChangeTrackingSwitch from "./account-change-tracking-switch.tsx";
import AccountDeleteButton from "./account-delete-button";
import { getHighestTownhall } from "@/queries/townhall";

interface AccountActionsProps {
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

export default async function AccountActions({ account }: AccountActionsProps) {
  const highestTownhall = await getHighestTownhall();
  const isMaxTownhall = account.townhall.level >= highestTownhall.level;

  return (
    <div className="flex justify-between">
      <div className="flex gap-4 items-center">
        <AccountUpgradeTownhallButton
          accountId={account.id}
          isMaxTownhall={isMaxTownhall}
        />
        <Separator
          orientation="vertical"
          className="data-[orientation=vertical]:h-4"
        />
        <AccountChangeTrackingSwitch
          accountId={account.id}
          isTracked={account.isTracked}
        />
      </div>
      <AccountDeleteButton accountId={account.id} />
    </div>
  );
}
