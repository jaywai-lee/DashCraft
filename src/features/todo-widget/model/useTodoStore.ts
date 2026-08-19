"use client";

import { create } from "zustand";
import { TodoItemData } from "./types";
import { createJSONStorage, persist } from "zustand/middleware";
import { DEFAULT_TODOS } from "./constants";

interface TodoState {
  todosByWidgetId: Record<string, TodoItemData[]>;
  getTodos: (widgetId: string) => TodoItemData[];
  addTodo: (widgetId: string, text: string) => void;
  toggleTodo: (widgetId: string, todoId: string) => void;
  deleteTodo: (widgetId: string, todoId: string) => void;
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set, get) => ({
      todosByWidgetId: {
        "default-todo-1": DEFAULT_TODOS,
      },

      getTodos: (widgetId: string) => {
        return get().todosByWidgetId[widgetId] || DEFAULT_TODOS;
      },

      addTodo: (widgetId: string, text: string) => {
        const trimmed = text.trim();
        if (!trimmed) return;

        set((state) => {
          const currentTodos = state.todosByWidgetId[widgetId] || DEFAULT_TODOS;
          return {
            todosByWidgetId: {
              ...state.todosByWidgetId,
              [widgetId]: [
                ...currentTodos,
                { id: `todo-${Date.now()}`, text: trimmed, completed: false },
              ],
            },
          };
        });
      },

      toggleTodo: (widgetId: string, todoId: string) => {
        set((state) => {
          const currentTodos = state.todosByWidgetId[widgetId] || [];
          return {
            todosByWidgetId: {
              ...state.todosByWidgetId,
              [widgetId]: currentTodos.map((todo) =>
                todo.id === todoId
                  ? { ...todo, completed: !todo.completed }
                  : todo,
              ),
            },
          };
        });
      },

      deleteTodo: (widgetId: string, todoId: string) => {
        set((state) => {
          const currentTodos = state.todosByWidgetId[widgetId] || [];
          return {
            todosByWidgetId: {
              ...state.todosByWidgetId,
              [widgetId]: currentTodos.filter((todo) => todo.id !== todoId),
            },
          };
        });
      },
    }),
    {
      name: "dashcraft-todo-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
