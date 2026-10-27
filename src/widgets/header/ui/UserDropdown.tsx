"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useQueryClient } from "@tanstack/react-query";
import { createClient } from "@/shared/lib/client";
import { toast } from "sonner";
import { User, Settings, LogOut, ChevronDown } from "lucide-react";

interface UserDropdownProps {
  userEmail?: string;
  avatarUrl?: string;
}

export const UserDropdown = ({
  userEmail: initialEmail,
  avatarUrl,
}: UserDropdownProps) => {
  const queryClient = useQueryClient();
  const supabase = createClient();

  const [email, setEmail] = useState<string | null>(initialEmail || null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 로그인된 실제 유저 이메일 자동 조회
  useEffect(() => {
    if (initialEmail) {
      setEmail(initialEmail);
      return;
    }

    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user?.email) {
        setEmail(user.email);
      }
    };

    fetchUser();
  }, [initialEmail, supabase]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    queryClient.clear();
    toast.success("로그아웃되었습니다.");
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <div className="relative z-[100]" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1.5 p-1 rounded-full hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
        aria-expanded={isOpen}
        aria-label="사용자 메뉴"
      >
        <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center overflow-hidden shrink-0 shadow-2xs">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt="프로필 이미지"
              className="w-full h-full object-cover"
            />
          ) : (
            <User className="w-4 h-4 text-primary" />
          )}
        </div>
        <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 bg-popover border rounded-xl shadow-xl p-1.5 z-[100] animate-in fade-in-80 zoom-in-95">
          <div className="px-3 py-2 border-b mb-1 space-y-0.5">
            <p className="text-[10px] text-muted-foreground font-medium">
              로그인 계정
            </p>
            <p className="text-xs font-bold text-foreground truncate">
              {email || "사용자"}
            </p>
          </div>

          <Link
            href="/settings"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold rounded-lg hover:bg-accent text-foreground transition-colors"
          >
            <Settings className="w-3.5 h-3.5 text-muted-foreground" />
            <span>설정</span>
          </Link>

          <button
            type="button"
            onClick={handleSignOut}
            className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold rounded-lg hover:bg-destructive/10 text-destructive transition-colors text-left cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>로그아웃</span>
          </button>
        </div>
      )}
    </div>
  );
};
