"use client";

import React, { useRef } from "react";
import { Button } from "@/shared/ui/button";
import { useProfileAvatar } from "../model/useProfileAvatar";
import { Camera, Loader2, Trash2, User } from "lucide-react";

interface ProfileSectionProps {
  userEmail?: string;
  initialAvatarUrl?: string;
}

export const ProfileSection = ({
  userEmail,
  initialAvatarUrl,
}: ProfileSectionProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { avatarUrl, isUploading, handleUploadAvatar, handleRemoveAvatar } =
    useProfileAvatar(initialAvatarUrl);

  return (
    <div className="bg-card border rounded-2xl p-6 space-y-6 shadow-xs">
      <div className="space-y-1">
        <h2 className="text-base font-bold text-foreground">프로필 설정</h2>
        <p className="text-xs text-muted-foreground">
          대시보드 상단 헤더 및 서비스 전반에 표시되는 프로필 이미지를
          관리합니다.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
        <div className="relative group shrink-0">
          <div className="w-24 h-24 rounded-full border-2 border-border overflow-hidden bg-muted flex items-center justify-center relative shadow-inner">
            {avatarUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={avatarUrl}
                alt="Profile Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <User className="w-10 h-10 text-muted-foreground" />
            )}

            {isUploading && (
              <div className="absolute inset-0 bg-background/70 backdrop-blur-xs flex items-center justify-center">
                <Loader2 className="w-6 h-6 animate-spin text-primary" />
              </div>
            )}
          </div>

          <button
            type="button"
            disabled={isUploading}
            onClick={() => fileInputRef.current?.click()}
            className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary text-primary-foreground shadow-md flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
            title="이미지 변경"
          >
            <Camera className="w-4 h-4" />
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handleUploadAvatar}
            className="hidden"
          />
        </div>

        <div className="space-y-3 text-center sm:text-left flex-1">
          <div>
            <span className="text-xs font-semibold text-muted-foreground block">
              로그인 계정
            </span>
            <span className="text-sm font-bold text-foreground font-mono">
              {userEmail ?? "user@example.com"}
            </span>
          </div>

          <div className="flex items-center gap-2 justify-center sm:justify-start pt-1">
            <Button
              variant="outline"
              size="sm"
              disabled={isUploading}
              onClick={() => fileInputRef.current?.click()}
              className="text-xs h-8 gap-1.5"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>사진 업로드</span>
            </Button>

            {avatarUrl && (
              <Button
                variant="ghost"
                size="sm"
                disabled={isUploading}
                onClick={handleRemoveAvatar}
                className="text-xs h-8 gap-1.5 text-muted-foreground hover:text-destructive"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>기본 이미지로 변경</span>
              </Button>
            )}
          </div>
          <p className="text-[11px] text-muted-foreground">
            JPG, PNG, WEBP (최대 2MB)
          </p>
        </div>
      </div>
    </div>
  );
};
