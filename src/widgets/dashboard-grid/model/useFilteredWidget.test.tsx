import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useFilteredWidgets } from "./useFilteredWidgets";
import { useFilterStore } from "@/features/dashboard-filter/model/useFilterStore";
import { dashboardRepository, WidgetRow } from "../api/dashboardRepository";
import React from "react";

vi.mock("../api/dashboardRepository", () => ({
  dashboardRepository: {
    fetchWidgets: vi.fn(),
  },
}));

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: { retry: false, gcTime: 0 },
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

describe("useFilteredWidgets", () => {
  const mockWidgets: WidgetRow[] = [
    {
      id: "1",
      user_id: "user-1",
      widget_id: "w-1",
      type: "todo",
      title: "오늘의 할 일",
      color: "default",
      layout_w: 1,
      layout_h: 1,
      layout_x: 0,
      layout_y: 0,
      sort_order: 1,
      config: {},
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "2",
      user_id: "user-1",
      widget_id: "w-2",
      type: "memo",
      title: "프로젝트 아이디어 메모",
      color: "blue",
      layout_w: 1,
      layout_h: 1,
      layout_x: 0,
      layout_y: 0,
      sort_order: 2,
      config: {},
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
    useFilterStore.getState().resetFilter();
  });

  it("위젯 종류 필터링이 정상 동작해야 한다", async () => {
    vi.mocked(dashboardRepository.fetchWidgets).mockResolvedValueOnce(
      mockWidgets,
    );

    useFilterStore.getState().setSelectedWidgetType("memo");

    const { result } = renderHook(() => useFilteredWidgets(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.filteredWidgets.length).toBe(1));

    expect(result.current.filteredWidgets[0].type).toBe("memo");
    expect(result.current.filteredWidgets[0].title).toBe(
      "프로젝트 아이디어 메모",
    );
  });

  it("검색어가 위젯 제목에 포함되어 있을 때 필터링되어야 한다", async () => {
    vi.mocked(dashboardRepository.fetchWidgets).mockResolvedValueOnce(
      mockWidgets,
    );

    useFilterStore.getState().setSearchQuery("아이디어");

    const { result } = renderHook(() => useFilteredWidgets(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.filteredWidgets.length).toBe(1));

    expect(result.current.filteredWidgets[0].widget_id).toBe("w-2");
  });
});
