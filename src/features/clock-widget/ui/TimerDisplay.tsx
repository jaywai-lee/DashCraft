"use client";

import { cn } from "@/shared/lib/utils";
import { formatSecondsToMMSS } from "@/shared/lib/formatters";
import { usePomodoroTimer } from "../model/usePomodoroTimer";
import { TimerPhaseSelector } from "./TimerPhaseSelector";
import { TimerControls } from "./TimerControls";
import { memo, useEffect, useRef } from "react";

interface TimerDisplayProps {
  widgetId: string;
  isExpanded: boolean;
}

export const TimerDisplay = memo(
  ({ widgetId, isExpanded }: TimerDisplayProps) => {
    const {
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
    } = usePomodoroTimer(widgetId);

    const timeRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
      if (!isRunning || !targetEndTime) {
        if (timeRef.current) {
          timeRef.current.textContent = formatSecondsToMMSS(timeLeft);
        }
        return;
      }

      const updateExactTimer = () => {
        const now = Date.now();
        const remaining = Math.max(0, Math.round((targetEndTime - now) / 1000));

        if (timeRef.current) {
          timeRef.current.textContent = formatSecondsToMMSS(remaining);
        }
      };

      updateExactTimer();
      const interval = setInterval(updateExactTimer, 1000);

      return () => clearInterval(interval);
    }, [isRunning, targetEndTime, timeLeft]);

    return (
      <div
        className={cn(
          "flex flex-col items-center justify-between my-auto select-none transition-all w-full h-full pt-1 pb-0.5",
          isExpanded ? "space-y-6" : "space-y-2",
        )}
      >
        <TimerPhaseSelector
          timerPhase={timerPhase}
          isExpanded={isExpanded}
          onSwitchPhase={switchPhase}
        />

        <p
          ref={timeRef}
          className={cn(
            "font-black tracking-tight tabular-nums text-foreground drop-shadow-xs transition-all my-auto",
            isExpanded ? "text-7xl sm:text-8xl" : "text-4xl sm:text-[46px]",
          )}
        >
          {formatSecondsToMMSS(timeLeft)}
        </p>

        <TimerControls
          isRunning={isRunning}
          isExpanded={isExpanded}
          isSoundEnabled={isSoundEnabled}
          isNotificationEnabled={isNotificationEnabled}
          onToggleTimer={toggleTimer}
          onResetTimer={resetTimer}
          onToggleSound={toggleSound}
          onToggleNotification={handleNotificationToggle}
        />
      </div>
    );
  },
  (prev, next) =>
    prev.widgetId === next.widgetId && prev.isExpanded === next.isExpanded,
);

TimerDisplay.displayName = "TimerDisplay";
