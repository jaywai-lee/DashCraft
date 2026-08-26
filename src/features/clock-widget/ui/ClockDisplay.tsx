"use client";

import {
  formatDateParts,
  formatTimeToTimeString,
} from "@/shared/lib/formatters";
import { cn } from "@/shared/lib/utils";
import { useEffect, useState } from "react";

interface ClockDisplayProps {
  isExpanded?: boolean;
}

export const ClockDisplay = ({ isExpanded }: ClockDisplayProps) => {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const clockInterval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(clockInterval);
  }, []);

  if (!now) {
    return (
      <div className="flex items-center justify-center my-auto text-xs text-muted-foreground">
        시계를 불러오는 중..
      </div>
    );
  }

  const { dateString, dayOfWeek } = formatDateParts(now);

  return (
    <div className="flex flex-col items-center justify-center my-auto space-y-3 select-none text-center">
      <p
        className={cn(
          "font-semibold text-muted-foreground tracking-wide transition-all flex items-center gap-1.5",
          isExpanded ? "text-lg sm:text-xl" : "text-xs sm:text-sm",
        )}
      >
        <span>{dateString}</span>
        <span className="text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-md">
          {dayOfWeek}
        </span>
      </p>

      <p
        className={cn(
          "font-black tracking-tight tabular-nums text-foreground drop-shadow-sm transition-all",
          isExpanded
            ? "text-7xl sm:text-8xl lg:text-9xl tracking-tighter"
            : "text-5xl sm:text-6xl",
        )}
      >
        {formatTimeToTimeString(now)}
      </p>
    </div>
  );
};
