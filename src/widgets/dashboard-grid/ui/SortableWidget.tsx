"use client";

import { Widget } from "@/entities/widget/model/types";
import { WidgetFrame } from "@/entities/widget/ui/WidgetFrame";
import { cn } from "@/shared/lib/utils";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { motion } from "framer-motion";
import { useDashboardStore } from "../model/useDashboardStore";
import { useTodoStore } from "@/features/todo-widget/model/useTodoStore";
import { useMemoStore } from "@/features/memo-widget/model/useMemoStore";
import { useDDayStore } from "@/features/dday-widget/model/useDDayStore";
import { WidgetContentRenderer } from "./WidgetContentRenderer";
import { useClockStore } from "@/features/clock-widget/model/useClockStore";

interface SortableWidgetProps {
  widget: Widget;
}

export const SortableWidget = ({ widget }: SortableWidgetProps) => {
  const removeWidget = useDashboardStore((s) => s.removeWidget);
  const removeWidgetTodos = useTodoStore((s) => s.removeWidgetTodos);
  const removeWidgetMemo = useMemoStore((s) => s.removeWidgetMemo);
  const removeWidgetDDays = useDDayStore((s) => s.removeWidgetDDays);
  const removeWidgetClock = useClockStore((s) => s.removeWidgetClock);

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

  const handleRemove = (id: string) => {
    removeWidget(id);
    removeWidgetTodos(id);
    removeWidgetMemo(id);
    removeWidgetDDays(id);
    removeWidgetClock(id);
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
        onRemove={handleRemove}
      >
        <WidgetContentRenderer widget={widget} />
      </WidgetFrame>
    </motion.div>
  );
};
