import { renderHook, act } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { useProfileAvatar } from "./useProfileAvatar";

const mockGetUser = vi.fn();
const mockUpdateUser = vi.fn();
const mockStorageUpload = vi.fn();
const mockStorageRemove = vi.fn();

const mockSupabaseClient = {
  auth: {
    getUser: mockGetUser,
    updateUser: mockUpdateUser,
  },
  storage: {
    from: () => ({
      upload: mockStorageUpload,
      remove: mockStorageRemove,
    }),
  },
};

vi.mock("@/shared/lib/client", () => ({
  createClient: () => mockSupabaseClient,
}));

vi.mock("@/shared/lib/imageResizer", () => ({
  resizeImageToWebP: vi
    .fn()
    .mockResolvedValue(new Blob(["fake-webp"], { type: "image/webp" })),
}));

vi.mock("sonner", () => ({
  toast: {
    error: vi.fn(),
    success: vi.fn(),
  },
}));

describe("useProfileAvatar Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    mockGetUser.mockResolvedValue({
      data: {
        user: {
          id: "test-user-id",
          user_metadata: { avatar_path: "test-user-id/old-avatar.webp" },
        },
      },
    });
  });

  it("초기 상태값이 올바르게 설정되어야 한다", () => {
    const { result } = renderHook(() => useProfileAvatar());
    expect(result.current.isUploading).toBe(false);
  });

  it("아바타 업로드 성공 시: 신규 업로드 ➔ 메타데이터 갱신 ➔ 기존 파일 삭제 순서로 실행된다", async () => {
    mockStorageUpload.mockResolvedValueOnce({ error: null });
    mockUpdateUser.mockResolvedValueOnce({ error: null });
    mockStorageRemove.mockResolvedValueOnce({ error: null });

    const { result } = renderHook(() => useProfileAvatar());
    const fakeFile = new File(["test"], "avatar.png", { type: "image/png" });

    let filePath: string | null = null;
    await act(async () => {
      filePath = await result.current.uploadAvatar(fakeFile);
    });

    expect(filePath).toMatch(/^test-user-id\/\d+\.webp$/);
    expect(mockStorageUpload).toHaveBeenCalledWith(
      filePath,
      expect.any(Blob),
      expect.objectContaining({
        contentType: "image/webp",
        upsert: false,
      }),
    );
    expect(mockUpdateUser).toHaveBeenCalledWith({
      data: { avatar_path: filePath },
    });
    expect(mockStorageRemove).toHaveBeenCalledWith([
      "test-user-id/old-avatar.webp",
    ]);
  });

  it("메타데이터 갱신 실패 시 방금 업로드한 신규 파일을 즉시 파기(롤백)한다", async () => {
    mockStorageUpload.mockResolvedValueOnce({ error: null });
    mockUpdateUser.mockResolvedValueOnce({
      error: new Error("메타데이터 DB 저장 실패"),
    });
    mockStorageRemove.mockResolvedValueOnce({ error: null });

    const { result } = renderHook(() => useProfileAvatar());
    const fakeFile = new File(["test"], "avatar.png", { type: "image/png" });

    let filePath: string | null = null;
    await act(async () => {
      filePath = await result.current.uploadAvatar(fakeFile);
    });

    expect(filePath).toBeNull();
    expect(mockStorageRemove).toHaveBeenCalledWith([
      expect.stringMatching(/^test-user-id\/\d+\.webp$/),
    ]);
  });

  it("아바타 삭제 시 메타데이터 null 처리 후 스토리지 기존 파일이 삭제된다", async () => {
    mockUpdateUser.mockResolvedValueOnce({ error: null });
    mockStorageRemove.mockResolvedValueOnce({ error: null });

    const { result } = renderHook(() => useProfileAvatar());

    let success = false;
    await act(async () => {
      success = await result.current.deleteAvatar();
    });

    expect(success).toBe(true);
    expect(mockUpdateUser).toHaveBeenCalledWith({
      data: { avatar_path: null },
    });
    expect(mockStorageRemove).toHaveBeenCalledWith([
      "test-user-id/old-avatar.webp",
    ]);
  });
});
