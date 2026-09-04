"use client";

import { useEffect, useState } from "react";
import { useScheduleStore } from "../model/useScheduleStore";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarGrid } from "./CalendarGrid";
import { ScheduleModal } from "./ScheduleModal";

export const CalendarView = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDateStr, setSelectedDateStr] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { schedules, addSchedule, removeSchedule } = useScheduleStore();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-xs text-muted-foreground animate-pulse">
        달력을 불러오는 중..
      </div>
    );
  }

  const handlePrevYear = () => setCurrentDate(new Date(year - 1, month, 1));
  const handleNextYear = () => setCurrentDate(new Date(year + 1, month, 1));
  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));
  const handleToday = () => setCurrentDate(new Date());

  const handleOpenModal = (dateStr: string) => {
    setSelectedDateStr(dateStr);
    setIsModalOpen(true);
  };

  return (
    <div className="p-4 max-w-[1400px] mx-auto space-y-4">
      <CalendarHeader
        currentDate={currentDate}
        onPrevYear={handlePrevYear}
        onPrevMonth={handlePrevMonth}
        onNextYear={handleNextYear}
        onNextMonth={handleNextMonth}
        onToday={handleToday}
      />

      <CalendarGrid
        currentDate={currentDate}
        schedules={schedules}
        onOpenModal={handleOpenModal}
        onRemoveSchedule={removeSchedule}
      />

      <ScheduleModal
        isOpen={isModalOpen}
        dateStr={selectedDateStr}
        onClose={() => setIsModalOpen(false)}
        onAddSchedule={addSchedule}
      />
    </div>
  );
};
