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
    const dateRef = useRef<HTMLSpanElement>(null);
    const dayRef = useRef<HTMLSpanElement>(null);
    const timeRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
      const updateClock = () => {
        const now = new Date();
        const { dateString, dayOfWeek } = formatDateParts(now);
        const timeString = formatTimeToTimeString(now);

        if (dateRef.current) dateRef.current.textContent = dateString;
        if (dayRef.current) dayRef.current.textContent = dayOfWeek;
        if (timeRef.current) timeRef.current.textContent = timeString;
      };

      updateClock();
      const interval = setInterval(updateClock, 1000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="flex flex-col items-center justify-center my-auto space-y-3 select-none text-center">
        <p
          className={
            isExpanded
              ? "font-semibold text-muted-foreground tracking-wide transition-all flex items-center gap-1.5 text-lg sm:text-xl"
              : "font-semibold text-muted-foreground tracking-wide transition-all flex items-center gap-1.5 text-xs sm:text-sm"
          }
        >
          <span ref={dateRef} />
          <span
            ref={dayRef}
            className="text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-md"
          />
        </p>

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
  (prevProps, nextProps) => prevProps.isExpanded === nextProps.isExpanded,
);

ClockDisplay.displayName = "ClockDisplay";
