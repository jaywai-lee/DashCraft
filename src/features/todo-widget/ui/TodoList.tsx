import { CheckCircle2, Circle, Trash2 } from "lucide-react";
import { TodoItemData } from "../model/types";

interface TodoListProps {
  todos: TodoItemData[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  isExpanded?: boolean;
}

export const TodoList = ({
  todos,
  onToggle,
  onDelete,
  isExpanded,
}: TodoListProps) => {
  if (todos.length === 0) {
    return (
      <div
        className={`flex-1 flex items-center justify-center py-6 text-xs text-muted-foreground ${isExpanded ? "min-h-[300px]" : "min-h-[120px]"}`}
      >
        등록된 할 일이 없습니다.
      </div>
    );
  }
  return (
    <ul
      className={`space-y-2 overflow-y-auto pr-1 flex-1 transition-all ${
        isExpanded
          ? "max-h-[480px] min-h-[300px]"
          : "max-h-[220px] min-h-[120px]"
      }`}
    >
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between p-2 rounded-lg bg-muted/30 hover:bg-muted/60 transition-colors group"
        >
          <button
            onClick={() => onToggle(todo.id)}
            className="flex items-center gap-2 text-left flex-1 min-w-0"
          >
            {todo.completed ? (
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
            ) : (
              <Circle className="w-4 h-4 text-muted-foreground shrink-0" />
            )}
            <span
              className={`truncate ${todo.completed ? "line-through text-muted-foreground" : "text-foreground"}`}
            >
              {todo.text}
            </span>
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            className="opacity-0 group-hover:opacity-100 p-1 text-muted-foreground hover:text-destructive transition-all"
            aria-label="삭제"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </li>
      ))}
    </ul>
  );
};
