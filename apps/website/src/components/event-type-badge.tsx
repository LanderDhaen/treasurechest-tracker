import { Badge } from "@/components/ui/badge";

interface EventBadgeProps {
  type: string;
}

export default function EventTypeBadge({ type }: EventBadgeProps) {
  return <Badge variant="secondary">{type}</Badge>;
}
