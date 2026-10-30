"use client";

import { createClient } from "@/shared/lib/client";
import React, { useState } from "react";
import { toast } from "sonner";

export const usePasswordChangeForm = () => {
  const supabase = createClient();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordChange = async (e: React.SubmitEvent) => {
    e.preventDefault();

    if (password.length < 8) {
      toast.error("비밀번호는 최소 8자 이상이어야 합니다.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    setIsLoading(true);
    const { error } = await supabase.auth.updateUser({
      password,
    });

    setIsLoading(false);

    if (error) {
      toast.error("비밀번호 변경 실패", { description: error.message });
      return;
    }

    toast.success("비밀번호가 성공적으로 변경되었습니다.");
    setPassword("");
    setConfirmPassword("");
  };

  return {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    isLoading,
    handlePasswordChange,
  };
};
