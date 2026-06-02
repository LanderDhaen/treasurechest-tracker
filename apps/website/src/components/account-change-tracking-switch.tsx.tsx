"use client";

import { changeTrackingStatus } from "@/actions/account";
import { useState } from "react";
import { toast } from "sonner";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

interface AccountChangeTrackingSwitchProps {
  accountId: number;
  isTracked: boolean;
}

export default function AccountChangeTrackingSwitch({
  accountId,
  isTracked,
}: AccountChangeTrackingSwitchProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeTrackingStatus = async () => {
    setIsLoading(true);

    const { data: updatedAccount, error } =
      await changeTrackingStatus(accountId);

    if (error) {
      toast.error(error.message);
    } else {
      const message = updatedAccount.isTracked
        ? `${updatedAccount.name} is now being tracked.`
        : `${updatedAccount.name} is no longer being tracked.`;

      toast.success(message);
    }

    setIsLoading(false);
  };

  return (
    <div className="flex items-center gap-2">
      <Switch
        id="tracking"
        className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
        checked={isTracked}
        onCheckedChange={handleChangeTrackingStatus}
        disabled={isLoading}
      />
      <Label htmlFor="tracking" className="text-sm text-muted-foreground">
        Tracking
      </Label>
    </div>
  );
}
