"use client";

import { useCallback, useEffect, useRef } from "react";
import { DEFAULT_RUNTIME_STATE, useClockStore } from "./useClockStore";
import {
  useWidgetsQuery,
  useUpdateWidgetMutation,
} from "@/widgets/dashboard-grid/api/useDashboardQuery";
import { DEFAULT_CLOCK_CONFIG } from "@/widgets/dashboard-grid/config/widgets.config";
import {
  playCompletionSound,
  requestNotificationPermission,
  startWhiteNoise,
  stopWhiteNoise,
  triggerNotification,
} from "../lib/audioNotifier";
import { toast } from "sonner";

export const usePomodoroTimer = (widgetId: string) => {
  const { data: widgets = [] } = useWidgetsQuery();
  const updateWidgetMutation = useUpdateWidgetMutation();

  const currentWidget = widgets.find((w) => w.widget_id === widgetId);
  const rawConfig = (currentWidget?.config as Record<string, unknown>) ?? {};

  const workDuration =
    typeof rawConfig.workDuration === "number"
      ? rawConfig.workDuration
      : DEFAULT_CLOCK_CONFIG.workDuration;
  const breakDuration =
    typeof rawConfig.breakDuration === "number"
      ? rawConfig.breakDuration
      : DEFAULT_CLOCK_CONFIG.breakDuration;
  const isSoundEnabled =
    typeof rawConfig.isSoundEnabled === "boolean"
      ? rawConfig.isSoundEnabled
      : DEFAULT_CLOCK_CONFIG.isSoundEnabled;
  const isNotificationEnabled =
    typeof rawConfig.isNotificationEnabled === "boolean"
      ? rawConfig.isNotificationEnabled
      : DEFAULT_CLOCK_CONFIG.isNotificationEnabled;

  const timerState = useClockStore(
    (s) => s.states[widgetId] ?? DEFAULT_RUNTIME_STATE,
  );

  const { timerPhase, timeLeft, isRunning, targetEndTime } = timerState;

  const toggleTimerStore = useClockStore((s) => s.toggleTimer);
  const resetTimerStore = useClockStore((s) => s.resetTimer);
  const syncTimeLeft = useClockStore((s) => s.syncTimeLeft);
  const switchPhaseStore = useClockStore((s) => s.switchPhase);

  const prevTimeLeftRef = useRef(timeLeft);

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

  useEffect(() => {
    if (prevTimeLeftRef.current > 0 && timeLeft === 0) {
      stopWhiteNoise();

      if (isSoundEnabled) {
        playCompletionSound();
      }

      const title =
        timerPhase === "work" ? "🎉 집중 시간 종료!" : "🔔 휴식 시간 종료!";
      const body =
        timerPhase === "work"
          ? "고생하셨습니다! 5분간 달콤한 휴식을 취하세요."
          : "휴식이 완료되었습니다! 다시 집중해볼까요?";
      toast.info(title, { description: body });

      if (isNotificationEnabled) {
        triggerNotification(title, body);
      }

      const nextPhase = timerPhase === "work" ? "break" : "work";
      const nextDuration = nextPhase === "work" ? workDuration : breakDuration;

      setTimeout(() => {
        switchPhaseStore(widgetId, nextPhase, nextDuration);
      }, 1000);
    }
    prevTimeLeftRef.current = timeLeft;
  }, [
    timeLeft,
    isSoundEnabled,
    isNotificationEnabled,
    timerPhase,
    workDuration,
    breakDuration,
    widgetId,
    switchPhaseStore,
  ]);

  useEffect(() => {
    if (isRunning && timerPhase === "work" && isSoundEnabled) {
      startWhiteNoise();
    } else {
      stopWhiteNoise();
    }
  }, [isRunning, timerPhase, isSoundEnabled]);

  const handleNotificationToggle = useCallback(async () => {
    if (!isNotificationEnabled) {
      const granted = await requestNotificationPermission();
      if (granted) {
        updateWidgetMutation.mutate({
          widgetId,
          config: {
            ...rawConfig,
            isNotificationEnabled: true,
          },
        });
        toast.success("브라우저 알림이 활성화되었습니다.");
      } else {
        toast.warning("브라우저 설정에서 알림 권한을 허용해 주세요.");
      }
    } else {
      updateWidgetMutation.mutate({
        widgetId,
        config: {
          ...rawConfig,
          isNotificationEnabled: false,
        },
      });
      toast.info("브라우저 알림이 비활성화되었습니다.");
    }
  }, [isNotificationEnabled, updateWidgetMutation, widgetId, rawConfig]);

  const toggleSound = useCallback(() => {
    updateWidgetMutation.mutate({
      widgetId,
      config: {
        ...rawConfig,
        isSoundEnabled: !isSoundEnabled,
      },
    });
  }, [isSoundEnabled, updateWidgetMutation, widgetId, rawConfig]);

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
