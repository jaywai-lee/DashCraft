"use client";

import React, { useState } from "react";
import {
  useTodosQuery,
  useAddTodoMutation,
  useToggleTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from "../api/useTodoQuery";

export const useTodo = (widgetId: string) => {
  const { data: todos = [], isLoading } = useTodosQuery(widgetId);
  const addTodoMutation = useAddTodoMutation(widgetId);
  const toggleTodoMutation = useToggleTodoMutation(widgetId);
  const updateTodoMutation = useUpdateTodoMutation(widgetId);
  const deleteTodoMutation = useDeleteTodoMutation(widgetId);

  const [inputText, setInputText] = useState("");

  const handleAddTodo = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    addTodoMutation.mutate(inputText.trim());
    setInputText("");
  };

  const completedCount = todos.filter((t) => t.completed).length;
  const progressPercent = todos.length
    ? Math.round((completedCount / todos.length) * 100)
    : 0;

  return {
    todos,
    inputText,
    setInputText,
    addTodo: handleAddTodo,
    toggleTodo: (todoId: string, completed: boolean) =>
      toggleTodoMutation.mutate({ todoId, completed: !completed }),
    editTodo: (todoId: string, text: string) =>
      updateTodoMutation.mutate({ todoId, text }),
    deleteTodo: (todoId: string) => deleteTodoMutation.mutate(todoId),
    progressPercent,
    isLoading,
  };
};
