"use client";

import { useEffect, useState } from "react";
import { useTodo } from "../model/useTodo";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoProgress } from "./TodoProgress";

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
    <div className="flex flex-col h-full gap-3">
      <TodoProgress percent={progressPercent} />
      <TodoForm
        inputText={inputText}
        onChangeText={setInputText}
        onSubmit={addTodo}
      />
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        isExpanded={isExpanded}
      />
    </div>
  );
};
