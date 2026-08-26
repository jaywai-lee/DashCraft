"use client";

import { Button } from "@/shared/ui/button";
import { useClockStore } from "../model/useClockStore";
import { Clock, Timer } from "lucide-react";
import { ClockDisplay } from "./ClockDisplay";
import { TimerDisplay } from "./TimerDisplay";
import { cn } from "@/shared/lib/utils";

interface ClockWidgetProps {
  widgetId: string;
  isExpanded?: boolean;
}

export const ClockWidget = ({
  widgetId,
  isExpanded = false,
}: ClockWidgetProps) => {
  const { getWidgetState, setMode } = useClockStore();
  const { mode } = getWidgetState(widgetId);

  return (
    <div className="flex flex-col h-full justify-center items-center relative py-2">
      <div
        className={cn(
          "flex items-center justify-center gap-1 bg-muted/50 p-1 rounded-xl border shrink-0 transition-all",
          isExpanded ? "absolute top-2 gap-2 p-1.5" : "mb-auto",
        )}
      >
        <Button
          variant={mode === "clock" ? "primary" : "ghost"}
          size={isExpanded ? "md" : "sm"}
          onClick={() => setMode(widgetId, "clock")}
          className={cn(
            "h-7 px-3 text-xs gap-1.5",
            isExpanded && "h-9 px-4 text-sm",
          )}
        >
          <Clock className={cn("w-3.5 h-3.5", isExpanded && "w-4 h-4")} />
          <span>시계</span>
        </Button>
        <Button
          variant={mode === "timer" ? "primary" : "ghost"}
          size={isExpanded ? "md" : "sm"}
          onClick={() => setMode(widgetId, "timer")}
          className={cn(
            "h-7 px-3 text-xs gap-1.5",
            isExpanded && "h-9 px-4 text-sm",
          )}
        >
          <Timer className={cn("w-3.5 h-3.5", isExpanded && "w-4 h-4")} />
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
};
