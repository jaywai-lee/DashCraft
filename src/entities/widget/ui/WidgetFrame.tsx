"use client";

import { useTodoStore } from "@/features/todo-widget/model/useTodoStore";
import { useDashboardStore } from "@/widgets/dashboard-grid/model/useDashboardStore";
import React from "react";
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
}

export const WidgetFrame = ({
  id,
  title,
  color = "default",
  width = 1,
  children,
  dragHandleProps,
}: WidgetFrameProps) => {
  const {
    removeWidget,
    toggleWidgetWidth,
    updateWidgetTitle,
    updateWidgetColor,
  } = useDashboardStore();
  const { removeWidgetTodos } = useTodoStore();

  const currentTheme = COLOR_THEMES[color] || COLOR_THEMES.default;

  const handleRemove = () => {
    removeWidget(id);
    removeWidgetTodos(id);
  };

  return (
    <div
      className={cn(
        "relative flex flex-col w-full bg-card text-card-foreground rounded-xl border shadow-sm overflow-hidden transition-all duration-200",
        width === 2 ? "h-[280px] md:h-[580px] md:row-span-2" : "h-[280px]",
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
          <WidgetTitleInput
            title={title}
            onUpdateTitle={(newTitle) => updateWidgetTitle(id, newTitle)}
          />
        </div>

        <WidgetHeaderActions
          color={color}
          width={width}
          onSelectColor={(newColor) => updateWidgetColor(id, newColor)}
          onToggleWidth={() => toggleWidgetWidth(id)}
          onRemove={handleRemove}
        />
      </div>

      <div
        className="flex-1 p-4 overflow-auto"
        onPointerDown={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
