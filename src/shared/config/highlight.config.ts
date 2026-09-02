export type HighlightColor = "none" | "yellow" | "green" | "pink" | "blue";

export interface HighlightOption {
  id: HighlightColor;
  label: string;
  bgClass: string;
  textClass: string;
  borderClass: string;
  colorCode: string;
}

export const HIGHLIGHT_OPTIONS: HighlightOption[] = [
  {
    id: "none",
    label: "없음",
    bgClass: "bg-transparent",
    textClass: "text-foreground",
    borderClass: "border-border",
    colorCode: "transparent",
  },
  {
    id: "yellow",
    label: "형광 노랑",
    bgClass: "bg-yellow-200/70 dark:bg-yellow-500/30",
    textClass: "text-yellow-950 dark:text-yellow-100",
    borderClass: "border-yellow-400",
    colorCode: "#fef08a",
  },
  {
    id: "green",
    label: "형광 연두",
    bgClass: "bg-emerald-200/70 dark:bg-emerald-500/30",
    textClass: "text-emerald-950 dark:text-emerald-100",
    borderClass: "border-emerald-400",
    colorCode: "#a7f3d0",
  },
  {
    id: "pink",
    label: "형광 분홍",
    bgClass: "bg-pink-200/70 dark:bg-pink-500/30",
    textClass: "text-pink-950 dark:text-pink-100",
    borderClass: "border-pink-400",
    colorCode: "#fbcfe8",
  },
  {
    id: "blue",
    label: "형광 하늘",
    bgClass: "bg-sky-200/70 dark:bg-sky-500/30",
    textClass: "text-sky-950 dark:text-sky-100",
    borderClass: "border-sky-400",
    colorCode: "#bae6fd",
  },
];
