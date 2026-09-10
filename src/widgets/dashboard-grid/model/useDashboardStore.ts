import { LayoutItem, Widget, WidgetColor } from "@/entities/widget/model/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface DashboardState {
  widgets: Widget[];
  addWidget: (widget: Omit<Widget, "id">) => void;
  removeWidget: (id: string) => void;
  updateLayouts: (layouts: LayoutItem[]) => void;
  setWidgets: (widgets: Widget[]) => void;
  moveWidget: (id: string, direction: "left" | "right") => void;
  toggleWidgetWidth: (id: string) => void;
  updateWidgetTitle: (id: string, title: string) => void;
  updateWidgetColor: (id: string, color: WidgetColor) => void;
  resetDashboard: () => void;
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
}

const INITIAL_WIDGETS: Widget[] = [];

export const useDashboardStore = create<DashboardState>()(
  persist(
    (set) => ({
      widgets: INITIAL_WIDGETS,
      _hasHydrated: false,
      setHasHydrated: (state) => set({ _hasHydrated: state }),

      addWidget: (newWidgetData) =>
        set((state) => {
          const id = `widget-${Date.now()}`;
          const newWidget: Widget = {
            ...newWidgetData,
            id,
            createdAt: newWidgetData.createdAt ?? new Date().toISOString(),
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

      moveWidget: (id, direction) =>
        set((state) => {
          const index = state.widgets.findIndex((w) => w.id === id);
          if (index === -1) return state;

          const newIndex = direction === "left" ? index - 1 : index + 1;
          if (newIndex < 0 || newIndex >= state.widgets.length) return state;

          const updatedWidgets = [...state.widgets];
          const [movedWidget] = updatedWidgets.splice(index, 1);
          updatedWidgets.splice(newIndex, 0, movedWidget);

          return { widgets: updatedWidgets };
        }),

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

      updateWidgetTitle: (id: string, title: string) =>
        set((state) => ({
          widgets: state.widgets.map((widget) =>
            widget.id === id ? { ...widget, title } : widget,
          ),
        })),

      updateWidgetColor: (id: string, color: WidgetColor) =>
        set((state) => ({
          widgets: state.widgets.map((widget) =>
            widget.id === id ? { ...widget, color } : widget,
          ),
        })),

      resetDashboard: () => set({ widgets: INITIAL_WIDGETS }),
    }),

    {
      name: "dashcraft-storage",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);
