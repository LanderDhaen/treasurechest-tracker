import ChestForm from "@/components/chest-form";
import { getServerSession } from "@/queries/auth";
import { notFound } from "next/navigation";

export default async function Page() {
  const session = await getServerSession();

  if (!session) {
    notFound();
  }

  return (
    <div className="flex flex-1 w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <ChestForm />
      </div>
    </div>
  );
}
