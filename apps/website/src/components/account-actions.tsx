"use client";

import { CircleFadingArrowUp, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import {
  changeTrackingStatus,
  deleteAccountAction,
  upgradeTownhall,
} from "@/actions/account";
import { useState } from "react";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";

interface AccountActionsProps {
  account: {
    id: number;
    name: string;
    tag: string;
    townhall: number;
    isTracked: boolean;
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

  const handleChangeTrackingStatus = async () => {
    setIsLoading(true);

    const { data: updatedAccount, error } = await changeTrackingStatus(
      account.id,
    );

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

  const handleDeleteAccount = async () => {
    setIsLoading(true);

    const { data, error } = await deleteAccountAction(account.id);

    if (error) {
      toast.error(error.message);
    } else {
      const { deletedAccount, deletedChestsCount } = data;

      toast.success(
        `${deletedAccount.name} and ${deletedChestsCount} treasure chests have been deleted.`,
      );

      redirect("/accounts");
    }

    setIsLoading(false);
  };

  return (
    <div className="flex justify-between">
      <div className="flex gap-4 items-center">
        <Button
          variant="outline"
          className="bg-white"
          size="sm"
          onClick={handleUpgradeTH}
          disabled={isLoading}
        >
          <CircleFadingArrowUp /> Upgrade TH
        </Button>
        <Separator
          orientation="vertical"
          className="data-[orientation=vertical]:h-4"
        />
        <div className="flex items-center gap-2">
          <Switch
            id="tracking"
            className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
            checked={account.isTracked}
            onCheckedChange={handleChangeTrackingStatus}
            disabled={isLoading}
          />
          <Label htmlFor="tracking" className="text-sm text-muted-foreground">
            Tracking
          </Label>
        </div>
      </div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive" size="icon-sm" disabled={isLoading}>
            <Trash2 />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
              <Trash2 />
            </AlertDialogMedia>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this account and all associated
              treasure chests.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              onClick={handleDeleteAccount}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
