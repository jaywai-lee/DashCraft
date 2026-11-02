"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { createClient } from "@/shared/lib/client";

export const useResetPasswordForm = () => {
  const router = useRouter();
  const supabase = createClient();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckingSession, setIsCheckingSession] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!isMounted) return;

      if (!session) {
        toast.error("유효한 비밀번호 재설정 세션이 없습니다.", {
          description: "비밀번호 재설정 링크를 다시 요청해 주세요.",
        });
        router.replace("/forgot-password");
      } else {
        setIsCheckingSession(false);
      }
    };

    void checkSession();

    return () => {
      isMounted = false;
    };
  }, [supabase, router]);

  const handleResetPassword = async (e: React.SubmitEvent) => {
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

    if (error) {
      setIsLoading(false);
      toast.error("비밀번호 변경 실패", { description: error.message });
      return;
    }

    toast.success(
      "비밀번호가 성공적으로 변경되었습니다. 다시 로그인해 주세요.",
    );
    await supabase.auth.signOut();
    setIsLoading(false);
    router.push("/login");
    router.refresh();
  };

  return {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    isLoading,
    isCheckingSession,
    handleResetPassword,
  };
};
