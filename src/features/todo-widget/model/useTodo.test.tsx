import { renderHook, act, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useTodo } from "./useTodo";
import { todoRepository } from "../api/todoRepository";
import React from "react";

vi.mock("../api/todoRepository", () => ({
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
      queries: { retry: false, gcTime: 0 },
      mutations: { retry: false },
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

describe("useTodo Hook", () => {
  const TEST_WIDGET_ID = "test-widget-1";

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("widgetId에 해당하는 할 일 목록 및 진행률(progressPercent)을 정상적으로 불러온다", async () => {
    const mockTodos = [
      {
        id: "1",
        user_id: "user-1",
        widget_id: TEST_WIDGET_ID,
        todo_id: "t-1",
        text: "테스트1",
        completed: false,
        sort_order: 1,
        created_at: "2026-01-01",
        updated_at: "2026-01-01",
      },
      {
        id: "2",
        user_id: "user-1",
        widget_id: TEST_WIDGET_ID,
        todo_id: "t-2",
        text: "테스트2",
        completed: true,
        sort_order: 2,
        created_at: "2026-01-01",
        updated_at: "2026-01-01",
      },
    ];

    vi.mocked(todoRepository.fetchTodos).mockResolvedValueOnce(mockTodos);

    const { result } = renderHook(() => useTodo(TEST_WIDGET_ID), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.todos.length).toBe(2));

    expect(result.current.todos).toEqual(mockTodos);
    expect(result.current.progressPercent).toBe(50);
  });

  it("addTodo 호출 시 신규 할 일 추가 뮤테이션이 호출된다", async () => {
    vi.mocked(todoRepository.fetchTodos).mockResolvedValueOnce([]);
    vi.mocked(todoRepository.insertTodo).mockResolvedValueOnce({
      id: "3",
      user_id: "user-1",
      widget_id: TEST_WIDGET_ID,
      todo_id: "t-3",
      text: "새 할 일",
      completed: false,
      sort_order: 1,
      created_at: "2026-01-01",
      updated_at: "2026-01-01",
    });

    const { result } = renderHook(() => useTodo(TEST_WIDGET_ID), {
      wrapper: createWrapper(),
    });

    act(() => {
      result.current.setInputText("새 할 일");
    });

    const fakeEvent = {
      preventDefault: vi.fn(),
    } as unknown as React.SubmitEvent;

    act(() => {
      result.current.addTodo(fakeEvent);
    });

    await waitFor(() =>
      expect(todoRepository.insertTodo).toHaveBeenCalledWith(
        expect.objectContaining({
          widget_id: TEST_WIDGET_ID,
          text: "새 할 일",
        }),
      ),
    );

    expect(result.current.inputText).toBe("");
  });

  it("toggleTodo 호출 시 완료 상태가 토글된다", async () => {
    const mockTodos = [
      {
        id: "1",
        user_id: "user-1",
        widget_id: TEST_WIDGET_ID,
        todo_id: "t-1",
        text: "테스트1",
        completed: false,
        sort_order: 1,
        created_at: "2026-01-01",
        updated_at: "2026-01-01",
      },
    ];

    vi.mocked(todoRepository.fetchTodos).mockResolvedValueOnce(mockTodos);
    vi.mocked(todoRepository.updateTodo).mockResolvedValueOnce({
      ...mockTodos[0],
      completed: true,
    });

    const { result } = renderHook(() => useTodo(TEST_WIDGET_ID), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.todos.length).toBe(1));

    act(() => {
      result.current.toggleTodo("t-1", false);
    });

    await waitFor(() =>
      expect(todoRepository.updateTodo).toHaveBeenCalledWith(
        TEST_WIDGET_ID,
        "t-1",
        { completed: true },
      ),
    );
  });

  it("deleteTodo 호출 시 해당 할 일이 삭제된다", async () => {
    vi.mocked(todoRepository.fetchTodos).mockResolvedValueOnce([]);
    vi.mocked(todoRepository.deleteTodo).mockResolvedValueOnce();

    const { result } = renderHook(() => useTodo(TEST_WIDGET_ID), {
      wrapper: createWrapper(),
    });

    act(() => {
      result.current.deleteTodo("t-1");
    });

    await waitFor(() =>
      expect(todoRepository.deleteTodo).toHaveBeenCalledWith(
        TEST_WIDGET_ID,
        "t-1",
      ),
    );
  });
});
