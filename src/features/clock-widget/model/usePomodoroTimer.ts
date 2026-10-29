"use client";

import { useCallback, useEffect } from "react";
import { DEFAULT_RUNTIME_STATE, useClockStore } from "./useClockStore";
import { useClockConfig } from "./useClockConfig";
import { useTimerEffects } from "./useTimerEffects";

export const usePomodoroTimer = (widgetId: string) => {
  const {
    workDuration,
    breakDuration,
    isSoundEnabled,
    isNotificationEnabled,
    toggleSound,
    handleNotificationToggle,
  } = useClockConfig(widgetId);

  const timerState = useClockStore(
    (s) => s.states[widgetId] ?? DEFAULT_RUNTIME_STATE,
  );
  const { timerPhase, timeLeft, isRunning, targetEndTime } = timerState;

  const toggleTimerStore = useClockStore((s) => s.toggleTimer);
  const resetTimerStore = useClockStore((s) => s.resetTimer);
  const syncTimeLeft = useClockStore((s) => s.syncTimeLeft);
  const switchPhaseStore = useClockStore((s) => s.switchPhase);

  const currentDuration = timerPhase === "work" ? workDuration : breakDuration;

  useEffect(() => {
    if (!isRunning || !targetEndTime) return;

    const checkTimerCompletion = () => {
      const now = Date.now();
      const remainingSeconds = Math.max(
        0,
        Math.round((targetEndTime - now) / 1000),
      );

      if (remainingSeconds <= 0) {
        syncTimeLeft(widgetId, 0);
      }
    };

    checkTimerCompletion();
    const timerInterval = setInterval(checkTimerCompletion, 1000);

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        checkTimerCompletion();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(timerInterval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isRunning, targetEndTime, widgetId, syncTimeLeft]);

  useTimerEffects({
    widgetId,
    timeLeft,
    isRunning,
    timerPhase,
    workDuration,
    breakDuration,
    isSoundEnabled,
    isNotificationEnabled,
    onSwitchPhase: switchPhaseStore,
  });

  const toggleTimer = useCallback(
    () => toggleTimerStore(widgetId, currentDuration),
    [toggleTimerStore, widgetId, currentDuration],
  );

  const resetTimer = useCallback(
    () => resetTimerStore(widgetId, currentDuration),
    [resetTimerStore, widgetId, currentDuration],
  );

  const switchPhase = useCallback(
    (phase: "work" | "break") => {
      const duration = phase === "work" ? workDuration : breakDuration;
      switchPhaseStore(widgetId, phase, duration);
    },
    [switchPhaseStore, widgetId, workDuration, breakDuration],
  );

  return {
    timerPhase,
    timeLeft,
    isRunning,
    targetEndTime,
    isSoundEnabled,
    isNotificationEnabled,
    toggleTimer,
    resetTimer,
    switchPhase,
    toggleSound,
    handleNotificationToggle,
  };
};
