import { create } from "zustand";
import { ScheduleItem, SchedulesMap } from "./types";
import { persist } from "zustand/middleware";

interface ScheduleState {
  schedules: SchedulesMap;
  addSchedule: (dateStr: string, title: string, time?: string) => void;
  removeSchedule: (dateStr: string, id: string) => void;
}

export const useScheduleStore = create<ScheduleState>()(
  persist(
    (set) => ({
      schedules: {},

      addSchedule: (dateStr, title, time) =>
        set((state) => {
          const current = state.schedules[dateStr] || [];
          const newItem: ScheduleItem = {
            id: crypto.randomUUID(),
            title: title.trim(),
            time,
          };
          return {
            schedules: {
              ...state.schedules,
              [dateStr]: [...current, newItem],
            },
          };
        }),

      removeSchedule: (dateStr, id) =>
        set((state) => {
          const current = state.schedules[dateStr] || [];
          return {
            schedules: {
              ...state.schedules,
              [dateStr]: current.filter((item) => item.id !== id),
            },
          };
        }),
    }),

    { name: "dashcraft-schedule-storage" },
  ),
);
