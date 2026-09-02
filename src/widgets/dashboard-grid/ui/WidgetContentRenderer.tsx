import { Widget } from "@/entities/widget/model/types";
import { ClockWidget } from "@/features/clock-widget/ui/ClockWidget";
import { DDayWidget } from "@/features/dday-widget/ui/DDayWidget";
import { MemoWidget } from "@/features/memo-widget/ui/MemoWidget";
import { TodoWidget } from "@/features/todo-widget";

interface WidgetContentRendererProps {
  widget: Widget;
}

export const WidgetContentRenderer = ({
  widget,
}: WidgetContentRendererProps) => {
  const isExpanded = widget.layout.w === 2;

  switch (widget.type) {
    case "todo":
      return <TodoWidget widgetId={widget.id} isExpanded={isExpanded} />;
    case "clock":
      return <ClockWidget widgetId={widget.id} isExpanded={isExpanded} />;
    case "dday":
      return <DDayWidget widgetId={widget.id} isExpanded={isExpanded} />;
    case "memo":
      return <MemoWidget widgetId={widget.id} isExpanded={isExpanded} />;
    default:
      return (
        <div className="p-4 text-xs text-muted-foreground text-center">
          지원하지 않는 위젯 타입입니다.
        </div>
      );
  }
};
