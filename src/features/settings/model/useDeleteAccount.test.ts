import { renderHook, act } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { useDeleteAccount } from "./useDeleteAccount";
import { toast } from "sonner";

const mockSignOut = vi.fn();

vi.mock("@/shared/lib/client", () => ({
  createClient: () => ({
    auth: {
      signOut: mockSignOut,
    },
  }),
}));

vi.mock("sonner", () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

describe("useDeleteAccount Hook", () => {
  const userEmail = "test@example.com";

  beforeEach(() => {
    vi.clearAllMocks();
    global.fetch = vi.fn();
    vi.stubGlobal("location", { href: "" });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("모달 개폐(openModal / closeModal) 시 상태와 입력값이 정상 제어되어야 한다", () => {
    const { result } = renderHook(() => useDeleteAccount(userEmail));

    act(() => {
      result.current.openModal();
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.setInputEmail("test@example.com");
      result.current.closeModal();
    });

    expect(result.current.isOpen).toBe(false);
    expect(result.current.inputEmail).toBe("");
  });

  it("이메일 미일치 시 에러 토스트를 발생시키고 API 요청을 보내지 않아야 한다", async () => {
    const { result } = renderHook(() => useDeleteAccount(userEmail));

    act(() => {
      result.current.setInputEmail("wrong@example.com");
    });

    await act(async () => {
      await result.current.handleDeleteAccount();
    });

    expect(toast.error).toHaveBeenCalledWith(
      "이메일 주소가 일치하지 않습니다.",
    );
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("이메일 일치 시 계정 삭제 API 호출 및 로그아웃 처리가 실행되어야 한다", async () => {
    vi.mocked(global.fetch).mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    } as Response);
    mockSignOut.mockResolvedValue({ error: null });

    const { result } = renderHook(() => useDeleteAccount(userEmail));

    act(() => {
      result.current.setInputEmail("test@example.com");
    });

    await act(async () => {
      await result.current.handleDeleteAccount();
    });

    expect(global.fetch).toHaveBeenCalledWith(
      "/api/account/delete",
      expect.any(Object),
    );
    expect(mockSignOut).toHaveBeenCalled();
    expect(toast.success).toHaveBeenCalledWith(
      "계정이 성공적으로 삭제되었습니다.",
    );
    expect(window.location.href).toBe("/login");
  });
});
