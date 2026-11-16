import { renderHook, act } from "@testing-library/react";
import { useForgotPasswordForm } from "./useForgotPasswordForm";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mockResetPasswordForEmail = vi.fn();
const mockToastError = vi.fn();
const mockToastSuccess = vi.fn();

vi.mock("sonner", () => ({
  toast: {
    error: (...args: unknown[]) => mockToastError(...args),
    success: (...args: unknown[]) => mockToastSuccess(...args),
  },
}));

vi.mock("@/shared/lib/client", () => ({
  createClient: () => ({
    auth: {
      resetPasswordForEmail: mockResetPasswordForEmail,
    },
  }),
}));

describe("useForgotPasswordForm Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("이메일을 입력하고 제출하면 resetPasswordForEmail이 호출되고 isSent 상태가 true로 전환되어야 한다", async () => {
    mockResetPasswordForEmail.mockResolvedValueOnce({ error: null });

    const { result } = renderHook(() => useForgotPasswordForm());

    act(() => {
      result.current.setEmail("  user@example.com  ");
    });

    const fakeEvent = {
      preventDefault: vi.fn(),
    } as unknown as React.SubmitEvent;

    await act(async () => {
      await result.current.handleResetRequest(fakeEvent);
    });

    expect(mockResetPasswordForEmail).toHaveBeenCalledWith(
      "user@example.com",
      expect.objectContaining({
        redirectTo: expect.stringContaining(
          "/auth/callback?next=/reset-password",
        ),
      }),
    );
    expect(result.current.isSent).toBe(true);
    expect(mockToastSuccess).toHaveBeenCalled();
  });

  it("요청 횟수 제한(429) 에러 발생 시 안내 토스트를 노출하고 isSent는 false를 유지해야 한다", async () => {
    mockResetPasswordForEmail.mockResolvedValueOnce({
      error: {
        status: 429,
        message:
          "For security purposes, you can only request this after 60 seconds.",
      },
    });

    const { result } = renderHook(() => useForgotPasswordForm());

    act(() => {
      result.current.setEmail("user@example.com");
    });

    const fakeEvent = {
      preventDefault: vi.fn(),
    } as unknown as React.SubmitEvent;

    await act(async () => {
      await result.current.handleResetRequest(fakeEvent);
    });

    expect(mockToastError).toHaveBeenCalledWith("비밀번호 재설정 요청 실패", {
      description: "요청 횟수가 너무 많습니다. 잠시 후 다시 시도해 주세요.",
    });
    expect(result.current.isSent).toBe(false);
  });
});
