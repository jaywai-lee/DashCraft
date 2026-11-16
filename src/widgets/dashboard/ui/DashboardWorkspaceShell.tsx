"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/shared/ui/button";
import { DashboardHeader } from "./DashboardHeader";
import { useResetDashboardMutation } from "@/widgets/dashboard-grid/api/useDashboardQuery";

const Modal = dynamic(
  () => import("@/shared/ui/modal").then((mod) => mod.Modal),
  { ssr: false },
);

interface DashboardWorkspaceShellProps {
  children: React.ReactNode;
}

export const DashboardWorkspaceShell = ({
  children,
}: DashboardWorkspaceShellProps) => {
  const resetDashboardMutation = useResetDashboardMutation();
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  const handleOpenResetModal = useCallback(() => {
    setIsResetModalOpen(true);
  }, []);

  const handleCloseResetModal = useCallback(() => {
    setIsResetModalOpen(false);
  }, []);

  const handleConfirmReset = useCallback(() => {
    resetDashboardMutation.mutate(undefined, {
      onSuccess: () => {
        setIsResetModalOpen(false);
      },
    });
  }, [resetDashboardMutation]);

  return (
    <>
      <DashboardHeader onOpenResetModal={handleOpenResetModal} />
      {children}
      {isResetModalOpen && (
        <Modal
          isOpen={isResetModalOpen}
          onClose={handleCloseResetModal}
          title="대시보드 초기화"
          description="배치된 모든 위젯과 하위 데이터(할 일, 메모, D-Day 등)가 삭제됩니다. 계속 진행하시겠습니까?"
          footer={
            <>
              <Button
                variant="outline"
                size="md"
                onClick={handleCloseResetModal}
                disabled={resetDashboardMutation.isPending}
              >
                취소
              </Button>
              <Button
                variant="danger"
                size="md"
                onClick={handleConfirmReset}
                isLoading={resetDashboardMutation.isPending}
              >
                초기화
              </Button>
            </>
          }
        >
          <p className="text-xs text-muted-foreground">
            이 작업은 되돌릴 수 없으며, 데이터베이스에 저장된 대시보드의 모든
            위젯이 삭제됩니다.
          </p>
        </Modal>
      )}
    </>
  );
};
