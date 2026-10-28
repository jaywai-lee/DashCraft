"use client";

import React from "react";
import { useSettings } from "../model/useSettings";
import { ProfileSection } from "@/features/profile/ui/ProfileSection";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input/Input";
import { Modal } from "@/shared/ui/modal/Modal";
import { Lock, AlertTriangle, UserX } from "lucide-react";
import { AppHeader } from "@/widgets/header/ui/AppHeader";

export const SettingsView = () => {
  const {
    userEmail,
    avatarUrl,
    refreshUser,
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    isChangingPassword,
    handleChangePassword,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    confirmEmailInput,
    setConfirmEmailInput,
    isDeleting,
    handleDeleteAccount,
    closeModal,
  } = useSettings();

  return (
    <div className="min-h-screen bg-muted/20 text-foreground flex flex-col">
      <AppHeader userEmail={userEmail} avatarUrl={avatarUrl} />

      <main className="flex-1 max-w-2xl w-full mx-auto p-4 sm:p-6 space-y-5">
        <div className="space-y-0.5">
          <h1 className="text-xl font-bold tracking-tight">계정 설정</h1>
          <p className="text-xs text-muted-foreground">
            프로필 정보 및 보안 설정을 관리합니다.
          </p>
        </div>

        <ProfileSection
          userEmail={userEmail}
          avatarUrl={avatarUrl}
          onAvatarUpdated={refreshUser}
        />

        <div className="p-5 sm:p-6 bg-card rounded-2xl border border-border space-y-4 shadow-xs">
          <div className="space-y-1 border-b border-border/50 pb-3">
            <h3 className="text-sm font-bold text-foreground">비밀번호 변경</h3>
            <p className="text-xs text-muted-foreground">
              계정 보안을 위해 주기적으로 비밀번호를 변경해주세요.
            </p>
          </div>

          <form onSubmit={handleChangePassword} className="space-y-3.5">
            <Input
              label="새 비밀번호 (6자 이상)"
              type="password"
              required
              minLength={6}
              icon={Lock}
              value={newPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewPassword(e.target.value)
              }
              placeholder="••••••••"
            />

            <Input
              label="새 비밀번호 확인"
              type="password"
              required
              minLength={6}
              icon={Lock}
              value={confirmPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setConfirmPassword(e.target.value)
              }
              placeholder="••••••••"
            />

            <Button
              type="submit"
              variant="primary"
              size="sm"
              disabled={isChangingPassword}
              isLoading={isChangingPassword}
            >
              비밀번호 변경
            </Button>
          </form>
        </div>

        <div className="p-5 sm:p-6 bg-destructive/5 rounded-2xl border border-destructive/20 space-y-4 shadow-xs">
          <div className="space-y-1 border-b border-destructive/15 pb-3">
            <h3 className="text-sm font-bold text-destructive flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              위험 영역
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              계정을 삭제하면 대시보드 위젯, 할 일, 메모, 일정 등 모든 데이터가
              영구적으로 삭제되며 복구할 수 없습니다.
            </p>
          </div>

          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setIsDeleteModalOpen(true)}
            className="border-destructive/30 text-destructive hover:bg-destructive/10 hover:text-destructive/70"
          >
            <UserX className="w-4 h-4 mr-1.5" />
            계정 삭제 신청
          </Button>
        </div>
      </main>

      <Modal
        isOpen={isDeleteModalOpen}
        onClose={closeModal}
        title="정말 계정을 삭제하시겠습니까?"
      >
        <div className="space-y-4 pt-2">
          <p className="text-xs text-muted-foreground leading-relaxed">
            확인을 위해 현재 로그인된 이메일 주소(
            <span className="font-semibold text-foreground">{userEmail}</span>
            )를 정확히 입력해주세요.
          </p>

          <Input
            label="이메일 확인 입력"
            type="email"
            value={confirmEmailInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setConfirmEmailInput(e.target.value)
            }
            placeholder={userEmail}
          />

          <div className="flex justify-end gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={closeModal}
              disabled={isDeleting}
            >
              취소
            </Button>
            <Button
              type="button"
              variant="primary"
              size="sm"
              onClick={handleDeleteAccount}
              disabled={
                isDeleting ||
                confirmEmailInput.trim().toLowerCase() !==
                  userEmail.trim().toLowerCase()
              }
              isLoading={isDeleting}
              className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
            >
              계정 영구 삭제
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
