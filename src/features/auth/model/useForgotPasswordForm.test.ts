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
      result.current.setEmail("user@example.com");
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
});
