"use client";

import { DashboardFilterBar } from "@/features/dashboard-filter/ui/DashboardFilterBar";
import { useMemoStore } from "@/features/memo-widget/model/useMemoStore";
import { useTodoStore } from "@/features/todo-widget/model/useTodoStore";
import { Button } from "@/shared/ui/button";
import { Modal } from "@/shared/ui/modal";
import { useDashboardStore } from "@/widgets/dashboard-grid/model/useDashboardStore";
import { DashboardGrid } from "@/widgets/dashboard-grid/ui/DashboardGrid";
import { ActiveWidgetCounter } from "@/widgets/dashboard/ui/ActiveWidgetCounter";
import { DashboardHeader } from "@/widgets/dashboard/ui/DashboardHeader";
import { useCallback, useState } from "react";

export default function DashboardPage() {
  const resetDashboard = useDashboardStore((s) => s.resetDashboard);
  const resetAllTodos = useTodoStore((s) => s.resetAllTodos);
  const resetAllMemos = useMemoStore((s) => s.resetAllMemos);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  const handleOpenResetModal = useCallback(() => {
    setIsResetModalOpen(true);
  }, []);

  const handleCloseResetModal = useCallback(() => {
    setIsResetModalOpen(false);
  }, []);

  const handleConfirmReset = useCallback(() => {
    resetDashboard();
    resetAllTodos();
    resetAllMemos();
    setIsResetModalOpen(false);
  }, [resetDashboard, resetAllTodos, resetAllMemos]);

  return (
    <div className="min-h-screen bg-muted/20 text-foreground flex flex-col">
      <DashboardHeader onOpenResetModal={handleOpenResetModal} />

      <DashboardFilterBar />

      <main className="flex-1 max-w-[1800px] w-full mx-auto p-4 sm:p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-1">
          <div className="space-y-1">
            <h1 className="text-2xl font-extrabold tracking-tight">
              내 워크스페이스
            </h1>
            <p className="text-xs text-muted-foreground flex items-center gap-1.5 flex-wrap">
              <span>위젯을 자유롭게 드래그하여 배치해보세요.</span>
              <span className="hidden sm:inline-block">•</span>
              <span className="hidden sm:inline-flex items-center gap-1">
                빠른 명령 실행:
                <kbd className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono font-medium text-muted-foreground bg-background border rounded shadow-2xs">
                  ⌘K
                </kbd>
                또는
                <kbd className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono font-medium text-muted-foreground bg-background border rounded shadow-2xs">
                  Ctrl+K
                </kbd>
              </span>
            </p>
          </div>

          <ActiveWidgetCounter />
        </div>

        <section className="min-h-[500px]">
          <DashboardGrid />
        </section>
      </main>

      <Modal
        isOpen={isResetModalOpen}
        onClose={handleCloseResetModal}
        title="대시보드 초기화"
        description="배치된 모든 위젯과 할 일 데이터가 삭제됩니다. 계속 진행하시겠습니까?"
        footer={
          <>
            <Button variant="outline" size="md" onClick={handleCloseResetModal}>
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
