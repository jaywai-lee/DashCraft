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
  startTimeStamp?: number | null;
  targetEndTime?: number | null;
}

interface ClockStore {
  states: Record<string, ClockWidgetState>;
  getWidgetState: (widgetId: string) => ClockWidgetState;
  setMode: (widgetId: string, mode: ClockMode) => void;
  toggleTimer: (widgetId: string) => void;
  resetTimer: (widgetId: string) => void;
  syncTimeLeft: (widgetId: string, nextTimeLeft: number) => void;
  switchPhase: (widgetId: string, phase: TimerPhase) => void;
  toggleSound: (widgetId: string) => void;
  toggleNotification: (widgetId: string) => void;
  removeWidgetClock: (widgetId: string) => void;
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
  startTimeStamp: null,
  targetEndTime: null,
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
          const nextIsRunning = !current.isRunning;
          const now = Date.now();

          const targetEndTime = nextIsRunning
            ? now + current.timeLeft * 1000
            : null;

          return {
            states: {
              ...state.states,
              [widgetId]: {
                ...current,
                isRunning: nextIsRunning,
                startTimeStamp: nextIsRunning ? now : null,
                targetEndTime,
              },
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

      syncTimeLeft: (widgetId: string, nextTimeLeft: number) =>
        set((state) => {
          const current = state.states[widgetId] || DEFAULT_STATE;
          if (nextTimeLeft <= 0) {
            return {
              states: {
                ...state.states,
                [widgetId]: {
                  ...current,
                  timeLeft: 0,
                  isRunning: false,
                  startTimeStamp: null,
                  targetEndTime: null,
                },
              },
            };
          }
          return {
            states: {
              ...state.states,
              [widgetId]: { ...current, timeLeft: nextTimeLeft },
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
                startTimeStamp: null,
                targetEndTime: null,
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
