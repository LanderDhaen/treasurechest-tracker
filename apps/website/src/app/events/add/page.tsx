import EventForm from "@/components/event-form";
import { getServerSession } from "@/queries/auth";
import { getAllSeries } from "@/queries/series";
import { getAllTypes } from "@/queries/type";
import { eventFormSearchParamsSchema } from "@/schemas/event";
import { notFound } from "next/navigation";

const DEFAULT_FROM_DATE = new Date();
const DEFAULT_TO_DATE = new Date();
const DEFAULT_MAX_CHESTS = 1;

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const session = await getServerSession();

  if (!session) {
    notFound();
  }

  const rawParams = await searchParams;
  const parsedParams = eventFormSearchParamsSchema.parse(rawParams);
  const { series: seriesCode, type: typeSlug, returnTo } = parsedParams;

  const series = await getAllSeries();
  const types = await getAllTypes();

  const defaultValues = {
    dateRange: {
      from: DEFAULT_FROM_DATE,
      to: DEFAULT_TO_DATE,
    },
    maxChests: DEFAULT_MAX_CHESTS,
    seriesCode: seriesCode || series[0]?.code || "",
    typeSlug: typeSlug || types[0]?.slug || "",
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-lg w-full">
        <EventForm
          series={series}
          types={types}
          defaultValues={defaultValues}
          returnTo={returnTo}
        />
      </div>
    </div>
  );
}
