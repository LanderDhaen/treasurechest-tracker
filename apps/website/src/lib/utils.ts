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
