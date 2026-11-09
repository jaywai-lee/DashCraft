import { renderHook, act } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import type { DragStartEvent, DragEndEvent } from "@dnd-kit/core";
import { useDashboardDnD } from "./useDashboardDnd";
import { WidgetRow } from "../api/dashboardRepository";

const mockWidgets: WidgetRow[] = [
  {
    id: "1",
    user_id: "u1",
    widget_id: "w1",
    type: "todo",
    title: "할 일 위젯",
    color: "default",
    layout_w: 1,
    layout_h: 1,
    layout_x: 0,
    layout_y: 0,
    sort_order: 1,
    config: {},
    created_at: "",
    updated_at: "",
  },
  {
    id: "2",
    user_id: "u1",
    widget_id: "w2",
    type: "memo",
    title: "메모 위젯",
    color: "blue",
    layout_w: 1,
    layout_h: 1,
    layout_x: 1,
    layout_y: 0,
    sort_order: 2,
    config: {},
    created_at: "",
    updated_at: "",
  },
];

const mockReorderMutate = vi.fn();

vi.mock("../api/useDashboardQuery", () => ({
  useWidgetsQuery: () => ({
    data: mockWidgets,
    isLoading: false,
  }),
  useReorderWidgetsMutation: () => ({
    mutate: mockReorderMutate,
  }),
}));

const createDragStartEvent = (activeId: string): DragStartEvent =>
  ({
    active: {
      id: activeId,
      data: { current: undefined },
      rect: { current: { initial: null, translated: null } },
    },
  }) as unknown as DragStartEvent;

const createDragEndEvent = (activeId: string, overId: string): DragEndEvent =>
  ({
    active: {
      id: activeId,
      data: { current: undefined },
      rect: { current: { initial: null, translated: null } },
    },
    over: {
      id: overId,
      data: { current: undefined },
      rect: { width: 0, height: 0, offsetLeft: 0, offsetTop: 0 },
      disabled: false,
    },
  }) as unknown as DragEndEvent;

describe("useDashboardDnD Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("초기 렌더링 시 센서 설정 및 위젯 목록이 정상 반환되어야 한다", () => {
    const { result } = renderHook(() => useDashboardDnD());

    expect(result.current.sensors).toBeDefined();
    expect(result.current.localWidgets).toEqual(mockWidgets);
    expect(result.current.activeWidget).toBeNull();
  });

  it("handleDragStart 호출 시 활성화된 위젯(activeWidget)이 설정되어야 한다", () => {
    const { result } = renderHook(() => useDashboardDnD());

    act(() => {
      result.current.handleDragStart(createDragStartEvent("w1"));
    });

    expect(result.current.activeWidget).toEqual(mockWidgets[0]);
  });

  it("handleDragEnd 호출 시 드래그 위치 변경에 따라 순서 변경 mutation이 호출되어야 한다", () => {
    const { result } = renderHook(() => useDashboardDnD());

    act(() => {
      result.current.handleDragStart(createDragStartEvent("w1"));
      result.current.handleDragEnd(createDragEndEvent("w1", "w2"));
    });

    expect(mockReorderMutate).toHaveBeenCalledWith(["w2", "w1"]);
    expect(result.current.activeWidget).toBeNull();
  });

  it("handleDragCancel 호출 시 activeWidget 상태가 초기화되어야 한다", () => {
    const { result } = renderHook(() => useDashboardDnD());

    act(() => {
      result.current.handleDragStart(createDragStartEvent("w1"));
      result.current.handleDragCancel();
    });

    expect(result.current.activeWidget).toBeNull();
  });
});
