import TypeForm from "@/components/type-form";
import { getServerSession } from "@/queries/auth";
import { notFound } from "next/navigation";

export default async function Page() {
  const session = await getServerSession();

  if (!session) {
    notFound();
  }

  const defaultValues = {
    name: "",
    slug: "",
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-lg w-full">
        <TypeForm defaultValues={defaultValues} />
      </div>
    </div>
  );
}
