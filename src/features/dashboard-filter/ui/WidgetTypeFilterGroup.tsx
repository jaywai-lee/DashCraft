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
    <div className="flex items-center bg-muted/50 p-1 rounded-lg text-xs border gap-1">
      <button
        onClick={() => onSelect("all")}
        className={cn(
          "px-2.5 py-1 rounded-md transition-colors",
          selectedType === "all"
            ? "bg-background font-semibold text-foreground shadow-2xs"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        전체 위젯
      </button>
      {WIDGET_OPTIONS.map((item) => (
        <button
          key={item.type}
          onClick={() => onSelect(item.type as WidgetType)}
          className={cn(
            "px-2.5 py-1 rounded-md transition-colors",
            selectedType === item.type
              ? "bg-background font-semibold text-foreground shadow-2xs"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};
