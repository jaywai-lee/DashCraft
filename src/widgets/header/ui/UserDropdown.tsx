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

export const UserDropdown = ({ userEmail, avatarUrl }: UserDropdownProps) => {
  const queryClient = useQueryClient();
  const supabase = createClient();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
        className="flex items-center gap-2 p-1.5 md:p-2 rounded-full hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
        aria-expanded={isOpen}
        aria-label="사용자 메뉴"
      >
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center overflow-hidden shrink-0 shadow-xs">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt="프로필 이미지"
              className="w-full h-full object-cover"
            />
          ) : (
            <User className="w-4 h-4 md:w-5 md:h-5 text-primary" />
          )}
        </div>
        <ChevronDown className="w-4 h-4 text-muted-foreground" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 md:w-72 bg-popover border rounded-2xl shadow-2xl p-2 z-[100] animate-in fade-in-80 zoom-in-95">
          <div className="px-3.5 py-3 border-b mb-1 space-y-0.5">
            <p className="text-[11px] md:text-xs text-muted-foreground font-medium">
              로그인 계정
            </p>
            <p className="text-xs md:text-sm font-bold text-foreground truncate">
              {userEmail || "사용자"}
            </p>
          </div>

          <Link
            href="/settings"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-3.5 py-2.5 md:px-4 md:py-3 text-xs md:text-sm font-semibold rounded-xl hover:bg-accent text-foreground transition-colors"
          >
            <Settings className="w-4 h-4 md:w-4.5 md:h-4.5 text-muted-foreground" />
            <span>설정</span>
          </Link>

          <button
            type="button"
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 md:px-4 md:py-3 text-xs md:text-sm font-semibold rounded-xl hover:bg-destructive/10 text-destructive transition-colors text-left"
          >
            <LogOut className="w-4 h-4 md:w-4.5 md:h-4.5" />
            <span>로그아웃</span>
          </button>
        </div>
      )}
    </div>
  );
};
