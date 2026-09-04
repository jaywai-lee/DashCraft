"use client";

import { Button } from "@/shared/ui/button";
import { Modal } from "@/shared/ui/modal";
import React, { useState } from "react";
import { HOURS, MINUTES, useTimePicker } from "../model/useTimePicker";

interface ScheduleModalProps {
  isOpen: boolean;
  dateStr: string | null;
  onClose: () => void;
  onAddSchedule: (dateStr: string, title: string, time?: string) => void;
}

export const ScheduleModal = ({
  isOpen,
  dateStr,
  onClose,
  onAddSchedule,
}: ScheduleModalProps) => {
  const [title, setTitle] = useState("");
  const {
    isAllDay,
    ampm,
    hour,
    minute,
    setAmpm,
    setHour,
    setMinute,
    toggleAllDay,
    getTimeString,
    resetTimePicker,
  } = useTimePicker();

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim() || !dateStr) return;

    const timeString = getTimeString();
    onAddSchedule(dateStr, title, timeString);

    setTitle("");
    resetTimePicker();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`일정 추가 (${dateStr ?? ""})`}
      maxWidth="sm"
      footer={
        <div className="flex items-center justify-end gap-2 w-full">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="cursor-pointer"
          >
            취소
          </Button>
          <Button
            type="submit"
            form="schedule-add-form"
            variant="primary"
            size="sm"
            className="cursor-pointer"
          >
            저장
          </Button>
        </div>
      }
    >
      <form
        id="schedule-add-form"
        onSubmit={handleSubmit}
        className="space-y-3.5 text-left"
      >
        <div>
          <label className="text-xs font-semibold text-muted-foreground block mb-1">
            일정 제목
          </label>
          <input
            type="text"
            required
            placeholder="일정을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 text-sm bg-background border rounded-lg text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            autoFocus
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-semibold text-muted-foreground">
              시간 지정
            </label>
            <button
              type="button"
              onClick={toggleAllDay}
              className="text-xs text-primary hover:underline cursor-pointer font-medium"
            >
              {isAllDay ? "+ 시간 설정" : "하루 종일"}
            </button>
          </div>

          {!isAllDay && (
            <div className="grid grid-cols-3 gap-1.5 p-2 bg-muted/40 border rounded-lg animate-in fade-in zoom-in-95 duration-150">
              <select
                value={ampm}
                onChange={(e) => setAmpm(e.target.value as "오전" | "오후")}
                className="px-2 py-1.5 text-xs bg-background border rounded-md text-foreground focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
              >
                <option value="오전">오전</option>
                <option value="오후">오후</option>
              </select>

              <select
                value={hour}
                onChange={(e) => setHour(e.target.value)}
                className="px-2 py-1.5 text-xs bg-background border rounded-md text-foreground focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
              >
                {HOURS.map((h) => (
                  <option key={h} value={h}>
                    {h}시
                  </option>
                ))}
              </select>

              <select
                value={minute}
                onChange={(e) => setMinute(e.target.value)}
                className="px-2 py-1.5 text-xs bg-background border rounded-md text-foreground focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
              >
                {MINUTES.map((m) => (
                  <option key={m} value={m}>
                    {m}분
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </form>
    </Modal>
  );
};
