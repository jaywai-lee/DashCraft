"use client";

import { cn } from "@/shared/lib/utils";
import { useDDayStore } from "../model/useDDayStore";
import { DDayForm } from "./DDayForm";
import { Calendar } from "lucide-react";
import { DDayItemCard } from "./DDayItemCard";

interface DDayWidgetProps {
  widgetId: string;
  isExpanded?: boolean;
}

export const DDayWidget = ({
  widgetId,
  isExpanded = false,
}: DDayWidgetProps) => {
  const { getWidgetDDays, addDDay, removeDDay } = useDDayStore();
  const ddays = getWidgetDDays(widgetId);

  return (
    <div className="flex flex-col h-full">
      <DDayForm onAdd={(title, date) => addDDay(widgetId, title, date)} />

      {ddays.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground text-xs gap-2 py-8">
          <Calendar
            className={cn(
              "text-muted-foreground/40",
              isExpanded ? "w-8 h-8" : "w-6 h-6",
            )}
          />
          <span className={isExpanded ? "text-sm" : "text-xs"}>
            등록된 D-Day 일정이 없습니다.
          </span>
        </div>
      ) : (
        <div
          className={cn(
            "flex-1 overflow-y-auto pr-1 gap-3",
            isExpanded
              ? ddays.length === 1
                ? "flex flex-col space-y-2"
                : "grid grid-cols-1 sm:grid-cols-2 auto-rows-max align-start"
              : "flex flex-col space-y-2",
          )}
        >
          {ddays.map((item) => (
            <DDayItemCard
              key={item.id}
              item={item}
              isExpanded={isExpanded}
              onRemove={(id) => removeDDay(widgetId, id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
