"use client";

import { cn } from "@/shared/lib/utils";
import { Trash2 } from "lucide-react";
import { formatDateToYYYYMMDD, generateCalendarDays } from "../lib/dateUtils";
import { getKoreanHolidayInfo } from "../lib/holidays";
import { ScheduleItem, SchedulesMap } from "../model/types";
import { WEEK_DAYS_MON_FIRST } from "../config/constants";

interface CalendarGridProps {
  currentDate: Date;
  schedules: SchedulesMap;
  selectedDateStr: string | null;
  onSelectDate: (dateStr: string) => void;
  onOpenModal: (dateStr: string) => void;
  onEditSchedule: (dateStr: string, schedule: ScheduleItem) => void;
  onRemoveSchedule: (dateStr: string, id: string) => void;
}

export const CalendarGrid = ({
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
      <div className="grid grid-cols-7 border-b bg-muted/40 text-center text-[11px] sm:text-xs font-semibold py-2">
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
          const isToday = dateStr === todayStr;
          const isSelected = selectedDateStr === dateStr;

          const dayOfWeek = date.getDay();
          const isSunday = dayOfWeek === 0;
          const isSaturday = dayOfWeek === 6;
          const holidayInfo = getKoreanHolidayInfo(date);
          const isHoliday = isSunday || Boolean(holidayInfo);

          return (
            <div
              key={dateStr + idx}
              onClick={() => {
                onSelectDate(dateStr);
                if (window.innerWidth >= 640 && daySchedules.length === 0) {
                  onOpenModal(dateStr);
                }
              }}
              className={cn(
                "min-h-[56px] sm:min-h-[110px] p-1 sm:p-1.5 flex flex-col justify-between transition-colors cursor-pointer hover:bg-accent/30 active:bg-accent/50 border-r border-b border-border/60 relative",
                !isCurrentMonth && "bg-muted/10 opacity-40",
                isSelected && "bg-primary/5 ring-2 ring-primary ring-inset",
              )}
            >
              <div className="flex items-center justify-between gap-0.5">
                <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 min-w-0">
                  <span
                    className={cn(
                      "text-[11px] sm:text-xs font-medium w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full shrink-0",
                      isToday && "bg-primary text-primary-foreground font-bold",
                      !isToday && isHoliday && "text-rose-500 font-bold",
                      !isToday &&
                        !isHoliday &&
                        isSaturday &&
                        "text-blue-500 font-bold",
                    )}
                  >
                    {date.getDate()}
                  </span>

                  {holidayInfo && (
                    <span className="text-[9px] sm:text-[10px] text-rose-500 font-semibold truncate leading-none hidden sm:inline">
                      {holidayInfo.name}
                    </span>
                  )}
                </div>
              </div>

              {daySchedules.length > 0 && (
                <div className="flex sm:hidden items-center justify-center gap-0.5 mt-auto pb-0.5">
                  {daySchedules.slice(0, 3).map((item) => (
                    <span
                      key={item.id}
                      className="w-1.5 h-1.5 rounded-full bg-primary"
                    />
                  ))}
                  {daySchedules.length > 3 && (
                    <span className="text-[8px] font-bold text-muted-foreground leading-none">
                      +
                    </span>
                  )}
                </div>
              )}

              <div className="hidden sm:block space-y-1 my-1 flex-1 overflow-y-auto max-h-[72px] scrollbar-thin">
                {daySchedules.map((item) => (
                  <div
                    key={item.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      onEditSchedule(dateStr, item);
                    }}
                    className="text-[11px] bg-primary/10 text-primary border border-primary/20 px-1.5 py-0.5 rounded truncate font-medium flex items-center justify-between group/item hover:bg-primary/20 transition-colors"
                  >
                    <div className="flex items-center gap-1 min-w-0 truncate">
                      {item.time && (
                        <span className="px-1 py-0.2 bg-primary/20 text-primary text-[10px] font-mono font-semibold rounded shrink-0">
                          {item.time}
                        </span>
                      )}
                      <span className="truncate font-normal">{item.title}</span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveSchedule(dateStr, item.id);
                      }}
                      className="inline-flex text-rose-500 hover:text-rose-700 ml-1 shrink-0 cursor-pointer p-0.5"
                      title="삭제"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
