"use client";

import React from "react";
import { useSettings } from "../model/useSettings";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input/Input";
import { Modal } from "@/shared/ui/modal";
import { User, ShieldAlert, Trash2, Camera } from "lucide-react";

export const SettingsView = () => {
  const {
    userEmail,
    avatarUrl,
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
    <div className="max-w-2xl mx-auto py-8 px-4 space-y-6">
      <div className="space-y-1">
        <h1 className="text-xl font-bold tracking-tight">계정 설정</h1>
        <p className="text-xs text-muted-foreground">
          프로필 정보를 확인하고 계정 보안 설정을 관리하세요.
        </p>
      </div>

      <div className="bg-background border rounded-2xl p-5 space-y-5 shadow-sm">
        <div className="flex items-center gap-2 border-b pb-3">
          <User className="w-4 h-4 text-primary" />
          <h2 className="text-sm font-semibold">내 프로필</h2>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative group">
            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center overflow-hidden shrink-0">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt="프로필 이미지"
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="w-8 h-8 text-primary" />
              )}
            </div>
            <button
              type="button"
              className="absolute bottom-0 right-0 p-1.5 rounded-full bg-background border shadow-xs text-muted-foreground hover:text-foreground transition-colors"
              title="프로필 이미지 변경"
            >
              <Camera className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-medium text-muted-foreground">
              로그인 이메일
            </span>
            <p className="text-sm font-semibold text-foreground">
              {userEmail || "불러오는 중..."}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-5 space-y-4 shadow-sm">
        <div className="flex items-center gap-2 border-b border-destructive/15 pb-3">
          <ShieldAlert className="w-4 h-4 text-destructive" />
          <h2 className="text-sm font-semibold text-destructive">위험 영역</h2>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <h3 className="text-xs font-bold text-foreground">회원 탈퇴</h3>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              계정을 삭제하면 작성된 모든 위젯, 메모, 할 일 데이터가 즉시 영구
              파기됩니다.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsDeleteModalOpen(true)}
            className="border-destructive/30 text-destructive hover:bg-destructive/10 text-xs shrink-0"
          >
            <Trash2 className="w-3.5 h-3.5 mr-1.5" />
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
              className="text-xs"
            >
              취소
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleDeleteAccount}
              disabled={!isEmailMatching || isDeleting}
              isLoading={isDeleting}
              className="bg-destructive hover:bg-destructive/90 text-white text-xs"
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
    </div>
  );
};
