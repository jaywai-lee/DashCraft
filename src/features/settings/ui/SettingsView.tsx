"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { AppHeader } from "@/widgets/header/ui/AppHeader";
import { ProfileSection } from "@/features/profile/ui/ProfileSection";
import { PasswordChangeSection } from "./PasswordChangeSection";
import { DeleteAccountSection } from "./DeleteAccountSection";
import { Button } from "@/shared/ui/button";
import { Settings as SettingsIcon, ArrowLeft } from "lucide-react";

interface SettingsViewProps {
  userEmail?: string;
  avatarUrl?: string;
}

export const SettingsView = ({ userEmail, avatarUrl }: SettingsViewProps) => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-muted/20 text-foreground flex flex-col">
      <AppHeader userEmail={userEmail} avatarUrl={avatarUrl} />

      <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-6 space-y-6">
        <div className="flex items-center justify-between gap-4 pb-3 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-primary/10 text-primary rounded-xl shrink-0">
              <SettingsIcon className="w-6 h-6" />
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight text-foreground">
                계정 설정
              </h1>
              <p className="text-xs text-muted-foreground">
                프로필 정보 및 계정 보안 설정을 관리합니다.
              </p>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => router.back()}
            className="text-xs h-9 gap-1.5 hidden sm:inline-flex cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>돌아가기</span>
          </Button>
        </div>

        <div className="space-y-6">
          <ProfileSection
            userEmail={userEmail ?? ""}
            avatarUrl={avatarUrl}
            onAvatarUpdated={() => router.refresh()}
          />
          <PasswordChangeSection />
          <DeleteAccountSection userEmail={userEmail} />
        </div>
      </main>
    </div>
  );
};
