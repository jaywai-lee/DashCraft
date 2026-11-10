import React from "react";
import { renderHook, act } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { usePomodoroTimer } from "./usePomodoroTimer";
import { useClockStore } from "./useClockStore";

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
    expect(result.current.timeLeft).toBe(1500);
    expect(typeof result.current.toggleTimer).toBe("function");
    expect(typeof result.current.resetTimer).toBe("function");
    expect(typeof result.current.switchPhase).toBe("function");
  });

  it("toggleTimer 실행 시 타이머 실행 상태(isRunning)가 전환되어야 한다", () => {
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

  it("resetTimer 실행 시 타이머가 정지되고 초기 작업 시간(1500초)으로 초기화되어야 한다", () => {
    const { result } = renderHook(() => usePomodoroTimer(widgetId), {
      wrapper: createWrapper(),
    });

    act(() => {
      result.current.toggleTimer();
    });
    expect(result.current.isRunning).toBe(true);

    act(() => {
      result.current.resetTimer();
    });

    expect(result.current.isRunning).toBe(false);
    expect(result.current.timeLeft).toBe(1500);
  });

  it("switchPhase('break') 호출 시 타이머 페이즈가 휴식 상태(300초)로 전환되어야 한다", () => {
    const { result } = renderHook(() => usePomodoroTimer(widgetId), {
      wrapper: createWrapper(),
    });

    act(() => {
      result.current.switchPhase("break");
    });

    expect(result.current.timerPhase).toBe("break");
    expect(result.current.timeLeft).toBe(300);
  });
});
