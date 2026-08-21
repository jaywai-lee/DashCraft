"use client";

import { useTodoStore } from "@/features/todo-widget/model/useTodoStore";
import { useDashboardStore } from "@/widgets/dashboard-grid/model/useDashboardStore";
import { Maximize2, Minimize2, X } from "lucide-react";

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
  const { removeWidget, toggleWidgetWidth } = useDashboardStore();
  const { removeWidgetTodos } = useTodoStore();

  const handleRemove = () => {
    removeWidget(id);
    removeWidgetTodos(id);
  };

  return (
    <div className="flex flex-col h-full bg-card text-card-foreground rounded-xl border shadow-sm overflow-hidden min-h-[180px]">
      <div className="flex items-center justify-between px-4 py-2.5 bg-muted/50 border-b cursor-grab active:cursor-grabbing select-none">
        <span className="font-semibold text-sm">{title}</span>
        <div className="flex items-center gap-1">
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
