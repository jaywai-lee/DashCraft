"use client";

import { useMemo } from "react";
import { Calendar } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { calculateDDay } from "@/shared/lib/formatters";
import { useFilterStore } from "@/features/dashboard-filter/model/useFilterStore";
import {
  useDDaysQuery,
  useAddDDayMutation,
  useDeleteDDayMutation,
} from "../api/useDDayQuery";
import { DDayForm } from "./DDayForm";
import { DDayItemCard } from "./DDayItemCard";

interface DDayWidgetProps {
  widgetId: string;
  isExpanded?: boolean;
}

export const DDayWidget = ({
  widgetId,
  isExpanded = false,
}: DDayWidgetProps) => {
  const { data: ddays = [], isLoading } = useDDaysQuery(widgetId);
  const addDDayMutation = useAddDDayMutation(widgetId);
  const deleteDDayMutation = useDeleteDDayMutation(widgetId);
  const { searchQuery } = useFilterStore();

  const filteredAndSortedDDays = useMemo(() => {
    let result = [...ddays];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter((item) =>
        item.title.toLowerCase().includes(query),
      );
    }

    return result.sort((a, b) => {
      const diffA = calculateDDay(a.target_date);
      const diffB = calculateDDay(b.target_date);

      if (diffA >= 0 && diffB < 0) return -1;
      if (diffA < 0 && diffB >= 0) return 1;
      return diffA - diffB;
    });
  }, [ddays, searchQuery]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full text-xs text-muted-foreground">
        불러오는 중..
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <DDayForm
        onAdd={(title, targetDate) =>
          addDDayMutation.mutate({ title, targetDate })
        }
      />

      {filteredAndSortedDDays.length === 0 ? (
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
              ? filteredAndSortedDDays.length === 1
                ? "flex flex-col space-y-2"
                : "grid grid-cols-1 sm:grid-cols-2 auto-rows-max align-start"
              : "flex flex-col space-y-2",
          )}
        >
          {filteredAndSortedDDays.map((item) => (
            <DDayItemCard
              key={item.dday_id}
              item={{
                id: item.dday_id,
                title: item.title,
                targetDate: item.target_date,
              }}
              isExpanded={isExpanded}
              onRemove={(ddayId) => deleteDDayMutation.mutate(ddayId)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
