"use client";

import { RotateCcw } from "lucide-react";
import { useFilterStore } from "../model/useFilterStore";
import { Button } from "@/shared/ui/button";
import { FilterSearchInput } from "./FilterSearchInput";
import { WidgetTypeFilterGroup } from "./WidgetTypeFilterGroup";
import { TodoStatusFilterGroup } from "./TodoStatusFilterGroup";
import { DateRangeFilterGroup } from "./DateRangeFilterGroup";

export const DashboardFilterBar = () => {
  const {
    isOpen,
    searchQuery,
    selectedWidgetType,
    todoStatus,
    datePreset,
    startDate,
    endDate,
    setSearchQuery,
    setSelectedWidgetType,
    setTodoStatus,
    setDatePreset,
    setCustomDateRange,
    resetFilter,
  } = useFilterStore();

  if (!isOpen) return null;

  return (
    <div className="bg-background/95 backdrop-blur border-b p-3 sm:p-4 animate-in slide-in-from-top duration-200">
      <div className="max-w-[1800px] mx-auto flex flex-col gap-3">
        <FilterSearchInput value={searchQuery} onChange={setSearchQuery} />

        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide w-full">
          <WidgetTypeFilterGroup
            selectedType={selectedWidgetType}
            onSelect={setSelectedWidgetType}
          />
          <TodoStatusFilterGroup status={todoStatus} onSelect={setTodoStatus} />

          <DateRangeFilterGroup
            datePreset={datePreset}
            startDate={startDate}
            endDate={endDate}
            onSelectPreset={setDatePreset}
            onChangeCustomRange={setCustomDateRange}
          />

          <Button
            variant="ghost"
            size="sm"
            onClick={resetFilter}
            className="h-8 px-2 text-xs text-muted-foreground hover:text-foreground gap-1"
            title="필터 조건 초기화"
          >
            <RotateCcw className="w-3 h-3" />
            <span className="hidden sm:inline">초기화</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
