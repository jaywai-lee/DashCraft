"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { AuthCard } from "./AuthCard";
import { TermsCheckbox } from "./TermsCheckbox";
import { TermsModal } from "./TermsModal";
import { useSignupForm } from "../model/useSignupForm";
import { Mail, Lock, CheckCircle2 } from "lucide-react";
import { Input } from "@/shared/ui/input/Input";

export const SignupFormView = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    agreed,
    setAgreed,
    isLoading,
    isSent,
    modalType,
    setModalType,
    handleSignup,
  } = useSignupForm();

  return (
    <>
      <AuthCard
        title="DashCraft 회원가입"
        subtitle="나만의 맞춤형 위젯 대시보드를 생성해보세요"
        footer={
          <p className="text-[11px] text-muted-foreground">
            이미 계정이 있으신가요?{" "}
            <Link
              href="/login"
              className="text-primary font-semibold hover:underline"
            >
              로그인
            </Link>
          </p>
        }
      >
        {isSent ? (
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center space-y-3">
            <CheckCircle2 className="w-8 h-8 text-primary mx-auto shrink-0" />
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-foreground">
                인증 메일이 발송되었습니다
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">{email}</span>{" "}
                주소로 전송된 인증 링크를 클릭하면 가입이 완료됩니다.
              </p>
            </div>
            <Link href="/login" className="block pt-1">
              <Button variant="outline" size="sm" className="w-full text-xs">
                로그인 화면으로 이동
              </Button>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSignup} className="space-y-3.5">
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

            <Input
              label="비밀번호 (8자 이상)"
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

            <TermsCheckbox
              id="signup-agree-terms"
              checked={agreed}
              onChange={setAgreed}
              onOpenTerms={() => setModalType("terms")}
              onOpenPrivacy={() => setModalType("privacy")}
            />

            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={!agreed || isLoading}
              isLoading={isLoading}
              className="w-full text-xs h-9"
            >
              회원가입 신청
            </Button>
          </form>
        )}
      </AuthCard>

      <TermsModal
        isOpen={modalType !== null}
        type={modalType}
        onClose={() => setModalType(null)}
      />
    </>
  );
};
