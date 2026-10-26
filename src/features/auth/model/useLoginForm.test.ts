import { renderHook, act } from "@testing-library/react";
import { useLoginForm } from "./useLoginForm";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mockPush = vi.fn();
const mockRefresh = vi.fn();
const mockSignInWithPassword = vi.fn();
const mockSignInWithOAuth = vi.fn();
const mockToastError = vi.fn();
const mockToastSuccess = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
    refresh: mockRefresh,
  }),
}));

vi.mock("sonner", () => ({
  toast: {
    error: (...args: unknown[]) => mockToastError(...args),
    success: (...args: unknown[]) => mockToastSuccess(...args),
  },
}));

vi.mock("@/shared/lib/client", () => ({
  createClient: () => ({
    auth: {
      signInWithPassword: mockSignInWithPassword,
      signInWithOAuth: mockSignInWithOAuth,
    },
  }),
}));

describe("useLoginForm Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("초기 상태값이 바르게 설정되어야 한다", () => {
    const { result } = renderHook(() => useLoginForm());

    expect(result.current.email).toBe("");
    expect(result.current.password).toBe("");
    expect(result.current.isLoading).toBe(false);
    expect(result.current.modalType).toBeNull();
  });

  it("올바른 정보를 입력하고 제출하면 성공적으로 로그인되고 대시보드로 이동해야 한다", async () => {
    mockSignInWithPassword.mockResolvedValueOnce({ error: null });

    const { result } = renderHook(() => useLoginForm());

    act(() => {
      result.current.setEmail("user@example.com");
      result.current.setPassword("password123");
    });

    const fakeEvent = {
      preventDefault: vi.fn(),
    } as unknown as React.SubmitEvent;

    await act(async () => {
      await result.current.handleEmailLogin(fakeEvent);
    });

    expect(mockSignInWithPassword).toHaveBeenCalledWith({
      email: "user@example.com",
      password: "password123",
    });
    expect(mockToastSuccess).toHaveBeenCalledWith("로그인되었습니다.");
    expect(mockPush).toHaveBeenCalledWith("/dashboard");
  });

  it("로그인 실패 시 에러 토스트가 노출되어야 한다", async () => {
    mockSignInWithPassword.mockResolvedValueOnce({
      error: { message: "Invalid credentials" },
    });

    const { result } = renderHook(() => useLoginForm());

    const fakeEvent = {
      preventDefault: vi.fn(),
    } as unknown as React.SubmitEvent;

    await act(async () => {
      await result.current.handleEmailLogin(fakeEvent);
    });

    expect(mockToastError).toHaveBeenCalled();
    expect(result.current.isLoading).toBe(false);
  });
});
