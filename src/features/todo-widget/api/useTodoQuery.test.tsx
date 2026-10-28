import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  useTodosQuery,
  useAddTodoMutation,
  useToggleTodoMutation,
  useDeleteTodoMutation,
} from "./useTodoQuery";
import { todoRepository } from "./todoRepository";
import React from "react";

vi.mock("./todoRepository", () => ({
  todoRepository: {
    fetchTodos: vi.fn(),
    insertTodo: vi.fn(),
    updateTodo: vi.fn(),
    deleteTodo: vi.fn(),
  },
}));

vi.mock("sonner", () => ({
  toast: {
    error: vi.fn(),
  },
}));

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        gcTime: 0,
      },
      mutations: {
        retry: false,
      },
    },
  });

const createWrapper = () => {
  const queryClient = createTestQueryClient();
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  Wrapper.displayName = "TestQueryWrapper";
  return Wrapper;
};

describe("Todo Query Hooks", () => {
  const widgetId = "widget-todo-1";

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("useTodosQuery: widgetId에 속한 할 일 목록을 불러온다", async () => {
    const mockTodos = [
      {
        id: "1",
        user_id: "user-1",
        widget_id: widgetId,
        todo_id: "t-1",
        text: "테스트 할 일 1",
        completed: false,
        sort_order: 1,
        created_at: "2026-01-01",
        updated_at: "2026-01-01",
      },
    ];

    vi.mocked(todoRepository.fetchTodos).mockResolvedValueOnce(mockTodos);

    const { result } = renderHook(() => useTodosQuery(widgetId), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(mockTodos);
    expect(todoRepository.fetchTodos).toHaveBeenCalledWith(widgetId);
  });

  it("useAddTodoMutation: 새 할 일을 정상적으로 추가한다", async () => {
    const newTodo = {
      id: "2",
      user_id: "user-1",
      widget_id: widgetId,
      todo_id: "test-todo-1",
      text: "새로운 할 일",
      completed: false,
      sort_order: 1,
      created_at: "2026-01-01",
      updated_at: "2026-01-01",
    };

    vi.mocked(todoRepository.insertTodo).mockResolvedValueOnce(newTodo);

    const { result } = renderHook(() => useAddTodoMutation(widgetId), {
      wrapper: createWrapper(),
    });

    result.current.mutate({
      text: "새로운 할 일",
      todoId: "test-todo-1",
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(todoRepository.insertTodo).toHaveBeenCalledWith(
      expect.objectContaining({
        widget_id: widgetId,
        todo_id: "test-todo-1",
        text: "새로운 할 일",
        completed: false,
      }),
    );
  });

  it("useToggleTodoMutation: 할 일 완료 상태 토글을 성공한다", async () => {
    const updatedTodo = {
      id: "1",
      user_id: "user-1",
      widget_id: widgetId,
      todo_id: "t-1",
      text: "테스트 할 일 1",
      completed: true,
      sort_order: 1,
      created_at: "2026-01-01",
      updated_at: "2026-01-01",
    };

    vi.mocked(todoRepository.updateTodo).mockResolvedValueOnce(updatedTodo);

    const { result } = renderHook(() => useToggleTodoMutation(widgetId), {
      wrapper: createWrapper(),
    });

    result.current.mutate({ todoId: "t-1", completed: true });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(todoRepository.updateTodo).toHaveBeenCalledWith(widgetId, "t-1", {
      completed: true,
    });
  });

  it("useDeleteTodoMutation: 지정한 할 일을 삭제한다", async () => {
    vi.mocked(todoRepository.deleteTodo).mockResolvedValueOnce();

    const { result } = renderHook(() => useDeleteTodoMutation(widgetId), {
      wrapper: createWrapper(),
    });

    result.current.mutate("t-1");

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(todoRepository.deleteTodo).toHaveBeenCalledWith(widgetId, "t-1");
  });
});
