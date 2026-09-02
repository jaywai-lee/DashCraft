import { cn } from "@/shared/lib/utils";
import {
  WIDGET_OPTIONS,
  WidgetType,
} from "@/widgets/dashboard-grid/config/widgets.config";

interface WidgetTypeFilterGroupProps {
  selectedType: WidgetType | "all";
  onSelect: (type: WidgetType | "all") => void;
}

export const WidgetTypeFilterGroup = ({
  selectedType,
  onSelect,
}: WidgetTypeFilterGroupProps) => {
  return (
    <div className="flex items-center bg-muted/50 p-1 rounded-lg text-xs border gap-1 shrink-0 whitespace-nowrap">
      <button
        type="button"
        onClick={() => onSelect("all")}
        className={cn(
          "px-2.5 py-1 rounded-md transition-colors shrink-0 whitespace-nowrap cursor-pointer h-7 flex items-center justify-center",
          selectedType === "all"
            ? "bg-background font-semibold text-foreground shadow-2xs"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        전체 위젯
      </button>

      {WIDGET_OPTIONS.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.type}
            type="button"
            onClick={() => onSelect(item.type)}
            className={cn(
              "flex items-center justify-center gap-1.5 px-2.5 py-1 rounded-md transition-colors shrink-0 whitespace-nowrap cursor-pointer h-7",
              selectedType === item.type
                ? "bg-background font-semibold text-foreground shadow-2xs"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <Icon className="w-3.5 h-3.5 text-primary shrink-0" />
            <span>{item.title}</span>
          </button>
        );
      })}
    </div>
  );
};
