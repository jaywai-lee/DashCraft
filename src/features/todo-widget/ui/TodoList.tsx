import { CheckCircle2, Circle, Trash2 } from "lucide-react";
import { TodoItemData } from "../model/types";

interface TodoListProps {
  todos: TodoItemData[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoList = ({ todos, onToggle, onDelete }: TodoListProps) => {
  return (
    <ul className="flex-1 overflow-y-auto space-y-1.5 pr-1 text-sm">
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
