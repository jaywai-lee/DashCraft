"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { createClient } from "@/shared/lib/client";

export const useForgotPasswordForm = () => {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleResetRequest = async (e: React.SubmitEvent) => {
    e.preventDefault();
    const normalizedEmail = email.trim();
    if (!normalizedEmail) return;

    setIsLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(
      normalizedEmail,
      {
        redirectTo: `${window.location.origin}/auth/callback?next=/reset-password`,
      },
    );

    setIsLoading(false);

    if (error) {
      const isRateLimit =
        error.status === 429 ||
        error.message.toLowerCase().includes("rate limit");

      toast.error("비밀번호 재설정 요청 실패", {
        description: isRateLimit
          ? "요청 횟수가 너무 많습니다. 잠시 후 다시 시도해 주세요."
          : error.message,
      });
      return;
    }

    setEmail(normalizedEmail);
    setIsSent(true);
    toast.success("재설정 안내 메일 발송 요청이 접수되었습니다.");
  };

  const resetForm = () => {
    setIsSent(false);
  };

  return {
    email,
    setEmail,
    isLoading,
    isSent,
    handleResetRequest,
    resetForm,
  };
};
