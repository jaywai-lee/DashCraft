"use client";

import { useState } from "react";
import { createClient } from "@/shared/lib/client";
import { resizeImageToWebP } from "@/shared/lib/imageResizer";
import { toast } from "sonner";

export const useProfileAvatar = () => {
  const supabase = createClient();
  const [isUploading, setIsUploading] = useState(false);

  const uploadAvatar = async (file: File): Promise<string | null> => {
    setIsUploading(true);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) throw new Error("로그인이 필요합니다.");

      const resizedBlob = await resizeImageToWebP(file, 200, 200);
      const filePath = `${user.id}/${Date.now()}.webp`;

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, resizedBlob, {
          contentType: "image/webp",
          upsert: false,
        });

      if (uploadError) throw uploadError;

      const oldAvatarPath = user.user_metadata?.avatar_path as
        string | undefined;

      const { error: updateError } = await supabase.auth.updateUser({
        data: {
          avatar_path: filePath,
        },
      });

      if (updateError) {
        await supabase.storage.from("avatars").remove([filePath]);
        throw updateError;
      }

      if (oldAvatarPath && oldAvatarPath !== filePath) {
        await supabase.storage.from("avatars").remove([oldAvatarPath]);
      }

      toast.success("프로필 이미지가 변경되었습니다.");
      return filePath;
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "업로드 중 오류가 발생했습니다.";
      toast.error("아바타 업로드 실패", { description: message });
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  const deleteAvatar = async (): Promise<boolean> => {
    setIsUploading(true);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) throw new Error("로그인이 필요합니다.");

      const avatarPath = user.user_metadata?.avatar_path as string | undefined;

      const { error: updateError } = await supabase.auth.updateUser({
        data: {
          avatar_path: null,
        },
      });

      if (updateError) throw updateError;

      if (avatarPath) {
        await supabase.storage.from("avatars").remove([avatarPath]);
      }

      toast.success("프로필 이미지가 삭제되었습니다.");
      return true;
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "삭제 중 오류가 발생했습니다.";
      toast.error("이미지 삭제 실패", { description: message });
      return false;
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
