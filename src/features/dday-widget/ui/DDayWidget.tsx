"use client";

import { cn } from "@/shared/lib/utils";
import { useDDayStore } from "../model/useDDayStore";
import { DDayForm } from "./DDayForm";
import { Calendar } from "lucide-react";
import { DDayItemCard } from "./DDayItemCard";
import { useEffect, useMemo, useState } from "react";
import { useFilterStore } from "@/features/dashboard-filter/model/useFilterStore";

interface DDayWidgetProps {
  widgetId: string;
  isExpanded?: boolean;
}

export const DDayWidget = ({
  widgetId,
  isExpanded = false,
}: DDayWidgetProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const { getWidgetDDays, addDDay, removeDDay } = useDDayStore();
  const { searchQuery } = useFilterStore();
  const ddays = getWidgetDDays(widgetId);

  const filteredDDays = useMemo(() => {
    if (!searchQuery.trim()) return ddays;

    const query = searchQuery.toLowerCase();
    return ddays.filter((item) => item.title.toLowerCase().includes(query));
  }, [ddays, searchQuery]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex items-center justify-center h-full text-xs text-muted-foreground">
        불러오는 중..
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <DDayForm onAdd={(title, date) => addDDay(widgetId, title, date)} />

      {filteredDDays.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground text-xs gap-2 py-8">
          <Calendar
            className={cn(
              "text-muted-foreground/40",
              isExpanded ? "w-8 h-8" : "w-6 h-6",
            )}
          />
          <span className={isExpanded ? "text-sm" : "text-xs"}>
            {searchQuery
              ? "검색 결과와 일치하는 D-Day가 없습니다."
              : "등록된 D-Day 일정이 없습니다."}
          </span>
        </div>
      ) : (
        <div
          className={cn(
            "flex-1 overflow-y-auto pr-1 gap-3",
            isExpanded
              ? filteredDDays.length === 1
                ? "flex flex-col space-y-2"
                : "grid grid-cols-1 sm:grid-cols-2 auto-rows-max align-start"
              : "flex flex-col space-y-2",
          )}
        >
          {filteredDDays.map((item) => (
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
