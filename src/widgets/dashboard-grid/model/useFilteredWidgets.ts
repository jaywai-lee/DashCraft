import { useMemo } from "react";
import { useWidgetsQuery } from "../api/useDashboardQuery";
import { useFilterStore } from "@/features/dashboard-filter/model/useFilterStore";
import { isWithinDateRange } from "../lib/isWithinDateRange";
import { WidgetRow } from "../api/dashboardRepository";

export const useFilteredWidgets = (targetWidgets?: WidgetRow[]) => {
  const { data: widgets = [], isLoading } = useWidgetsQuery();
  const widgetsToFilter = targetWidgets ?? widgets;

  const { searchQuery, selectedWidgetType, datePreset, startDate, endDate } =
    useFilterStore();

  const filteredWidgets = useMemo(() => {
    return widgetsToFilter.filter((widget) => {
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
    widgetsToFilter,
    selectedWidgetType,
    datePreset,
    startDate,
    endDate,
    searchQuery,
  ]);

  return { filteredWidgets, allWidgets: widgets, isLoading };
};
