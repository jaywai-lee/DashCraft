import { renderHook, act } from "@testing-library/react";
import { useProfileAvatar } from "./useProfileAvatar";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mockGetUser = vi.fn();
const mockUpdateUser = vi.fn();
const mockStorageList = vi.fn();
const mockStorageUpload = vi.fn();
const mockStorageRemove = vi.fn();
const mockToastSuccess = vi.fn();
const mockToastError = vi.fn();
const mockResizeImageToWebP = vi.fn();

vi.mock("@/shared/lib/client", () => ({
  createClient: () => ({
    auth: {
      getUser: mockGetUser,
      updateUser: mockUpdateUser,
    },
    storage: {
      from: () => ({
        list: mockStorageList,
        upload: mockStorageUpload,
        remove: mockStorageRemove,
      }),
    },
  }),
}));

vi.mock("@/shared/lib/imageResizer", () => ({
  resizeImageToWebP: (...args: unknown[]) => mockResizeImageToWebP(...args),
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
    mockGetUser.mockResolvedValue({
      data: { user: { id: "test-user-id" } },
    });
    mockStorageList.mockResolvedValue({ data: [] });
    mockResizeImageToWebP.mockResolvedValue(
      new Blob(["fake-webp"], { type: "image/webp" }),
    );
  });

  it("초기 상태값이 올바르게 설정되어야 한다", () => {
    const { result } = renderHook(() => useProfileAvatar());

    expect(result.current.isUploading).toBe(false);
    expect(typeof result.current.uploadAvatar).toBe("function");
    expect(typeof result.current.deleteAvatar).toBe("function");
  });

  it("이미지 파일 업로드 성공 시 새 파일 경로를 반환하고 user_metadata를 업데이트해야 한다", async () => {
    mockStorageList.mockResolvedValueOnce({ data: [{ name: "old.webp" }] });
    mockStorageUpload.mockResolvedValueOnce({ error: null });
    mockStorageRemove.mockResolvedValueOnce({ error: null });
    mockUpdateUser.mockResolvedValueOnce({ error: null });

    const { result } = renderHook(() => useProfileAvatar());

    const fakeFile = new File(["dummy"], "avatar.png", { type: "image/png" });

    let filePath: string | null = null;
    await act(async () => {
      filePath = await result.current.uploadAvatar(fakeFile);
    });

    expect(filePath).toMatch(/^test-user-id\/\d+\.webp$/);
    expect(mockStorageUpload).toHaveBeenCalled();
    expect(mockStorageRemove).toHaveBeenCalledWith(["test-user-id/old.webp"]);
    expect(mockUpdateUser).toHaveBeenCalledWith({
      data: { avatar_path: filePath },
    });
    expect(mockToastSuccess).toHaveBeenCalledWith(
      "프로필 이미지가 변경되었습니다.",
    );
  });

  it("아바타 삭제 시 스토리지 파일 제거 및 avatar_path null 처리가 수행되어야 한다", async () => {
    mockStorageList.mockResolvedValueOnce({ data: [{ name: "current.webp" }] });
    mockStorageRemove.mockResolvedValueOnce({ error: null });
    mockUpdateUser.mockResolvedValueOnce({ error: null });

    const { result } = renderHook(() => useProfileAvatar());

    await act(async () => {
      await result.current.deleteAvatar();
    });

    expect(mockStorageRemove).toHaveBeenCalledWith([
      "test-user-id/current.webp",
    ]);
    expect(mockUpdateUser).toHaveBeenCalledWith({
      data: { avatar_path: null },
    });
    expect(mockToastSuccess).toHaveBeenCalledWith(
      "프로필 이미지가 기본 상태로 초기화되었습니다.",
    );
  });

  it("업로드 도중 오류가 발생하면 실패 토스트를 출력하고 null을 반환한다", async () => {
    mockStorageUpload.mockResolvedValueOnce({
      error: { message: "Upload failed" },
    });

    const { result } = renderHook(() => useProfileAvatar());
    const fakeFile = new File(["dummy"], "avatar.png", { type: "image/png" });

    let filePath: string | null = null;
    await act(async () => {
      filePath = await result.current.uploadAvatar(fakeFile);
    });

    expect(filePath).toBeNull();
    expect(mockToastError).toHaveBeenCalledWith("Upload failed");
  });
});
