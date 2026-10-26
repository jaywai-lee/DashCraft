"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input/Input";
import { AuthCard } from "./AuthCard";
import { useForgotPasswordForm } from "../model/useForgotPasswordForm";
import { Mail, CheckCircle2, ArrowLeft } from "lucide-react";

export const ForgotPasswordView = () => {
  const { email, setEmail, isLoading, isSent, handleResetRequest } =
    useForgotPasswordForm();

  return (
    <AuthCard
      title="비밀번호 재설정"
      subtitle="가입 시 등록한 이메일로 재설정 링크를 보내드립니다"
      footer={
        <Link
          href="/login"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>로그인 화면으로 돌아가기</span>
        </Link>
      }
    >
      {isSent ? (
        <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center space-y-3">
          <CheckCircle2 className="w-8 h-8 text-primary mx-auto shrink-0" />
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-foreground">
              재설정 메일이 발송되었습니다
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">{email}</span>{" "}
              주소로 전송된 비밀번호 재설정 링크를 확인해주세요.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleResetRequest} className="space-y-3.5">
          <Input
            label="이메일"
            type="email"
            required
            icon={Mail}
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            placeholder="name@example.com"
          />

          <Button
            type="submit"
            variant="primary"
            size="md"
            disabled={isLoading}
            isLoading={isLoading}
            className="w-full text-xs h-9"
          >
            재설정 링크 발송
          </Button>
        </form>
      )}
    </AuthCard>
  );
};
