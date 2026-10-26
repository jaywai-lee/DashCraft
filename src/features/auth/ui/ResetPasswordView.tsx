"use client";

import React from "react";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input/Input";
import { AuthCard } from "./AuthCard";
import { useResetPasswordForm } from "../model/useResetPasswordForm";
import { Lock } from "lucide-react";

export const ResetPasswordView = () => {
  const {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    isLoading,
    handleResetPassword,
  } = useResetPasswordForm();

  return (
    <AuthCard
      title="새 비밀번호 설정"
      subtitle="새롭게 사용할 비밀번호를 입력해주세요"
      footer={
        <p className="text-[11px] text-muted-foreground">
          DashCraft 비밀번호 변경
        </p>
      }
    >
      <form onSubmit={handleResetPassword} className="space-y-3.5">
        <Input
          label="새 비밀번호 (6자 이상)"
          type="password"
          required
          minLength={6}
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
          disabled={isLoading}
          isLoading={isLoading}
          className="w-full text-xs h-9"
        >
          비밀번호 변경 완료
        </Button>
      </form>
    </AuthCard>
  );
};
