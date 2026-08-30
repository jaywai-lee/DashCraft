"use client";

import { useFilterStore } from "@/features/dashboard-filter/model/useFilterStore";
import { DashboardFilterBar } from "@/features/dashboard-filter/ui/DashboardFilterBar";
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
import { ThemeToggle } from "@/shared/ui/theme-toggle/ThemeToggle";
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
  Search,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DashboardPage() {
  const { widgets, addWidget, resetDashboard } = useDashboardStore();
  const { toggleFilter, isOpen, searchQuery, selectedWidgetType, todoStatus } =
    useFilterStore();
  const { resetAllTodos } = useTodoStore();
  const { resetAllMemos } = useMemoStore();
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const isFilterActive =
    searchQuery !== "" || selectedWidgetType !== "all" || todoStatus !== "all";

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
      <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50 px-4 sm:px-6 py-2.5 sm:py-0 sm:h-16 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="p-1.5 bg-primary text-primary-foreground rounded-lg">
              <LayoutGrid className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span className="font-bold text-base sm:text-lg tracking-tight">
              DashCraft
            </span>
          </Link>

          <div className="sm:hidden">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-1.5 sm:gap-2 w-full sm:w-auto pt-1.5 sm:pt-0 border-t sm:border-t-0 border-border/40">
          <Button
            variant={isOpen ? "primary" : "outline"}
            size="sm"
            onClick={toggleFilter}
            className="relative flex-1 sm:flex-initial h-8 px-2.5 sm:px-3 text-xs gap-1.5"
            title="검색 및 필터"
          >
            <Search className="w-3.5 h-3.5" />
            <span>검색 & 필터</span>
            {isFilterActive && (
              <span className="w-2 h-2 rounded-full bg-primary absolute -top-0.5 -right-0.5 ring-2 ring-background" />
            )}
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsResetModalOpen(true)}
            className="flex-1 sm:flex-initial h-8 px-2.5 sm:px-3 text-xs gap-1.5"
            title="대시보드 초기화"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>초기화</span>
          </Button>

          <div className="hidden sm:block">
            <ThemeToggle />
          </div>

          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="primary"
                size="sm"
                className="flex-1 sm:flex-initial h-8 px-2.5 sm:px-3 text-xs gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span className="whitespace-nowrap">위젯 추가</span>
                <ChevronDown className="w-3 h-3" />
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

      <DashboardFilterBar />

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
