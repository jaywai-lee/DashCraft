"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface DDayItem {
  id: string;
  title: string;
  targetDate: string;
}

interface DDayStore {
  ddays: Record<string, DDayItem[]>;
  getWidgetDDays: (widgetId: string) => DDayItem[];
  addDDay: (widgetId: string, title: string, targetDate: string) => void;
  removeDDay: (widgetId: string, ddayId: string) => void;
  removeWidgetDDays: (widgetId: string) => void;
}

export const useDDayStore = create<DDayStore>()(
  persist(
    (set, get) => ({
      ddays: {},

      getWidgetDDays: (widgetId: string) => {
        return get().ddays[widgetId] || [];
      },

      addDDay: (widgetId: string, title: string, targetDate: string) =>
        set((state) => {
          const current = state.ddays[widgetId] || [];
          const newItem: DDayItem = {
            id: crypto.randomUUID(),
            title,
            targetDate,
          };
          return {
            ddays: {
              ...state.ddays,
              [widgetId]: [...current, newItem],
            },
          };
        }),

      removeDDay: (widgetId: string, ddayId: string) =>
        set((state) => {
          const current = state.ddays[widgetId] || [];
          return {
            ddays: {
              ...state.ddays,
              [widgetId]: current.filter((item) => item.id !== ddayId),
            },
          };
        }),

      removeWidgetDDays: (widgetId: string) =>
        set((state) => {
          const newDDays = { ...state.ddays };
          delete newDDays[widgetId];
          return { ddays: newDDays };
        }),
    }),

    {
      name: "dashcraft-dday-storage",
    },
  ),
);
