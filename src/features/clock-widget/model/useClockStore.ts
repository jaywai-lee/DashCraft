import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TimerPhase = "work" | "break";
export type ClockMode = "clock" | "timer";

export interface ClockRuntimeState {
  mode: ClockMode;
  timerPhase: TimerPhase;
  timeLeft: number;
  isRunning: boolean;
  targetEndTime: number | null;
}

interface ClockWidgetRuntimeStore {
  states: Record<string, ClockRuntimeState>;
  getWidgetState: (widgetId: string) => ClockRuntimeState;
  setMode: (widgetId: string, mode: ClockMode) => void;
  toggleTimer: (widgetId: string, durationSec: number) => void;
  resetTimer: (widgetId: string, durationSec: number) => void;
  syncTimeLeft: (widgetId: string, timeLeft: number) => void;
  switchPhase: (
    widgetId: string,
    phase: TimerPhase,
    durationSec: number,
  ) => void;
}

export const DEFAULT_RUNTIME_STATE: ClockRuntimeState = {
  mode: "clock",
  timerPhase: "work",
  timeLeft: 25 * 60,
  isRunning: false,
  targetEndTime: null,
};

export const useClockStore = create<ClockWidgetRuntimeStore>()(
  persist(
    (set, get) => ({
      states: {},
      getWidgetState: (widgetId) => {
        return get().states[widgetId] ?? DEFAULT_RUNTIME_STATE;
      },
      setMode: (widgetId, mode) => {
        set((state) => ({
          states: {
            ...state.states,
            [widgetId]: {
              ...(state.states[widgetId] ?? DEFAULT_RUNTIME_STATE),
              mode,
            },
          },
        }));
      },
      toggleTimer: (widgetId, durationSec) => {
        set((state) => {
          const current = state.states[widgetId] ?? DEFAULT_RUNTIME_STATE;
          const willRun = !current.isRunning;
          const targetEndTime = willRun
            ? Date.now() + current.timeLeft * 1000
            : null;

          return {
            states: {
              ...state.states,
              [widgetId]: {
                ...current,
                isRunning: willRun,
                targetEndTime,
                ...(current.timeLeft === 0 && willRun
                  ? {
                      timeLeft: durationSec,
                      targetEndTime: Date.now() + durationSec * 1000,
                    }
                  : {}),
              },
            },
          };
        });
      },
      resetTimer: (widgetId, durationSec) => {
        set((state) => ({
          states: {
            ...state.states,
            [widgetId]: {
              ...(state.states[widgetId] ?? DEFAULT_RUNTIME_STATE),
              timeLeft: durationSec,
              isRunning: false,
              targetEndTime: null,
            },
          },
        }));
      },
      syncTimeLeft: (widgetId, timeLeft) => {
        set((state) => {
          const current = state.states[widgetId] ?? DEFAULT_RUNTIME_STATE;
          return {
            states: {
              ...state.states,
              [widgetId]: {
                ...current,
                timeLeft,
                ...(timeLeft === 0
                  ? { isRunning: false, targetEndTime: null }
                  : {}),
              },
            },
          };
        });
      },
      switchPhase: (widgetId, phase, durationSec) => {
        set((state) => ({
          states: {
            ...state.states,
            [widgetId]: {
              ...(state.states[widgetId] ?? DEFAULT_RUNTIME_STATE),
              timerPhase: phase,
              timeLeft: durationSec,
              isRunning: false,
              targetEndTime: null,
            },
          },
        }));
      },
    }),
    {
      name: "dashcraft-clock-runtime-v1",
    },
  ),
);
