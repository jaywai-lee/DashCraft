"use client";

import React from "react";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input/Input";
import { usePasswordChangeForm } from "../model/usePasswordChangeForm";
import { Lock, KeyRound } from "lucide-react";

export const PasswordChangeSection = () => {
  const {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    isLoading,
    handlePasswordChange,
  } = usePasswordChangeForm();

  return (
    <div className="bg-card border border-border rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs">
      <div className="flex items-center gap-2.5 pb-2 border-b border-border">
        <div className="p-2 bg-primary/10 text-primary rounded-xl">
          <KeyRound className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-foreground">비밀번호 변경</h3>
          <p className="text-xs text-muted-foreground">
            계정의 비밀번호를 새로 변경합니다.
          </p>
        </div>
      </div>

      <form
        onSubmit={handlePasswordChange}
        className="space-y-3.5 max-w-md pt-1"
      >
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
          size="sm"
          isLoading={isLoading}
          disabled={!password || !confirmPassword || isLoading}
          className="text-xs h-9 px-4"
        >
          비밀번호 변경 완료
        </Button>
      </form>
    </div>
  );
};
