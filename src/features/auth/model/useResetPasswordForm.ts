"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/shared/lib/client";
import { toast } from "sonner";

export const useResetPasswordForm = () => {
  const router = useRouter();
  const supabase = createClient();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (!isMounted) return;

      if (event === "PASSWORD_RECOVERY" || session?.user) {
        return;
      }

      if ((event === "INITIAL_SESSION" || event === "SIGNED_OUT") && !session) {
        toast.error("유효한 비밀번호 재설정 세션이 없습니다.", {
          description: "비밀번호 재설정 링크를 다시 요청해주세요.",
        });
        router.replace("/forgot-password");
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [supabase, router]);

  const handleResetPassword = async (e: React.SubmitEvent) => {
    e.preventDefault();

    if (password.length < 6) {
      toast.error("비밀번호는 최소 6자 이상이어야 합니다.");
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
    router.push("/dashboard");
  };

  return {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    isLoading,
    handleResetPassword,
  };
};
