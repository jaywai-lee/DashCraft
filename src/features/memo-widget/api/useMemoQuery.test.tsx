import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useMemoQuery, useUpsertMemoMutation } from "./useMemoQuery";
import { memoRepository } from "./memoRepository";
import React from "react";

vi.mock("./memoRepository", () => ({
  memoRepository: {
    fetchMemo: vi.fn(),
    upsertMemo: vi.fn(),
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

describe("Memo Query Hooks", () => {
  const widgetId = "widget-memo-1";

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("useMemoQuery: widgetId에 해당하는 메모 데이터를 성공적으로 불러온다", async () => {
    const mockMemo = {
      id: "memo-1",
      user_id: "user-1",
      widget_id: widgetId,
      content: "테스트 메모 내용",
      highlight: "yellow" as const,
      updated_at: "2026-01-01",
    };

    vi.mocked(memoRepository.fetchMemo).mockResolvedValueOnce(mockMemo);

    const { result } = renderHook(() => useMemoQuery(widgetId), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(mockMemo);
    expect(memoRepository.fetchMemo).toHaveBeenCalledWith(widgetId);
  });

  it("useUpsertMemoMutation: 메모 내용을 생성 및 갱신(upsert)한다", async () => {
    const upsertedMemo = {
      id: "memo-1",
      user_id: "user-1",
      widget_id: widgetId,
      content: "수정된 메모 내용",
      highlight: "green" as const,
      updated_at: "2026-01-01",
    };

    vi.mocked(memoRepository.upsertMemo).mockResolvedValueOnce(upsertedMemo);

    const { result } = renderHook(() => useUpsertMemoMutation(widgetId), {
      wrapper: createWrapper(),
    });

    result.current.mutate({ content: "수정된 메모 내용", highlight: "green" });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(memoRepository.upsertMemo).toHaveBeenCalledWith(
      widgetId,
      "수정된 메모 내용",
      "green",
    );
  });
});
