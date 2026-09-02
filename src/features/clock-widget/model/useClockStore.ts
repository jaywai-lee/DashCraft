"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ClockMode = "clock" | "timer";
export type TimerPhase = "work" | "break";

export interface ClockWidgetState {
  mode: ClockMode;
  timerPhase: TimerPhase;
  timeLeft: number;
  isRunning: boolean;
  workDuration: number;
  breakDuration: number;
  isSoundEnabled: boolean;
  isNotificationEnabled: boolean;
}

interface ClockStore {
  states: Record<string, ClockWidgetState>;
  getWidgetState: (widgetId: string) => ClockWidgetState;
  setMode: (widgetId: string, mode: ClockMode) => void;
  toggleTimer: (widgetId: string) => void;
  resetTimer: (widgetId: string) => void;
  tick: (widgetId: string) => void;
  switchPhase: (widgetId: string, phase: TimerPhase) => void;
  toggleSound: (widgetId: string) => void;
  toggleNotification: (widgetId: string) => void;
  removeWidgetClock: (WidgetId: string) => void;
}

const DEFAULT_STATE: ClockWidgetState = {
  mode: "clock",
  timerPhase: "work",
  timeLeft: 25 * 60,
  isRunning: false,
  workDuration: 25 * 60,
  breakDuration: 5 * 60,
  isSoundEnabled: true,
  isNotificationEnabled: true,
};

export const useClockStore = create<ClockStore>()(
  persist(
    (set, get) => ({
      states: {},

      getWidgetState: (widgetId: string) => {
        return get().states[widgetId] || DEFAULT_STATE;
      },

      setMode: (widgetId: string, mode: ClockMode) =>
        set((state) => {
          const current = state.states[widgetId] || DEFAULT_STATE;
          return {
            states: {
              ...state.states,
              [widgetId]: { ...current, mode },
            },
          };
        }),

      toggleTimer: (widgetId: string) =>
        set((state) => {
          const current = state.states[widgetId] || DEFAULT_STATE;
          return {
            states: {
              ...state.states,
              [widgetId]: { ...current, isRunning: !current.isRunning },
            },
          };
        }),

      resetTimer: (widgetId: string) =>
        set((state) => {
          const current = state.states[widgetId] || DEFAULT_STATE;
          const initialTime =
            current.timerPhase === "work"
              ? current.workDuration
              : current.breakDuration;
          return {
            states: {
              ...state.states,
              [widgetId]: {
                ...current,
                isRunning: false,
                timeLeft: initialTime,
              },
            },
          };
        }),

      tick: (widgetId: string) =>
        set((state) => {
          const current = state.states[widgetId] || DEFAULT_STATE;
          if (!current.isRunning || current.timeLeft <= 0) return state;

          const nextTime = current.timeLeft - 1;
          if (nextTime === 0) {
            return {
              states: {
                ...state.states,
                [widgetId]: {
                  ...current,
                  timeLeft: 0,
                  isRunning: false,
                },
              },
            };
          }

          return {
            states: {
              ...state.states,
              [widgetId]: { ...current, timeLeft: nextTime },
            },
          };
        }),

      switchPhase: (widgetId: string, phase: TimerPhase) =>
        set((state) => {
          const current = state.states[widgetId] || DEFAULT_STATE;
          const duration =
            phase === "work" ? current.workDuration : current.breakDuration;
          return {
            states: {
              ...state.states,
              [widgetId]: {
                ...current,
                timerPhase: phase,
                timeLeft: duration,
                isRunning: false,
              },
            },
          };
        }),

      toggleSound: (widgetId: string) =>
        set((state) => {
          const current = state.states[widgetId] || DEFAULT_STATE;
          return {
            states: {
              ...state.states,
              [widgetId]: {
                ...current,
                isSoundEnabled: !current.isSoundEnabled,
              },
            },
          };
        }),

      toggleNotification: (widgetId: string) =>
        set((state) => {
          const current = state.states[widgetId] || DEFAULT_STATE;
          return {
            states: {
              ...state.states,
              [widgetId]: {
                ...current,
                isNotificationEnabled: !current.isNotificationEnabled,
              },
            },
          };
        }),

      removeWidgetClock: (widgetId: string) =>
        set((state) => {
          const newStates = { ...state.states };
          delete newStates[widgetId];
          return { states: newStates };
        }),
    }),

    {
      name: "dashcraft-clock-storage",
    },
  ),
);
