"use client";

import { useState } from "react";
import { createClient } from "@/shared/lib/client";
import { resizeImageToWebP } from "@/shared/lib/imageResizer";
import { toast } from "sonner";

export const useProfileAvatar = () => {
  const supabase = createClient();
  const [isUploading, setIsUploading] = useState(false);

  const uploadAvatar = async (file: File) => {
    try {
      setIsUploading(true);

      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) throw new Error("인증 세션이 유효하지 않습니다.");

      const webpBlob = await resizeImageToWebP(file, 512, 512, 0.85);

      const timestamp = Date.now();
      const newFilePath = `${user.id}/${timestamp}.webp`;

      const { data: existingFiles } = await supabase.storage
        .from("avatars")
        .list(user.id);

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(newFilePath, webpBlob, {
          contentType: "image/webp",
          upsert: false,
        });

      if (uploadError) throw new Error(uploadError.message);

      if (existingFiles && existingFiles.length > 0) {
        const filesToRemove = existingFiles.map((f) => `${user.id}/${f.name}`);
        await supabase.storage.from("avatars").remove(filesToRemove);
      }

      const { error: updateError } = await supabase.auth.updateUser({
        data: {
          avatar_path: newFilePath,
        },
      });

      if (updateError) throw new Error(updateError.message);

      toast.success("프로필 이미지가 변경되었습니다.");
      return newFilePath;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "아바타 업로드에 실패했습니다.";
      toast.error(message);
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
      if (!user) throw new Error("인증 세션이 유효하지 않습니다.");

      const { data: existingFiles } = await supabase.storage
        .from("avatars")
        .list(user.id);

      if (existingFiles && existingFiles.length > 0) {
        const filesToRemove = existingFiles.map((f) => `${user.id}/${f.name}`);
        await supabase.storage.from("avatars").remove(filesToRemove);
      }

      const { error: updateError } = await supabase.auth.updateUser({
        data: {
          avatar_path: null,
        },
      });

      if (updateError) throw new Error(updateError.message);

      toast.success("프로필 이미지가 기본 상태로 초기화되었습니다.");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "아바타 삭제에 실패했습니다.";
      toast.error(message);
    } finally {
      setIsUploading(false);
    }
  };

  return {
    isUploading,
    uploadAvatar,
    deleteAvatar,
  };
};
