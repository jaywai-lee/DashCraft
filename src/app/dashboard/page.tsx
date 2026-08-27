"use client";

import { useTodoStore } from "@/features/todo-widget/model/useTodoStore";
import { Button } from "@/shared/ui/button";
import { Modal } from "@/shared/ui/modal";
import { useDashboardStore } from "@/widgets/dashboard-grid/model/useDashboardStore";
import { DashboardGrid } from "@/widgets/dashboard-grid/ui/DashboardGrid";
import {
  Calendar,
  CheckSquare,
  Clock,
  LayoutGrid,
  Plus,
  RotateCcw,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DashboardPage() {
  const { widgets, addWidget, resetDashboard } = useDashboardStore();
  const { resetAllTodos } = useTodoStore();
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  const handleAddTodoWidget = () => {
    addWidget({
      type: "todo",
      title: "할 일 목록",
      layout: { id: "", x: 0, y: 0, w: 1, h: 1 },
    });
  };

  const handleAddClockWidget = () => {
    addWidget({
      type: "clock",
      title: "시계 & 타이머",
      layout: { id: "", x: 0, y: 0, w: 1, h: 1 },
    });
  };

  const handleAddDDayWidget = () => {
    addWidget({
      type: "dday",
      title: "D-Day 카운트다운",
      layout: { id: "", x: 0, y: 0, w: 1, h: 1 },
    });
  };

  const handleConfirmReset = () => {
    resetDashboard();
    resetAllTodos();
    setIsResetModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-muted/20 text-foreground flex flex-col">
      <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-40 px-3 sm:px-6 py-2 sm:py-0 sm:h-16 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-0">
        <div className="flex items-center justify-center w-full sm:w-auto">
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

        <div className="grid grid-cols-4 sm:flex items-center gap-1.5 sm:gap-2 w-full sm:w-auto">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsResetModalOpen(true)}
            title="대시보드 초기화"
            className="w-full sm:w-auto px-2 justify-center"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">초기화</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={handleAddClockWidget}
            className="w-full sm:w-auto px-2 justify-center"
          >
            <Clock className="w-4 h-4 text-primary" />
            <span className="hidden md:inline">시계 추가</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={handleAddDDayWidget}
            className="w-full sm:w-auto px-2 justify-center"
          >
            <Calendar className="w-4 h-4 text-primary" />
            <span className="hidden md:inline">D-Day 추가</span>
          </Button>

          <Button
            variant="primary"
            size="sm"
            onClick={handleAddTodoWidget}
            className="w-full sm:w-auto px-2 justify-center"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden md:inline">위젯 추가</span>
          </Button>
        </div>
      </header>

      {/* 메인 영역 */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-6 space-y-4 sm:space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 px-1">
          <div className="space-y-0.5">
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              내 워크스페이스
            </h1>
            <p className="text-[11px] sm:text-xs text-muted-foreground">
              위젯을 자유롭게 드래그하여 배치하고, 크기와 이름을 변경해보세요.
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-background border px-2.5 py-1 rounded-lg w-fit shadow-2xs">
            <CheckSquare className="w-3.5 h-3.5 text-primary" />
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

      <Modal
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        title="대시보드 초기화"
        description="배치된 모든 위젯과 할 일 데이터가 삭제됩니다. 계속 진행하시겠습니까?"
        footer={
          <>
            <Button
              variant="outline"
              size="md"
              onClick={() => setIsResetModalOpen(false)}
            >
              취소
            </Button>
            <Button variant="danger" size="md" onClick={handleConfirmReset}>
              초기화
            </Button>
          </>
        }
      >
        <p className="text-xs text-muted-foreground">
          이 작업은 되돌릴 수 없으며, 로컬 저장소에 보관된 대시보드 상태가 초기
          상태로 되돌아갑니다.
        </p>
      </Modal>
    </div>
  );
}
