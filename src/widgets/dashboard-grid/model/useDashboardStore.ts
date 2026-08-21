import { LayoutItem, Widget } from "@/entities/widget/model/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface DashboardState {
  widgets: Widget[];
  addWidget: (widget: Omit<Widget, "id">) => void;
  removeWidget: (id: string) => void;
  updateLayouts: (layouts: LayoutItem[]) => void;
  setWidgets: (widgets: Widget[]) => void;
  toggleWidgetWidth: (id: string) => void;
  resetDashboard: () => void;
}

const INITIAL_WIDGETS: Widget[] = [];

export const useDashboardStore = create<DashboardState>()(
  persist(
    (set) => ({
      widgets: INITIAL_WIDGETS,

      addWidget: (newWidgetData) =>
        set((state) => {
          const id = `widget-${Date.now()}`;
          const newWidget: Widget = {
            ...newWidgetData,
            id,
            layout: { ...newWidgetData.layout, id },
          };
          return { widgets: [...state.widgets, newWidget] };
        }),

      removeWidget: (id) =>
        set((state) => ({
          widgets: state.widgets.filter((w) => w.id !== id),
        })),

      updateLayouts: (newLayouts) =>
        set((state) => ({
          widgets: state.widgets.map((widget) => {
            const updatedLayout = newLayouts.find((l) => l.id === widget.id);
            return updatedLayout
              ? { ...widget, layout: updatedLayout }
              : widget;
          }),
        })),

      setWidgets: (widgets) => set({ widgets }),

      toggleWidgetWidth: (id: string) =>
        set((state) => ({
          widgets: state.widgets.map((widget) => {
            if (widget.id !== id) return widget;
            const currentW = widget.layout.w || 1;
            const newW = currentW === 1 ? 2 : 1;
            return {
              ...widget,
              layout: { ...widget.layout, w: newW },
            };
          }),
        })),

      resetDashboard: () => set({ widgets: INITIAL_WIDGETS }),
    }),
    {
      name: "dashcraft-storage",
    },
  ),
);
