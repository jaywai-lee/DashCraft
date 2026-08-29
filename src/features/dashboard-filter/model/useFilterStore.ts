import { WidgetType } from "@/widgets/dashboard-grid/config/widgets.config";
import { create } from "zustand";

export type TodoStatusFilter = "all" | "active" | "completed";

interface FilterState {
  isOpen: boolean;
  searchQuery: string;
  selectedWidgetType: WidgetType | "all";
  todoStatus: TodoStatusFilter;
  toggleFilter: () => void;
  setSearchQuery: (query: string) => void;
  setSelectedWidgetType: (type: WidgetType | "all") => void;
  setTodoStatus: (status: TodoStatusFilter) => void;
  resetFilter: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  isOpen: false,
  searchQuery: "",
  selectedWidgetType: "all",
  todoStatus: "all",
  toggleFilter: () => set((state) => ({ isOpen: !state.isOpen })),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setSelectedWidgetType: (selectedWidgetType) => set({ selectedWidgetType }),
  setTodoStatus: (todoStatus) => set({ todoStatus }),
  resetFilter: () =>
    set({ searchQuery: "", selectedWidgetType: "all", todoStatus: "all" }),
}));
