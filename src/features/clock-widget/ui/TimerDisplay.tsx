"use client";

import { cn } from "@/shared/lib/utils";
import { formatSecondsToMMSS } from "@/shared/lib/formatters";
import { usePomodoroTimer } from "../model/usePomodoroTimer";
import { TimerPhaseSelector } from "./TimerPhaseSelector";
import { TimerControls } from "./TimerControls";

interface TimerDisplayProps {
  widgetId: string;
  isExpanded: boolean;
}

export const TimerDisplay = ({ widgetId, isExpanded }: TimerDisplayProps) => {
  const {
    timerPhase,
    timeLeft,
    isRunning,
    isSoundEnabled,
    isNotificationEnabled,
    toggleTimer,
    resetTimer,
    switchPhase,
    toggleSound,
    handleNotificationToggle,
  } = usePomodoroTimer(widgetId);

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center my-auto select-none transition-all",
        isExpanded ? "space-y-6" : "space-y-3",
      )}
    >
      <TimerPhaseSelector
        timerPhase={timerPhase}
        isExpanded={isExpanded}
        onSwitchPhase={switchPhase}
      />

      <p
        className={cn(
          "font-black tracking-tight tabular-nums text-foreground drop-shadow-sm transition-all",
          isExpanded ? "text-7xl sm:text-8xl" : "text-4xl sm:text-5xl",
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
};
