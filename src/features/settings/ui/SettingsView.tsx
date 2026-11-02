"use client";

import React from "react";
import { AppHeader } from "@/widgets/header/ui/AppHeader";
import { ProfileSection } from "@/features/profile/ui/ProfileSection";
import { PasswordChangeSection } from "./PasswordChangeSection";
import { DeleteAccountSection } from "./DeleteAccountSection";
import { Settings as SettingsIcon } from "lucide-react";

export const SettingsView = () => {
  return (
    <div className="min-h-screen bg-muted/20 text-foreground flex flex-col">
      <AppHeader showSearchButton={false} />

      <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-6 space-y-6">
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
          <ProfileSection />
          <PasswordChangeSection />
          <DeleteAccountSection />
        </div>
      </main>
    </div>
  );
};
