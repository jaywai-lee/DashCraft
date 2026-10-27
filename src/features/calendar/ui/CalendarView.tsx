"use client";

import React, { useCallback, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { AppHeader } from "@/widgets/header/ui/AppHeader";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarGrid } from "./CalendarGrid";
import { formatDateToYYYYMMDD } from "../lib/dateUtils";
import { ScheduleItem } from "../model/types";
import {
  useSchedulesQuery,
  useAddScheduleMutation,
  useUpdateScheduleMutation,
  useDeleteScheduleMutation,
} from "../api/useScheduleQuery";

const ScheduleModal = dynamic(
  () => import("./ScheduleModal").then((mod) => mod.ScheduleModal),
  { ssr: false },
);

export const CalendarView = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDateStr, setSelectedDateStr] = useState<string | null>(null);
  const [editingSchedule, setEditingSchedule] = useState<ScheduleItem | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { startDate, endDate } = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const start = formatDateToYYYYMMDD(new Date(year, month - 1, 1));
    const end = formatDateToYYYYMMDD(new Date(year, month + 2, 0));

    return { startDate: start, endDate: end };
  }, [currentDate]);

  const { data: rawSchedules = [] } = useSchedulesQuery(startDate, endDate);
  const addScheduleMutation = useAddScheduleMutation(startDate, endDate);
  const updateScheduleMutation = useUpdateScheduleMutation(startDate, endDate);
  const deleteScheduleMutation = useDeleteScheduleMutation(startDate, endDate);

  const schedulesMap = useMemo(() => {
    const map: Record<string, ScheduleItem[]> = {};
    for (const item of rawSchedules) {
      if (!map[item.date_str]) {
        map[item.date_str] = [];
      }
      map[item.date_str].push({
        id: item.schedule_id,
        title: item.title,
        time: item.time_str ?? undefined,
      });
    }
    return map;
  }, [rawSchedules]);

  const handlePrevYear = useCallback(
    () =>
      setCurrentDate(
        (prev) => new Date(prev.getFullYear() - 1, prev.getMonth(), 1),
      ),
    [],
  );
  const handleNextYear = useCallback(
    () =>
      setCurrentDate(
        (prev) => new Date(prev.getFullYear() + 1, prev.getMonth(), 1),
      ),
    [],
  );
  const handlePrevMonth = useCallback(
    () =>
      setCurrentDate(
        (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1),
      ),
    [],
  );
  const handleNextMonth = useCallback(
    () =>
      setCurrentDate(
        (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1),
      ),
    [],
  );
  const handleToday = useCallback(() => setCurrentDate(new Date()), []);

  const handleOpenAddModal = useCallback((dateStr: string) => {
    setSelectedDateStr(dateStr);
    setEditingSchedule(null);
    setIsModalOpen(true);
  }, []);

  const handleOpenEditModal = useCallback(
    (dateStr: string, schedule: ScheduleItem) => {
      setSelectedDateStr(dateStr);
      setEditingSchedule(schedule);
      setIsModalOpen(true);
    },
    [],
  );

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setEditingSchedule(null);
  }, []);

  const handleSelectDate = useCallback((dateStr: string) => {
    setSelectedDateStr(dateStr);
  }, []);

  const handleAddSchedule = useCallback(
    (dateStr: string, title: string, time?: string) => {
      addScheduleMutation.mutate({ dateStr, title, time });
    },
    [addScheduleMutation],
  );

  const handleUpdateSchedule = useCallback(
    (dateStr: string, id: string, title: string, time?: string) => {
      updateScheduleMutation.mutate({ scheduleId: id, dateStr, title, time });
    },
    [updateScheduleMutation],
  );

  const handleRemoveSchedule = useCallback(
    (_dateStr: string, id: string) => {
      deleteScheduleMutation.mutate({ scheduleId: id });
    },
    [deleteScheduleMutation],
  );

  return (
    <div className="min-h-screen bg-muted/20 text-foreground flex flex-col">
      <AppHeader />

      <CalendarHeader
        currentDate={currentDate}
        onPrevYear={handlePrevYear}
        onPrevMonth={handlePrevMonth}
        onNextYear={handleNextYear}
        onNextMonth={handleNextMonth}
        onToday={handleToday}
      />

      <main className="flex-1 max-w-[1800px] w-full mx-auto p-4 sm:p-6 space-y-4">
        <CalendarGrid
          currentDate={currentDate}
          schedules={schedulesMap}
          selectedDateStr={selectedDateStr}
          onSelectDate={handleSelectDate}
          onOpenModal={handleOpenAddModal}
          onEditSchedule={handleOpenEditModal}
          onRemoveSchedule={handleRemoveSchedule}
        />

        <ScheduleModal
          isOpen={isModalOpen}
          dateStr={selectedDateStr}
          editingSchedule={editingSchedule}
          onClose={handleCloseModal}
          onAddSchedule={handleAddSchedule}
          onUpdateSchedule={handleUpdateSchedule}
        />
      </main>
    </div>
  );
};
