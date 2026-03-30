import SeriesForm from "@/components/series-form";
import { getServerSession } from "@/queries/auth";
import { notFound } from "next/navigation";

export default async function Page() {
  const session = await getServerSession();

  if (!session) {
    notFound();
  }

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-lg w-full">
        <SeriesForm />
      </div>
    </div>
  );
}
