import { useFilterStore } from "@/features/dashboard-filter/model/useFilterStore";
import { useDashboardStore } from "./useDashboardStore";
import { useMemoStore } from "@/features/memo-widget/model/useMemoStore";
import { useTodoStore } from "@/features/todo-widget/model/useTodoStore";
import { useDDayStore } from "@/features/dday-widget/model/useDDayStore";
import { useMemo } from "react";
import { isWithinDateRange } from "../lib/isWithinDateRange";
import { Widget } from "@/entities/widget/model/types";

export const useFilteredWidgets = (targetWidgets?: Widget[]) => {
  const { widgets: storeWidgets } = useDashboardStore();
  const widgetsToFilter = targetWidgets ?? storeWidgets;
  const {
    searchQuery,
    selectedWidgetType,
    todoStatus,
    datePreset,
    startDate,
    endDate,
  } = useFilterStore();
  const { memos } = useMemoStore();
  const { todosByWidgetId } = useTodoStore();
  const { ddays } = useDDayStore();

  const filteredWidgets = useMemo(() => {
    return widgetsToFilter.filter((widget) => {
      if (selectedWidgetType !== "all" && widget.type !== selectedWidgetType) {
        return false;
      }

      if (
        !isWithinDateRange(widget.createdAt, datePreset, startDate, endDate)
      ) {
        return false;
      }

      if (widget.type === "todo" && todoStatus !== "all") {
        const widgetTodos = todosByWidgetId[widget.id] || [];
        if (widgetTodos.length > 0) {
          const hasMathingTodo = widgetTodos.some((t) =>
            todoStatus === "active" ? !t.completed : t.completed,
          );
          if (!hasMathingTodo) return false;
        }
      }

      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const titleMatch = widget.title.toLowerCase().includes(query);

        let contentMatch = false;

        if (widget.type === "memo") {
          const memoContent = memos[widget.id]?.content ?? "";
          contentMatch = memoContent.toLowerCase().includes(query);
        } else if (widget.type === "todo") {
          const widgetTodos = todosByWidgetId[widget.id] || [];
          contentMatch = widgetTodos.some((t) =>
            t.text.toLowerCase().includes(query),
          );
        } else if (widget.type === "dday") {
          const widgetDDays = ddays[widget.id] || [];
          contentMatch = widgetDDays.some((d) =>
            d.title.toLowerCase().includes(query),
          );
        }

        return titleMatch || contentMatch;
      }

      return true;
    });
  }, [
    widgetsToFilter,
    selectedWidgetType,
    todoStatus,
    datePreset,
    startDate,
    endDate,
    searchQuery,
    memos,
    todosByWidgetId,
    ddays,
  ]);

  return { filteredWidgets };
};
