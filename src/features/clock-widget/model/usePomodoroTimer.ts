"use client";

import { useCallback, useEffect, useRef } from "react";
import { DEFAULT_STATE, useClockStore } from "./useClockStore";
import {
  playCompletionSound,
  requestNotificationPermission,
  startWhiteNoise,
  stopWhiteNoise,
  triggerNotification,
} from "../lib/audioNotifier";
import { toast } from "sonner";

export const usePomodoroTimer = (widgetId: string) => {
  const timerPhase = useClockStore(
    (s) => s.states[widgetId]?.timerPhase ?? DEFAULT_STATE.timerPhase,
  );
  const timeLeft = useClockStore(
    (s) => s.states[widgetId]?.timeLeft ?? DEFAULT_STATE.timeLeft,
  );
  const isRunning = useClockStore(
    (s) => s.states[widgetId]?.isRunning ?? DEFAULT_STATE.isRunning,
  );
  const targetEndTime = useClockStore(
    (s) => s.states[widgetId]?.targetEndTime ?? DEFAULT_STATE.targetEndTime,
  );
  const isSoundEnabled = useClockStore(
    (s) => s.states[widgetId]?.isSoundEnabled ?? DEFAULT_STATE.isSoundEnabled,
  );
  const isNotificationEnabled = useClockStore(
    (s) =>
      s.states[widgetId]?.isNotificationEnabled ??
      DEFAULT_STATE.isNotificationEnabled,
  );

  const toggleTimerStore = useClockStore((s) => s.toggleTimer);
  const resetTimerStore = useClockStore((s) => s.resetTimer);
  const syncTimeLeft = useClockStore((s) => s.syncTimeLeft);
  const switchPhaseStore = useClockStore((s) => s.switchPhase);
  const toggleSoundStore = useClockStore((s) => s.toggleSound);
  const toggleNotificationStore = useClockStore((s) => s.toggleNotification);

  const prevTimeLeftRef = useRef(timeLeft);

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
      setTimeout(() => {
        switchPhaseStore(widgetId, nextPhase);
      }, 1000);
    }
    prevTimeLeftRef.current = timeLeft;
  }, [
    timeLeft,
    isSoundEnabled,
    isNotificationEnabled,
    timerPhase,
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
        toggleNotificationStore(widgetId);
        toast.success("브라우저 알림이 활성화되었습니다.");
      } else {
        toast.warning("브라우저 설정에서 알림 권한을 허용해 주세요.");
      }
    } else {
      toggleNotificationStore(widgetId);
      toast.info("브라우저 알림이 비활성화되었습니다.");
    }
  }, [isNotificationEnabled, toggleNotificationStore, widgetId]);

  const toggleTimer = useCallback(
    () => toggleTimerStore(widgetId),
    [toggleTimerStore, widgetId],
  );

  const resetTimer = useCallback(
    () => resetTimerStore(widgetId),
    [resetTimerStore, widgetId],
  );

  const switchPhase = useCallback(
    (phase: "work" | "break") => switchPhaseStore(widgetId, phase),
    [switchPhaseStore, widgetId],
  );

  const toggleSound = useCallback(
    () => toggleSoundStore(widgetId),
    [toggleSoundStore, widgetId],
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
