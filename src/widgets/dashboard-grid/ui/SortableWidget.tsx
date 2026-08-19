"use client";

import { Widget } from "@/entities/widget/model/types";
import { WidgetFrame } from "@/entities/widget/ui/WidgetFrame";
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
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const renderWidgetContent = () => {
    switch (widget.type) {
      case "todo":
        return <TodoWidget />;
      default:
        return (
          <div className="text-sm text-muted-foreground">
            [{widget.type.toUpperCase()}] 준비 중인 위젯입니다.
          </div>
        );
    }
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <WidgetFrame id={widget.id} title={widget.title}>
        {renderWidgetContent()}
      </WidgetFrame>
    </div>
  );
};
