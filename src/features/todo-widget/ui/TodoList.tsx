"use client";

import { Check, CheckCircle2, Circle, Edit2, Trash2, X } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { useEffect, useRef, useState, memo } from "react";
import { TodoRow } from "../api/todoRepository";
import { TodoItemData } from "../model/types";

type UnifiedTodoItem = TodoRow | TodoItemData;

interface TodoListProps {
  todos: UnifiedTodoItem[];
  onToggle: (id: string, completed: boolean) => void;
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
  isExpanded?: boolean;
}

const getItemId = (todo: UnifiedTodoItem): string => {
  return "todo_id" in todo ? todo.todo_id : todo.id;
};

const TodoItem = memo(
  ({
    todo,
    onToggle,
    onEdit,
    onDelete,
  }: {
    todo: UnifiedTodoItem;
    onToggle: (id: string, completed: boolean) => void;
    onEdit: (id: string, text: string) => void;
    onDelete: (id: string) => void;
  }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    const inputRef = useRef<HTMLInputElement>(null);
    const todoId = getItemId(todo);

    useEffect(() => {
      if (isEditing) {
        inputRef.current?.focus();
      }
    }, [isEditing]);

    const handleSave = () => {
      const trimmed = editText.trim();
      if (trimmed && trimmed !== todo.text) {
        onEdit(todoId, trimmed);
      } else {
        setEditText(todo.text);
      }
      setIsEditing(false);
    };

    const handleCancel = () => {
      setEditText(todo.text);
      setIsEditing(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Enter") handleSave();
      if (e.key === "Escape") handleCancel();
    };

    return (
      <li className="flex items-center justify-between p-2 rounded-lg bg-muted/30 hover:bg-muted/60 transition-colors group gap-2 min-w-0 w-full">
        {isEditing ? (
          <div className="flex items-center gap-1 w-full min-w-0">
            <input
              ref={inputRef}
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyDown}
              onBlur={handleSave}
              className="flex-1 min-w-0 bg-background border rounded px-2 text-xs h-7 outline-none focus:ring-1 focus:ring-primary"
            />
            <div className="flex items-center shrink-0 ml-auto gap-0.5">
              {/* onMouseDown={(e) => e.preventDefault()}로 input blur 선발동 차단 */}
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={handleSave}
                className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-primary/10 text-primary transition-colors shrink-0 cursor-pointer"
                aria-label="저장"
              >
                <Check className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={handleCancel}
                className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-muted text-muted-foreground transition-colors shrink-0 cursor-pointer"
                aria-label="취소"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={() => onToggle(todoId, todo.completed)}
              onDoubleClick={() => setIsEditing(true)}
              className="flex items-center gap-2 text-left flex-1 min-w-0 cursor-pointer py-0.5 pr-2"
            >
              {todo.completed ? (
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              ) : (
                <Circle className="w-4 h-4 text-muted-foreground shrink-0" />
              )}
              <span
                className={cn(
                  "truncate text-xs flex-1 min-w-0",
                  todo.completed
                    ? "line-through text-muted-foreground"
                    : "text-foreground",
                )}
              >
                {todo.text}
              </span>
            </button>

            <div className="flex items-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity shrink-0 ml-auto gap-0.5">
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors shrink-0 cursor-pointer"
                aria-label="수정"
              >
                <Edit2 className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => onDelete(todoId)}
                className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors shrink-0 cursor-pointer"
                aria-label="삭제"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </>
        )}
      </li>
    );
  },
);

TodoItem.displayName = "TodoItem";

export const TodoList = memo(
  ({ todos, onToggle, onEdit, onDelete, isExpanded }: TodoListProps) => {
    if (todos.length === 0) {
      return (
        <div
          className={cn(
            "flex-1 flex items-center justify-center py-6 text-xs text-muted-foreground",
            isExpanded ? "min-h-[300px]" : "min-h-[120px]",
          )}
        >
          등록된 할 일이 없습니다.
        </div>
      );
    }

    return (
      <ul
        className={cn(
          "space-y-2 pr-1 flex-1 transition-all w-full overflow-y-auto scrollbar-thin",
          isExpanded
            ? "max-h-[460px] min-h-[300px]"
            : "max-h-[160px] min-h-[120px]",
        )}
      >
        {todos.map((todo) => (
          <TodoItem
            key={getItemId(todo)}
            todo={todo}
            onToggle={onToggle}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </ul>
    );
  },
);

TodoList.displayName = "TodoList";
