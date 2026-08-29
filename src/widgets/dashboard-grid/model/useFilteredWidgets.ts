import { useFilterStore } from "@/features/dashboard-filter/model/useFilterStore";
import { useDashboardStore } from "./useDashboardStore";
import { useMemoStore } from "@/features/memo-widget/model/useMemoStore";
import { useTodoStore } from "@/features/todo-widget/model/useTodoStore";
import { useDDayStore } from "@/features/dday-widget/model/useDDayStore";
import { useMemo } from "react";

export const useFilteredWidgets = () => {
  const { widgets } = useDashboardStore();
  const { searchQuery, selectedWidgetType } = useFilterStore();
  const { memos } = useMemoStore();
  const { todosByWidgetId } = useTodoStore();
  const { ddays } = useDDayStore();

  const filteredWidgets = useMemo(() => {
    return widgets.filter((widget) => {
      if (selectedWidgetType !== "all" && widget.type !== selectedWidgetType) {
        return false;
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
  }, [widgets, selectedWidgetType, searchQuery, memos, todosByWidgetId, ddays]);

  return { widgets, filteredWidgets };
};
