"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { AuthCard } from "./AuthCard";
import { TermsCheckbox } from "./TermsCheckbox";
import { TermsModal } from "./TermsModal";
import { useLoginForm } from "../model/useLoginForm";
import { Mail, Lock } from "lucide-react";
import { Input } from "@/shared/ui/input/Input";

export const LoginFormView = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    agreed,
    setAgreed,
    isLoading,
    modalType,
    setModalType,
    handleEmailLogin,
    handleGoogleLogin,
  } = useLoginForm();

  return (
    <>
      <AuthCard
        title="DashCraft 로그인"
        subtitle="워크스페이스에 접속하여 대시보드를 사용하세요"
        footer={
          <p className="text-[11px] text-muted-foreground">
            계정이 없으신가요?{" "}
            <Link
              href="/signup"
              className="text-primary font-semibold hover:underline"
            >
              회원가입
            </Link>
          </p>
        }
      >
        <form onSubmit={handleEmailLogin} className="space-y-3.5">
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
            label="비밀번호"
            type="password"
            required
            icon={Lock}
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            placeholder="••••••••"
          />

          <TermsCheckbox
            id="login-agree-terms"
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
            로그인
          </Button>
        </form>

        <div className="relative flex items-center justify-center border-t">
          <span className="bg-background px-2 text-[10px] text-muted-foreground absolute font-mono">
            OR
          </span>
        </div>

        <Button
          type="button"
          variant="outline"
          size="md"
          disabled={!agreed}
          onClick={handleGoogleLogin}
          className="w-full text-xs h-9 gap-2"
        >
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span>Google 계정으로 계속하기</span>
        </Button>
      </AuthCard>

      <TermsModal
        isOpen={modalType !== null}
        type={modalType}
        onClose={() => setModalType(null)}
      />
    </>
  );
};
