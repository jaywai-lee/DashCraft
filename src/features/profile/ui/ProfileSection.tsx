"use client";

import React, { useRef, useEffect, useState } from "react";
import { useProfileAvatar } from "../model/useProfileAvatar";
import { Button } from "@/shared/ui/button";
import { createClient } from "@/shared/lib/client";
import { User, Upload, Trash2, Loader2, ShieldCheck } from "lucide-react";

interface ProfileSectionProps {
  userEmail?: string;
  avatarUrl?: string;
  onAvatarUpdated?: () => void;
}

export const ProfileSection = ({
  userEmail,
  avatarUrl,
  onAvatarUpdated,
}: ProfileSectionProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { isUploading, uploadAvatar, deleteAvatar } = useProfileAvatar();
  const [hasCustomAvatar, setHasCustomAvatar] = useState(false);

  useEffect(() => {
    const checkCustomAvatar = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user?.user_metadata?.avatar_path) {
        setHasCustomAvatar(true);
      } else {
        setHasCustomAvatar(false);
      }
    };

    void checkCustomAvatar();
  }, [avatarUrl]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const newPath = await uploadAvatar(file);
    if (newPath) {
      onAvatarUpdated?.();
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDelete = async () => {
    const success = await deleteAvatar();
    if (success) {
      onAvatarUpdated?.();
    }
  };

  return (
    <div className="p-5 sm:p-6 bg-card rounded-2xl border border-border space-y-4 shadow-xs">
      <div className="flex items-center justify-between border-b border-border/50 pb-3">
        <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-primary" />
          프로필 정보
        </h3>
      </div>

      <div className="flex items-center gap-4 sm:gap-5">
        <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden bg-muted border border-border flex items-center justify-center shrink-0 shadow-xs">
          {avatarUrl ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={avatarUrl}
              alt="프로필 이미지"
              className="w-full h-full object-cover"
            />
          ) : (
            <User className="w-8 h-8 sm:w-9 sm:h-9 text-muted-foreground/70" />
          )}
          {isUploading && (
            <div className="absolute inset-0 bg-background/70 backdrop-blur-xs flex items-center justify-center">
              <Loader2 className="w-5 h-5 animate-spin text-primary" />
            </div>
          )}
        </div>

        <div className="space-y-2 flex-1 min-w-0">
          <div>
            <p className="text-sm sm:text-base font-bold text-foreground truncate">
              {userEmail || "사용자 계정"}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/png, image/jpeg, image/webp"
              className="hidden"
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={isUploading}
              onClick={() => fileInputRef.current?.click()}
              className="cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5 text-primary" />
              <span>이미지 업로드</span>
            </Button>

            {hasCustomAvatar && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={isUploading}
                onClick={handleDelete}
                className="text-destructive hover:text-destructive hover:bg-destructive/10 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>삭제</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
