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

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChangingPassword, setIsChangingPassword] = useState(false);

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

  const handleChangePassword = async (e: React.SubmitEvent) => {
    e.preventDefault();

    if (newPassword.length < 6) {
      toast.error("비밀번호는 최소 6자 이상이어야 합니다.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("새 비밀번호가 일치하지 않습니다.");
      return;
    }

    setIsChangingPassword(true);
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    setIsChangingPassword(false);

    if (error) {
      toast.error("비밀번호 변경 실패", { description: error.message });
      return;
    }

    toast.success("비밀번호가 성공적으로 변경되었습니다.");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleDeleteAccount = async () => {
    const isEmailMatching =
      confirmEmailInput.trim().toLowerCase() === userEmail.trim().toLowerCase();

    if (!isEmailMatching) {
      toast.error("이메일 주소가 일치하지 않습니다.");
      return;
    }

    setIsDeleting(true);
    try {
      const response = await fetch("/api/account/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          confirmEmail: confirmEmailInput.trim().toLowerCase(),
        }),
      });

      const result = await response.json();
      if (!response.ok)
        throw new Error(result.error || "계정 삭제에 실패했습니다.");

      queryClient.clear();
      await supabase.auth.signOut();
      toast.success("계정이 성공적으로 삭제되었습니다.");
      router.push("/login");
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
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    isChangingPassword,
    handleChangePassword,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    confirmEmailInput,
    setConfirmEmailInput,
    isDeleting,
    handleDeleteAccount,
    closeModal,
  };
};
