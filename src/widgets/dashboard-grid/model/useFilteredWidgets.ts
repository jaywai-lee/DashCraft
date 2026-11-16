import { useMemo } from "react";
import { useShallow } from "zustand/react/shallow";
import { useWidgetsQuery } from "../api/useDashboardQuery";
import { useFilterStore } from "@/features/dashboard-filter/model/useFilterStore";
import { isWithinDateRange } from "../lib/isWithinDateRange";
import { WidgetRow } from "../api/dashboardRepository";

export const useFilteredWidgets = (targetWidgets?: WidgetRow[]) => {
  const { data: widgets = [], isLoading } = useWidgetsQuery();
  const widgetsToFilter = targetWidgets ?? widgets;

  const { searchQuery, selectedWidgetType, datePreset, startDate, endDate } =
    useFilterStore(
      useShallow((s) => ({
        searchQuery: s.searchQuery,
        selectedWidgetType: s.selectedWidgetType,
        datePreset: s.datePreset,
        startDate: s.startDate,
        endDate: s.endDate,
      })),
    );

  const filteredWidgets = useMemo(() => {
    const trimmedQuery = searchQuery.trim().toLowerCase();

    return widgetsToFilter.filter((widget) => {
      if (selectedWidgetType !== "all" && widget.type !== selectedWidgetType) {
        return false;
      }

      if (
        !isWithinDateRange(widget.created_at, datePreset, startDate, endDate)
      ) {
        return false;
      }

      if (trimmedQuery !== "") {
        return widget.title.toLowerCase().includes(trimmedQuery);
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
