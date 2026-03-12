"use client";

import { CircleFadingArrowUp, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { deleteAccount, upgradeTownhall } from "@/actions/account";
import { useState } from "react";
import { toast } from "sonner";
import { redirect } from "next/navigation";

interface AccountActionsProps {
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

export default function AccountActions({ account }: AccountActionsProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleUpgradeTH = async () => {
    setIsLoading(true);

    const { data: updatedAccount, error } = await upgradeTownhall(account.id);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success(
        `${updatedAccount.name} has been upgraded to TH${updatedAccount.townhall}!`,
      );
    }

    setIsLoading(false);
  };

  const handleDeleteAccount = async () => {
    setIsLoading(true);

    const { data: updatedAccount, error } = await deleteAccount(account.id);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success(`${updatedAccount.name} has been deleted.`);

      redirect("/accounts");
    }

    setIsLoading(false);
  };

  return (
    <div className="flex gap-2 justify-between">
      <Button
        variant="outline"
        className="bg-white"
        size="sm"
        onClick={handleUpgradeTH}
        disabled={isLoading}
      >
        <CircleFadingArrowUp /> Upgrade TH
      </Button>
      <Button
        variant="destructive"
        size="icon-sm"
        onClick={handleDeleteAccount}
        disabled={isLoading}
      >
        <Trash2 />
      </Button>
    </div>
  );
}
