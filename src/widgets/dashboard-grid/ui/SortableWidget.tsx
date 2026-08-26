"use client";

import { Widget } from "@/entities/widget/model/types";
import { WidgetFrame } from "@/entities/widget/ui/WidgetFrame";
import { ClockWidget } from "@/features/clock-widget/ui/ClockWidget";
import { TodoWidget } from "@/features/todo-widget";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface SortableWidgetProps {
  widget: Widget;
}

export const SortableWidget = ({ widget }: SortableWidgetProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: widget.id });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.3 : 1,
    zIndex: isDragging ? 50 : 1,
  };

  const colSpanClass =
    widget.layout.w === 2
      ? "col-span-1 md:col-span-2 md:row-span-2"
      : "col-span-1";

  const isExpanded = widget.layout.w === 2;

  const renderWidgetContent = () => {
    switch (widget.type) {
      case "todo":
        return <TodoWidget widgetId={widget.id} isExpanded={isExpanded} />;
      case "clock":
        return <ClockWidget widgetId={widget.id} isExpanded={isExpanded} />;
      default:
        return <div>알 수 없는 위젯 타입입니다.</div>;
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`h-fit touch-none select-none ${colSpanClass}`}
    >
      <WidgetFrame
        id={widget.id}
        title={widget.title}
        color={widget.color}
        width={widget.layout.w}
      >
        {renderWidgetContent()}
      </WidgetFrame>
    </div>
  );
};
