import { renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useTimerEffects } from "./useTimerEffects";
import {
  startWhiteNoise,
  stopWhiteNoise,
  playCompletionSound,
  triggerNotification,
} from "../lib/audioNotifier";

vi.mock("../lib/audioNotifier", () => ({
  startWhiteNoise: vi.fn(),
  stopWhiteNoise: vi.fn(),
  playCompletionSound: vi.fn(),
  triggerNotification: vi.fn(),
}));

vi.mock("sonner", () => ({
  toast: {
    info: vi.fn(),
  },
}));

describe("useTimerEffects Hook", () => {
  const widgetId = "clock-widget-1";
  const onSwitchPhase = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
  });

  it("집중 시간(work) 실행 중일 때 해당 widgetId로 백색소음이 시작되고, 정지 시 멈추어야 한다", () => {
    const { rerender, unmount } = renderHook(
      (props) => useTimerEffects(props),
      {
        initialProps: {
          widgetId,
          timeLeft: 1500,
          isRunning: true,
          timerPhase: "work" as const,
          workDuration: 1500,
          breakDuration: 300,
          isSoundEnabled: true,
          isNotificationEnabled: false,
          onSwitchPhase,
        },
      },
    );

    expect(startWhiteNoise).toHaveBeenCalledWith(widgetId);

    rerender({
      widgetId,
      timeLeft: 1500,
      isRunning: false,
      timerPhase: "work" as const,
      workDuration: 1500,
      breakDuration: 300,
      isSoundEnabled: true,
      isNotificationEnabled: false,
      onSwitchPhase,
    });

    expect(stopWhiteNoise).toHaveBeenCalledWith(widgetId);

    unmount();
    expect(stopWhiteNoise).toHaveBeenCalledWith(widgetId);
  });

  it("타이머가 완료(timeLeft가 0)되면 완료 소리 재생 및 다음 페이즈 자동 전환이 호출된다", () => {
    const { rerender } = renderHook((props) => useTimerEffects(props), {
      initialProps: {
        widgetId,
        timeLeft: 1,
        isRunning: true,
        timerPhase: "work" as const,
        workDuration: 1500,
        breakDuration: 300,
        isSoundEnabled: true,
        isNotificationEnabled: true,
        onSwitchPhase,
      },
    });

    rerender({
      widgetId,
      timeLeft: 0,
      isRunning: false,
      timerPhase: "work" as const,
      workDuration: 1500,
      breakDuration: 300,
      isSoundEnabled: true,
      isNotificationEnabled: true,
      onSwitchPhase,
    });

    expect(playCompletionSound).toHaveBeenCalled();
    expect(triggerNotification).toHaveBeenCalledWith(
      "🎉 집중 시간 종료!",
      "고생하셨습니다! 5분간 달콤한 휴식을 취하세요.",
    );

    vi.advanceTimersByTime(1000);
    expect(onSwitchPhase).toHaveBeenCalledWith(widgetId, "break", 300);
  });
});
