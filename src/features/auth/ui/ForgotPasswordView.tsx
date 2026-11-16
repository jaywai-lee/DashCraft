"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input/Input";
import { AuthCard } from "./AuthCard";
import { useForgotPasswordForm } from "../model/useForgotPasswordForm";
import { Mail, CheckCircle2, ArrowLeft } from "lucide-react";

export const ForgotPasswordView = () => {
  const { email, setEmail, isLoading, isSent, handleResetRequest, resetForm } =
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
          <div className="space-y-1.5">
            <h3 className="text-sm font-bold text-foreground">
              재설정 안내 메일을 발송했습니다
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">{email}</span>{" "}
              계정이 등록되어 있다면 비밀번호 재설정 링크가 발송됩니다.
            </p>
            <p className="text-[11px] text-muted-foreground/80 leading-relaxed pt-1">
              메일이 도착하지 않는다면 스팸함을 확인하거나, 미가입 이메일 또는
              Google 소셜 로그인 전용 계정인지 확인해 주세요.
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={resetForm}
            className="w-full text-xs"
          >
            다른 이메일로 다시 시도
          </Button>
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
