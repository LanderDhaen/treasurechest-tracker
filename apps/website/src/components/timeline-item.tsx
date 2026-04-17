import { formatDateTime } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface TimelineItemProps {
  title: string;
  description: string;
  date: Date;
  icon: LucideIcon;
  isLast?: boolean;
}

export default function TimelineItem({
  title,
  description,
  date,
  icon: Icon,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="grid grid-cols-[24px_1fr] md:grid-cols-[150px_24px_1fr] gap-x-4">
      <div className="hidden md:text-muted-foreground md:italic md:block md:text-sm md:text-right">
        {formatDateTime(date)}
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-5 place-items-center">
          <Icon className="h-4.5 w-4.5" />
        </div>
        {!isLast && <span className="h-12 w-px bg-black" />}
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-sm italic text-muted-foreground md:hidden">
          {formatDateTime(date)}
        </div>
        <div className="text-sm">{title}</div>
        <div className="text-sm text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}
