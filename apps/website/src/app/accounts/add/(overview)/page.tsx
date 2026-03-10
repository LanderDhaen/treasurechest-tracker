import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add Account</h1>
      <p>This is where you can add a new account.</p>
    </div>
  );
}
