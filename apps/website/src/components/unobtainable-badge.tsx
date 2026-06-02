import { Badge } from "@/components/ui/badge";

interface UnobtainableBadgeProps {
  isObtainable: boolean;
}

export default function UnobtainableBadge({
  isObtainable,
}: UnobtainableBadgeProps) {
  return !isObtainable && <Badge variant="secondary">Unobtainable</Badge>;
}
