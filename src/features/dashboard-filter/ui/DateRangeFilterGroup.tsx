import { cn } from "@/shared/lib/utils";
import { DateRangePreset } from "../model/useFilterStore";
import { Calendar } from "lucide-react";

interface DateRangeFilterGroupProps {
  datePreset: DateRangePreset;
  startDate: string | null;
  endDate: string | null;
  onSelectPreset: (preset: DateRangePreset) => void;
  onChangeCustomRange: (start: string | null, end: string | null) => void;
}

const PRESET_OPTIONS: { id: DateRangePreset; label: string }[] = [
  { id: "all", label: "전체 기간" },
  { id: "today", label: "오늘" },
  { id: "week", label: "최근 7일" },
  { id: "month", label: "최근 30일" },
  { id: "custom", label: "직접 지정" },
];

export const DateRangeFilterGroup = ({
  datePreset,
  startDate,
  endDate,
  onSelectPreset,
  onChangeCustomRange,
}: DateRangeFilterGroupProps) => {
  const handleStartDateChange = (newStart: string | null) => {
    if (newStart && endDate && newStart > endDate) {
      onChangeCustomRange(newStart, newStart);
    } else {
      onChangeCustomRange(newStart, endDate);
    }
  };

  const handleEndDateChange = (newEnd: string | null) => {
    if (newEnd && startDate && newEnd < startDate) {
      onChangeCustomRange(startDate, startDate);
    } else {
      onChangeCustomRange(startDate, newEnd);
    }
  };

  return (
    <div className="flex items-center gap-1.5 shrink-0">
      <div className="flex items-center bg-muted/50 p-1 rounded-lg text-xs border gap-1 shrink-0 whitespace-nowrap">
        {PRESET_OPTIONS.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelectPreset(item.id)}
            className={cn(
              "px-2.5 py-1 rounded-md transition-colors shrink-0 whitespace-nowrap",
              datePreset === item.id
                ? "bg-background font-semibold text-foreground shadow-2xs"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      {datePreset === "custom" && (
        <div className="flex items-center gap-1.5 bg-muted/50 p-1 rounded-lg border text-xs animate-in fade-in zoom-in-95 duration-150">
          <Calendar className="w-3.5 h-3.5 text-muted-foreground ml-1" />
          <input
            type="date"
            value={startDate ?? ""}
            max={endDate ?? undefined}
            onChange={(e) => handleStartDateChange(e.target.value || null)}
            className="bg-background px-2 py-0.5 rounded border text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <span className="text-muted-foreground text-[10px]">~</span>
          <input
            type="date"
            value={endDate ?? ""}
            min={startDate ?? undefined}
            onChange={(e) => handleEndDateChange(e.target.value || null)}
            className="bg-background px-2 py-0.5 rounded border text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      )}
    </div>
  );
};
