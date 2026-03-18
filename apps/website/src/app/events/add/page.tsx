import EventForm from "@/components/event-form";
import { getServerSession } from "@/queries/auth";
import { getAllSeries } from "@/queries/series";
import { getAllTypes } from "@/queries/type";
import { notFound } from "next/navigation";

export default async function Page() {
  const session = await getServerSession();

  if (!session) {
    notFound();
  }

  const series = await getAllSeries();
  const types = await getAllTypes();

  return (
    <div className="flex flex-1 w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <EventForm series={series} types={types} />
      </div>
    </div>
  );
}
