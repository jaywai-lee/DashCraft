"use client";

import React, { useMemo } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isToday as isTodayFn,
} from "date-fns";
import { ko } from "date-fns/locale";
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Loader2,
} from "lucide-react";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";
import { CalendarCell } from "./CalendarCell";
import { ScheduleModal } from "./ScheduleModal";
import { useCalendarNavigation } from "../model/useCalendarNavigation";
import { useScheduleModal } from "../model/useScheduleModal";
import { useCalendarSchedules } from "../model/useCalendarSchedules";

const WEEK_DAYS = ["일", "월", "화", "수", "목", "금", "토"];

export const CalendarView = () => {
  const {
    currentDate,
    handlePrevMonth,
    handleNextMonth,
    handleToday,
    startDateStr,
    endDateStr,
  } = useCalendarNavigation();

  const {
    isOpen,
    selectedDateStr,
    scheduleToEdit,
    openAddModal,
    openEditModal,
    closeModal,
  } = useScheduleModal();

  const {
    schedules,
    schedulesMap,
    isLoading,
    addSchedule,
    updateSchedule,
    deleteSchedule,
    isSaving,
  } = useCalendarSchedules(startDateStr, endDateStr);

  const calendarDays = useMemo(() => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const gridStart = startOfWeek(monthStart, { weekStartsOn: 0 });
    const gridEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });

    return eachDayOfInterval({ start: gridStart, end: gridEnd });
  }, [currentDate]);

  const handleSaveModal = async (params: {
    scheduleId?: string;
    dateStr: string;
    title: string;
    time?: string;
  }) => {
    if (params.scheduleId) {
      await updateSchedule({
        scheduleId: params.scheduleId,
        dateStr: params.dateStr,
        title: params.title,
        time: params.time,
      });
    } else {
      await addSchedule({
        dateStr: params.dateStr,
        title: params.title,
        time: params.time,
      });
    }
  };

  return (
    <div className="bg-card border border-border rounded-2xl shadow-xs overflow-hidden flex flex-col h-full">
      <div className="p-4 sm:p-5 border-b border-border flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 text-primary rounded-xl">
            <CalendarIcon className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-foreground tracking-tight">
            {format(currentDate, "yyyy년 MM월", { locale: ko })}
          </h2>
        </div>

        <div className="flex items-center gap-1.5">
          <Button variant="outline" size="sm" onClick={handleToday}>
            오늘
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handlePrevMonth}
            className="h-8 w-8 p-0"
            aria-label="이전 달"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleNextMonth}
            className="h-8 w-8 p-0"
            aria-label="다음 달"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 border-b border-border text-center text-xs font-semibold py-2 bg-muted/30">
        {WEEK_DAYS.map((day, idx) => (
          <div
            key={day}
            className={cn(
              "py-1",
              idx === 0 && "text-rose-500",
              idx === 6 && "text-blue-500",
            )}
          >
            {day}
          </div>
        ))}
      </div>

      <div className="flex-1 min-h-[500px] relative flex flex-col">
        {isLoading && (
          <div className="absolute inset-0 bg-background/50 backdrop-blur-2xs flex items-center justify-center z-10">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        )}

        <div className="grid grid-cols-7 auto-rows-fr flex-1 border-l border-t border-border/60">
          {calendarDays.map((day) => {
            const dateStr = format(day, "yyyy-MM-dd");
            const daySchedules = schedulesMap.get(dateStr) ?? [];

            return (
              <CalendarCell
                key={dateStr}
                date={day}
                dateStr={dateStr}
                isCurrentMonth={isSameMonth(day, currentDate)}
                isToday={isTodayFn(day)}
                isSelected={selectedDateStr === dateStr}
                daySchedules={daySchedules}
                onSelectDate={openAddModal}
                onOpenModal={openAddModal}
                onEditSchedule={(_dStr, schedule) => {
                  const target = schedules.find(
                    (s) => s.schedule_id === schedule.id,
                  );
                  if (target) openEditModal(target);
                }}
                onRemoveSchedule={(_dStr, id) => {
                  deleteSchedule(id);
                }}
              />
            );
          })}
        </div>
      </div>

      <ScheduleModal
        isOpen={isOpen}
        selectedDateStr={selectedDateStr}
        scheduleToEdit={scheduleToEdit}
        isSaving={isSaving}
        onClose={closeModal}
        onSave={handleSaveModal}
        onDelete={deleteSchedule}
      />
    </div>
  );
};
