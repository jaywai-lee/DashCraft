export type WidgetType = "todo" | "dday" | "quicklink" | "note" | "clock";

export type WidgetColor =
  "default" | "blue" | "green" | "yellow" | "purple" | "red";

export interface LayoutItem {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface Widget {
  id: string;
  type: WidgetType;
  title: string;
  color?: WidgetColor;
  layout: LayoutItem;
  config?: Record<string, unknown>;
}
