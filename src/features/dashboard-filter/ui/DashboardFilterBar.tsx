import { RotateCcw } from "lucide-react";
import { useFilterStore } from "../model/useFilterStore";
import { Button } from "@/shared/ui/button";
import { FilterSearchInput } from "./FilterSearchInput";
import { WidgetTypeFilterGroup } from "./WidgetTypeFilterGroup";
import { TodoStatusFilterGroup } from "./TodoStatusFilterGroup";

export const DashboardFilterBar = () => {
  const {
    isOpen,
    searchQuery,
    selectedWidgetType,
    todoStatus,
    setSearchQuery,
    setSelectedWidgetType,
    setTodoStatus,
    resetFilter,
  } = useFilterStore();

  if (!isOpen) return null;

  return (
    <div className="bg-background/95 backdrop-blur border-b p-4 animate-in slide-in-from-top duration-200">
      <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        <FilterSearchInput value={searchQuery} onChange={setSearchQuery} />

        <div className="flex flex-wrap items-center gap-2">
          <WidgetTypeFilterGroup
            selectedType={selectedWidgetType}
            onSelect={setSelectedWidgetType}
          />
          <TodoStatusFilterGroup status={todoStatus} onSelect={setTodoStatus} />

          <Button
            variant="ghost"
            size="sm"
            onClick={resetFilter}
            className="h-8 px-2 text-xs text-muted-foreground hover:text-foreground gap-1"
            title="필터 조건 초기화"
          >
            <RotateCcw className="w-3 h-3" />
            <span>초기화</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
