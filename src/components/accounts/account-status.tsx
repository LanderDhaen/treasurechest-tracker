import { Swords, Tractor, CircleX } from "lucide-react";

interface AccountStatusProps {
  status: string;
}

export default function AccountStatus({ status }: AccountStatusProps) {
  const getStatusContent = () => {
    switch (status) {
      case "Farming":
        return {
          icon: <Tractor className="h-4 w-4" />,
          label: "Farming",
          bgClass: "bg-active-background",
          textClass: "text-active-foreground",
        };
      case "Wars Only":
        return {
          icon: <Swords className="h-4 w-4" />,
          label: "Wars Only",
          bgClass: "bg-wars-background",
          textClass: "text-wars-foreground",
        };
      default:
        return {
          icon: <CircleX className="h-4 w-4" />,
          label: "Inactive",
          bgClass: "bg-inactive-background",
          textClass: "text-inactive-foreground",
        };
    }
  };

  const { icon, label, bgClass, textClass } = getStatusContent();

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-3xl px-4 py-1 font-bold ${bgClass} ${textClass}`}
    >
      {icon}
      {label}
    </span>
  );
}
