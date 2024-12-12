interface ColoredBadgeProps {
  color: string;
  children: React.ReactNode;
}

export const ColoredBadge = ({ color, children }: ColoredBadgeProps) => {
  return (
    <div className={"flex items-center justify-center gap-2"}>
      <span
        className="h-2 w-2 rounded-full bg-current"
        style={{ backgroundColor: color }}
      />
      {children}
    </div>
  );
};
