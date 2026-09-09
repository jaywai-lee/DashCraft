"use client";

import { cn } from "@/shared/lib/utils";
import { formatDateToYYYYMMDD, generateCalendarDays } from "../lib/dateUtils";
import { ScheduleItem, SchedulesMap } from "../model/types";
import { WEEK_DAYS_MON_FIRST } from "../config/constants";
import { CalendarCell } from "./CalendarCell";
import { memo } from "react";

interface CalendarGridProps {
  currentDate: Date;
  schedules: SchedulesMap;
  selectedDateStr: string | null;
  onSelectDate: (dateStr: string) => void;
  onOpenModal: (dateStr: string) => void;
  onEditSchedule: (dateStr: string, schedule: ScheduleItem) => void;
  onRemoveSchedule: (dateStr: string, id: string) => void;
}

export const CalendarGrid = memo(
  ({
    currentDate,
    schedules,
    selectedDateStr,
    onSelectDate,
    onOpenModal,
    onEditSchedule,
    onRemoveSchedule,
  }: CalendarGridProps) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const calendarDays = generateCalendarDays(year, month);
    const todayStr = formatDateToYYYYMMDD(new Date());

    return (
      <div className="bg-card rounded-xl border shadow-xs overflow-hidden">
        <div className="grid grid-cols-7 border-b bg-muted/40 text-center text-[11px] sm:text-xs font-semibold py-2 select-none">
          {WEEK_DAYS_MON_FIRST.map((day, idx) => (
            <div
              key={day}
              className={cn(
                idx === 5 && "text-blue-500",
                idx === 6 && "text-rose-500",
              )}
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 auto-rows-fr border-t border-l border-border/60">
          {calendarDays.map(({ date, isCurrentMonth }, idx) => {
            const dateStr = formatDateToYYYYMMDD(date);
            const daySchedules = schedules[dateStr] || [];

            return (
              <CalendarCell
                key={dateStr + idx}
                date={date}
                dateStr={dateStr}
                isCurrentMonth={isCurrentMonth}
                isToday={dateStr === todayStr}
                isSelected={selectedDateStr === dateStr}
                daySchedules={daySchedules}
                onSelectDate={onSelectDate}
                onOpenModal={onOpenModal}
                onEditSchedule={onEditSchedule}
                onRemoveSchedule={onRemoveSchedule}
              />
            );
          })}
        </div>
      </div>
    );
  },
);

CalendarGrid.displayName = "CalendarGrid";
