"use client";

import { Widget } from "@/entities/widget/model/types";
import { WidgetFrame } from "@/entities/widget/ui/WidgetFrame";
import { ClockWidget } from "@/features/clock-widget/ui/ClockWidget";
import { DDayWidget } from "@/features/dday-widget/ui/DDayWidget";
import { MemoWidget } from "@/features/memo-widget/ui/MemoWidget";
import { TodoWidget } from "@/features/todo-widget";
import { cn } from "@/shared/lib/utils";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { motion } from "framer-motion";

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
    transition: transition || undefined,
    opacity: isDragging ? 0.25 : 1,
    zIndex: isDragging ? 0 : 1,
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
      case "dday":
        return <DDayWidget widgetId={widget.id} isExpanded={isExpanded} />;
      case "memo":
        return <MemoWidget widgetId={widget.id} isExpanded={isExpanded} />;
      default:
        return <div>알 수 없는 위젯 타입입니다.</div>;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isDragging ? 0.25 : 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{
        opacity: { duration: 0.15 },
        scale: { duration: 0.15 },
      }}
      ref={setNodeRef}
      style={style}
      className={cn("h-fit touch-none select-none", colSpanClass)}
    >
      <WidgetFrame
        id={widget.id}
        title={widget.title}
        color={widget.color}
        width={widget.layout.w}
        dragHandleProps={{ attributes, listeners }}
      >
        {renderWidgetContent()}
      </WidgetFrame>
    </motion.div>
  );
};
