import { Card, CardContent } from "../ui/card";
import { Spinner } from "../ui/spinner";

export default function TimelineSkeleton() {
  return (
    <Card>
      <CardContent className="h-100 flex gap-2 justify-center items-center">
        <span className="flex items-center gap-2 italic text-muted-foreground">
          <Spinner />
          Loading timeline...
        </span>
      </CardContent>
    </Card>
  );
}
