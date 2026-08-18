import { LayoutItem, Widget } from "@/entities/widget/model/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface DashboardState {
  widgets: Widget[];
  addWidget: (widget: Omit<Widget, "id">) => void;
  removeWidget: (id: string) => void;
  updateLayouts: (layouts: LayoutItem[]) => void;
  resetDashboard: () => void;
}

const INITIAL_WIDGETS: Widget[] = [
  {
    id: "default-todo-1",
    type: "todo",
    title: "할 일 목록",
    layout: { id: "default-todo-1", x: 0, y: 0, w: 2, h: 2 },
  },
];

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

      resetDashboard: () => set({ widgets: INITIAL_WIDGETS }),
    }),
    {
      name: "dashcraft-storage",
    },
  ),
);
