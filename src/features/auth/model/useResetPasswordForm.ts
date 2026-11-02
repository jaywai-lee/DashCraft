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

  useEffect(() => {
    let isMounted = true;
    let isRecovery = false;

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (!isMounted) return;

      if (event === "PASSWORD_RECOVERY") {
        isRecovery = true;
        return;
      }

      if (event === "INITIAL_SESSION" || event === "SIGNED_IN") {
        if (!isRecovery) {
          toast.error("유효한 비밀번호 재설정 세션이 없습니다.", {
            description: "비밀번호 재설정 링크를 다시 요청해 주세요.",
          });

          if (session?.user) {
            router.replace("/settings");
          } else {
            router.replace("/forgot-password");
          }
        }
      } else if (event === "SIGNED_OUT" && !isRecovery) {
        toast.error("유효한 비밀번호 재설정 세션이 없습니다.", {
          description: "비밀번호 재설정 링크를 다시 요청해 주세요.",
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
    router.push("/login");
    router.refresh();
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
