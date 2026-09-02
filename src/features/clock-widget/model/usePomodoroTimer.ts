"use client";

import { useEffect, useRef } from "react";
import { useClockStore } from "./useClockStore";
import {
  playCompletionSound,
  requestNotificationPermission,
  startWhiteNoise,
  stopWhiteNoise,
  triggerNotification,
} from "../lib/audioNotifier";
import { toast } from "sonner";

export const usePomodoroTimer = (widgetId: string) => {
  const {
    getWidgetState,
    toggleTimer,
    resetTimer,
    syncTimeLeft,
    switchPhase,
    toggleSound,
    toggleNotification,
  } = useClockStore();

  const state = getWidgetState(widgetId);
  const {
    timerPhase,
    timeLeft,
    isRunning,
    targetEndTime,
    isSoundEnabled = true,
    isNotificationEnabled = true,
  } = state;

  const prevTimeLeftRef = useRef(timeLeft);

  useEffect(() => {
    let timerInterval: NodeJS.Timeout | null = null;

    const updateExactTimeLeft = () => {
      if (!isRunning || !targetEndTime) return;

      const now = Date.now();
      const remainingSeconds = Math.max(
        0,
        Math.round((targetEndTime - now) / 1000),
      );

      syncTimeLeft(widgetId, remainingSeconds);
    };

    if (isRunning && targetEndTime) {
      updateExactTimeLeft();
      timerInterval = setInterval(() => {
        updateExactTimeLeft();
      }, 1000);

      const handleVisibilityChange = () => {
        if (document.visibilityState === "visible") {
          updateExactTimeLeft();
        }
      };
      document.addEventListener("visibilitychange", handleVisibilityChange);

      return () => {
        if (timerInterval) clearInterval(timerInterval);
        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange,
        );
      };
    }
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
        switchPhase(widgetId, nextPhase);
      }, 1000);
    }
    prevTimeLeftRef.current = timeLeft;
  }, [
    timeLeft,
    isSoundEnabled,
    isNotificationEnabled,
    timerPhase,
    widgetId,
    switchPhase,
  ]);

  useEffect(() => {
    if (isRunning && timerPhase === "work" && isSoundEnabled) {
      startWhiteNoise();
    } else {
      stopWhiteNoise();
    }
  }, [isRunning, timerPhase, isSoundEnabled]);

  const handleNotificationToggle = async () => {
    if (!isNotificationEnabled) {
      const granted = await requestNotificationPermission();
      if (granted) {
        toggleNotification(widgetId);
        toast.success("브라우저 알림이 활성화되었습니다.");
      } else {
        toast.warning("브라우저 설정에서 알림 권한을 허용해 주세요.");
      }
    } else {
      toggleNotification(widgetId);
      toast.info("브라우저 알림이 비활성화되었습니다.");
    }
  };

  return {
    state,
    timerPhase,
    timeLeft,
    isRunning,
    isSoundEnabled,
    isNotificationEnabled,
    toggleTimer: () => toggleTimer(widgetId),
    resetTimer: () => resetTimer(widgetId),
    switchPhase: (phase: "work" | "break") => switchPhase(widgetId, phase),
    toggleSound: () => toggleSound(widgetId),
    handleNotificationToggle,
  };
};
