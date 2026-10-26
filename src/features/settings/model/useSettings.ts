"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { createClient } from "@/shared/lib/client";
import { toast } from "sonner";

export const useSettings = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const supabase = createClient();

  const [userEmail, setUserEmail] = useState<string>("");
  const [avatarUrl, setAvatarUrl] = useState<string | undefined>(undefined);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [confirmEmailInput, setConfirmEmailInput] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        if (user.email) setUserEmail(user.email);
        if (user.user_metadata?.avatar_url) {
          setAvatarUrl(user.user_metadata.avatar_url);
        }
      }
    };
    fetchUser();
  }, [supabase]);

  const handleDeleteAccount = async () => {
    if (confirmEmailInput !== userEmail) {
      toast.error("이메일 주소가 일치하지 않습니다.");
      return;
    }

    setIsDeleting(true);

    try {
      const response = await fetch("/api/account/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ confirmEmail: confirmEmailInput }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "계정 삭제에 실패했습니다.");
      }

      queryClient.clear();
      await supabase.auth.signOut();

      toast.success("계정이 성공적으로 삭제되었습니다.");
      router.push("/login");
      router.refresh();
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "계정 삭제 중 오류가 발생했습니다.";
      toast.error(message);
    } finally {
      setIsDeleting(false);
    }
  };

  const closeModal = () => {
    setIsDeleteModalOpen(false);
    setConfirmEmailInput("");
  };

  return {
    userEmail,
    avatarUrl,
    setAvatarUrl,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    confirmEmailInput,
    setConfirmEmailInput,
    isDeleting,
    handleDeleteAccount,
    closeModal,
  };
};
