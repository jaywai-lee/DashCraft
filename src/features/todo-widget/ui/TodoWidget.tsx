"use client";

import { useTodo } from "../model/useTodo";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoProgress } from "./TodoProgress";

const DEFAULT_TODOS = [
  { id: "1", text: "DashCraft 프로젝트 세팅", completed: true },
  { id: "2", text: "Todo 위젯 기능 구현", completed: false },
];

export const TodoWidget = () => {
  const {
    todos,
    inputText,
    setInputText,
    addTodo,
    toggleTodo,
    deleteTodo,
    progressPercent,
  } = useTodo(DEFAULT_TODOS);

  return (
    <div className="flex flex-col h-full gap-3">
      <TodoProgress percent={progressPercent} />
      <TodoForm
        inputText={inputText}
        onChangeText={setInputText}
        onSubmit={addTodo}
      />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
};
