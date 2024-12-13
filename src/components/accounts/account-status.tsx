interface AccountStatusProps {
  isActive: boolean;
}

export default function AccountStatus({ isActive }: AccountStatusProps) {
  return isActive ? (
    <span className="rounded-3xl bg-active-background px-4 py-1 font-bold text-active-foreground">
      Farming
    </span>
  ) : (
    <span className="rounded-3xl bg-inactive-background px-4 py-1 font-bold text-inactive-foreground">
      Wars Only
    </span>
  );
}
