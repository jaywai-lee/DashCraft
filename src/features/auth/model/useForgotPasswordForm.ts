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
    setIsLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/reset-password`,
    });

    setIsLoading(false);

    if (error) {
      toast.error("비밀번호 재설정 요청 실패", { description: error.message });
      return;
    }

    setIsSent(true);
    toast.success("재설정 링크가 이메일로 발송되었습니다.");
  };

  return {
    email,
    setEmail,
    isLoading,
    isSent,
    handleResetRequest,
  };
};
