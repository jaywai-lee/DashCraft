import { useMemo } from "react";
import { useWidgetsQuery } from "../api/useDashboardQuery";
import { useFilterStore } from "@/features/dashboard-filter/model/useFilterStore";
import { isWithinDateRange } from "../lib/isWithinDateRange";

export const useFilteredWidgets = () => {
  const { data: widgets = [] } = useWidgetsQuery();
  const { searchQuery, selectedWidgetType, datePreset, startDate, endDate } =
    useFilterStore();

  const filteredWidgets = useMemo(() => {
    return widgets.filter((widget) => {
      if (selectedWidgetType !== "all" && widget.type !== selectedWidgetType) {
        return false;
      }

      if (
        !isWithinDateRange(widget.created_at, datePreset, startDate, endDate)
      ) {
        return false;
      }

      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const titleMatch = widget.title.toLowerCase().includes(query);
        return titleMatch;
      }

      return true;
    });
  }, [
    widgets,
    selectedWidgetType,
    datePreset,
    startDate,
    endDate,
    searchQuery,
  ]);

  return { filteredWidgets, allWidgets: widgets };
};
