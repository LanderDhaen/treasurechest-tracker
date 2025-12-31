import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function formatDateTime(date: Date) {
  return date.toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function calculateWeeksAgo(date: Date) {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const weeks = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 7));

  return weeks === 0 ? "This week" : `${weeks} week${weeks > 1 ? "s" : ""} ago`;
}

export function calculatePercentage(part: number, total: number) {
  if (total === 0) return "0%";
  const percentage = (part / total) * 100;
  return `${percentage.toFixed(2)}%`;
}
