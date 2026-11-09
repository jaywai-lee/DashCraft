import { renderHook, act } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useScheduleModal } from "./useScheduleModal";
import { ScheduleRow } from "../api/scheduleRepository";

const mockSchedule: ScheduleRow = {
  id: "row-1",
  user_id: "user-1",
  schedule_id: "schedule-1",
  date_str: "2026-11-17",
  title: "기존 일정",
  time_str: "10:00",
  color: "purple",
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};

describe("useScheduleModal Hook", () => {
  it("초기 상태는 닫힘(isOpen: false) 상태여야 한다", () => {
    const { result } = renderHook(() => useScheduleModal());

    expect(result.current.isOpen).toBe(false);
    expect(result.current.selectedDateStr).toBe("");
    expect(result.current.scheduleToEdit).toBeNull();
  });

  it("openAddModal 호출 시 선택 날짜와 함께 신규 모달이 열려야 한다", () => {
    const { result } = renderHook(() => useScheduleModal());

    act(() => {
      result.current.openAddModal("2026-11-20");
    });

    expect(result.current.isOpen).toBe(true);
    expect(result.current.selectedDateStr).toBe("2026-11-20");
    expect(result.current.scheduleToEdit).toBeNull();
  });

  it("openEditModal 호출 시 수정 대상 데이터와 함께 수정 모달이 열려야 한다", () => {
    const { result } = renderHook(() => useScheduleModal());

    act(() => {
      result.current.openEditModal(mockSchedule);
    });

    expect(result.current.isOpen).toBe(true);
    expect(result.current.selectedDateStr).toBe("2026-11-17");
    expect(result.current.scheduleToEdit).toEqual(mockSchedule);
  });

  it("closeModal 호출 시 모달 상태가 초기화되어야 한다", () => {
    const { result } = renderHook(() => useScheduleModal());

    act(() => {
      result.current.openEditModal(mockSchedule);
      result.current.closeModal();
    });

    expect(result.current.isOpen).toBe(false);
    expect(result.current.scheduleToEdit).toBeNull();
  });
});
