import { getPeakOpeningHourData, getTotalChests } from "@/queries/chest";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { calculatePercentage, formatHourRange } from "@/lib/utils";
import { FilterConfig } from "@/types/common";

interface PeakOpeningHourCardProps {
  filters: FilterConfig;
}

export default async function PeakOpeningHourCard({
  filters,
}: PeakOpeningHourCardProps) {
  const peakOpeningHourData = await getPeakOpeningHourData(filters);
  const totalChests = await getTotalChests(filters);

  if (!peakOpeningHourData) {
    return (
      <Card className="shadow-md">
        <CardHeader>
          <CardDescription>Peak Opening Hours</CardDescription>
          <CardTitle className="text-2xl">-</CardTitle>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardDescription>Peak Opening Hours</CardDescription>
        <CardTitle className="text-2xl">
          {formatHourRange(peakOpeningHourData.hour)}
        </CardTitle>
      </CardHeader>
      <CardFooter className="text-sm text-muted-foreground">
        with {peakOpeningHourData.count} chests・
        {calculatePercentage(peakOpeningHourData.count, totalChests)}
      </CardFooter>
    </Card>
  );
}
