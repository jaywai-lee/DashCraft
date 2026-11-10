import { renderHook, act } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { usePasswordChangeForm } from "./usePasswordChangeForm";
import { toast } from "sonner";

const mockUpdateUser = vi.fn();

vi.mock("@/shared/lib/client", () => ({
  createClient: () => ({
    auth: {
      updateUser: mockUpdateUser,
    },
  }),
}));

vi.mock("sonner", () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

describe("usePasswordChangeForm Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("초기 상태값이 빈 문자열 및 isLoading: false 여야 한다", () => {
    const { result } = renderHook(() => usePasswordChangeForm());

    expect(result.current.password).toBe("");
    expect(result.current.confirmPassword).toBe("");
    expect(result.current.isLoading).toBe(false);
  });

  it("비밀번호 불일치 시 에러 토스트를 띄우고 제출을 중단해야 한다", async () => {
    const { result } = renderHook(() => usePasswordChangeForm());

    act(() => {
      result.current.setPassword("password123");
      result.current.setConfirmPassword("password456");
    });

    const mockEvent = {
      preventDefault: vi.fn(),
    } as unknown as React.SubmitEvent;

    await act(async () => {
      await result.current.handlePasswordChange(mockEvent);
    });

    expect(toast.error).toHaveBeenCalledWith(
      "비밀번호 확인이 일치하지 않습니다.",
    );
    expect(mockUpdateUser).not.toHaveBeenCalled();
  });

  it("비밀번호 일치 시 Supabase updateUser를 호출하고 성공 토스트를 출력해야 한다", async () => {
    mockUpdateUser.mockResolvedValue({ data: {}, error: null });

    const { result } = renderHook(() => usePasswordChangeForm());

    act(() => {
      result.current.setPassword("newpassword123");
      result.current.setConfirmPassword("newpassword123");
    });

    const mockEvent = {
      preventDefault: vi.fn(),
    } as unknown as React.SubmitEvent;

    await act(async () => {
      await result.current.handlePasswordChange(mockEvent);
    });

    expect(mockUpdateUser).toHaveBeenCalledWith({ password: "newpassword123" });
    expect(toast.success).toHaveBeenCalledWith(
      "비밀번호가 성공적으로 변경되었습니다.",
    );
    expect(result.current.password).toBe("");
    expect(result.current.confirmPassword).toBe("");
  });
});
