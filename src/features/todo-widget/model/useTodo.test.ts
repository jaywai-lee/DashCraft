import { describe, expect, it } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useTodo } from "./useTodo";
import React from "react";

describe("useTodo Hook", () => {
  const initialData = [
    { id: "1", text: "테스트 1", completed: false },
    { id: "2", text: "테스트 2", completed: true },
  ];

  it("초기 데이터와 진행률이 올바르게 계산되어야 한다", () => {
    const { result } = renderHook(() => useTodo(initialData));

    expect(result.current.todos.length).toBe(2);
    expect(result.current.progressPercent).toBe(50);
  });

  it("새로운 Todo 항목을 추가할 수 있어야 한다", () => {
    const { result } = renderHook(() => useTodo(initialData));

    act(() => {
      result.current.setInputText("새로운 할 일");
    });

    const fakeEvent = {
      preventDefault: () => {},
    } as unknown as React.SubmitEvent;

    act(() => {
      result.current.addTodo(fakeEvent);
    });

    expect(result.current.todos.length).toBe(3);
    expect(result.current.todos[2].text).toBe("새로운 할 일");
    expect(result.current.inputText).toBe("");
  });

  it("Todo 토글 시 완료 상태와 진행률이 업데이트되어야 한다", () => {
    const { result } = renderHook(() => useTodo(initialData));

    act(() => {
      result.current.toggleTodo("1");
    });

    expect(result.current.todos[0].completed).toBe(true);
    expect(result.current.progressPercent).toBe(100);
  });

  it("Todo 항목을 삭제할 수 있어야 한다", () => {
    const { result } = renderHook(() => useTodo(initialData));

    act(() => {
      result.current.deleteTodo("1");
    });

    expect(result.current.todos.length).toBe(1);
    expect(result.current.todos.find((t) => t.id === "1")).toBeUndefined();
  });
});
