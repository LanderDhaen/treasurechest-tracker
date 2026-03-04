import { authClient } from "@/lib/auth-client";

export default function AuthGuard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session, isPending } = authClient.useSession();

  if (isPending || !session) {
    return null;
  }

  return <>{children}</>;
}
