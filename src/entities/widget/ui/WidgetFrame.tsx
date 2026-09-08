"use client";

import { useDashboardStore } from "@/widgets/dashboard-grid/model/useDashboardStore";
import React, { memo, useCallback } from "react";
import { WidgetColor } from "../model/types";
import { cn } from "@/shared/lib/utils";
import { COLOR_THEMES } from "../model/constants";
import { WidgetTitleInput } from "./WidgetTitleInput";
import { WidgetHeaderActions } from "./WidgetHeaderActions";
import { DraggableAttributes } from "@dnd-kit/core";
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";

interface DragHandleProps {
  attributes: DraggableAttributes;
  listeners: SyntheticListenerMap | undefined;
}

interface WidgetFrameProps {
  id: string;
  title: string;
  color?: WidgetColor;
  width?: number;
  children: React.ReactNode;
  dragHandleProps?: DragHandleProps;
  onRemove?: (id: string) => void;
}

export const WidgetFrame = memo(
  ({
    id,
    title,
    color = "default",
    width = 1,
    children,
    dragHandleProps,
    onRemove,
  }: WidgetFrameProps) => {
    const removeWidget = useDashboardStore((s) => s.removeWidget);
    const toggleWidgetWidth = useDashboardStore((s) => s.toggleWidgetWidth);
    const updateWidgetTitle = useDashboardStore((s) => s.updateWidgetTitle);
    const updateWidgetColor = useDashboardStore((s) => s.updateWidgetColor);

    const currentTheme = COLOR_THEMES[color] || COLOR_THEMES.default;

    const handleRemove = useCallback(() => {
      if (onRemove) {
        onRemove(id);
      } else {
        removeWidget(id);
      }
    }, [id, onRemove, removeWidget]);

    const handleUpdateTitle = useCallback(
      (newTitle: string) => {
        updateWidgetTitle(id, newTitle);
      },
      [id, updateWidgetTitle],
    );

    const handleSelectColor = useCallback(
      (newColor: WidgetColor) => {
        updateWidgetColor(id, newColor);
      },
      [id, updateWidgetColor],
    );

    const handleToggleWidth = useCallback(() => {
      toggleWidgetWidth(id);
    }, [id, toggleWidgetWidth]);

    return (
      <div
        className={cn(
          "relative flex flex-col w-full bg-card text-card-foreground rounded-xl border shadow-sm transition-all duration-200",
          width === 2
            ? "h-auto min-h-[380px] sm:h-[580px] sm:row-span-2"
            : "h-auto min-h-[280px] sm:h-[280px]",
          currentTheme.border,
        )}
      >
        <div className={cn("h-1 w-full shrink-0", currentTheme.accentBg)} />

        <div
          {...dragHandleProps?.attributes}
          {...dragHandleProps?.listeners}
          className={cn(
            "flex items-center justify-between px-4 py-2 bg-muted/50 border-b cursor-grab active:cursor-grabbing select-none h-11 transition-colors touch-pan-y",
            currentTheme.bg,
          )}
        >
          <div className="flex items-center gap-1.5 flex-1 mr-2 overflow-hidden">
            <WidgetTitleInput title={title} onUpdateTitle={handleUpdateTitle} />
          </div>

          <div>
            <WidgetHeaderActions
              color={color}
              width={width}
              onSelectColor={handleSelectColor}
              onToggleWidth={handleToggleWidth}
              onRemove={handleRemove}
            />
          </div>
        </div>

        <div className="flex-1 p-4 overflow-visible sm:overflow-hidden flex flex-col min-h-0">
          {children}
        </div>
      </div>
    );
  },
  (prev, next) =>
    prev.id === next.id &&
    prev.title === next.title &&
    prev.color === next.color &&
    prev.width === next.width &&
    prev.dragHandleProps?.attributes === next.dragHandleProps?.attributes &&
    prev.dragHandleProps?.listeners === next.dragHandleProps?.listeners,
);

WidgetFrame.displayName = "WidgetFrame";
