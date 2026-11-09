import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useCalendarSchedules } from "../model/useCalendarSchedules";

const mockSchedulesData = [
  {
    id: "1",
    user_id: "u1",
    schedule_id: "s1",
    date_str: "2026-11-17",
    title: "팀 회의",
    time_str: "10:00",
    color: "green",
    created_at: "2026-11-17T00:00:00Z",
    updated_at: "2026-11-17T00:00:00Z",
  },
];

vi.mock("../api/useScheduleQuery", () => ({
  useSchedulesQuery: () => ({
    data: mockSchedulesData,
    isLoading: false,
    isError: false,
  }),
  useAddScheduleMutation: () => ({ mutateAsync: vi.fn(), isPending: false }),
  useUpdateScheduleMutation: () => ({ mutateAsync: vi.fn(), isPending: false }),
  useDeleteScheduleMutation: () => ({ mutateAsync: vi.fn(), isPending: false }),
}));

describe("useCalendarSchedules Hook", () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } },
    });
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  it("API 데이터를 날짜별 schedulesMap (Map<string, ScheduleItem[]>) 형태로 올바르게 변환해야 한다", async () => {
    const { result } = renderHook(
      () => useCalendarSchedules("2026-11-01", "2026-11-30"),
      { wrapper },
    );

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    const dayItems = result.current.schedulesMap.get("2026-11-17");
    expect(dayItems).toBeDefined();
    expect(dayItems?.length).toBe(1);
    expect(dayItems?.[0]).toEqual({
      id: "s1",
      title: "팀 회의",
      time: "10:00",
      color: "green",
    });
  });
});
