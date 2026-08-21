"use client";

import { useTodoStore } from "@/features/todo-widget/model/useTodoStore";
import { useDashboardStore } from "@/widgets/dashboard-grid/model/useDashboardStore";
import { Check, Edit2, Maximize2, Minimize2, X } from "lucide-react";
import React, { useState } from "react";

interface WidgetFrameProps {
  id: string;
  title: string;
  width?: number;
  children: React.ReactNode;
}

export const WidgetFrame = ({
  id,
  title,
  width = 1,
  children,
}: WidgetFrameProps) => {
  const { removeWidget, toggleWidgetWidth, updateWidgetTitle } =
    useDashboardStore();
  const { removeWidgetTodos } = useTodoStore();

  const [isEditing, setIsEditing] = useState(false);
  const [inputTitle, setInputTitle] = useState(title);

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

  return (
    <div className="flex flex-col h-full bg-card text-card-foreground rounded-xl border shadow-sm overflow-hidden min-h-[180px]">
      <div className="flex items-center justify-between px-4 py-2.5 bg-muted/50 border-b cursor-grab active:cursor-grabbing select-none h-11">
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
          className="flex items-center gap-1 shrink-0"
          onPointerDown={(e) => e.stopPropagation()}
        >
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
