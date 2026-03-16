import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { Spinner } from "./ui/spinner";

export default function AccountTrackedBage({
  isTracked,
}: {
  isTracked: boolean;
}) {
  if (isTracked) {
    return (
      <Badge className="bg-green-50 text-green-600">
        <Spinner />
        Tracked
      </Badge>
    );
  } else {
    return (
      <Badge className="bg-red-50 text-red-600">
        <X />
        Untracked
      </Badge>
    );
  }
}
