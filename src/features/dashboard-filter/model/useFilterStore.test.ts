import { beforeEach, describe, expect, it } from "vitest";
import { useFilterStore } from "./useFilterStore";

describe("useFilterStore", () => {
  beforeEach(() => {
    useFilterStore.getState().resetFilter();
  });

  it("초기 상태값이 정상 설정되어야 한다", () => {
    const state = useFilterStore.getState();
    expect(state.isOpen).toBe(false);
    expect(state.searchQuery).toBe("");
    expect(state.selectedWidgetType).toBe("all");
    expect(state.todoStatus).toBe("all");
  });

  it("toggleFilter 호출 시 서랍 개폐 상태가 전환되어야 한다", () => {
    useFilterStore.getState().toggleFilter();
    expect(useFilterStore.getState().isOpen).toBe(true);

    useFilterStore.getState().toggleFilter();
    expect(useFilterStore.getState().isOpen).toBe(false);
  });

  it("검색어 및 필터 조건 변경이 정상 수행되어야 한다", () => {
    useFilterStore.getState().setSearchQuery("회의");
    useFilterStore.getState().setSelectedWidgetType("memo");
    useFilterStore.getState().setTodoStatus("active");

    const state = useFilterStore.getState();
    expect(state.searchQuery).toBe("회의");
    expect(state.selectedWidgetType).toBe("memo");
    expect(state.todoStatus).toBe("active");
  });

  it("resetFilter 호출 시 모든 필터 조건이 초기화되어야 한다", () => {
    useFilterStore.getState().setSearchQuery("여행");
    useFilterStore.getState().setSelectedWidgetType("todo");
    useFilterStore.getState().setTodoStatus("completed");

    useFilterStore.getState().resetFilter();

    const state = useFilterStore.getState();
    expect(state.searchQuery).toBe("");
    expect(state.selectedWidgetType).toBe("all");
    expect(state.todoStatus).toBe("all");
  });
});
