import { Calendar, Clock, FileText, ListTodo, LucideIcon } from "lucide-react";

export type WidgetType = "todo" | "clock" | "dday" | "memo";

export interface WidgetConfigItem {
  type: WidgetType;
  title: string;
  icon: LucideIcon;
}

export const WIDGET_CONFIG_MAP: Record<WidgetType, WidgetConfigItem> = {
  todo: { type: "todo", title: "할 일 목록", icon: ListTodo },
  clock: { type: "clock", title: "시계 & 뽀모도로", icon: Clock },
  dday: { type: "dday", title: "D-Day", icon: Calendar },
  memo: { type: "memo", title: "메모", icon: FileText },
};

export const WIDGET_OPTIONS = Object.values(WIDGET_CONFIG_MAP);
