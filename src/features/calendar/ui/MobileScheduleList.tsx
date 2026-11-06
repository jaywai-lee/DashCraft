"use client";

import React from "react";
import { Trash2 } from "lucide-react";
import { ScheduleItem } from "../model/types";
import { SCHEDULE_COLOR_STYLES } from "../model/constants";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";

interface MobileScheduleListProps {
  selectedDateStr: string | null;
  schedules: ScheduleItem[];
  onAddSchedule: (dateStr: string) => void;
  onEditSchedule: (scheduleId: string) => void;
  onDeleteSchedule: (scheduleId: string) => void;
}

export const MobileScheduleList = ({
  selectedDateStr,
  schedules,
  onAddSchedule,
  onEditSchedule,
  onDeleteSchedule,
}: MobileScheduleListProps) => {
  if (!selectedDateStr) return null;

  return (
    <div className="block sm:hidden bg-card border border-border rounded-2xl p-4 space-y-3 shadow-xs animate-in fade-in slide-in-from-bottom-2 duration-200">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">
          {selectedDateStr} 일정
        </h3>
        <Button
          size="sm"
          variant="outline"
          className="h-7 text-xs px-2 cursor-pointer"
          onClick={() => onAddSchedule(selectedDateStr)}
        >
          + 일정 추가
        </Button>
      </div>

      {schedules.length > 0 ? (
        <div className="space-y-2">
          {schedules.map((item) => {
            const style =
              SCHEDULE_COLOR_STYLES[item.color || "default"] ||
              SCHEDULE_COLOR_STYLES.default;

            return (
              <div
                key={item.id}
                onClick={() => onEditSchedule(item.id)}
                className={cn(
                  "p-2.5 border rounded-lg flex items-center justify-between active:opacity-80 cursor-pointer transition-colors",
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
                    className={cn("text-xs font-medium truncate", style.text)}
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
                  className="p-1.5 text-rose-500 hover:text-rose-700 rounded-md active:bg-rose-50 cursor-pointer"
                  title="삭제"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-xs text-muted-foreground py-2 text-center">
          등록된 일정이 없습니다.
        </p>
      )}
    </div>
  );
};
