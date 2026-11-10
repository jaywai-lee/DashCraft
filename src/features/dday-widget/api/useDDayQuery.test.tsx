import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  useDDaysQuery,
  useAddDDayMutation,
  useDeleteDDayMutation,
} from "./useDDayQuery";
import { ddayRepository } from "./ddayRepository";

vi.mock("./ddayRepository", () => ({
  ddayRepository: {
    fetchDDays: vi.fn(),
    insertDDay: vi.fn(),
    deleteDDay: vi.fn(),
  },
}));

describe("useDDayQuery API Hooks", () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } },
    });
    vi.clearAllMocks();
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  it("useDDaysQuery - 위젯 ID에 해당하는 디데이 항목 목록을 올바르게 조회해야 한다", async () => {
    const mockData = [
      {
        id: "1",
        widget_id: "w1",
        user_id: "u1",
        dday_id: "dday-1",
        title: "자격증 시험",
        target_date: "2026-12-15",
        created_at: "",
      },
    ];

    vi.mocked(ddayRepository.fetchDDays).mockResolvedValue(mockData);

    const { result } = renderHook(() => useDDaysQuery("w1"), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toEqual(mockData);
    expect(ddayRepository.fetchDDays).toHaveBeenCalledWith("w1");
  });

  it("useAddDDayMutation - 신규 디데이 추가 요청을 정상 수행해야 한다", async () => {
    const mockCreated = {
      id: "2",
      widget_id: "w1",
      user_id: "u1",
      dday_id: "dday-2",
      title: "새 디데이",
      target_date: "2026-11-30",
      created_at: "",
    };

    vi.mocked(ddayRepository.insertDDay).mockResolvedValue(mockCreated);

    const { result } = renderHook(() => useAddDDayMutation("w1"), { wrapper });

    await result.current.mutateAsync({
      title: "새 디데이",
      targetDate: "2026-11-30",
      ddayId: "dday-2",
    });

    expect(ddayRepository.insertDDay).toHaveBeenCalledWith({
      widget_id: "w1",
      dday_id: "dday-2",
      title: "새 디데이",
      target_date: "2026-11-30",
    });
  });

  it("useDeleteDDayMutation - 디데이 항목 삭제 요청을 정상 수행해야 한다", async () => {
    vi.mocked(ddayRepository.deleteDDay).mockResolvedValue();

    const { result } = renderHook(() => useDeleteDDayMutation("w1"), {
      wrapper,
    });

    await result.current.mutateAsync("dday-1");

    expect(ddayRepository.deleteDDay).toHaveBeenCalledWith("w1", "dday-1");
  });
});
