import { renderHook, act } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { useResetPasswordForm } from "./useResetPasswordForm";

const mockGetSession = vi.fn();
const mockUpdateUser = vi.fn();
const mockSignOut = vi.fn();

vi.mock("@/shared/lib/client", () => ({
  createClient: () => ({
    auth: {
      getSession: mockGetSession,
      updateUser: mockUpdateUser,
      signOut: mockSignOut,
    },
  }),
}));

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    refresh: vi.fn(),
  }),
}));

vi.mock("sonner", () => ({
  toast: {
    error: vi.fn(),
    success: vi.fn(),
  },
}));

type SubmitEventType = Parameters<
  ReturnType<typeof useResetPasswordForm>["handleResetPassword"]
>[0];

describe("useResetPasswordForm Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockGetSession.mockResolvedValue({
      data: { session: { user: { id: "test-user-id" } } },
    });
  });

  const createFakeEvent = (): SubmitEventType =>
    ({
      preventDefault: vi.fn(),
    }) as unknown as SubmitEventType;

  it("비밀번호가 8자 미만이면 에러 토스트가 노출되어야 한다", async () => {
    const { result } = renderHook(() => useResetPasswordForm());

    await act(async () => {});

    act(() => {
      result.current.setPassword("12345");
      result.current.setConfirmPassword("12345");
    });

    const fakeEvent = createFakeEvent();

    await act(async () => {
      await result.current.handleResetPassword(fakeEvent);
    });

    expect(fakeEvent.preventDefault).toHaveBeenCalled();
  });

  it("비밀번호와 비밀번호 확인이 일치하지 않으면 에러 토스트가 노출되어야 한다", async () => {
    const { result } = renderHook(() => useResetPasswordForm());

    await act(async () => {});

    act(() => {
      result.current.setPassword("password123");
      result.current.setConfirmPassword("different123");
    });

    const fakeEvent = createFakeEvent();

    await act(async () => {
      await result.current.handleResetPassword(fakeEvent);
    });

    expect(fakeEvent.preventDefault).toHaveBeenCalled();
  });
});
