"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { createClient } from "@/shared/lib/client";

export const useLoginForm = () => {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [modalType, setModalType] = useState<"terms" | "privacy" | null>(null);

  const handleEmailLogin = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error("로그인에 실패했습니다.", {
        description: "이메일 또는 비밀번호를 다시 확인해주세요.",
      });
      setIsLoading(false);
      return;
    }

    toast.success("로그인되었습니다.");
    router.push("/dashboard");
    router.refresh();
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      toast.error("Google 로그인 중 오류가 발생했습니다.");
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    modalType,
    setModalType,
    handleEmailLogin,
    handleGoogleLogin,
  };
};
