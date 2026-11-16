"use client";

import { createClient } from "@/shared/lib/client";
import React, { useState } from "react";
import { toast } from "sonner";

export const useSignupForm = () => {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [modalType, setModalType] = useState<"terms" | "privacy" | null>(null);

  const handleSignup = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!agreed) return;

    if (password.length < 8) {
      toast.error("비밀번호는 최소 8자 이상이어야 합니다.");
      return;
    }

    const normalizedEmail = email.trim();
    setIsLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email: normalizedEmail,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    setIsLoading(false);

    if (error) {
      toast.error("회원가입 실패", { description: error.message });
      return;
    }

    const isAlreadyRegistered =
      Boolean(data?.user) &&
      Array.isArray(data.user?.identities) &&
      data.user.identities.length === 0;

    if (isAlreadyRegistered) {
      toast.error("이미 가입된 이메일입니다.", {
        description:
          "해당 이메일로 로그인하거나 비밀번호 찾기를 이용해 주세요.",
      });
      return;
    }

    setIsSent(true);
  };

  return {
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
  };
};
