"use client";

import { useFilterStore } from "@/features/dashboard-filter/model/useFilterStore";
import { Button } from "@/shared/ui/button";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "@/shared/ui/dropdown/Dropdown";
import { ThemeToggle } from "@/shared/ui/theme-toggle/ThemeToggle";
import {
  WIDGET_CONFIG_MAP,
  WIDGET_OPTIONS,
  WidgetType,
} from "@/widgets/dashboard-grid/config/widgets.config";
import { useDashboardStore } from "@/widgets/dashboard-grid/model/useDashboardStore";
import {
  CalendarIcon,
  ChevronDown,
  LayoutGrid,
  Plus,
  RotateCcw,
  Search,
} from "lucide-react";
import Link from "next/link";
import { memo, useCallback } from "react";

interface DashboardHeaderProps {
  onOpenResetModal: () => void;
}

export const DashboardHeader = memo(
  ({ onOpenResetModal }: DashboardHeaderProps) => {
    const addWidget = useDashboardStore((s) => s.addWidget);
    const toggleFilter = useFilterStore((s) => s.toggleFilter);
    const isOpen = useFilterStore((s) => s.isOpen);
    const searchQuery = useFilterStore((s) => s.searchQuery);
    const selectedWidgetType = useFilterStore((s) => s.selectedWidgetType);
    const todoStatus = useFilterStore((s) => s.todoStatus);

    const isFilterActive =
      searchQuery !== "" ||
      selectedWidgetType !== "all" ||
      todoStatus !== "all";

    const handleAddWidget = useCallback(
      (type: WidgetType) => {
        const config = WIDGET_CONFIG_MAP[type];
        if (!config) return;

        addWidget({
          type: config.type,
          title: config.title,
          layout: { id: "", x: 0, y: 0, w: 1, h: 1 },
        });
      },
      [addWidget],
    );

    return (
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
          <Link href="/calendar" className="flex-1 sm:flex-initial">
            <Button
              variant="outline"
              size="sm"
              className="w-full h-8 px-2.5 sm:px-3 text-xs gap-1.5 cursor-pointer"
              title="일정 캘린더 보기"
            >
              <CalendarIcon className="w-3.5 h-3.5 text-primary" />
              <span>캘린더</span>
            </Button>
          </Link>

          <Button
            variant={isOpen ? "primary" : "outline"}
            size="sm"
            onClick={toggleFilter}
            className="relative flex-1 sm:flex-initial h-8 px-2.5 sm:px-3 text-xs gap-1.5"
            title="검색 및 필터 (Cmd+K / Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span>검색 & 필터</span>
            <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground ml-1">
              <span className="text-[9px]">⌘</span>K
            </kbd>

            {isFilterActive && (
              <span className="w-2 h-2 rounded-full bg-primary absolute -top-0.5 -right-0.5 ring-2 ring-background" />
            )}
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={onOpenResetModal}
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
    );
  },
);

DashboardHeader.displayName = "DashboardHeader";
