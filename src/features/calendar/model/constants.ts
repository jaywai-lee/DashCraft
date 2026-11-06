export const SCHEDULE_COLOR_STYLES: Record<
  string,
  { bg: string; text: string; border: string; dot: string; timeBg: string }
> = {
  default: {
    bg: "bg-primary/10 hover:bg-primary/20",
    text: "text-primary",
    border: "border-primary/20",
    dot: "bg-primary",
    timeBg: "bg-primary/20",
  },
  green: {
    bg: "bg-emerald-500/10 hover:bg-emerald-500/20",
    text: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-500/20",
    dot: "bg-emerald-500",
    timeBg: "bg-emerald-500/20",
  },
  yellow: {
    bg: "bg-amber-500/10 hover:bg-amber-500/20",
    text: "text-amber-600 dark:text-amber-400",
    border: "border-amber-500/20",
    dot: "bg-amber-500",
    timeBg: "bg-amber-500/20",
  },
  purple: {
    bg: "bg-purple-500/10 hover:bg-purple-500/20",
    text: "text-purple-600 dark:text-purple-400",
    border: "border-purple-500/20",
    dot: "bg-purple-500",
    timeBg: "bg-purple-500/20",
  },
  red: {
    bg: "bg-rose-500/10 hover:bg-rose-500/20",
    text: "text-rose-600 dark:text-rose-400",
    border: "border-rose-500/20",
    dot: "bg-rose-500",
    timeBg: "bg-rose-500/20",
  },
};
