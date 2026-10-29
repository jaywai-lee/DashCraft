import { renderHook, waitFor } from "@testing-library/react";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createOptimisticMutation } from "./optimisticHelper";
import React from "react";

const mockToastError = vi.fn();

vi.mock("sonner", () => ({
  toast: {
    error: (...args: unknown[]) => mockToastError(...args),
  },
}));

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: { retry: false, gcTime: 1000 * 60 },
      mutations: { retry: false },
    },
  });

describe("createOptimisticMutation Helper", () => {
  const queryKey = ["test-key"] as const;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("Mutation 실행 시 캐시에 낙관적으로 변경사항이 즉시 반영되어야 한다", async () => {
    const queryClient = createTestQueryClient();
    queryClient.setQueryData(queryKey, ["item-1"]);

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const mutationFn = vi
      .fn()
      .mockImplementation(
        () => new Promise((resolve) => setTimeout(() => resolve("item-2"), 50)),
      );

    const { result } = renderHook(
      () =>
        useMutation(
          createOptimisticMutation<string, string, string[]>({
            queryClient,
            queryKey,
            mutationFn,
            updateCache: (old = [], newItem) => [...old, newItem],
          }),
        ),
      { wrapper },
    );

    result.current.mutate("item-2");

    await waitFor(() =>
      expect(queryClient.getQueryData(queryKey)).toEqual(["item-1", "item-2"]),
    );

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });

  it("Mutation 실패 시 이전 캐시 상태로 롤백되고 에러 토스트가 노출되어야 한다", async () => {
    const queryClient = createTestQueryClient();
    queryClient.setQueryData(queryKey, ["original-item"]);

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const mutationFn = vi.fn().mockRejectedValue(new Error("Server Error"));

    const { result } = renderHook(
      () =>
        useMutation(
          createOptimisticMutation<string, string, string[]>({
            queryClient,
            queryKey,
            mutationFn,
            updateCache: (old = [], newItem) => [...old, newItem],
            errorMessage: "요청 실패",
          }),
        ),
      { wrapper },
    );

    result.current.mutate("failed-item");

    await waitFor(() => expect(result.current.isError).toBe(true));

    // 롤백 및 토스트 검증
    expect(queryClient.getQueryData(queryKey)).toEqual(["original-item"]);
    expect(mockToastError).toHaveBeenCalledWith("요청 실패", {
      description: "Server Error",
    });
  });
});
