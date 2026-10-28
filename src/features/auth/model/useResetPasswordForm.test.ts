import { renderHook, act } from "@testing-library/react";
import { useResetPasswordForm } from "./useResetPasswordForm";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mockPush = vi.fn();
const mockReplace = vi.fn();
const mockUpdateUser = vi.fn();
const mockToastError = vi.fn();
const mockToastSuccess = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
    replace: mockReplace,
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
      onAuthStateChange: vi.fn((callback) => {
        callback("INITIAL_SESSION", { user: { id: "test-user-id" } });
        return {
          data: {
            subscription: {
              unsubscribe: vi.fn(),
            },
          },
        };
      }),
      updateUser: mockUpdateUser,
    },
  }),
}));

describe("useResetPasswordForm Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("비밀번호 불일치 시 updateUser를 호출하지 않고 에러 토스트를 보여준다", async () => {
    const { result } = renderHook(() => useResetPasswordForm());

    act(() => {
      result.current.setPassword("password123");
      result.current.setConfirmPassword("different123");
    });

    const fakeEvent = {
      preventDefault: vi.fn(),
    } as unknown as React.SubmitEvent;

    await act(async () => {
      await result.current.handleResetPassword(fakeEvent);
    });

    expect(mockToastError).toHaveBeenCalledWith(
      "비밀번호 확인이 일치하지 않습니다.",
    );
    expect(mockUpdateUser).not.toHaveBeenCalled();
  });

  it("비밀번호 변경 성공 시 updateUser 호출 후 대시보드로 이동해야 한다", async () => {
    mockUpdateUser.mockResolvedValueOnce({ error: null });

    const { result } = renderHook(() => useResetPasswordForm());

    act(() => {
      result.current.setPassword("newPassword123");
      result.current.setConfirmPassword("newPassword123");
    });

    const fakeEvent = {
      preventDefault: vi.fn(),
    } as unknown as React.SubmitEvent;

    await act(async () => {
      await result.current.handleResetPassword(fakeEvent);
    });

    expect(mockUpdateUser).toHaveBeenCalledWith({
      password: "newPassword123",
    });
    expect(mockToastSuccess).toHaveBeenCalledWith(
      "비밀번호가 성공적으로 변경되었습니다.",
    );
    expect(mockPush).toHaveBeenCalledWith("/dashboard");
  });
});
