import { cn } from "@/shared/lib/utils";
import { TodoStatusFilter } from "../model/useFilterStore";

interface TodoStatusFilterGroupProps {
  status: TodoStatusFilter;
  onSelect: (status: TodoStatusFilter) => void;
}

const STATUS_OPTIONS: { id: TodoStatusFilter; label: string }[] = [
  { id: "all", label: "전체 항목" },
  { id: "active", label: "진행 중" },
  { id: "completed", label: "완료됨" },
];

export const TodoStatusFilterGroup = ({
  status,
  onSelect,
}: TodoStatusFilterGroupProps) => {
  return (
    <div className="flex items-center bg-muted/50 p-1 rounded-lg text-xs border gap-1 shrink-0 whitespace-nowrap">
      {STATUS_OPTIONS.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onSelect(item.id)}
          className={cn(
            "px-2.5 py-1 rounded-md transition-colors shrink-0 whitespace-nowrap",
            status === item.id
              ? "bg-background font-semibold text-foreground shadow-2xs"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};
