import { renderHook, act } from "@testing-library/react";
import { useSignupForm } from "./useSignupForm";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mockSignUp = vi.fn();
const mockToastError = vi.fn();

vi.mock("sonner", () => ({
  toast: {
    error: (...args: unknown[]) => mockToastError(...args),
  },
}));

vi.mock("@/shared/lib/client", () => ({
  createClient: () => ({
    auth: {
      signUp: mockSignUp,
    },
  }),
}));

describe("useSignupForm Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("약관 동의를 하지 않으면 회원가입 요청이 전송되지 않아야 한다", async () => {
    const { result } = renderHook(() => useSignupForm());

    act(() => {
      result.current.setEmail("newuser@example.com");
      result.current.setPassword("password123");
      result.current.setAgreed(false);
    });

    const fakeEvent = {
      preventDefault: vi.fn(),
    } as unknown as React.SubmitEvent;

    await act(async () => {
      await result.current.handleSignup(fakeEvent);
    });

    expect(mockSignUp).not.toHaveBeenCalled();
  });

  it("비밀번호가 6자 미만이면 회원가입 요청을 보내지 않고 토스트를 노출한다", async () => {
    const { result } = renderHook(() => useSignupForm());

    act(() => {
      result.current.setEmail("newuser@example.com");
      result.current.setPassword("12345");
      result.current.setAgreed(true);
    });

    const fakeEvent = {
      preventDefault: vi.fn(),
    } as unknown as React.SubmitEvent;

    await act(async () => {
      await result.current.handleSignup(fakeEvent);
    });

    expect(mockToastError).toHaveBeenCalledWith(
      "비밀번호는 최소 6자 이상이어야 합니다.",
    );
    expect(mockSignUp).not.toHaveBeenCalled();
  });

  it("정상적인 입력 시 signUp 호출 후 isSent 상태가 true로 변경되어야 한다", async () => {
    mockSignUp.mockResolvedValueOnce({ error: null });

    const { result } = renderHook(() => useSignupForm());

    act(() => {
      result.current.setEmail("valid@example.com");
      result.current.setPassword("securepass123");
      result.current.setAgreed(true);
    });

    const fakeEvent = {
      preventDefault: vi.fn(),
    } as unknown as React.SubmitEvent;

    await act(async () => {
      await result.current.handleSignup(fakeEvent);
    });

    expect(mockSignUp).toHaveBeenCalled();
    expect(result.current.isSent).toBe(true);
  });
});
