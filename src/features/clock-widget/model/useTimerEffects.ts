"use client";

import { useEffect, useRef } from "react";
import { TimerPhase } from "./useClockStore";
import {
  playCompletionSound,
  startWhiteNoise,
  stopWhiteNoise,
  triggerNotification,
} from "../lib/audioNotifier";
import { toast } from "sonner";

interface UseTimerEffectsProps {
  widgetId: string;
  timeLeft: number;
  isRunning: boolean;
  timerPhase: TimerPhase;
  workDuration: number;
  breakDuration: number;
  isSoundEnabled: boolean;
  isNotificationEnabled: boolean;
  onSwitchPhase: (
    widgetId: string,
    phase: TimerPhase,
    durationSec: number,
  ) => void;
}

export const useTimerEffects = ({
  widgetId,
  timeLeft,
  isRunning,
  timerPhase,
  workDuration,
  breakDuration,
  isSoundEnabled,
  isNotificationEnabled,
  onSwitchPhase,
}: UseTimerEffectsProps) => {
  const prevTimeLeftRef = useRef(timeLeft);

  useEffect(() => {
    if (isRunning && timerPhase === "work" && isSoundEnabled) {
      startWhiteNoise(widgetId);
    } else {
      stopWhiteNoise(widgetId);
    }

    return () => {
      stopWhiteNoise(widgetId);
    };
  }, [isRunning, timerPhase, isSoundEnabled, widgetId]);

  useEffect(() => {
    if (prevTimeLeftRef.current > 0 && timeLeft === 0) {
      stopWhiteNoise(widgetId);

      if (isSoundEnabled) {
        playCompletionSound();
      }

      const breakMinutes = Math.max(1, Math.round(breakDuration / 60));
      const title =
        timerPhase === "work" ? "🎉 집중 시간 종료!" : "🔔 휴식 시간 종료!";
      const body =
        timerPhase === "work"
          ? `고생하셨습니다! ${breakMinutes}분간 달콤한 휴식을 취하세요.`
          : "휴식이 완료되었습니다! 다시 집중해볼까요?";

      toast.info(title, { description: body });

      if (isNotificationEnabled) {
        triggerNotification(title, body);
      }

      const nextPhase = timerPhase === "work" ? "break" : "work";
      const nextDuration = nextPhase === "work" ? workDuration : breakDuration;

      setTimeout(() => {
        onSwitchPhase(widgetId, nextPhase, nextDuration);
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
    onSwitchPhase,
  ]);
};
