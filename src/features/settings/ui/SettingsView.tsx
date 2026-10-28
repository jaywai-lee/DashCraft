"use client";

import React from "react";
import Link from "next/link";
import { useSettings } from "../model/useSettings";
import { UserDropdown } from "@/widgets/header/ui/UserDropdown";
import { ProfileSection } from "@/features/profile/ui/ProfileSection";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input/Input";
import { Modal } from "@/shared/ui/modal";
import { ShieldAlert, Trash2, Lock, KeyRound, ArrowLeft } from "lucide-react";

export const SettingsView = () => {
  const {
    userEmail,
    avatarUrl,
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

  const isEmailMatching = confirmEmailInput === userEmail;

  return (
    <div className="min-h-screen bg-muted/20 pb-12">
      <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-[100] px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/dashboard">
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 text-xs sm:text-sm font-semibold hover:bg-accent cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>대시보드로 돌아가기</span>
          </Button>
        </Link>

        <UserDropdown userEmail={userEmail} avatarUrl={avatarUrl} />
      </header>

      <main className="max-w-4xl mx-auto py-8 md:py-12 px-4 sm:px-6 space-y-8">
        <div className="space-y-1.5 border-b pb-5">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            계정 설정
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground">
            프로필 정보를 확인하고 보안 및 계정 설정을 관리하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <ProfileSection userEmail={userEmail} initialAvatarUrl={avatarUrl} />

          <div className="bg-background border rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-center gap-2.5 border-b pb-4">
              <KeyRound className="w-5 h-5 text-primary" />
              <h2 className="text-base font-bold">비밀번호 변경</h2>
            </div>

            <form onSubmit={handleChangePassword} className="space-y-4">
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
                size="md"
                disabled={isChangingPassword}
                isLoading={isChangingPassword}
                className="w-full text-xs sm:text-sm h-10 mt-2 cursor-pointer"
              >
                비밀번호 업데이트
              </Button>
            </form>
          </div>
        </div>

        <div className="bg-destructive/5 border border-destructive/20 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex items-center gap-2.5 border-b border-destructive/15 pb-4">
            <ShieldAlert className="w-5 h-5 text-destructive" />
            <h2 className="text-base font-bold text-destructive">위험 영역</h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-foreground">회원 탈퇴</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                계정을 삭제하면 작성된 모든 위젯, 메모, 할 일 데이터가 즉시 영구
                파기됩니다.
              </p>
            </div>
            <Button
              variant="outline"
              size="md"
              onClick={() => setIsDeleteModalOpen(true)}
              className="border-destructive/30 text-destructive hover:bg-destructive/10 text-xs sm:text-sm shrink-0 h-10 cursor-pointer"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              계정 삭제
            </Button>
          </div>
        </div>

        <Modal
          isOpen={isDeleteModalOpen}
          onClose={closeModal}
          title="정말 계정을 삭제하시겠습니까?"
          maxWidth="md"
          footer={
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={closeModal}
                disabled={isDeleting}
                className="text-xs cursor-pointer"
              >
                취소
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={handleDeleteAccount}
                disabled={!isEmailMatching || isDeleting}
                isLoading={isDeleting}
                className="bg-destructive hover:bg-destructive/90 text-white text-xs cursor-pointer"
              >
                계정 삭제 확인
              </Button>
            </div>
          }
        >
          <div className="space-y-4 text-left">
            <p className="text-xs text-muted-foreground leading-relaxed">
              이 작업은 취소할 수 없습니다. 실수로 인한 삭제를 방지하기 위해
              아래에 본인의 이메일 주소(
              <span className="font-bold text-foreground">{userEmail}</span>)를
              정확히 입력해주세요.
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
          </div>
        </Modal>
      </main>
    </div>
  );
};
