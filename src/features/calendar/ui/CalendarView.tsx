"use client";

import { useCallback, useEffect, useState } from "react";
import { useScheduleStore } from "../model/useScheduleStore";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarGrid } from "./CalendarGrid";
import { ScheduleItem } from "../model/types";
import { Trash2 } from "lucide-react";
import { Button } from "@/shared/ui/button";
import dynamic from "next/dynamic";

const ScheduleModal = dynamic(
  () => import("./ScheduleModal").then((mod) => mod.ScheduleModal),
  { ssr: false },
);

export const CalendarView = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDateStr, setSelectedDateStr] = useState<string | null>(null);
  const [editingSchedule, setEditingSchedule] = useState<ScheduleItem | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const schedules = useScheduleStore((s) => s.schedules);
  const addSchedule = useScheduleStore((s) => s.addSchedule);
  const updateSchedule = useScheduleStore((s) => s.updateSchedule);
  const removeSchedule = useScheduleStore((s) => s.removeSchedule);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  const handleRemoveSchedule = useCallback(
    (dateStr: string, id: string) => {
      removeSchedule(dateStr, id);
    },
    [removeSchedule],
  );

  if (!isMounted) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-xs text-muted-foreground animate-pulse">
        달력을 불러오는 중..
      </div>
    );
  }

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
        onAddSchedule={addSchedule}
        onUpdateSchedule={updateSchedule}
      />

      {selectedDateStr && (
        <div className="block sm:hidden bg-card border rounded-xl p-3.5 space-y-3 shadow-xs animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-foreground">
              {selectedDateStr} 일정
            </h3>
            <Button
              size="sm"
              variant="outline"
              className="h-7 text-xs px-2 cursor-pointer"
              onClick={() => handleOpenAddModal(selectedDateStr)}
            >
              + 일정 추가
            </Button>
          </div>

          {schedules[selectedDateStr]?.length ? (
            <div className="space-y-2">
              {schedules[selectedDateStr].map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleOpenEditModal(selectedDateStr, item)}
                  className="p-2.5 bg-muted/40 border rounded-lg flex items-center justify-between active:bg-muted cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    {item.time && (
                      <span className="px-1.5 py-0.5 bg-primary/10 text-primary text-xs font-mono font-semibold rounded shrink-0">
                        {item.time}
                      </span>
                    )}
                    <span className="text-xs font-medium text-foreground truncate">
                      {item.title}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeSchedule(selectedDateStr, item.id);
                    }}
                    className="p-1.5 text-rose-500 hover:text-rose-700 rounded-md active:bg-rose-50 cursor-pointer"
                    title="삭제"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-muted-foreground py-2 text-center">
              등록된 일정이 없습니다.
            </p>
          )}
        </div>
      )}
    </div>
  );
};
