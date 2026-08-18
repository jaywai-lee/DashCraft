"use client";

import { useDashboardStore } from "@/widgets/dashboard-grid/model/useDashboardStore";
import { X } from "lucide-react";

interface WidgetFrameProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const WidgetFrame = ({ id, title, children }: WidgetFrameProps) => {
  const removeWidget = useDashboardStore((state) => state.removeWidget);

  return (
    <div className="flex flex-col h-full bg-card text-card-foreground rounded-xl border shadow-sm overflow-hidden min-h-[180px]">
      <div className="flex items-center justify-between px-4 py-2.5 bg-muted/50 border-b cursor-grab active:cursor-grabbing select-none">
        <span className="font-semibold text-sm">{title}</span>
        <button
          onClick={() => removeWidget(id)}
          className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          aria-label="위젯 삭제"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      <div className="flex-1 p-4 overflow-auto">{children}</div>
    </div>
  );
};
