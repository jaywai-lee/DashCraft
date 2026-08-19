import { renderHook, act } from "@testing-library/react";
import { useTodo } from "./useTodo";
import { useTodoStore } from "./useTodoStore";
import { beforeEach, describe, expect, it, vi } from "vitest";

describe("useTodo Hook", () => {
  const TEST_WIDGET_ID = "test-widget-1";

  beforeEach(() => {
    // 테스트 실행 전 Zustand 스토어 초기화
    act(() => {
      useTodoStore.setState({
        todosByWidgetId: {
          [TEST_WIDGET_ID]: [
            { id: "1", text: "테스트1", completed: false },
            { id: "2", text: "테스트2", completed: true },
          ],
        },
      });
    });
  });

  it("widgetId에 해당하는 할 일 목록을 불러온다", () => {
    const { result } = renderHook(() => useTodo(TEST_WIDGET_ID));

    expect(result.current.todos).toHaveLength(2);
    expect(result.current.progressPercent).toBe(50);
  });

  it("새로운 할 일을 추가한다", () => {
    const { result } = renderHook(() => useTodo(TEST_WIDGET_ID));

    act(() => {
      result.current.setInputText("새 할 일");
    });

    const fakeEvent = {
      preventDefault: vi.fn(),
    } as unknown as React.SubmitEvent;

    act(() => {
      result.current.addTodo(fakeEvent);
    });

    expect(result.current.todos).toHaveLength(3);
    expect(result.current.inputText).toBe("");
  });

  it("할 일 완료 상태를 토글한다", () => {
    const { result } = renderHook(() => useTodo(TEST_WIDGET_ID));

    act(() => {
      result.current.toggleTodo("1");
    });

    expect(result.current.todos[0].completed).toBe(true);
  });

  it("할 일을 삭제한다", () => {
    const { result } = renderHook(() => useTodo(TEST_WIDGET_ID));

    act(() => {
      result.current.deleteTodo("1");
    });

    expect(result.current.todos).toHaveLength(1);
  });
});
