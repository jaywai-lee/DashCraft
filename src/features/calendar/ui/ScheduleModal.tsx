"use client";

import React, { useState, useEffect } from "react";
import { Modal } from "@/shared/ui/modal";
import { Button } from "@/shared/ui/button";
import { TimePickerInput } from "./TimePickerInput";
import { ColorPalettePicker, ScheduleColorId } from "./ColorPalettePicker";
import { ScheduleRow } from "../api/scheduleRepository";
import { Trash2 } from "lucide-react";

interface ScheduleModalProps {
  isOpen: boolean;
  selectedDateStr: string;
  scheduleToEdit: ScheduleRow | null;
  isSaving: boolean;
  onClose: () => void;
  onSave: (params: {
    scheduleId?: string;
    dateStr: string;
    title: string;
    time?: string;
    color?: string;
  }) => Promise<void>;
  onDelete?: (scheduleId: string) => Promise<void>;
}

export const ScheduleModal = ({
  isOpen,
  selectedDateStr,
  scheduleToEdit,
  isSaving,
  onClose,
  onSave,
  onDelete,
}: ScheduleModalProps) => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [color, setColor] = useState<ScheduleColorId>("default");

  useEffect(() => {
    if (scheduleToEdit) {
      setTitle(scheduleToEdit.title);
      setTime(scheduleToEdit.time_str || "");
      setColor((scheduleToEdit.color as ScheduleColorId) || "default");
    } else {
      setTitle("");
      setTime("");
      setColor("default");
    }
  }, [scheduleToEdit, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    await onSave({
      scheduleId: scheduleToEdit?.schedule_id,
      dateStr: selectedDateStr,
      title: title.trim(),
      time: time || undefined,
      color,
    });
    onClose();
  };

  const handleDelete = async () => {
    if (scheduleToEdit && onDelete) {
      await onDelete(scheduleToEdit.schedule_id);
      onClose();
    }
  };

  const isEditMode = Boolean(scheduleToEdit);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isEditMode ? "일정 수정" : "새 일정 추가"}
      description={`${selectedDateStr} 날짜의 일정을 관리합니다.`}
      footer={
        <div className="flex items-center justify-between w-full">
          {isEditMode && onDelete ? (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleDelete}
              disabled={isSaving}
              className="text-destructive hover:bg-destructive/10 border-destructive/30"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>삭제</span>
            </Button>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={onClose}
              disabled={isSaving}
            >
              취소
            </Button>
            <Button
              type="button"
              variant="primary"
              size="sm"
              onClick={handleSubmit}
              isLoading={isSaving}
              disabled={!title.trim() || isSaving}
            >
              {isEditMode ? "저장" : "추가"}
            </Button>
          </div>
        </div>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4 pt-1">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-muted-foreground">
            일정 제목 <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="예: 팀 주간 회의"
            autoFocus
            className="w-full px-3 py-2 text-xs bg-background border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <TimePickerInput value={time} onChange={setTime} disabled={isSaving} />

        <ColorPalettePicker
          selectedColor={color}
          onChange={setColor}
          disabled={isSaving}
        />
      </form>
    </Modal>
  );
};
