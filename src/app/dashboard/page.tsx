"use client";

import { useDashboardStore } from "@/widgets/dashboard-grid/model/useDashboardStore";
import { DashboardGrid } from "@/widgets/dashboard-grid/ui/DashboardGrid";
import { Plus } from "lucide-react";

export default function DashboardPage() {
  const { addWidget } = useDashboardStore();

  const handleAddTodoWidget = () => {
    addWidget({
      type: "todo",
      title: "할 일 목록",
      layout: { id: "", x: 0, y: 0, w: 2, h: 2 },
    });
  };

  return (
    <main className="min-h-screen bg-background p-6 space-y-6">
      {/* 헤더 & 위젯 컨트롤 바 */}
      <header className="px-4 flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            DashCraft Workspace
          </h1>
          <p className="text-xs text-muted-foreground">
            위젯을 추가하고 드래그하여 레이아웃을 자유롭게 변경하세요. (새로고침
            시 저장)
          </p>
        </div>

        {/* 위젯 추가 버튼 영역 */}
        <div className="flex gap-2">
          <button
            onClick={handleAddTodoWidget}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            <Plus className="w-3.5 h-3.5" />
            Todo 위젯 추가
          </button>
        </div>
      </header>

      {/* 대시보드 그리드 */}
      <section>
        <DashboardGrid />
      </section>
    </main>
  );
}
