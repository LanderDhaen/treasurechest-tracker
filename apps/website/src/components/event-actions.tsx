"use client";

import { deleteEventAction } from "@/actions/event";
import { EventStatus } from "@/constants/event";
import { useState } from "react";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { formatEventName } from "@/lib/event";
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

interface EventActionsProps {
  event: {
    id: number;
    code: string;
    edition: number;
    startDate: Date;
    endDate: Date;
    maxChests: number;
    status: EventStatus;
    name: string;
    type: string;
  };
}

export default function EventActions({ event }: EventActionsProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteEvent = async () => {
    setIsLoading(true);

    const { data, error } = await deleteEventAction(event.id);

    if (error) {
      toast.error(error.message);
    } else {
      const { deletedEvent, deletedChestsCount } = data;

      toast.success(
        `${formatEventName(deletedEvent.name, deletedEvent.edition)} and ${deletedChestsCount} treasure chests have been deleted.`,
      );

      redirect("/events");
    }

    setIsLoading(false);
  };

  return (
    <div className="flex justify-end">
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
