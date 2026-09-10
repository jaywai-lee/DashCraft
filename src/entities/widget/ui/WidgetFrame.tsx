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
import { GripVertical } from "lucide-react";

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
    const moveWidget = useDashboardStore((s) => s.moveWidget);
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

    const handleMoveLeft = useCallback(
      (targetId: string) => {
        moveWidget(targetId, "left");
      },
      [moveWidget],
    );

    const handleMoveRight = useCallback(
      (targetId: string) => {
        moveWidget(targetId, "right");
      },
      [moveWidget],
    );

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
          "relative flex flex-col w-full bg-card text-card-foreground rounded-xl border shadow-sm transition-all duration-200 overflow-hidden",
          width === 2
            ? "h-auto min-h-[380px] sm:h-[580px] sm:row-span-2"
            : "h-auto min-h-[280px] sm:h-[280px]",
          currentTheme.border,
        )}
      >
        <div className={cn("h-1 w-full shrink-0", currentTheme.accentBg)} />

        <div
          className={cn(
            "flex items-center px-3 py-1.5 bg-muted/40 border-b select-none h-11 transition-colors touch-pan-y w-full",
            currentTheme.bg,
          )}
        >
          <div className="flex items-center gap-1 flex-1 min-w-0 mr-2 overflow-hidden">
            <button
              type="button"
              {...dragHandleProps?.attributes}
              {...dragHandleProps?.listeners}
              aria-label={`${title} 위젯 순서 이동`}
              className="p-1 rounded-md text-muted-foreground/70 hover:text-foreground cursor-grab active:cursor-grabbing outline-none focus-visible:ring-2 focus-visible:ring-primary shrink-0 transition-colors"
            >
              <GripVertical className="w-4 h-4" />
            </button>

            <div className="flex-1 min-w-0">
              <WidgetTitleInput
                title={title}
                onUpdateTitle={handleUpdateTitle}
              />
            </div>
          </div>

          <WidgetHeaderActions
            id={id}
            color={color}
            width={width}
            onMoveLeft={handleMoveLeft}
            onMoveRight={handleMoveRight}
            onSelectColor={handleSelectColor}
            onToggleWidth={handleToggleWidth}
            onRemove={handleRemove}
          />
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
