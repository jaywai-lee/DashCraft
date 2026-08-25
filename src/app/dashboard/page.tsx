"use client";

import { useTodoStore } from "@/features/todo-widget/model/useTodoStore";
import { useDashboardStore } from "@/widgets/dashboard-grid/model/useDashboardStore";
import { DashboardGrid } from "@/widgets/dashboard-grid/ui/DashboardGrid";
import { CheckSquare, LayoutGrid, Plus, RotateCcw } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const { widgets, addWidget, resetDashboard } = useDashboardStore();
  const { resetAllTodos } = useTodoStore();

  const handleAddTodoWidget = () => {
    addWidget({
      type: "todo",
      title: "할 일 목록",
      layout: { id: "", x: 0, y: 0, w: 1, h: 1 },
    });
  };

  const handleReset = () => {
    if (confirm("대시보드를 초기 상태로 리셋하시겠습니까?")) {
      resetDashboard();
      resetAllTodos();
    }
  };

  return (
    <div className="min-h-screen bg-muted/20 text-foreground flex flex-col">
      <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-40 px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="p-1.5 bg-primary text-primary-foreground rounded-lg">
              <LayoutGrid className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight">DashCraft</span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors shadow-2xs"
            title="대시보드 초기화"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">초기화</span>
          </button>

          <button
            onClick={handleAddTodoWidget}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Todo 위젯 추가</span>
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-1">
          <div className="space-y-1">
            <h1 className="text-2xl font-extrabold tracking-tight">
              내 워크스페이스
            </h1>
            <p className="text-xs text-muted-foreground">
              위젯을 자유롭게 드래그하여 배치하고, 크기와 이름을 변경해보세요.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground bg-background border px-3 py-1.5 rounded-lg w-fit shadow-2xs">
            <CheckSquare className="w-4 h-4 text-primary" />
            <span>
              활성 위젯{" "}
              <strong className="text-foreground font-semibold">
                {widgets.length}
              </strong>
              개
            </span>
          </div>
        </div>

        <section className="min-h-[500px]">
          <DashboardGrid />
        </section>
      </main>
    </div>
  );
}
