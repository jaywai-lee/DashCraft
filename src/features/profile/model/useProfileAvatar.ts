"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { createClient } from "@/shared/lib/client";

const MAX_FILE_SIZE = 2 * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

export const useProfileAvatar = (initialAvatarUrl?: string) => {
  const router = useRouter();
  const supabase = createClient();

  const [avatarUrl, setAvatarUrl] = useState<string | undefined>(
    initialAvatarUrl,
  );
  const [isUploading, setIsUploading] = useState(false);

  const handleUploadAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type)) {
      toast.error("지원하지 않는 파일 형식입니다.", {
        description: "JPG, PNG, WEBP 이미지 파일만 업로드할 수 있습니다.",
      });
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      toast.error("파일 용량이 너무 큽니다.", {
        description: "2MB 이하의 이미지 파일만 업로드할 수 있습니다.",
      });
      return;
    }

    setIsUploading(true);

    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        throw new Error("사용자 세션을 찾을 수 없습니다.");
      }

      const fileExt = file.name.split(".").pop()?.toLowerCase() || "png";
      const filePath = `${user.id}/avatar.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file, { upsert: true });

      if (uploadError) throw uploadError;

      const {
        data: { publicUrl },
      } = supabase.storage.from("avatars").getPublicUrl(filePath);

      const avatarUrlWithCacheBust = `${publicUrl}?t=${Date.now()}`;

      const { error: updateError } = await supabase.auth.updateUser({
        data: { avatar_url: avatarUrlWithCacheBust },
      });

      if (updateError) throw updateError;

      setAvatarUrl(avatarUrlWithCacheBust);
      toast.success("프로필 이미지가 변경되었습니다.");
      router.refresh();
    } catch (err: unknown) {
      const error = err as Error;
      toast.error("프로필 이미지 변경 실패", { description: error.message });
    } finally {
      setIsUploading(false);
      e.target.value = "";
    }
  };

  const handleRemoveAvatar = async () => {
    setIsUploading(true);

    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        throw new Error("사용자 세션을 찾을 수 없습니다.");
      }

      const { data: fileList } = await supabase.storage
        .from("avatars")
        .list(user.id);

      if (fileList && fileList.length > 0) {
        const filesToRemove = fileList.map((f) => `${user.id}/${f.name}`);
        await supabase.storage.from("avatars").remove(filesToRemove);
      }

      const { error: updateError } = await supabase.auth.updateUser({
        data: { avatar_url: null },
      });

      if (updateError) throw updateError;

      setAvatarUrl(undefined);
      toast.success("기본 프로필 이미지로 변경되었습니다.");
      router.refresh();
    } catch (err: unknown) {
      const error = err as Error;
      toast.error("프로필 이미지 삭제 실패", { description: error.message });
    } finally {
      setIsUploading(false);
    }
  };

  return {
    avatarUrl,
    isUploading,
    handleUploadAvatar,
    handleRemoveAvatar,
  };
};
