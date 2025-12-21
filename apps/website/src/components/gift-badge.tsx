import { Badge } from "@/components/ui/badge";

export default function GiftBadge({ isGift }: { isGift: boolean }) {
  if (isGift) {
    return <Badge variant="secondary">Gifted</Badge>;
  }

  return;
}
