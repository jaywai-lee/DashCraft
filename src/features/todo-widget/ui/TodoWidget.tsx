"use client";

import { useEffect, useMemo, useState } from "react";
import { useTodo } from "../model/useTodo";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoProgress } from "./TodoProgress";
import { useFilterStore } from "@/features/dashboard-filter/model/useFilterStore";

interface TodoWidgetProps {
  widgetId: string;
  isExpanded?: boolean;
}

export const TodoWidget = ({
  widgetId,
  isExpanded = false,
}: TodoWidgetProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const {
    todos,
    inputText,
    setInputText,
    addTodo,
    toggleTodo,
    deleteTodo,
    progressPercent,
  } = useTodo(widgetId);
  const { todoStatus, searchQuery } = useFilterStore();

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (todoStatus === "active" && todo.completed) return false;
      if (todoStatus === "completed" && !todo.completed) return false;

      if (searchQuery.trim() !== "") {
        return todo.text.toLowerCase().includes(searchQuery.toLowerCase());
      }

      return true;
    });
  }, [todos, todoStatus, searchQuery]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
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
          onDelete={deleteTodo}
          isExpanded={isExpanded}
        />
      </div>
    </div>
  );
};
