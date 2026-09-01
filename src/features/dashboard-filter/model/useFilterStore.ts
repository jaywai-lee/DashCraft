import { WidgetType } from "@/widgets/dashboard-grid/config/widgets.config";
import { create } from "zustand";

export type TodoStatusFilter = "all" | "active" | "completed";
export type DateRangePreset = "all" | "today" | "week" | "month" | "custom";
interface FilterState {
  isOpen: boolean;
  searchQuery: string;
  selectedWidgetType: WidgetType | "all";
  todoStatus: TodoStatusFilter;
  datePreset: DateRangePreset;
  startDate: string | null;
  endDate: string | null;
  toggleFilter: () => void;
  setSearchQuery: (query: string) => void;
  setSelectedWidgetType: (type: WidgetType | "all") => void;
  setTodoStatus: (status: TodoStatusFilter) => void;
  setDatePreset: (preset: DateRangePreset) => void;
  setCustomDateRange: (
    startDate: string | null,
    endDate: string | null,
  ) => void;
  resetFilter: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  isOpen: false,
  searchQuery: "",
  selectedWidgetType: "all",
  todoStatus: "all",
  datePreset: "all",
  startDate: null,
  endDate: null,
  toggleFilter: () => set((state) => ({ isOpen: !state.isOpen })),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setSelectedWidgetType: (selectedWidgetType) => set({ selectedWidgetType }),
  setTodoStatus: (todoStatus) => set({ todoStatus }),
  setDatePreset: (datePreset) =>
    set({
      datePreset,
      ...(datePreset !== "custom" && { startDate: null, endDate: null }),
    }),
  setCustomDateRange: (startDate, endDate) =>
    set({ datePreset: "custom", startDate, endDate }),
  resetFilter: () =>
    set({
      searchQuery: "",
      selectedWidgetType: "all",
      todoStatus: "all",
      datePreset: "all",
      startDate: null,
      endDate: null,
    }),
}));
