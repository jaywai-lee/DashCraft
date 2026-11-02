"use client";

import React from "react";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input/Input";
import { AuthCard } from "./AuthCard";
import { useResetPasswordForm } from "../model/useResetPasswordForm";
import { Lock, Loader2 } from "lucide-react";

export const ResetPasswordView = () => {
  const {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    isLoading,
    isCheckingSession,
    handleResetPassword,
  } = useResetPasswordForm();

  if (isCheckingSession) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <AuthCard
      title="새 비밀번호 설정"
      subtitle="새롭게 사용할 비밀번호를 입력해주세요"
      footer={
        <p className="text-[11px] text-muted-foreground">비밀번호 변경</p>
      }
    >
      <form onSubmit={handleResetPassword} className="space-y-3.5">
        <Input
          label="새 비밀번호 (8자 이상)"
          type="password"
          required
          minLength={8}
          icon={Lock}
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          placeholder="••••••••"
        />

        <Input
          label="새 비밀번호 확인"
          type="password"
          required
          minLength={8}
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
          disabled={isLoading}
          isLoading={isLoading}
          className="w-full text-xs h-9 cursor-pointer"
        >
          변경하기
        </Button>
      </form>
    </AuthCard>
  );
};
