"use client";

import { create } from "zustand";
import { TodoItemData } from "./types";
import { createJSONStorage, persist } from "zustand/middleware";
import { DEFAULT_TODOS } from "./constants";

interface TodoState {
  todos: TodoItemData[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      todos: DEFAULT_TODOS,

      addTodo: (text: string) => {
        const trimmed = text.trim();
        if (!trimmed) return;

        set((state) => ({
          todos: [
            ...state.todos,
            { id: `todo-${Date.now()}`, text: trimmed, completed: false },
          ],
        }));
      },

      toggleTodo: (id: string) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo,
          ),
        }));
      },

      deleteTodo: (id: string) => {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        }));
      },
    }),
    {
      name: "dashcraft-todo-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
