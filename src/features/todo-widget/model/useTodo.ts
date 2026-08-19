"use client";

import React, { useState } from "react";
import { useTodoStore } from "./useTodoStore";

export const useTodo = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodoStore();
  const [inputText, setInputText] = useState("");

  const handleAddTodo = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    addTodo(inputText);
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
    toggleTodo,
    deleteTodo,
    progressPercent,
  };
};
