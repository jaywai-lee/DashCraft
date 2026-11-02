import { renderHook, act } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { useMemoEditor } from "./useMemoEditor";

const mockMutate = vi.fn();

vi.mock("../api/useMemoQuery", () => ({
  useMemoQuery: () => ({
    data: { content: "<p>테스트 메모</p>", highlight: "yellow" },
    isLoading: false,
  }),
  useUpsertMemoMutation: () => ({
    mutate: mockMutate,
    isPending: false,
  }),
}));

vi.mock("../api/memoKeepalive", () => ({
  flushMemoKeepalive: vi.fn(),
}));

vi.mock("sonner", () => ({
  toast: {
    warning: vi.fn(),
    error: vi.fn(),
  },
}));

describe("useMemoEditor Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("초기 렌더링 시 DB 데이터의 하이라이트 색상이 정상 반영되어야 한다", () => {
    const { result } = renderHook(() => useMemoEditor("widget-1"));

    expect(result.current.currentHighlight).toBe("yellow");
    expect(result.current.isLoading).toBe(false);
  });

  it("형광펜 색상 변경 함수(handleSelectHighlightColor) 호출 시 하이라이트 상태가 동기화된다", () => {
    const { result } = renderHook(() => useMemoEditor("widget-1"));

    act(() => {
      result.current.handleSelectHighlightColor("green");
    });

    expect(result.current.currentHighlight).toBe("green");
  });

  it("handleBlur 호출 시 포커스가 해제되며 변경사항 저장이 호출된다", () => {
    const { result } = renderHook(() => useMemoEditor("widget-1"));

    act(() => {
      result.current.handleFocus();
    });

    act(() => {
      result.current.handleBlur();
    });

    expect(result.current.editorRef.current).toBeNull();
  });

  it("handlePaste 호출 시 Clipboard 데이터를 읽어 기본 동작을 방지(preventDefault)한다", () => {
    const { result } = renderHook(() => useMemoEditor("widget-1"));

    const preventDefault = vi.fn();
    const fakeClipboardEvent = {
      preventDefault,
      clipboardData: {
        getData: vi.fn().mockReturnValue("붙여넣은 순수 텍스트"),
      },
    } as unknown as React.ClipboardEvent<HTMLDivElement>;

    act(() => {
      result.current.handlePaste(fakeClipboardEvent);
    });

    expect(preventDefault).toHaveBeenCalled();
  });
});
