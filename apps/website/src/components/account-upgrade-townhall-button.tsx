"use client";

import { CheckCheck, CircleFadingArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { upgradeTownhall } from "@/actions/account";
import { useState } from "react";
import { toast } from "sonner";

interface AccountUpgradeTownhallButtonProps {
  accountId: number;
  isMaxTownhall: boolean;
}

export default function AccountUpgradeTownhallButton({
  accountId,
  isMaxTownhall,
}: AccountUpgradeTownhallButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleUpgradeTH = async () => {
    setIsLoading(true);

    const { data: updatedAccount, error } = await upgradeTownhall(accountId);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success(
        `${updatedAccount.name} has been upgraded to TH${updatedAccount.townhall}!`,
      );
    }

    setIsLoading(false);
  };

  return (
    <Button
      variant="outline"
      className="bg-white"
      size="sm"
      onClick={handleUpgradeTH}
      disabled={isLoading || isMaxTownhall}
    >
      {isMaxTownhall ? (
        <>
          <CheckCheck /> Maxed TH
        </>
      ) : (
        <>
          <CircleFadingArrowUp /> Upgrade TH
        </>
      )}
    </Button>
  );
}
