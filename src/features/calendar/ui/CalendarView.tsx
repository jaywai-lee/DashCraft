"use client";

import React, { useState, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
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
import { MobileScheduleList } from "./MobileScheduleList";
import { ScheduleItem } from "../model/types";
import { useCalendarNavigation } from "../model/useCalendarNavigation";
import { useScheduleModal } from "../model/useScheduleModal";
import { useCalendarSchedules } from "../model/useCalendarSchedules";

const ScheduleModal = dynamic(
  () => import("./ScheduleModal").then((mod) => mod.ScheduleModal),
  { ssr: false },
);

const DaySchedulePopover = dynamic(
  () => import("./DaySchedulePopover").then((mod) => mod.DaySchedulePopover),
  { ssr: false },
);

const WEEK_DAYS = ["일", "월", "화", "수", "목", "금", "토"];

export const CalendarView = () => {
  const [popoverDateStr, setPopoverDateStr] = useState<string | null>(null);

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
    selectDate,
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

  const schedulesById = useMemo(() => {
    const map = new Map<string, (typeof schedules)[number]>();
    schedules.forEach((s) => map.set(s.schedule_id, s));
    return map;
  }, [schedules]);

  const handlePrevYear = useCallback(
    () => setCurrentDate((prev) => subYears(prev, 1)),
    [setCurrentDate],
  );
  const handleNextYear = useCallback(
    () => setCurrentDate((prev) => addYears(prev, 1)),
    [setCurrentDate],
  );

  const handleOpenPopover = useCallback((dateStr: string) => {
    setPopoverDateStr(dateStr);
  }, []);

  const handleClosePopover = useCallback(() => {
    setPopoverDateStr(null);
  }, []);

  const handleEditCellSchedule = useCallback(
    (_dateStr: string, schedule: ScheduleItem) => {
      const target = schedulesById.get(schedule.id);
      if (target) openEditModal(target);
    },
    [schedulesById, openEditModal],
  );

  const handleRemoveCellSchedule = useCallback(
    (_dateStr: string, id: string) => {
      deleteSchedule(id);
    },
    [deleteSchedule],
  );

  const handleEditScheduleById = useCallback(
    (id: string) => {
      const target = schedulesById.get(id);
      if (target) openEditModal(target);
    },
    [schedulesById, openEditModal],
  );

  const handleEditPopoverSchedule = useCallback(
    (schedule: ScheduleItem) => {
      const target = schedulesById.get(schedule.id);
      if (target) openEditModal(target);
    },
    [schedulesById, openEditModal],
  );

  const calendarDays = useMemo(() => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const gridStart = startOfWeek(monthStart, { weekStartsOn: 0 });
    const gridEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });

    return eachDayOfInterval({ start: gridStart, end: gridEnd });
  }, [currentDate]);

  const handleSaveModal = useCallback(
    async (params: {
      scheduleId?: string;
      dateStr: string;
      title: string;
      time?: string;
      color?: string;
    }) => {
      if (params.scheduleId) {
        await updateSchedule({
          scheduleId: params.scheduleId,
          dateStr: params.dateStr,
          title: params.title,
          time: params.time,
          color: params.color,
        });
      } else {
        await addSchedule({
          dateStr: params.dateStr,
          title: params.title,
          time: params.time,
          color: params.color,
        });
      }
    },
    [updateSchedule, addSchedule],
  );

  const selectedDaySchedules = selectedDateStr
    ? (schedulesMap.get(selectedDateStr) ?? [])
    : [];

  const popoverSchedules = popoverDateStr
    ? (schedulesMap.get(popoverDateStr) ?? [])
    : [];

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
                    onSelectDate={selectDate}
                    onOpenModal={openAddModal}
                    onOpenPopover={handleOpenPopover}
                    onEditSchedule={handleEditCellSchedule}
                    onRemoveSchedule={handleRemoveCellSchedule}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <MobileScheduleList
          selectedDateStr={selectedDateStr}
          schedules={selectedDaySchedules}
          onAddSchedule={openAddModal}
          onEditSchedule={handleEditScheduleById}
          onDeleteSchedule={deleteSchedule}
        />
      </main>

      {Boolean(popoverDateStr) && (
        <DaySchedulePopover
          dateStr={popoverDateStr ?? ""}
          schedules={popoverSchedules}
          isOpen={Boolean(popoverDateStr)}
          onClose={handleClosePopover}
          onAddSchedule={openAddModal}
          onEditSchedule={handleEditPopoverSchedule}
          onDeleteSchedule={deleteSchedule}
        />
      )}

      {isOpen && (
        <ScheduleModal
          isOpen={isOpen}
          selectedDateStr={selectedDateStr}
          scheduleToEdit={scheduleToEdit}
          isSaving={isSaving}
          onClose={closeModal}
          onSave={handleSaveModal}
          onDelete={deleteSchedule}
        />
      )}
    </div>
  );
};
