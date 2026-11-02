"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/shared/lib/client";
import { getAvatarPublicUrl } from "@/shared/lib/avatar";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "@/shared/ui/dropdown/Dropdown";
import { Button } from "@/shared/ui/button";
import { User, Settings, LogOut, ChevronDown } from "lucide-react";
import { toast } from "sonner";

interface UserDropdownProps {
  userEmail?: string;
  avatarUrl?: string;
}

export const UserDropdown = ({
  userEmail: initialEmail,
  avatarUrl: initialAvatarUrl,
}: UserDropdownProps) => {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState<string | undefined>(initialEmail);
  const [avatarUrl, setAvatarUrl] = useState<string | undefined>(
    initialAvatarUrl,
  );

  useEffect(() => {
    let isMounted = true;

    const syncUserInfo = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (isMounted && user) {
        if (!initialEmail && user.email) {
          setEmail(user.email);
        }
        const computedUrl = getAvatarPublicUrl(user.user_metadata);
        setAvatarUrl(computedUrl);
      }
    };

    void syncUserInfo();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (isMounted) {
        if (session?.user) {
          setEmail(session.user.email);
          const computedUrl = getAvatarPublicUrl(session.user.user_metadata);
          setAvatarUrl(computedUrl);
        } else {
          setEmail(undefined);
          setAvatarUrl(undefined);
        }
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [supabase, initialEmail]);

  useEffect(() => {
    if (initialEmail !== undefined) setEmail(initialEmail);
    if (initialAvatarUrl !== undefined) setAvatarUrl(initialAvatarUrl);
  }, [initialEmail, initialAvatarUrl]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("로그아웃 실패", { description: error.message });
      return;
    }
    toast.success("로그아웃되었습니다.");
    router.push("/login");
    router.refresh();
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="ghost"
          size="sm"
          className="h-9 px-2 gap-2 hover:bg-accent rounded-xl cursor-pointer"
        >
          <div className="w-6 h-6 rounded-full overflow-hidden bg-muted border border-border flex items-center justify-center shrink-0">
            {avatarUrl ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={avatarUrl}
                alt="프로필"
                className="w-full h-full object-cover"
              />
            ) : (
              <User className="w-3.5 h-3.5 text-muted-foreground" />
            )}
          </div>
          <span className="text-xs font-semibold text-foreground max-w-[100px] truncate hidden md:inline-block">
            {email?.split("@")[0] || "계정"}
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
        </Button>
      </DropdownTrigger>

      <DropdownContent align="right" className="w-48">
        <div className="px-3 py-2 border-b border-border/50">
          <p className="text-xs font-semibold text-foreground truncate">
            {email || "사용자 계정"}
          </p>
        </div>

        <DropdownItem onClick={() => router.push("/settings")}>
          <Settings className="w-4 h-4 text-muted-foreground" />
          <span>계정 설정</span>
        </DropdownItem>

        <DropdownItem
          onClick={handleLogout}
          className="text-destructive focus:text-destructive cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
          <span>로그아웃</span>
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
};
