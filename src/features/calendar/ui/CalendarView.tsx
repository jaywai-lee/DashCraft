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
  addYears,
  subYears,
} from "date-fns";
import { Loader2 } from "lucide-react";
import { AppHeader } from "@/widgets/header/ui/AppHeader";
import { cn } from "@/shared/lib/utils";
import { CalendarCell } from "./CalendarCell";
import { CalendarHeader } from "./CalendarHeader";
import { ScheduleModal } from "./ScheduleModal";
import { useCalendarNavigation } from "../model/useCalendarNavigation";
import { useScheduleModal } from "../model/useScheduleModal";
import { useCalendarSchedules } from "../model/useCalendarSchedules";

const WEEK_DAYS = ["일", "월", "화", "수", "목", "금", "토"];

export const CalendarView = () => {
  const {
    currentDate,
    setCurrentDate,
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

  const handlePrevYear = () => setCurrentDate((prev) => subYears(prev, 1));
  const handleNextYear = () => setCurrentDate((prev) => addYears(prev, 1));

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
    <div className="min-h-screen bg-muted/20 text-foreground flex flex-col">
      <AppHeader showSearchButton={false} />

      <main className="flex-1 max-w-[1800px] w-full mx-auto p-4 sm:p-6 flex flex-col space-y-4">
        <div className="bg-card border border-border rounded-2xl shadow-xs overflow-hidden flex flex-col flex-1">
          <CalendarHeader
            currentDate={currentDate}
            onPrevYear={handlePrevYear}
            onPrevMonth={handlePrevMonth}
            onNextYear={handleNextYear}
            onNextMonth={handleNextMonth}
            onToday={handleToday}
          />

          <div className="grid grid-cols-7 border-b border-border text-center text-xs font-semibold py-2 bg-muted/30 select-none">
            {WEEK_DAYS.map((day, idx) => (
              <div
                key={day}
                className={cn(
                  "py-1",
                  idx === 0 && "text-rose-500 font-bold",
                  idx === 6 && "text-blue-500 font-bold",
                )}
              >
                {day}
              </div>
            ))}
          </div>

          <div className="flex-1 relative flex flex-col min-h-[600px]">
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
        </div>
      </main>

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
