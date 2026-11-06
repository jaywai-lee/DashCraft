"use client";

import React, { useEffect, useRef } from "react";
import { Plus, X, Trash2 } from "lucide-react";
import { ScheduleItem } from "../model/types";
import { SCHEDULE_COLOR_STYLES } from "../model/constants";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";

interface DaySchedulePopoverProps {
  dateStr: string;
  schedules: ScheduleItem[];
  isOpen: boolean;
  onClose: () => void;
  onEditSchedule: (schedule: ScheduleItem) => void;
  onAddSchedule: (dateStr: string) => void;
  onDeleteSchedule: (id: string) => void;
}

export const DaySchedulePopover = ({
  dateStr,
  schedules,
  isOpen,
  onClose,
  onEditSchedule,
  onAddSchedule,
  onDeleteSchedule,
}: DaySchedulePopoverProps) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 sm:p-0">
      <div
        ref={popoverRef}
        className="w-full max-w-sm bg-background border border-border rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/40">
          <h3 className="text-sm font-bold text-foreground">
            {dateStr} 일정 목록 ({schedules.length})
          </h3>
          <div className="flex items-center gap-1.5">
            <Button
              size="sm"
              variant="outline"
              className="h-7 px-2 text-xs flex items-center gap-1 cursor-pointer bg-card"
              onClick={() => {
                onClose();
                onAddSchedule(dateStr);
              }}
            >
              <Plus className="w-3.5 h-3.5" />
              일정 추가
            </Button>
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-3 max-h-[320px] overflow-y-auto space-y-2.5 scrollbar-thin">
          {schedules.map((item) => {
            const style =
              SCHEDULE_COLOR_STYLES[item.color || "default"] ||
              SCHEDULE_COLOR_STYLES.default;

            return (
              <div
                key={item.id}
                onClick={() => {
                  onClose();
                  onEditSchedule(item);
                }}
                className={cn(
                  "p-3 border rounded-xl flex items-center justify-between cursor-pointer transition-all hover:opacity-90 active:scale-[0.99]",
                  style.bg,
                  style.border,
                )}
              >
                <div className="flex items-center gap-2 min-w-0">
                  {item.time && (
                    <span
                      className={cn(
                        "px-1.5 py-0.5 text-xs font-mono font-semibold rounded shrink-0",
                        style.timeBg,
                        style.text,
                      )}
                    >
                      {item.time}
                    </span>
                  )}
                  <span
                    className={cn("text-xs font-semibold truncate", style.text)}
                  >
                    {item.title}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteSchedule(item.id);
                  }}
                  className="p-1.5 text-rose-500 hover:text-rose-700 rounded-md hover:bg-rose-500/10 transition-colors cursor-pointer"
                  title="삭제"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
