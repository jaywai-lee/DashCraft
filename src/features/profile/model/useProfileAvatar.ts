"use client";

import { createClient } from "@/shared/lib/client";
import { useState } from "react";
import { toast } from "sonner";

export const useProfileAvatar = () => {
  const [isUploading, setIsUploading] = useState(false);
  const supabase = createClient();

  const uploadAvatar = async (file: File): Promise<string | null> => {
    try {
      setIsUploading(true);

      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) throw new Error("로그인이 필요합니다.");

      const blob = await resizeImage(file, 512, 512);
      const extension = blob.type === "image/png" ? "png" : "webp";
      const contentType = blob.type;

      const oldAvatarPath = user.user_metadata?.avatar_path as
        string | undefined;
      const newFilePath = `${user.id}/${Date.now()}.${extension}`;

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(newFilePath, blob, { contentType, upsert: true });

      if (uploadError) {
        throw new Error(uploadError.message);
      }

      const { error: updateError } = await supabase.auth.updateUser({
        data: { avatar_path: newFilePath },
      });

      if (updateError) {
        await supabase.storage.from("avatars").remove([newFilePath]);
        throw new Error(updateError.message);
      }

      if (oldAvatarPath) {
        const { error: removeError } = await supabase.storage
          .from("avatars")
          .remove([oldAvatarPath]);
        if (removeError) {
          console.error("구 아바타 파일 삭제 실패:", removeError);
        }
      }

      toast.success("프로필 이미지가 변경되었습니다.");
      return newFilePath;
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : typeof err === "object" && err !== null && "message" in err
            ? String((err as { message: unknown }).message)
            : "알 수 없는 오류";

      toast.error("아바타 업로드 실패", { description: message });
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  const deleteAvatar = async () => {
    try {
      setIsUploading(true);
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) throw new Error("로그인이 필요합니다.");

      const oldAvatarPath = user.user_metadata?.avatar_path as
        string | undefined;

      const { error: updateError } = await supabase.auth.updateUser({
        data: { avatar_path: null },
      });
      if (updateError) {
        throw new Error(updateError.message);
      }

      if (oldAvatarPath) {
        const { error: removeError } = await supabase.storage
          .from("avatars")
          .remove([oldAvatarPath]);
        if (removeError) {
          console.error("아바타 스토리지 파일 삭제 실패:", removeError);
        }
      }

      toast.success("프로필 이미지가 삭제되었습니다.");
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : typeof err === "object" && err !== null && "message" in err
            ? String((err as { message: unknown }).message)
            : "알 수 없는 오류";

      toast.error("아바타 삭제 실패", { description: message });
    } finally {
      setIsUploading(false);
    }
  };

  return { isUploading, uploadAvatar, deleteAvatar };
};

async function resizeImage(
  file: File,
  maxWidth: number,
  maxHeight: number,
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(img.src);
      const canvas = document.createElement("canvas");
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Canvas 컨텍스트 생성 실패"));
        return;
      }

      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (blob) resolve(blob);
          else reject(new Error("이미지 압축 실패"));
        },
        "image/webp",
        0.85,
      );
    };
    img.onerror = (err) => reject(err);
  });
}
