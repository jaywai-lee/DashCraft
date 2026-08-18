export type WidgetType = "todo" | "dday" | "quicklink" | "note";

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
  layout: LayoutItem;
  config?: Record<string, unknown>;
}
