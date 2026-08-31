"use client";

import React, { useState } from "react";
import { useTodoStore } from "./useTodoStore";

export const useTodo = (widgetId: string) => {
  const { getTodos, addTodo, toggleTodo, editTodo, deleteTodo } =
    useTodoStore();
  const todos = getTodos(widgetId);
  const [inputText, setInputText] = useState("");

  const handleAddTodo = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    addTodo(widgetId, inputText);
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
    toggleTodo: (id: string) => toggleTodo(widgetId, id),
    editTodo: (todoId: string, text: string) =>
      editTodo(widgetId, todoId, text),
    deleteTodo: (id: string) => deleteTodo(widgetId, id),
    progressPercent,
  };
};
