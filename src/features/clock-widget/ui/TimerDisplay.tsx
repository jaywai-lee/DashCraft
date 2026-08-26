"use client";

import { useEffect } from "react";
import { useClockStore } from "../model/useClockStore";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Pause, Play, RotateCcw } from "lucide-react";
import { formatSecondsToMMSS } from "@/shared/lib/formatters";

interface TimerDisplayProps {
  widgetId: string;
  isExpanded: boolean;
}

export const TimerDisplay = ({ widgetId, isExpanded }: TimerDisplayProps) => {
  const { getWidgetState, toggleTimer, resetTimer, tick, switchPhase } =
    useClockStore();

  const { timerPhase, timeLeft, isRunning } = getWidgetState(widgetId);

  useEffect(() => {
    let timerInterval: NodeJS.Timeout | null = null;
    if (isRunning) {
      timerInterval = setInterval(() => {
        tick(widgetId);
      }, 1000);
    }
    return () => {
      if (timerInterval) clearInterval(timerInterval);
    };
  }, [isRunning, tick, widgetId]);

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center my-auto select-none transition-all",
        isExpanded ? "space-y-6" : "space-y-3",
      )}
    >
      <div className="flex items-center gap-1.5 text-xs">
        <button
          type="button"
          onClick={() => switchPhase(widgetId, "work")}
          className={cn(
            "rounded-full font-semibold transition-all cursor-pointer",
            isExpanded ? "px-4 py-1.5 text-sm" : "px-2.5 py-1 text-xs",
            timerPhase === "work"
              ? "bg-primary text-primary-foreground shadow-2xs"
              : "bg-muted text-muted-foreground hover:text-foreground",
          )}
        >
          집중 (25m)
        </button>
        <button
          type="button"
          onClick={() => switchPhase(widgetId, "break")}
          className={cn(
            "rounded-full font-semibold transition-all cursor-pointer",
            isExpanded ? "px-4 py-1.5 text-sm" : "px-2.5 py-1 text-xs",
            timerPhase === "break"
              ? "bg-emerald-600 text-white shadow-2xs"
              : "bg-muted text-muted-foreground hover:text-foreground",
          )}
        >
          휴식 (5m)
        </button>
      </div>

      <p
        className={cn(
          "font-black tracking-tight tabular-nums text-foreground drop-shadow-sm transition-all",
          isExpanded ? "text-7xl sm:text-8xl" : "text-4xl sm:text-5xl",
        )}
      >
        {formatSecondsToMMSS(timeLeft)}
      </p>

      <div className="flex items-center gap-2">
        <Button
          variant={isRunning ? "outline" : "primary"}
          size={isExpanded ? "lg" : "sm"}
          onClick={() => toggleTimer(widgetId)}
          className="gap-2"
        >
          {isRunning ? (
            <>
              <Pause className={cn("w-3.5 h-3.5", isExpanded && "w-4 h-4")} />
              <span>일시정지</span>
            </>
          ) : (
            <>
              <Play className={cn("w-3.5 h-3.5", isExpanded && "w-4 h-4")} />
              <span>시작</span>
            </>
          )}
        </Button>
        <Button
          variant="ghost"
          size={isExpanded ? "lg" : "sm"}
          onClick={() => resetTimer(widgetId)}
          className={cn("p-0", isExpanded ? "h-11 w-11" : "h-8 w-8")}
          title="타이머 리셋"
        >
          <RotateCcw className={cn("w-3.5 h-3.5", isExpanded && "w-5 h-5")} />
        </Button>
      </div>
    </div>
  );
};
