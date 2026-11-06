"use client";

import { memo } from "react";
import { ScheduleItem } from "../model/types";
import { SCHEDULE_COLOR_STYLES } from "../model/constants";
import { getKoreanHolidayInfo } from "../lib/holidays";
import { cn } from "@/shared/lib/utils";
import { Trash2 } from "lucide-react";

interface CalendarCellProps {
  date: Date;
  dateStr: string;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  daySchedules: ScheduleItem[];
  onSelectDate: (dateStr: string) => void;
  onOpenModal: (dateStr: string) => void;
  onOpenPopover: (dateStr: string) => void;
  onEditSchedule: (dateStr: string, schedule: ScheduleItem) => void;
  onRemoveSchedule: (dateStr: string, id: string) => void;
}

export const CalendarCell = memo(
  ({
    date,
    dateStr,
    isCurrentMonth,
    isToday,
    isSelected,
    daySchedules,
    onSelectDate,
    onOpenModal,
    onOpenPopover,
    onEditSchedule,
    onRemoveSchedule,
  }: CalendarCellProps) => {
    const dayOfWeek = date.getDay();
    const isSunday = dayOfWeek === 0;
    const isSaturday = dayOfWeek === 6;
    const holidayInfo = getKoreanHolidayInfo(date);
    const isHoliday = isSunday || Boolean(holidayInfo);

    const visibleSchedules = daySchedules.slice(0, 2);
    const hiddenCount = daySchedules.length - 2;

    return (
      <div
        onClick={() => {
          onSelectDate(dateStr);
          if (window.innerWidth >= 640) {
            onOpenModal(dateStr);
          }
        }}
        className={cn(
          "min-h-[56px] sm:min-h-[110px] p-1 sm:p-1.5 flex flex-col justify-between transition-colors select-none cursor-pointer hover:bg-accent/30 active:bg-accent/50 border-r border-b border-border/60 relative",
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
            {daySchedules.slice(0, 3).map((item) => {
              const style =
                SCHEDULE_COLOR_STYLES[item.color || "default"] ||
                SCHEDULE_COLOR_STYLES.default;
              return (
                <span
                  key={item.id}
                  className={cn("w-1.5 h-1.5 rounded-full", style.dot)}
                />
              );
            })}
            {daySchedules.length > 3 && (
              <span className="text-[8px] font-bold text-muted-foreground leading-none">
                +
              </span>
            )}
          </div>
        )}

        <div className="hidden sm:block space-y-1 my-1 flex-1 overflow-hidden">
          {visibleSchedules.map((item) => {
            const style =
              SCHEDULE_COLOR_STYLES[item.color || "default"] ||
              SCHEDULE_COLOR_STYLES.default;

            return (
              <div
                key={item.id}
                onClick={(e) => {
                  e.stopPropagation();
                  onEditSchedule(dateStr, item);
                }}
                className={cn(
                  "text-[11px] border px-1.5 py-0.5 rounded truncate font-medium flex items-center justify-between group/item transition-colors",
                  style.bg,
                  style.text,
                  style.border,
                )}
              >
                <div className="flex items-center gap-1 min-w-0 truncate">
                  {item.time && (
                    <span
                      className={cn(
                        "px-1 py-0.2 text-[10px] font-mono font-semibold rounded shrink-0",
                        style.timeBg,
                      )}
                    >
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
            );
          })}

          {hiddenCount > 0 && (
            <div
              onClick={(e) => {
                e.stopPropagation();
                onOpenPopover(dateStr);
              }}
              className="text-[10px] font-semibold text-muted-foreground hover:text-foreground px-1.5 py-0.5 rounded hover:bg-muted/80 transition-colors truncate cursor-pointer"
            >
              +{hiddenCount}개 더보기
            </div>
          )}
        </div>
      </div>
    );
  },
);

CalendarCell.displayName = "CalendarCell";
