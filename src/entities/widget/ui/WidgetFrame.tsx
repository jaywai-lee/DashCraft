"use client";

import { useTodoStore } from "@/features/todo-widget/model/useTodoStore";
import { useDashboardStore } from "@/widgets/dashboard-grid/model/useDashboardStore";
import { Check, Edit2, Maximize2, Minimize2, Palette, X } from "lucide-react";
import React, { useState } from "react";
import { WidgetColor } from "../model/types";
import { cn } from "@/shared/lib/utils";

interface WidgetFrameProps {
  id: string;
  title: string;
  color?: WidgetColor;
  width?: number;
  children: React.ReactNode;
}

const COLOR_THEMES: Record<
  WidgetColor,
  { label: string; bg: string; border: string; accentBg: string }
> = {
  default: {
    label: "기본",
    bg: "bg-muted/50",
    border: "border-border",
    accentBg: "bg-primary",
  },
  blue: {
    label: "블루",
    bg: "bg-blue-50/50 dark:bg-blue-950/20",
    border: "border-blue-200 dark:border-blue-800",
    accentBg: "bg-blue-500",
  },
  green: {
    label: "그린",
    bg: "bg-emerald-50/50 dark:bg-emerald-950/20",
    border: "border-emerald-200 dark:border-emerald-800",
    accentBg: "bg-emerald-500",
  },
  yellow: {
    label: "옐로우",
    bg: "bg-amber-50/50 dark:bg-amber-950/20",
    border: "border-amber-200 dark:border-amber-800",
    accentBg: "bg-amber-500",
  },
  purple: {
    label: "퍼플",
    bg: "bg-purple-50/50 dark:bg-purple-950/20",
    border: "border-purple-200 dark:border-purple-800",
    accentBg: "bg-purple-500",
  },
  red: {
    label: "레드",
    bg: "bg-rose-50/50 dark:bg-rose-950/20",
    border: "border-rose-200 dark:border-rose-800",
    accentBg: "bg-rose-500",
  },
};

export const WidgetFrame = ({
  id,
  title,
  color = "default",
  width = 1,
  children,
}: WidgetFrameProps) => {
  const {
    removeWidget,
    toggleWidgetWidth,
    updateWidgetTitle,
    updateWidgetColor,
  } = useDashboardStore();
  const { removeWidgetTodos } = useTodoStore();

  const [isEditing, setIsEditing] = useState(false);
  const [inputTitle, setInputTitle] = useState(title);
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

  const currentTheme = COLOR_THEMES[color] || COLOR_THEMES.default;

  const handleStartEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    setInputTitle(title);
    setIsEditing(true);
  };

  const handleRemove = () => {
    removeWidget(id);
    removeWidgetTodos(id);
  };

  const handleTitleSubmit = () => {
    const trimmed = inputTitle.trim();
    if (trimmed) {
      updateWidgetTitle(id, trimmed);
    } else {
      setInputTitle(title);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (e.key === "Enter") {
      handleTitleSubmit();
    } else if (e.key === "Escape") {
      setInputTitle(title);
      setIsEditing(false);
    }
  };

  const handleSelectColor = (selectedColor: WidgetColor) => {
    updateWidgetColor(id, selectedColor);
    setIsColorPickerOpen(false);
  };

  return (
    <div
      className={cn(
        "relative flex flex-col h-full bg-card text-card-foreground rounded-xl border shadow-sm overflow-hidden min-h-[180px] transition-colors duration-200",
        currentTheme.border,
      )}
    >
      <div className={cn("h-1 w-full shrink-0", currentTheme.accentBg)} />

      <div
        className={cn(
          "flex items-center justify-between px-4 py-2 bg-muted/50 border-b cursor-grab active:cursor-grabbing select-none h-11 transition-colors",
          currentTheme,
        )}
      >
        <div className="flex items-center gap-1.5 flex-1 mr-2 overflow-hidden">
          {isEditing ? (
            <div
              className="flex items-center gap-1 w-full max-w-[220px]"
              onPointerDown={(e) => e.stopPropagation()}
            >
              <input
                type="text"
                value={inputTitle}
                onChange={(e) => setInputTitle(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={handleTitleSubmit}
                autoFocus
                className="px-1 py-0.5 text-sm font-semibold text-foreground bg-background border border-primary rounded outline-none focus:ring-1 focus:ring-primary w-full transition-all"
              />
              <button
                type="button"
                onClick={handleTitleSubmit}
                className="p-1 hover:bg-accent rounded text-primary shrink-0"
              >
                <Check className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div
              onDoubleClick={handleStartEdit}
              className="flex items-center gap-1.5 cursor-pointer group truncate max-w-full"
              title="더블클릭 또는 연필 버튼으로 이름 변경"
            >
              <h3 className="font-semibold text-sm truncate py-0.5 px-1">
                {title}
              </h3>
              <button
                type="button"
                onClick={handleStartEdit}
                className="p-0.5 hover:bg-accent rounded opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Edit2 className="w-3 h-3 text-muted-foreground shrink-0" />
              </button>
            </div>
          )}
        </div>

        <div
          className="relative flex items-center gap-1 shrink-0"
          onPointerDown={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsColorPickerOpen((prev) => !prev)}
            className="p-1 hover:bg-accent rounded-md text-muted-foreground hover:text-foreground transition-colors"
            title="위젯 색상 변경"
          >
            <Palette className="w-3.5 h-3.5" />
          </button>

          {isColorPickerOpen && (
            <div className="absolute top-8 right-0 z-50 p-2 bg-background border rounded-xl shadow-xl flex items-center gap-1.5 animate-in zoom-in-95 duration-150">
              {(Object.keys(COLOR_THEMES) as WidgetColor[]).map((themeKey) => (
                <button
                  key={themeKey}
                  onClick={() => handleSelectColor(themeKey)}
                  className={cn(
                    "w-5 h-5 rounded-full border transition-transform hover:scale-110 flex items-center justify-center",
                    COLOR_THEMES[themeKey].accentBg,
                    color === themeKey
                      ? "ring-2 ring-primary ring-offset-1 scale-110"
                      : "",
                  )}
                  title={COLOR_THEMES[themeKey].label}
                />
              ))}
            </div>
          )}

          <button
            onClick={() => toggleWidgetWidth(id)}
            className="p-1 hover:bg-accent rounded-md text-muted-foreground hover:text-foreground transition-colors"
            title={width === 1 ? "확대하기 (2x2)" : "축소하기 (1x1)"}
          >
            {width === 1 ? (
              <Maximize2 className="w-3.5 h-3.5" />
            ) : (
              <Minimize2 className="w-3.5 h-3.5" />
            )}
          </button>

          <button
            onClick={handleRemove}
            className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="위젯 삭제"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-auto">{children}</div>
    </div>
  );
};
