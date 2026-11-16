"use client";

import { memo, useMemo } from "react";
import { useShallow } from "zustand/react/shallow";
import { useTodo } from "../model/useTodo";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoProgress } from "./TodoProgress";
import { useFilterStore } from "@/features/dashboard-filter/model/useFilterStore";

interface TodoWidgetProps {
  widgetId: string;
  isExpanded?: boolean;
}

export const TodoWidget = memo(
  ({ widgetId, isExpanded = false }: TodoWidgetProps) => {
    const {
      todos,
      inputText,
      setInputText,
      addTodo,
      toggleTodo,
      editTodo,
      deleteTodo,
      progressPercent,
      isLoading,
    } = useTodo(widgetId);
    const { todoStatus, searchQuery } = useFilterStore(
      useShallow((s) => ({
        todoStatus: s.todoStatus,
        searchQuery: s.searchQuery,
      })),
    );

    const filteredTodos = useMemo(() => {
      const trimmedQuery = searchQuery.trim().toLowerCase();

      return todos.filter((todo) => {
        if (todoStatus === "active" && todo.completed) return false;
        if (todoStatus === "completed" && !todo.completed) return false;

        if (trimmedQuery !== "") {
          return todo.text.toLowerCase().includes(trimmedQuery);
        }

        return true;
      });
    }, [todos, todoStatus, searchQuery]);

    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-full text-xs text-muted-foreground">
          불러오는 중..
        </div>
      );
    }

    return (
      <div className="w-full flex flex-col gap-2.5 h-full">
        <TodoProgress percent={progressPercent} />
        <TodoForm
          inputText={inputText}
          onChangeText={setInputText}
          onSubmit={addTodo}
        />
        <div className="w-full flex-1 min-h-0 h-auto overflow-visible">
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onEdit={editTodo}
            onDelete={deleteTodo}
            isExpanded={isExpanded}
          />
        </div>
      </div>
    );
  },
);

TodoWidget.displayName = "TodoWidget";
