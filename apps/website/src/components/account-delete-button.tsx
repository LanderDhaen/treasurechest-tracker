"use client";

import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { deleteAccountAction } from "@/actions/account";
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

interface AccountDeleteButtonProps {
  accountId: number;
}

export default function AccountDeleteButton({
  accountId,
}: AccountDeleteButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteAccount = async () => {
    setIsLoading(true);

    const { data, error } = await deleteAccountAction(accountId);

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
  );
}
