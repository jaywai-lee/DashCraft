import { renderHook, act } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { usePomodoroTimer } from "./usePomodoroTimer";
import { useClockStore } from "./useClockStore";
import React from "react";

vi.mock("@/widgets/dashboard-grid/api/dashboardRepository", () => ({
  dashboardRepository: {
    fetchWidgets: vi.fn().mockResolvedValue([]),
    updateWidget: vi.fn(),
  },
}));

vi.mock("../lib/audioNotifier", () => ({
  startWhiteNoise: vi.fn(),
  stopWhiteNoise: vi.fn(),
  playCompletionSound: vi.fn(),
  triggerNotification: vi.fn(),
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

describe("usePomodoroTimer Hook", () => {
  const widgetId = "clock-widget-test";

  beforeEach(() => {
    vi.clearAllMocks();
    useClockStore.setState({ states: {} });
  });

  it("초기 타이머 상태 및 기본 액션들이 올바르게 반환되어야 한다", () => {
    const { result } = renderHook(() => usePomodoroTimer(widgetId), {
      wrapper: createWrapper(),
    });

    expect(result.current.timerPhase).toBe("work");
    expect(result.current.isRunning).toBe(false);
    expect(typeof result.current.toggleTimer).toBe("function");
    expect(typeof result.current.resetTimer).toBe("function");
  });

  it("toggleTimer 실행 시 Zustand 타이머 실행 상태가 전환된다", () => {
    const { result } = renderHook(() => usePomodoroTimer(widgetId), {
      wrapper: createWrapper(),
    });

    act(() => {
      result.current.toggleTimer();
    });

    expect(result.current.isRunning).toBe(true);

    act(() => {
      result.current.toggleTimer();
    });

    expect(result.current.isRunning).toBe(false);
  });
});
