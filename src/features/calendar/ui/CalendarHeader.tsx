"use client";

import { Button } from "@/shared/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  LayoutGrid,
} from "lucide-react";
import Link from "next/link";

interface CalendarHeaderProps {
  currentDate: Date;
  onPrevYear: () => void;
  onPrevMonth: () => void;
  onNextYear: () => void;
  onNextMonth: () => void;
  onToday: () => void;
}

export const CalendarHeader = ({
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
    <div className="flex flex-col sm:flex-row items-center justify-between bg-card p-3 sm:p-4 rounded-xl border shadow-xs gap-3">
      <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground whitespace-nowrap">
        {year}년 {month}월
      </h1>

      <div className="flex items-center gap-2 max-w-full overflow-x-auto">
        <div className="flex items-center gap-0.5 sm:gap-1 bg-muted/50 p-1 rounded-lg border">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onPrevYear}
            title="이전 연도"
            className="h-7 w-7 sm:h-8 sm:w-8 p-0 cursor-pointer shrink-0"
          >
            <ChevronsLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onPrevMonth}
            title="이전 달"
            className="h-7 w-7 sm:h-8 sm:w-8 p-0 cursor-pointer shrink-0"
          >
            <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onToday}
            className="h-7 sm:h-8 text-xs font-semibold px-2.5 cursor-pointer shrink-0 text-primary"
          >
            오늘
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onNextMonth}
            title="다음 달"
            className="h-7 w-7 sm:h-8 sm:w-8 p-0 cursor-pointer shrink-0"
          >
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onNextYear}
            title="다음 연도"
            className="h-7 w-7 sm:h-8 sm:w-8 p-0 cursor-pointer shrink-0"
          >
            <ChevronsRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Button>
        </div>

        <Link href="/dashboard">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="h-9 px-3 text-xs gap-1.5 cursor-pointer font-medium"
            title="대시보드로 이동"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-primary" />
            <span>대시보드</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};
