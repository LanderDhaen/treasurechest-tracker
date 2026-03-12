"use client";

import { CircleFadingArrowUp, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { deleteAccount, upgradeTownhall } from "@/actions/account";
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
              This will permanently delete this account.
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
