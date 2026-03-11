import { getServerSession } from "@/queries/auth";

export default async function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session) {
    return null;
  }

  return <>{children}</>;
}
