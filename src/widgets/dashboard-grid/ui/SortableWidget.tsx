"use client";

import { memo, useCallback, useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useSortable, arrayMove } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { motion } from "framer-motion";
import { WidgetFrame } from "@/entities/widget/ui/WidgetFrame";
import { WidgetColor } from "@/entities/widget/model/types";
import { queryKeys } from "@/shared/config/queryKeys";
import { cn } from "@/shared/lib/utils";
import { WidgetContentRenderer } from "./WidgetContentRenderer";
import { WidgetRow } from "../api/dashboardRepository";
import {
  useDeleteWidgetMutation,
  useUpdateWidgetMutation,
  useReorderWidgetsMutation,
} from "../api/useDashboardQuery";

interface SortableWidgetProps {
  widget: WidgetRow;
  onAnnounce?: (message: string) => void;
}

export const SortableWidget = memo(
  ({ widget, onAnnounce }: SortableWidgetProps) => {
    const queryClient = useQueryClient();
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
      onAnnounce?.(
        `${widget.title} 위젯 크기가 ${nextWidth === 2 ? "2x2로 확대" : "1x1로 축소"}되었습니다.`,
      );
    }, [
      updateWidgetMutation,
      widget.widget_id,
      widget.layout_w,
      widget.title,
      onAnnounce,
    ]);

    const handleMoveLeft = useCallback(() => {
      const currentWidgets =
        queryClient.getQueryData<WidgetRow[]>(queryKeys.widgets.list()) ?? [];
      const currentIndex = currentWidgets.findIndex(
        (w) => w.widget_id === widget.widget_id,
      );
      if (currentIndex <= 0) {
        onAnnounce?.(`${widget.title} 위젯은 이미 첫 번째 위치입니다.`);
        return;
      }

      const nextIndex = currentIndex - 1;
      const reordered = arrayMove(currentWidgets, currentIndex, nextIndex);
      reorderWidgetsMutation.mutate(reordered.map((w) => w.widget_id));
      onAnnounce?.(
        `${widget.title} 위젯이 전체 ${currentWidgets.length}개 중 ${nextIndex + 1}번째 위치로 이동했습니다.`,
      );
    }, [
      queryClient,
      widget.widget_id,
      widget.title,
      reorderWidgetsMutation,
      onAnnounce,
    ]);

    const handleMoveRight = useCallback(() => {
      const currentWidgets =
        queryClient.getQueryData<WidgetRow[]>(queryKeys.widgets.list()) ?? [];
      const currentIndex = currentWidgets.findIndex(
        (w) => w.widget_id === widget.widget_id,
      );
      if (currentIndex === -1 || currentIndex >= currentWidgets.length - 1) {
        onAnnounce?.(`${widget.title} 위젯은 이미 마지막 위치입니다.`);
        return;
      }

      const nextIndex = currentIndex + 1;
      const reordered = arrayMove(currentWidgets, currentIndex, nextIndex);
      reorderWidgetsMutation.mutate(reordered.map((w) => w.widget_id));
      onAnnounce?.(
        `${widget.title} 위젯이 전체 ${currentWidgets.length}개 중 ${nextIndex + 1}번째 위치로 이동했습니다.`,
      );
    }, [
      queryClient,
      widget.widget_id,
      widget.title,
      reorderWidgetsMutation,
      onAnnounce,
    ]);

    const dragHandleProps = useMemo(
      () => ({ attributes, listeners }),
      [attributes, listeners],
    );

    return (
      <motion.div
        data-testid={`widget-${widget.widget_id}`}
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
          isDragging ? "z-0 opacity-25" : "z-10 focus-within:z-30 hover:z-20",
          colSpanClass,
        )}
      >
        <WidgetFrame
          id={widget.widget_id}
          title={widget.title}
          color={widget.color as WidgetColor}
          width={widget.layout_w}
          widgetType={widget.type}
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
  },
);

SortableWidget.displayName = "SortableWidget";
