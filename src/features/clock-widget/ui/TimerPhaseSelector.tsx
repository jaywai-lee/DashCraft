"use client";

import { cn } from "@/shared/lib/utils";
import { TimerPhase } from "../model/useClockStore";

interface TimerPhaseSelectorProps {
  timerPhase: TimerPhase;
  isExpanded: boolean;
  onSwitchPhase: (phase: TimerPhase) => void;
}

export const TimerPhaseSelector = ({
  timerPhase,
  isExpanded,
  onSwitchPhase,
}: TimerPhaseSelectorProps) => {
  return (
    <div className="flex items-center gap-1.5 text-xs">
      <button
        type="button"
        onClick={() => onSwitchPhase("work")}
        className={cn(
          "rounded-full font-semibold transition-all cursor-pointer px-2.5 py-1 text-xs",
          isExpanded && "sm:px-4 sm:py-1.5 sm:text-sm",
          timerPhase === "work"
            ? "bg-primary text-primary-foreground shadow-2xs"
            : "bg-muted text-muted-foreground hover:text-foreground",
        )}
      >
        집중 (25m)
      </button>
      <button
        type="button"
        onClick={() => onSwitchPhase("break")}
        className={cn(
          "rounded-full font-semibold transition-all cursor-pointer px-2.5 py-1 text-xs",
          isExpanded && "sm:px-4 sm:py-1.5 sm:text-sm",
          timerPhase === "break"
            ? "bg-emerald-600 text-white shadow-2xs"
            : "bg-muted text-muted-foreground hover:text-foreground",
        )}
      >
        휴식 (5m)
      </button>
    </div>
  );
};
