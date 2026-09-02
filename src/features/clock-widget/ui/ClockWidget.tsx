"use client";

import { Button } from "@/shared/ui/button";
import { useClockStore } from "../model/useClockStore";
import { Clock, Timer } from "lucide-react";
import { ClockDisplay } from "./ClockDisplay";
import { TimerDisplay } from "./TimerDisplay";
import { cn } from "@/shared/lib/utils";
import { memo } from "react";

interface ClockWidgetProps {
  widgetId: string;
  isExpanded?: boolean;
}

export const ClockWidget = memo(
  ({ widgetId, isExpanded = false }: ClockWidgetProps) => {
    const setMode = useClockStore((s) => s.setMode);
    const mode = useClockStore((s) => s.states[widgetId]?.mode ?? "clock");

    return (
      <div className="flex flex-col h-full items-center justify-center relative py-2 px-1">
        <div
          className={cn(
            "flex items-center justify-center gap-1 bg-muted/50 p-1 rounded-xl border shrink-0 transition-all mb-2",
            isExpanded && "mb-3 sm:mb-4 sm:p-1.5",
          )}
        >
          <Button
            variant={mode === "clock" ? "primary" : "ghost"}
            size="sm"
            onClick={() => setMode(widgetId, "clock")}
            className={cn(
              "h-7 px-2.5 text-xs gap-1",
              isExpanded && "sm:h-9 sm:px-4 sm:text-sm sm:gap-1.5",
            )}
          >
            <Clock
              className={cn("w-3.5 h-3.5", isExpanded && "sm:w-4 sm:h-4")}
            />
            <span>시계</span>
          </Button>
          <Button
            variant={mode === "timer" ? "primary" : "ghost"}
            size="sm"
            onClick={() => setMode(widgetId, "timer")}
            className={cn(
              "h-7 px-2.5 text-xs gap-1",
              isExpanded && "sm:h-9 sm:px-4 sm:text-sm sm:gap-1.5",
            )}
          >
            <Timer
              className={cn("w-3.5 h-3.5", isExpanded && "sm:w-4 sm:h-4")}
            />
            <span>뽀모도로</span>
          </Button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center w-full">
          {mode === "clock" ? (
            <ClockDisplay isExpanded={isExpanded} />
          ) : (
            <TimerDisplay widgetId={widgetId} isExpanded={isExpanded} />
          )}
        </div>
      </div>
    );
  },
);

ClockWidget.displayName = "ClockWidget";
