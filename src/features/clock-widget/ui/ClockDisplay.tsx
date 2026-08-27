"use client";

import React, { useEffect, memo, useRef } from "react";
import {
  formatDateParts,
  formatTimeToTimeString,
} from "@/shared/lib/formatters";

interface ClockDisplayProps {
  isExpanded?: boolean;
}

export const ClockDisplay = memo(
  ({ isExpanded }: ClockDisplayProps) => {
    const dateRef = useRef<HTMLParagraphElement>(null);
    const timeRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
      const updateClock = () => {
        const now = new Date();
        const { dateString, dayOfWeek } = formatDateParts(now);

        if (dateRef.current) {
          dateRef.current.innerHTML = `<span>${dateString}</span><span class="text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-md">${dayOfWeek}</span>`;
        }
        if (timeRef.current) {
          timeRef.current.textContent = formatTimeToTimeString(now);
        }
      };

      updateClock();
      const interval = setInterval(updateClock, 1000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="flex flex-col items-center justify-center my-auto space-y-3 select-none text-center">
        <p
          ref={dateRef}
          className={
            isExpanded
              ? "font-semibold text-muted-foreground tracking-wide transition-all flex items-center gap-1.5 text-lg sm:text-xl"
              : "font-semibold text-muted-foreground tracking-wide transition-all flex items-center gap-1.5 text-xs sm:text-sm"
          }
        />

        <p
          ref={timeRef}
          className={
            isExpanded
              ? "font-black tracking-tight tabular-nums text-foreground drop-shadow-sm transition-all text-7xl sm:text-8xl lg:text-9xl"
              : "font-black tracking-tight tabular-nums text-foreground drop-shadow-sm transition-all text-5xl sm:text-6xl"
          }
        />
      </div>
    );
  },
  (prev, next) => prev.isExpanded === next.isExpanded,
);

ClockDisplay.displayName = "ClockDisplay";
