"use client";

import React from "react";
import { Modal } from "@/shared/ui/modal";
import { Button } from "@/shared/ui/button";
import { useDeleteAccount } from "../model/useDeleteAccount";
import { AlertTriangle, Trash2 } from "lucide-react";

interface DeleteAccountSectionProps {
  userEmail?: string;
}

export const DeleteAccountSection = ({
  userEmail,
}: DeleteAccountSectionProps) => {
  const {
    isOpen,
    inputEmail,
    setInputEmail,
    isLoading,
    openModal,
    closeModal,
    handleDeleteAccount,
  } = useDeleteAccount(userEmail);

  const isConfirmed = inputEmail === userEmail;

  return (
    <>
      <div className="bg-card border border-destructive/20 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs">
        <div className="flex items-center gap-2.5 pb-2 border-b border-border">
          <div className="p-2 bg-destructive/10 text-destructive rounded-xl">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-destructive">
              위험 영역 (Danger Zone)
            </h3>
            <p className="text-xs text-muted-foreground">
              계정 삭제 시 대시보드 레이아웃과 모든 위젯 데이터가 영구히
              파기됩니다.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 flex-wrap pt-1">
          <div className="space-y-0.5">
            <p className="text-xs font-semibold text-foreground">
              계정 영구 삭제
            </p>
            <p className="text-xs text-muted-foreground">
              삭제된 계정과 데이터는 복구할 수 없습니다.
            </p>
          </div>

          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={openModal}
            className="text-destructive hover:bg-destructive/10 border-destructive/30 text-xs h-9 gap-1.5"
          >
            <Trash2 className="w-4 h-4" />
            <span>계정 삭제</span>
          </Button>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="계정 영구 삭제 확인"
        description="정말로 계정을 삭제하시겠습니까? 삭제된 정보는 되돌릴 수 없습니다."
        footer={
          <div className="flex items-center justify-end gap-2 w-full">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={closeModal}
              disabled={isLoading}
            >
              취소
            </Button>
            <Button
              type="button"
              variant="primary"
              size="sm"
              onClick={handleDeleteAccount}
              isLoading={isLoading}
              disabled={!isConfirmed || isLoading}
              className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
            >
              영구 삭제 실행
            </Button>
          </div>
        }
      >
        <div className="space-y-3 pt-1">
          <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-xl text-xs text-destructive space-y-1">
            <p className="font-bold">⚠️ 경고</p>
            <p className="leading-relaxed">
              계정이 삭제되면 생성한 모든 위젯, 메모, 할 일 및 설정 내역이 즉시
              파기됩니다.
            </p>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-muted-foreground">
              확인을 위해 본인의 이메일 주소(
              <span className="text-foreground font-bold">{userEmail}</span>)를
              입력해 주세요.
            </label>
            <input
              type="email"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
              placeholder={userEmail}
              className="w-full px-3 py-2 text-xs bg-background border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-destructive"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
