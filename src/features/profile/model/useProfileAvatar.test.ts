import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { useProfileAvatar } from "./useProfileAvatar";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ refresh: vi.fn() }),
}));

vi.mock("sonner", () => ({
  toast: { success: vi.fn(), error: vi.fn() },
}));

vi.mock("@/shared/lib/supabase/client", () => ({
  createClient: () => ({
    auth: {
      getUser: vi.fn().mockResolvedValue({
        data: { user: { id: "user-123" } },
      }),
      updateUser: vi.fn().mockResolvedValue({ error: null }),
    },
    storage: {
      from: () => ({
        upload: vi.fn().mockResolvedValue({ error: null }),
        getPublicUrl: () => ({
          data: { publicUrl: "https://example.co/avatar.png" },
        }),
        list: vi.fn().mockResolvedValue({ data: [{ name: "avatar.png" }] }),
        remove: vi.fn().mockResolvedValue({ error: null }),
      }),
    },
  }),
}));

describe("useProfileAvatar Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("초기 아바타 URL 상태가 올바르게 설정되어야 한다", () => {
    const { result } = renderHook(() =>
      useProfileAvatar("https://example.co/initial.png"),
    );
    expect(result.current.avatarUrl).toBe("https://example.co/initial.png");
  });

  it("허용되지 않은 파일 형식 선택 시 업로드가 거부되어야 한다", async () => {
    const { result } = renderHook(() => useProfileAvatar());
    const invalidFile = new File(["test"], "test.pdf", {
      type: "application/pdf",
    });

    await act(async () => {
      await result.current.handleUploadAvatar({
        target: { files: [invalidFile] },
      } as unknown as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.avatarUrl).toBeUndefined();
  });
});
