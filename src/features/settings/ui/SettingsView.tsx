"use client";

import React from "react";
import { ProfileSection } from "@/features/profile/ui/ProfileSection";
import { PasswordChangeSection } from "./PasswordChangeSection";
import { DeleteAccountSection } from "./DeleteAccountSection";
import { Settings as SettingsIcon } from "lucide-react";

interface SettingsViewProps {
  userEmail?: string;
  avatarUrl?: string;
}

export const SettingsView = ({ userEmail, avatarUrl }: SettingsViewProps) => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
      <div className="flex items-center gap-3 pb-2 border-b border-border">
        <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
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

      <div className="space-y-6">
        <ProfileSection userEmail={userEmail} avatarUrl={avatarUrl} />
        <PasswordChangeSection />
        <DeleteAccountSection userEmail={userEmail} />
      </div>
    </div>
  );
};
