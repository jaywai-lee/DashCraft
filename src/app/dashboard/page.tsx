"use client";

import { useTodoStore } from "@/features/todo-widget/model/useTodoStore";
import { useDashboardStore } from "@/widgets/dashboard-grid/model/useDashboardStore";
import { DashboardGrid } from "@/widgets/dashboard-grid/ui/DashboardGrid";
import { Plus, RotateCcw } from "lucide-react";

export default function DashboardPage() {
  const { addWidget, resetDashboard } = useDashboardStore();
  const { resetAllTodos } = useTodoStore();

  const handleAddTodoWidget = () => {
    addWidget({
      type: "todo",
      title: "할 일 목록",
      layout: { id: "", x: 0, y: 0, w: 2, h: 2 },
    });
  };

  const handleReset = () => {
    if (confirm("대시보드를 초기 상태로 리셋하시겠습니까?")) {
      resetDashboard();
      resetAllTodos();
    }
  };

  return (
    <main className="min-h-screen bg-background p-6 space-y-6">
      <header className="px-4 flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            DashCraft Workspace
          </h1>
          <p className="text-xs text-muted-foreground">
            위젯을 추가하고 드래그하여 레이아웃을 자유롭게 변경하세요.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            초기화
          </button>

          <button
            onClick={handleAddTodoWidget}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            <Plus className="w-3.5 h-3.5" />
            Todo 위젯 추가
          </button>
        </div>
      </header>

      <section>
        <DashboardGrid />
      </section>
    </main>
  );
}
