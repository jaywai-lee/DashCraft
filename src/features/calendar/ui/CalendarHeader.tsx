"use client";

import React, { memo } from "react";
import { Button } from "@/shared/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Calendar as CalendarIcon,
} from "lucide-react";

interface CalendarHeaderProps {
  currentDate: Date;
  onPrevYear: () => void;
  onPrevMonth: () => void;
  onNextYear: () => void;
  onNextMonth: () => void;
  onToday: () => void;
}

export const CalendarHeader = memo(
  ({
    currentDate,
    onPrevYear,
    onPrevMonth,
    onNextYear,
    onNextMonth,
    onToday,
  }: CalendarHeaderProps) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;

    return (
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 border-b bg-background/50 px-4 sm:px-6 py-3 sm:py-3.5">
        <div className="hidden sm:block sm:w-1/3" />

        <div className="flex items-center justify-center w-full sm:w-1/3">
          <div className="inline-flex items-center gap-2 bg-card/80 border border-border/70 px-4 py-1.5 rounded-2xl shadow-2xs select-none backdrop-blur-xs">
            <span className="text-xs sm:text-sm font-semibold font-mono text-muted-foreground tracking-wider">
              {year}
            </span>
            <span className="text-xs text-muted-foreground/40 font-light">
              •
            </span>
            <span className="text-lg sm:text-xl font-black text-foreground tracking-tight">
              {month}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center sm:justify-end w-full sm:w-1/3">
          <div className="flex items-center gap-1 bg-muted/50 p-1 rounded-xl border shrink-0 shadow-2xs mr-16">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onPrevYear}
              title="이전 연도"
              className="h-7 w-7 sm:h-8 sm:w-8 p-0 cursor-pointer shrink-0 text-muted-foreground hover:text-foreground"
            >
              <ChevronsLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onPrevMonth}
              title="이전 달"
              className="h-7 w-7 sm:h-8 sm:w-8 p-0 cursor-pointer shrink-0 text-muted-foreground hover:text-foreground"
            >
              <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Button>

            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onToday}
              className="h-7 sm:h-8 text-xs font-semibold px-2.5 cursor-pointer shrink-0 text-primary hover:bg-background/80"
            >
              <CalendarIcon className="w-3.5 h-3.5 mr-1" />
              <span>오늘</span>
            </Button>

            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onNextMonth}
              title="다음 달"
              className="h-7 w-7 sm:h-8 sm:w-8 p-0 cursor-pointer shrink-0 text-muted-foreground hover:text-foreground"
            >
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onNextYear}
              title="다음 연도"
              className="h-7 w-7 sm:h-8 sm:w-8 p-0 cursor-pointer shrink-0 text-muted-foreground hover:text-foreground"
            >
              <ChevronsRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  },
);

CalendarHeader.displayName = "CalendarHeader";
