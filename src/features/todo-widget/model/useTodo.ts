import React, { useState } from "react";

export interface TodoItemData {
  id: string;
  text: string;
  completed: boolean;
}

export const useTodo = (initialTodos: TodoItemData[] = []) => {
  const [todos, setTodos] = useState<TodoItemData[]>(initialTodos);
  const [inputText, setInputText] = useState("");

  const addTodo = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setTodos((prev) => [
      ...prev,
      { id: `todo-${Date.now()}`, text: inputText.trim(), completed: false },
    ]);
    setInputText("");
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const completedCount = todos.filter((t) => t.completed).length;
  const progressPercent = todos.length
    ? Math.round((completedCount / todos.length) * 100)
    : 0;

  return {
    todos,
    inputText,
    setInputText,
    addTodo,
    toggleTodo,
    deleteTodo,
    progressPercent,
  };
};
