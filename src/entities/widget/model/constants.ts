import { WidgetColor } from "./types";

export const COLOR_THEMES: Record<
  WidgetColor,
  { label: string; bg: string; border: string; accentBg: string }
> = {
  default: {
    label: "기본",
    bg: "bg-muted/50",
    border: "border-border",
    accentBg: "bg-primary",
  },
  blue: {
    label: "블루",
    bg: "bg-blue-50/50 dark:bg-blue-950/20",
    border: "border-blue-200 dark:border-blue-800",
    accentBg: "bg-blue-500",
  },
  green: {
    label: "그린",
    bg: "bg-emerald-50/50 dark:bg-emerald-950/20",
    border: "border-emerald-200 dark:border-emerald-800",
    accentBg: "bg-emerald-500",
  },
  yellow: {
    label: "옐로우",
    bg: "bg-amber-50/50 dark:bg-amber-950/20",
    border: "border-amber-200 dark:border-amber-800",
    accentBg: "bg-amber-500",
  },
  purple: {
    label: "퍼플",
    bg: "bg-purple-50/50 dark:bg-purple-950/20",
    border: "border-purple-200 dark:border-purple-800",
    accentBg: "bg-purple-500",
  },
  red: {
    label: "레드",
    bg: "bg-rose-50/50 dark:bg-rose-950/20",
    border: "border-rose-200 dark:border-rose-800",
    accentBg: "bg-rose-500",
  },
};
