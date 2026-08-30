import { beforeEach, describe, expect, it } from "vitest";
import { useDashboardStore } from "./useDashboardStore";
import { useFilterStore } from "@/features/dashboard-filter/model/useFilterStore";
import { useMemoStore } from "@/features/memo-widget/model/useMemoStore";
import { renderHook } from "@testing-library/react";
import { useFilteredWidgets } from "./useFilteredWidgets";

describe("useFilteredWidgets", () => {
  beforeEach(() => {
    useDashboardStore.getState().resetDashboard();
    useFilterStore.getState().resetFilter();
    useMemoStore.getState().resetAllMemos();
  });

  it("위젯 종류 필터링이 정상적으로 동작해야 한다", () => {
    useDashboardStore.getState().addWidget({
      type: "todo",
      title: "할 일 목록",
      layout: { id: "", x: 0, y: 0, w: 1, h: 1 },
    });
    useDashboardStore.getState().addWidget({
      type: "memo",
      title: "메모 위젯",
      layout: { id: "", x: 0, y: 0, w: 1, h: 1 },
    });

    useFilterStore.getState().setSelectedWidgetType("memo");
    const { result } = renderHook(() => useFilteredWidgets());
    expect(result.current.filteredWidgets.length).toBe(1);
    expect(result.current.filteredWidgets[0].type).toBe("memo");
  });

  it("검색어가 위젯 본문 내용에 포함되어 있을 때 필터링되어야 한다", () => {
    useDashboardStore.getState().addWidget({
      type: "memo",
      title: "메모",
      layout: { id: "", x: 0, y: 0, w: 1, h: 1 },
    });

    const memoWidgetId = useDashboardStore.getState().widgets[0].id;
    useMemoStore.getState().updateMemo(memoWidgetId, "프로젝트 제출 기한 확인");

    useFilterStore.getState().setSearchQuery("프로젝트");
    const { result } = renderHook(() => useFilteredWidgets());
    expect(result.current.filteredWidgets.length).toBe(1);
  });
});
