import { renderHook, act } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useCalendarNavigation } from "./useCalendarNavigation";

describe("useCalendarNavigation Hook", () => {
  it("초기 렌더링 시 현재 연/월 기준 그리드 범위(startDateStr, endDateStr)가 정상 추출되어야 한다", () => {
    const { result } = renderHook(() => useCalendarNavigation());

    expect(result.current.currentDate).toBeInstanceOf(Date);
    expect(result.current.startDateStr).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(result.current.endDateStr).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it("handleNextMonth 호출 시 1달 뒤 날짜로 변경되어야 한다", () => {
    const { result } = renderHook(() => useCalendarNavigation());
    const initialMonth = result.current.currentDate.getMonth();

    act(() => {
      result.current.handleNextMonth();
    });

    const nextMonth = (initialMonth + 1) % 12;
    expect(result.current.currentDate.getMonth()).toBe(nextMonth);
  });

  it("handlePrevMonth 호출 시 1달 전 날짜로 변경되어야 한다", () => {
    const { result } = renderHook(() => useCalendarNavigation());
    const initialMonth = result.current.currentDate.getMonth();

    act(() => {
      result.current.handlePrevMonth();
    });

    const prevMonth = (initialMonth - 1 + 12) % 12;
    expect(result.current.currentDate.getMonth()).toBe(prevMonth);
  });

  it("handleToday 호출 시 오늘 날짜로 초기화되어야 한다", () => {
    const { result } = renderHook(() => useCalendarNavigation());

    act(() => {
      result.current.handleNextMonth();
      result.current.handleToday();
    });

    const todayStr = new Date().toDateString();
    expect(result.current.currentDate.toDateString()).toBe(todayStr);
  });
});
