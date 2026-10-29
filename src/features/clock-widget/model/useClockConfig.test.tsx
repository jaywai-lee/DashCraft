import { renderHook, act, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useClockConfig } from "./useClockConfig";
import {
  dashboardRepository,
  WidgetRow,
} from "@/widgets/dashboard-grid/api/dashboardRepository";
import { requestNotificationPermission } from "../lib/audioNotifier";
import React from "react";

vi.mock("@/widgets/dashboard-grid/api/dashboardRepository", () => ({
  dashboardRepository: {
    fetchWidgets: vi.fn(),
    updateWidget: vi.fn(),
  },
}));

vi.mock("../lib/audioNotifier", () => ({
  requestNotificationPermission: vi.fn(),
}));

vi.mock("sonner", () => ({
  toast: {
    success: vi.fn(),
    info: vi.fn(),
    warning: vi.fn(),
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

describe("useClockConfig Hook", () => {
  const widgetId = "clock-widget-1";

  const mockWidget: WidgetRow = {
    id: "1",
    user_id: "user-1",
    widget_id: widgetId,
    type: "clock",
    title: "시계",
    color: "default",
    layout_w: 1,
    layout_h: 1,
    layout_x: 0,
    layout_y: 0,
    sort_order: 1,
    config: { isNotificationEnabled: false },
    created_at: "2026-01-01",
    updated_at: "2026-01-01",
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("기본 설정값 및 DB에 저장된 Config 정보를 올바르게 읽어와야 한다", async () => {
    const mockWidgets: WidgetRow[] = [
      {
        ...mockWidget,
        config: {
          workDuration: 1800,
          breakDuration: 600,
          isSoundEnabled: true,
        },
      },
    ];

    vi.mocked(dashboardRepository.fetchWidgets).mockResolvedValueOnce(
      mockWidgets,
    );

    const { result } = renderHook(() => useClockConfig(widgetId), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.workDuration).toBe(1800));
    expect(result.current.breakDuration).toBe(600);
    expect(result.current.isSoundEnabled).toBe(true);
  });

  it("toggleSound 호출 시 isSoundEnabled 토글 업데이트가 실행된다", async () => {
    vi.mocked(dashboardRepository.fetchWidgets).mockResolvedValueOnce([
      mockWidget,
    ]);
    vi.mocked(dashboardRepository.updateWidget).mockResolvedValueOnce(
      mockWidget,
    );

    const { result } = renderHook(() => useClockConfig(widgetId), {
      wrapper: createWrapper(),
    });

    act(() => {
      result.current.toggleSound();
    });

    await waitFor(() =>
      expect(dashboardRepository.updateWidget).toHaveBeenCalledWith(
        widgetId,
        expect.objectContaining({
          config: expect.objectContaining({ isSoundEnabled: false }),
        }),
      ),
    );
  });

  it("handleNotificationToggle 권한 승인 시 알림 설정 활성화 상태로 저장된다", async () => {
    vi.mocked(dashboardRepository.fetchWidgets).mockResolvedValueOnce([
      mockWidget,
    ]);
    vi.mocked(dashboardRepository.updateWidget).mockResolvedValueOnce(
      mockWidget,
    );
    vi.mocked(requestNotificationPermission).mockResolvedValueOnce(true);

    const { result } = renderHook(() => useClockConfig(widgetId), {
      wrapper: createWrapper(),
    });

    await waitFor(() =>
      expect(result.current.isNotificationEnabled).toBe(false),
    );

    await act(async () => {
      await result.current.handleNotificationToggle();
    });

    await waitFor(() =>
      expect(dashboardRepository.updateWidget).toHaveBeenCalledWith(
        widgetId,
        expect.objectContaining({
          config: expect.objectContaining({ isNotificationEnabled: true }),
        }),
      ),
    );
  });
});
