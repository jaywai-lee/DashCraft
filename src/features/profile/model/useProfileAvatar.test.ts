import { renderHook, act } from "@testing-library/react";
import { useProfileAvatar } from "./useProfileAvatar";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mockGetUser = vi.fn();
const mockUpdateUser = vi.fn();
const mockStorageUpload = vi.fn();
const mockStorageRemove = vi.fn();
const mockToastSuccess = vi.fn();
const mockToastError = vi.fn();

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

vi.mock("@/shared/lib/supabase/client", () => ({
  createClient: () => mockSupabaseClient,
}));

vi.mock("sonner", () => ({
  toast: {
    error: (...args: unknown[]) => mockToastError(...args),
    success: (...args: unknown[]) => mockToastSuccess(...args),
  },
}));

describe("useProfileAvatar Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    global.URL.createObjectURL = vi.fn(() => "blob:http://localhost/mock-blob");
    global.URL.revokeObjectURL = vi.fn();

    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockImplementation(
      () =>
        ({
          drawImage: vi.fn(),
        }) as unknown as CanvasRenderingContext2D,
    );

    vi.spyOn(HTMLCanvasElement.prototype, "toBlob").mockImplementation(
      (callback) => {
        callback(new Blob(["fake-webp"], { type: "image/webp" }));
      },
    );

    global.Image = class {
      onload: () => void = () => {};
      onerror: (err: unknown) => void = () => {};
      src = "";
      width = 1000;
      height = 1000;
      constructor() {
        setTimeout(() => {
          if (this.onload) this.onload();
        }, 0);
      }
    } as unknown as typeof Image;

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
    expect(typeof result.current.uploadAvatar).toBe("function");
    expect(typeof result.current.deleteAvatar).toBe("function");
  });

  it("아바타 업로드 성공 시: 신규 업로드 ➔ 메타데이터 갱신 ➔ 기존 파일 삭제 순서로 실행된다", async () => {
    mockStorageUpload.mockResolvedValueOnce({ error: null });
    mockUpdateUser.mockResolvedValueOnce({ error: null });
    mockStorageRemove.mockResolvedValueOnce({ error: null });

    const { result } = renderHook(() => useProfileAvatar());
    const fakeFile = new File(["dummy"], "avatar.png", { type: "image/png" });

    let filePath: string | null = null;
    await act(async () => {
      filePath = await result.current.uploadAvatar(fakeFile);
    });

    expect(filePath).toMatch(/^test-user-id\/\d+\.webp$/);
    expect(mockStorageUpload).toHaveBeenCalledWith(
      filePath,
      expect.any(Blob),
      expect.objectContaining({ contentType: "image/webp", upsert: true }),
    );
    expect(mockUpdateUser).toHaveBeenCalledWith({
      data: { avatar_path: filePath },
    });
    expect(mockStorageRemove).toHaveBeenCalledWith([
      "test-user-id/old-avatar.webp",
    ]);
    expect(mockToastSuccess).toHaveBeenCalledWith(
      "프로필 이미지가 변경되었습니다.",
    );
  });

  it("메타데이터 갱신 실패 시 방금 업로드한 신규 파일을 즉시 파기(롤백)한다", async () => {
    mockStorageUpload.mockResolvedValueOnce({ error: null });
    mockUpdateUser.mockResolvedValueOnce({
      error: { message: "Metadata update failed" },
    });

    const { result } = renderHook(() => useProfileAvatar());
    const fakeFile = new File(["dummy"], "avatar.png", { type: "image/png" });

    let filePath: string | null = null;
    await act(async () => {
      filePath = await result.current.uploadAvatar(fakeFile);
    });

    expect(filePath).toBeNull();
    expect(mockStorageRemove).toHaveBeenCalledWith([
      expect.stringMatching(/^test-user-id\/\d+\.webp$/),
    ]);
    expect(mockToastError).toHaveBeenCalledWith("아바타 업로드 실패", {
      description: "Metadata update failed",
    });
  });

  it("아바타 삭제 시 메타데이터 null 처리 후 스토리지 기존 파일이 삭제된다", async () => {
    mockUpdateUser.mockResolvedValueOnce({ error: null });
    mockStorageRemove.mockResolvedValueOnce({ error: null });

    const { result } = renderHook(() => useProfileAvatar());

    await act(async () => {
      await result.current.deleteAvatar();
    });

    expect(mockUpdateUser).toHaveBeenCalledWith({
      data: { avatar_path: null },
    });
    expect(mockStorageRemove).toHaveBeenCalledWith([
      "test-user-id/old-avatar.webp",
    ]);
    expect(mockToastSuccess).toHaveBeenCalledWith(
      "프로필 이미지가 삭제되었습니다.",
    );
  });
});
