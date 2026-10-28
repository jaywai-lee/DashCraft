"use client";

import { useState, useEffect, useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { createClient } from "@/shared/lib/client";
import { getAvatarPublicUrl } from "@/shared/lib/avatar";
import { toast } from "sonner";

export const useSettings = () => {
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

  const refreshUser = useCallback(async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      if (user.email) setUserEmail(user.email);
      setAvatarUrl(getAvatarPublicUrl(user.user_metadata));
    }
  }, [supabase]);

  useEffect(() => {
    void refreshUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        if (session.user.email) setUserEmail(session.user.email);
        setAvatarUrl(getAvatarPublicUrl(session.user.user_metadata));
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase, refreshUser]);

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
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });
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
      window.location.href = "/login";
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
    refreshUser,
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
