"use client";

import { useState } from "react";
import { toast } from "sonner";
import { createClient } from "@/shared/lib/client";

export const useDeleteAccount = (userEmail?: string) => {
  const supabase = createClient();

  const [isOpen, setIsOpen] = useState(false);
  const [inputEmail, setInputEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setInputEmail("");
  };

  const handleDeleteAccount = async () => {
    const trimmedInput = inputEmail.trim().toLowerCase();
    const trimmedUserEmail = (userEmail ?? "").trim().toLowerCase();

    if (!trimmedUserEmail || trimmedInput !== trimmedUserEmail) {
      toast.error("이메일 주소가 일치하지 않습니다.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/account/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          confirmEmail: trimmedInput,
        }),
      });

      const data = (await res.json()) as { error?: string; success?: boolean };

      if (!res.ok || data.error) {
        throw new Error(data.error || "계정 삭제에 실패했습니다.");
      }

      await supabase.auth.signOut();
      toast.success("계정이 성공적으로 삭제되었습니다.");
      closeModal();

      window.location.href = "/login";
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "계정 삭제 중 오류가 발생했습니다.";
      toast.error("계정 삭제 실패", { description: message });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isOpen,
    inputEmail,
    setInputEmail,
    isLoading,
    openModal,
    closeModal,
    handleDeleteAccount,
  };
};
