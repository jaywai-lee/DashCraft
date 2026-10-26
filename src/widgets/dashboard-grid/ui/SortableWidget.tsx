"use client";

import { memo, useCallback, useMemo } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { motion } from "framer-motion";
import { WidgetFrame } from "@/entities/widget/ui/WidgetFrame";
import { WidgetColor } from "@/entities/widget/model/types";
import { cn } from "@/shared/lib/utils";
import { WidgetContentRenderer } from "./WidgetContentRenderer";
import { WidgetRow } from "../api/dashboardRepository";
import {
  useDeleteWidgetMutation,
  useUpdateWidgetMutation,
  useReorderWidgetsMutation,
  useWidgetsQuery,
} from "../api/useDashboardQuery";

interface SortableWidgetProps {
  widget: WidgetRow;
}

export const SortableWidget = memo(({ widget }: SortableWidgetProps) => {
  const { data: widgets = [] } = useWidgetsQuery();
  const deleteWidgetMutation = useDeleteWidgetMutation();
  const updateWidgetMutation = useUpdateWidgetMutation();
  const reorderWidgetsMutation = useReorderWidgetsMutation();

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: widget.widget_id });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition: transition || undefined,
  };

  const colSpanClass =
    widget.layout_w === 2
      ? "col-span-1 row-span-2 md:col-span-2"
      : "col-span-1";

  const handleRemove = useCallback(() => {
    deleteWidgetMutation.mutate(widget.widget_id);
  }, [deleteWidgetMutation, widget.widget_id]);

  const handleUpdateTitle = useCallback(
    (title: string) => {
      updateWidgetMutation.mutate({
        widgetId: widget.widget_id,
        title,
      });
    },
    [updateWidgetMutation, widget.widget_id],
  );

  const handleSelectColor = useCallback(
    (color: WidgetColor) => {
      updateWidgetMutation.mutate({
        widgetId: widget.widget_id,
        color,
      });
    },
    [updateWidgetMutation, widget.widget_id],
  );

  const handleToggleWidth = useCallback(() => {
    const nextWidth = widget.layout_w === 1 ? 2 : 1;
    updateWidgetMutation.mutate({
      widgetId: widget.widget_id,
      layout_w: nextWidth,
    });
  }, [updateWidgetMutation, widget.widget_id, widget.layout_w]);

  const handleMoveLeft = useCallback(() => {
    const currentIndex = widgets.findIndex(
      (w) => w.widget_id === widget.widget_id,
    );
    if (currentIndex <= 0) return;

    const reordered = [...widgets];
    const [target] = reordered.splice(currentIndex, 1);
    reordered.splice(currentIndex - 1, 0, target);

    reorderWidgetsMutation.mutate(reordered.map((w) => w.widget_id));
  }, [widgets, widget.widget_id, reorderWidgetsMutation]);

  const handleMoveRight = useCallback(() => {
    const currentIndex = widgets.findIndex(
      (w) => w.widget_id === widget.widget_id,
    );
    if (currentIndex === -1 || currentIndex >= widgets.length - 1) return;

    const reordered = [...widgets];
    const [target] = reordered.splice(currentIndex, 1);
    reordered.splice(currentIndex + 1, 0, target);

    reorderWidgetsMutation.mutate(reordered.map((w) => w.widget_id));
  }, [widgets, widget.widget_id, reorderWidgetsMutation]);

  const dragHandleProps = useMemo(
    () => ({ attributes, listeners }),
    [attributes, listeners],
  );

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
      className={cn(
        "h-fit touch-none select-none relative transition-all duration-150",
        isDragging
          ? "z-0 opacity-25"
          : "z-10 focus-within:z-[100] hover:z-[50]",
        colSpanClass,
      )}
    >
      <WidgetFrame
        id={widget.widget_id}
        title={widget.title}
        color={widget.color as WidgetColor}
        width={widget.layout_w}
        dragHandleProps={dragHandleProps}
        onRemove={handleRemove}
        onUpdateTitle={handleUpdateTitle}
        onSelectColor={handleSelectColor}
        onToggleWidth={handleToggleWidth}
        onMoveLeft={handleMoveLeft}
        onMoveRight={handleMoveRight}
      >
        <WidgetContentRenderer widget={widget} />
      </WidgetFrame>
    </motion.div>
  );
});

SortableWidget.displayName = "SortableWidget";
