"use client";

import { useMemoStore } from "@/features/memo-widget/model/useMemoStore";
import { useTodoStore } from "@/features/todo-widget/model/useTodoStore";
import { Button } from "@/shared/ui/button";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "@/shared/ui/dropdown/Dropdown";
import { Modal } from "@/shared/ui/modal";
import {
  WIDGET_CONFIG_MAP,
  WIDGET_OPTIONS,
  WidgetType,
} from "@/widgets/dashboard-grid/config/widgets.config";
import { useDashboardStore } from "@/widgets/dashboard-grid/model/useDashboardStore";
import { DashboardGrid } from "@/widgets/dashboard-grid/ui/DashboardGrid";
import {
  CheckSquare,
  ChevronDown,
  LayoutGrid,
  Plus,
  RotateCcw,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DashboardPage() {
  const { widgets, addWidget, resetDashboard } = useDashboardStore();
  const { resetAllTodos } = useTodoStore();
  const { resetAllMemos } = useMemoStore();
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  const handleAddWidget = (type: WidgetType) => {
    const config = WIDGET_CONFIG_MAP[type];
    if (!config) return;

    addWidget({
      type: config.type,
      title: config.title,
      layout: { id: "", x: 0, y: 0, w: 1, h: 1 },
    });
  };

  const handleConfirmReset = () => {
    resetDashboard();
    resetAllTodos();
    resetAllMemos();
    setIsResetModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-muted/20 text-foreground flex flex-col">
      <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-40 px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="p-1.5 bg-primary text-primary-foreground rounded-lg">
            <LayoutGrid className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg tracking-tight">DashCraft</span>
        </Link>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="md"
            onClick={() => setIsResetModalOpen(true)}
            title="대시보드 초기화"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">초기화</span>
          </Button>

          <Dropdown>
            <DropdownTrigger>
              <Button variant="primary" size="md" className="gap-1.5">
                <Plus className="w-4 h-4" />
                <span>위젯 추가</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </Button>
            </DropdownTrigger>

            <DropdownContent align="right">
              {WIDGET_OPTIONS.map((item) => {
                const Icon = item.icon;
                return (
                  <DropdownItem
                    key={item.type}
                    onClick={() => handleAddWidget(item.type)}
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    <span>{item.title}</span>
                  </DropdownItem>
                );
              })}
            </DropdownContent>
          </Dropdown>
        </div>
      </header>

      <main className="flex-1 max-w-[1800px] w-full mx-auto p-4 sm:p-6 space-y-6">
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
