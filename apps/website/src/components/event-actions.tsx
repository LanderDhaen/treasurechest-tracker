"use client";

import {
  changeChestCreationAllowedStatus,
  deleteEventAction,
} from "@/actions/event";
import { EventStatus } from "@/constants/event";
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
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

interface EventActionsProps {
  event: {
    id: number;
    code: string;
    name: string;
    startDate: Date;
    endDate: Date;
    maxChests: number;
    isChestCreationAllowed: boolean;
    status: EventStatus;
    type: string;
  };
}

export default function EventActions({ event }: EventActionsProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeChestCreationAllowedStatus = async () => {
    setIsLoading(true);

    const { data: updatedEvent, error } =
      await changeChestCreationAllowedStatus(event.id);

    if (error) {
      toast.error(error.message);
    } else {
      const message = updatedEvent.isChestCreationAllowed
        ? `${event.name} is now accepting new treasure chests.`
        : `${event.name} is no longer accepting submissions.`;

      toast.success(message);
    }

    setIsLoading(false);
  };

  const handleDeleteEvent = async () => {
    setIsLoading(true);

    const { data, error } = await deleteEventAction(event.id);

    if (error) {
      toast.error(error.message);
    } else {
      const { deletedEvent, deletedChestsCount } = data;

      toast.success(
        `${deletedEvent.name} and ${deletedChestsCount} treasure chests have been deleted.`,
      );

      redirect("/events");
    }

    setIsLoading(false);
  };

  return (
    <div className="flex justify-between ">
      <div className="flex items-center gap-2">
        <Switch
          id="tracking"
          className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
          checked={event.isChestCreationAllowed}
          onCheckedChange={handleChangeChestCreationAllowedStatus}
          disabled={isLoading}
        />
        <Label htmlFor="tracking" className="text-sm text-muted-foreground">
          Allow new treasure chests
        </Label>
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
              This will permanently delete this event and all associated
              treasure chests.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              onClick={handleDeleteEvent}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
