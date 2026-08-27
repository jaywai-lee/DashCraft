"use client";

import { calculateDDay, formatDDayText } from "@/shared/lib/formatters";
import { DDayItem } from "../model/useDDayStore";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Trash2 } from "lucide-react";

interface DDayItemCardProps {
  item: DDayItem;
  isExpanded?: boolean;
  onRemove: (id: string) => void;
}

export const DDayItemCard = ({
  item,
  isExpanded = false,
  onRemove,
}: DDayItemCardProps) => {
  const diffDays = calculateDDay(item.targetDate);
  const ddayBadgeText = formatDDayText(diffDays);

  const isToday = diffDays === 0;
  const isPast = diffDays < 0;

  return (
    <div
      className={cn(
        "flex items-center justify-between p-2.5 rounded-xl border bg-card/60 transition-all group hover:border-primary/50 h-fit gap-2 w-full min-w-0",
        isExpanded ? "p-4 gap-3" : "p-2.5",
      )}
    >
      <span
        className={cn(
          "font-extrabold rounded-lg shrink-0 flex items-center justify-center transition-all",
          isExpanded
            ? "text-sm px-3.5 py-1.5 min-w-[68px]"
            : "text-xs px-2 py-1 min-w-[48px]",
          isToday
            ? "bg-rose-500 text-white animate-pulse"
            : isPast
              ? "bg-muted text-muted-foreground"
              : "bg-primary text-primary-foreground",
        )}
      >
        {ddayBadgeText}
      </span>

      <div className="flex flex-col items-center justify-center flex-1 min-w-0 text-center px-1">
        <span
          className={cn(
            "font-bold truncate w-full text-foreground",
            isExpanded ? "text-base" : "text-xs",
          )}
        >
          {item.title}
        </span>
        <span
          className={cn(
            "text-muted-foreground w-full truncate",
            isExpanded ? "text-xs" : "text-[10px]",
          )}
        >
          {item.targetDate}
        </span>
      </div>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => onRemove(item.id)}
        className="h-7 w-7 p-0 text-muted-foreground hover:text-destructive shrink-0"
        title="D-Day 삭제"
      >
        <Trash2 className="w-3.5 h-3.5" />
      </Button>
    </div>
  );
};
