"use client";

import React, { memo, useCallback } from "react";
import { AppHeader } from "@/widgets/header/ui/AppHeader";
import { Button } from "@/shared/ui/button";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "@/shared/ui/dropdown/Dropdown";
import {
  WIDGET_CONFIG_MAP,
  WIDGET_OPTIONS,
  WidgetType,
} from "@/widgets/dashboard-grid/config/widgets.config";
import { useAddWidgetMutation } from "@/widgets/dashboard-grid/api/useDashboardQuery";
import {
  useFilterStore,
  selectIsFilterActive,
} from "@/features/dashboard-filter/model/useFilterStore";
import { ChevronDown, Plus, RotateCcw, Search } from "lucide-react";

interface DashboardHeaderProps {
  onOpenResetModal: () => void;
  userEmail?: string;
  avatarUrl?: string;
}

export const DashboardHeader = memo(
  ({ onOpenResetModal, userEmail, avatarUrl }: DashboardHeaderProps) => {
    const addWidgetMutation = useAddWidgetMutation();
    const toggleFilter = useFilterStore((s) => s.toggleFilter);
    const isOpen = useFilterStore((s) => s.isOpen);
    const isFilterActive = useFilterStore(selectIsFilterActive);

    const handleAddWidget = useCallback(
      (type: WidgetType) => {
        const config = WIDGET_CONFIG_MAP[type];
        if (!config) return;

        addWidgetMutation.mutate({
          type: config.type,
          title: config.title,
          layout_w: 1,
          widgetId: crypto.randomUUID(),
        });
      },
      [addWidgetMutation],
    );

    return (
      <>
        <div className="sticky top-0 z-[100] w-full bg-background/80 backdrop-blur-md border-b">
          <AppHeader userEmail={userEmail} avatarUrl={avatarUrl}>
            <div className="hidden sm:flex items-center gap-2">
              <Button
                variant={isOpen ? "primary" : "outline"}
                size="sm"
                onClick={toggleFilter}
                className="relative h-9 px-3 text-xs gap-1.5 cursor-pointer"
                title="검색 및 필터"
              >
                <Search className="w-4 h-4" />
                <span>검색 & 필터</span>
                {isFilterActive && (
                  <span className="w-2 h-2 rounded-full bg-primary absolute -top-0.5 -right-0.5 ring-2 ring-background" />
                )}
              </Button>

              <Dropdown>
                <DropdownTrigger>
                  <Button
                    variant="primary"
                    size="sm"
                    className="gap-1.5 text-xs h-9 px-3"
                    disabled={addWidgetMutation.isPending}
                  >
                    <Plus className="w-4 h-4" />
                    <span>위젯 추가</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </Button>
                </DropdownTrigger>

                <DropdownContent align="right" className="w-48">
                  {WIDGET_OPTIONS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <DropdownItem
                        key={item.type}
                        onClick={() => handleAddWidget(item.type)}
                      >
                        <Icon className="w-4 h-4 text-primary shrink-0" />
                        <span>{item.title}</span>
                      </DropdownItem>
                    );
                  })}
                </DropdownContent>
              </Dropdown>

              <Button
                variant="ghost"
                size="sm"
                onClick={onOpenResetModal}
                className="h-9 w-9 p-0 text-muted-foreground hover:text-foreground"
                title="대시보드 초기화"
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>
          </AppHeader>

          <div className="flex sm:hidden items-center justify-between px-4 py-2 border-t border-border/40 bg-muted/20 gap-2">
            <Button
              variant={isOpen ? "primary" : "outline"}
              size="sm"
              onClick={toggleFilter}
              className="relative h-8 px-3 text-xs gap-1.5 cursor-pointer"
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
              onClick={onOpenResetModal}
              className="h-8 px-2.5 text-xs gap-1.5 text-muted-foreground hover:text-foreground shrink-0"
              title="대시보드 초기화"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>대시보드 초기화</span>
            </Button>
          </div>
        </div>

        <div className="fixed bottom-6 right-6 sm:hidden z-[90]">
          <Dropdown>
            <DropdownTrigger>
              <button
                type="button"
                disabled={addWidgetMutation.isPending}
                className="w-13 h-13 rounded-full bg-primary text-primary-foreground shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all outline-none focus:ring-4 focus:ring-primary/20 cursor-pointer"
                aria-label="위젯 추가"
              >
                <Plus className="w-6 h-6" />
              </button>
            </DropdownTrigger>

            <DropdownContent
              align="right"
              className="w-48 bottom-full mb-3 right-0 top-auto animate-in fade-in-80 zoom-in-95"
            >
              <div className="px-3 py-1.5 border-b mb-1">
                <p className="text-[10px] text-muted-foreground font-semibold">
                  위젯 추가
                </p>
              </div>
              {WIDGET_OPTIONS.map((item) => {
                const Icon = item.icon;
                return (
                  <DropdownItem
                    key={item.type}
                    onClick={() => handleAddWidget(item.type)}
                  >
                    <Icon className="w-4 h-4 text-primary shrink-0" />
                    <span>{item.title}</span>
                  </DropdownItem>
                );
              })}
            </DropdownContent>
          </Dropdown>
        </div>
      </>
    );
  },
);

DashboardHeader.displayName = "DashboardHeader";
