"use client";

import { memo } from "react";
import dynamic from "next/dynamic";
import { WidgetRow } from "../api/dashboardRepository";

const WidgetLoadingFallback = () => (
  <div className="flex items-center justify-center h-full text-xs text-muted-foreground">
    위젯 불러오는 중..
  </div>
);

const TodoWidget = dynamic(
  () => import("@/features/todo-widget").then((mod) => mod.TodoWidget),
  { loading: WidgetLoadingFallback },
);

const ClockWidget = dynamic(
  () =>
    import("@/features/clock-widget/ui/ClockWidget").then(
      (mod) => mod.ClockWidget,
    ),
  { loading: WidgetLoadingFallback },
);

const DDayWidget = dynamic(
  () =>
    import("@/features/dday-widget/ui/DDayWidget").then(
      (mod) => mod.DDayWidget,
    ),
  { loading: WidgetLoadingFallback },
);

const MemoWidget = dynamic(
  () =>
    import("@/features/memo-widget/ui/MemoWidget").then(
      (mod) => mod.MemoWidget,
    ),
  { loading: WidgetLoadingFallback },
);

interface WidgetContentRendererProps {
  widget: WidgetRow;
}

export const WidgetContentRenderer = memo(
  ({ widget }: WidgetContentRendererProps) => {
    const isExpanded = widget.layout_w === 2;

    switch (widget.type) {
      case "todo":
        return (
          <TodoWidget widgetId={widget.widget_id} isExpanded={isExpanded} />
        );
      case "clock":
        return (
          <ClockWidget widgetId={widget.widget_id} isExpanded={isExpanded} />
        );
      case "dday":
        return (
          <DDayWidget widgetId={widget.widget_id} isExpanded={isExpanded} />
        );
      case "memo":
        return (
          <MemoWidget widgetId={widget.widget_id} isExpanded={isExpanded} />
        );
      default:
        return (
          <div className="p-4 text-xs text-muted-foreground text-center">
            지원하지 않는 위젯 타입입니다.
          </div>
        );
    }
  },
);

WidgetContentRenderer.displayName = "WidgetContentRenderer";
