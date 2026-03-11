"use client";

import { CircleFadingArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { upgradeTownhall } from "@/actions/account";
import { useState } from "react";
import { toast } from "sonner";

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

    const { data, error } = await upgradeTownhall(
      account.id,
      account.townhall + 1,
    );

    if (error) {
      toast.error(error.message);
    } else {
      toast.success(`${account.name} has been upgraded to TH${data.townhall}!`);
    }

    setIsLoading(false);
  };

  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        className="bg-white"
        size="sm"
        onClick={handleUpgradeTH}
        disabled={isLoading}
      >
        <CircleFadingArrowUp /> Upgrade TH
      </Button>
    </div>
  );
}
