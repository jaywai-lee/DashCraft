import { beforeEach, describe, expect, it } from "vitest";
import { useClockStore } from "./useClockStore";

describe("useClockStore", () => {
  const widgetId = "clock-test-1";
  const defaultWorkDuration = 25 * 60;

  beforeEach(() => {
    useClockStore.setState({ states: {} });
  });

  it("초기 모드가 'clock'으로 설정되어야 한다", () => {
    const state = useClockStore.getState().getWidgetState(widgetId);
    expect(state.mode).toBe("clock");
  });

  it("모드를 'timer'로 변경할 수 있어야 한다", () => {
    useClockStore.getState().setMode(widgetId, "timer");
    const state = useClockStore.getState().getWidgetState(widgetId);
    expect(state.mode).toBe("timer");
  });

  it("타이머 토글 및 리셋 동작이 정상 수행되어야 한다", () => {
    useClockStore.getState().setMode(widgetId, "timer");

    useClockStore.getState().toggleTimer(widgetId, defaultWorkDuration);
    let state = useClockStore.getState().getWidgetState(widgetId);
    expect(state.isRunning).toBe(true);

    useClockStore.getState().toggleTimer(widgetId, defaultWorkDuration);
    state = useClockStore.getState().getWidgetState(widgetId);
    expect(state.isRunning).toBe(false);

    useClockStore.getState().resetTimer(widgetId, defaultWorkDuration);
    state = useClockStore.getState().getWidgetState(widgetId);
    expect(state.timeLeft).toBe(defaultWorkDuration);
    expect(state.isRunning).toBe(false);
  });
});
