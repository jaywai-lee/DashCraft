"use client";

import { Widget } from "@/entities/widget/model/types";
import { WidgetFrame } from "@/entities/widget/ui/WidgetFrame";
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

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <WidgetFrame id={widget.id} title={widget.title}>
        <div className="text-sm text-muted-foreground">
          [{widget.type.toUpperCase()}] 위젯 영역
        </div>
      </WidgetFrame>
    </div>
  );
};
