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

export function calculateTimeAgo(date: Date) {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();

  const ONE_MINUTE = 1000 * 60;
  const ONE_HOUR = ONE_MINUTE * 60;
  const ONE_DAY = ONE_HOUR * 24;
  const ONE_WEEK = ONE_DAY * 7;
  const ONE_MONTH = ONE_DAY * 30;
  const ONE_YEAR = ONE_DAY * 365;

  if (diffInMs < ONE_MINUTE) {
    return "Just now";
  }
  if (diffInMs < ONE_HOUR) {
    const minutes = Math.floor(diffInMs / ONE_MINUTE);
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  }

  if (diffInMs < ONE_DAY) {
    const hours = Math.floor(diffInMs / ONE_HOUR);
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  }

  if (diffInMs < ONE_WEEK) {
    const days = Math.floor(diffInMs / ONE_DAY);
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  }

  if (diffInMs < ONE_MONTH) {
    const weeks = Math.floor(diffInMs / ONE_WEEK);
    return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
  }

  if (diffInMs < ONE_YEAR) {
    const months = Math.floor(diffInMs / ONE_MONTH);
    return `${months} month${months !== 1 ? "s" : ""} ago`;
  }

  const years = Math.floor(diffInMs / ONE_YEAR);
  return `${years} year${years !== 1 ? "s" : ""} ago`;
}

export function calculatePercentage(part: number, total: number) {
  if (total === 0) return "0%";
  const percentage = (part / total) * 100;
  return `${percentage.toFixed(2)}%`;
}

export function formatHourRange(hour: number) {
  const startHour = hour.toString().padStart(2, "0");
  const endHour = ((hour + 1) % 24).toString().padStart(2, "0");
  return `${startHour}:00 - ${endHour}:00`;
}

export const slugify = (text: string) =>
  text
    .trim()
    .toLowerCase()
    .normalize("NFKD") // Decompose accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
    .replace(/\s+/g, "-") // Replace spaces with "-"
    .replace(/&/g, "and") // Replace & with "and"
    .replace(/-+/g, "-") // Replace multiple hyphens with a single one
    .replace(/[^a-z0-9\-]/g, ""); // Remove non-alphanumeric characters except hyphens

export function generateCode(name: string) {
  return name
    .trim()
    .toUpperCase()
    .normalize("NFKD") // Decompose accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
    .split(/[^A-Za-z]+/) // Split on anything that's NOT a letter
    .filter(Boolean) // Remove empty strings
    .map((word) => word[0]) // Take the first letter of each word
    .join(""); // Join them together
}
