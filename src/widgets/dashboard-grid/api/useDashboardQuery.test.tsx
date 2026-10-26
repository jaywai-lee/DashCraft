import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  useWidgetsQuery,
  useAddWidgetMutation,
  useUpdateWidgetMutation,
  useDeleteWidgetMutation,
  useReorderWidgetsMutation,
} from "./useDashboardQuery";
import { dashboardRepository } from "./dashboardRepository";
import React from "react";

vi.mock("./dashboardRepository", () => ({
  dashboardRepository: {
    fetchWidgets: vi.fn(),
    insertWidget: vi.fn(),
    updateWidget: vi.fn(),
    deleteWidget: vi.fn(),
    reorderWidgets: vi.fn(),
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

describe("Dashboard Query Hooks", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("useWidgetsQuery: 위젯 목록을 정상적으로 조회해야 한다", async () => {
    const mockWidgets = [
      {
        id: "1",
        user_id: "user-1",
        widget_id: "w-1",
        type: "todo" as const,
        title: "할 일",
        color: "default" as const,
        layout_w: 1,
        layout_h: 1,
        layout_x: 0,
        layout_y: 0,
        sort_order: 1,
        config: {},
        created_at: "2026-01-01",
        updated_at: "2026-01-01",
      },
    ];

    vi.mocked(dashboardRepository.fetchWidgets).mockResolvedValueOnce(
      mockWidgets,
    );

    const { result } = renderHook(() => useWidgetsQuery(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(mockWidgets);
    expect(dashboardRepository.fetchWidgets).toHaveBeenCalledTimes(1);
  });

  it("useAddWidgetMutation: 신규 위젯 추가 요청을 성공적으로 보낸다", async () => {
    const newWidget = {
      id: "2",
      user_id: "user-1",
      widget_id: "w-2",
      type: "memo" as const,
      title: "메모",
      color: "blue" as const,
      layout_w: 1,
      layout_h: 1,
      layout_x: 0,
      layout_y: 0,
      sort_order: 1,
      config: {},
      created_at: "2026-01-01",
      updated_at: "2026-01-01",
    };

    vi.mocked(dashboardRepository.insertWidget).mockResolvedValueOnce(
      newWidget,
    );

    const { result } = renderHook(() => useAddWidgetMutation(), {
      wrapper: createWrapper(),
    });

    result.current.mutate({
      type: "memo",
      title: "메모",
      color: "blue",
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(dashboardRepository.insertWidget).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "memo",
        title: "메모",
        color: "blue",
        sort_order: 1,
      }),
    );
  });

  it("useUpdateWidgetMutation: 위젯 정보 변경을 성공적으로 수행한다", async () => {
    const updatedWidget = {
      id: "1",
      user_id: "user-1",
      widget_id: "w-1",
      type: "todo" as const,
      title: "새 제목",
      color: "green" as const,
      layout_w: 2,
      layout_h: 1,
      layout_x: 0,
      layout_y: 0,
      sort_order: 1,
      config: {},
      created_at: "2026-01-01",
      updated_at: "2026-01-01",
    };

    vi.mocked(dashboardRepository.updateWidget).mockResolvedValueOnce(
      updatedWidget,
    );

    const { result } = renderHook(() => useUpdateWidgetMutation(), {
      wrapper: createWrapper(),
    });

    result.current.mutate({
      widgetId: "w-1",
      title: "새 제목",
      color: "green",
      layout_w: 2,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(dashboardRepository.updateWidget).toHaveBeenCalledWith("w-1", {
      title: "새 제목",
      color: "green",
      layout_w: 2,
    });
  });

  it("useDeleteWidgetMutation: 위젯 삭제 요청을 성공적으로 실행한다", async () => {
    vi.mocked(dashboardRepository.deleteWidget).mockResolvedValueOnce();

    const { result } = renderHook(() => useDeleteWidgetMutation(), {
      wrapper: createWrapper(),
    });

    result.current.mutate("w-1");

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(dashboardRepository.deleteWidget).toHaveBeenCalledWith("w-1");
  });

  it("useReorderWidgetsMutation: 위젯 순서 재정렬 RPC를 호출한다", async () => {
    vi.mocked(dashboardRepository.reorderWidgets).mockResolvedValueOnce();

    const { result } = renderHook(() => useReorderWidgetsMutation(), {
      wrapper: createWrapper(),
    });

    result.current.mutate(["w-2", "w-1"]);

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(dashboardRepository.reorderWidgets).toHaveBeenCalledWith([
      "w-2",
      "w-1",
    ]);
  });
});
