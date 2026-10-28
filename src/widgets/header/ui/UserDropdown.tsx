"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "@/shared/ui/dropdown/Dropdown";
import { Button } from "@/shared/ui/button";
import { toast } from "sonner";
import { User, Settings, LogOut, ChevronDown } from "lucide-react";
import { createClient } from "@/shared/lib/client";

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
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user && isMounted) {
        setEmail(user.email);
        setAvatarUrl(user.user_metadata?.avatar_url as string | undefined);
        setImageError(false);
      }
    };

    void fetchUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (!isMounted) return;

      if (session?.user) {
        setEmail(session.user.email);
        setAvatarUrl(
          session.user.user_metadata?.avatar_url as string | undefined,
        );
        setImageError(false);
      } else {
        setEmail(undefined);
        setAvatarUrl(undefined);
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [supabase]);

  useEffect(() => {
    if (initialEmail !== undefined) setEmail(initialEmail);
    if (initialAvatarUrl !== undefined) {
      setAvatarUrl(initialAvatarUrl);
      setImageError(false);
    }
  }, [initialEmail, initialAvatarUrl]);

  const handleSignOut = async () => {
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
          className="gap-2 px-2 h-9 text-xs font-medium hover:bg-accent rounded-full sm:rounded-lg cursor-pointer"
        >
          <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center overflow-hidden shrink-0 shadow-2xs">
            {avatarUrl && !imageError ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={avatarUrl}
                alt="User Avatar"
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <User className="w-3.5 h-3.5 text-primary" />
            )}
          </div>

          <span className="hidden sm:inline-block max-w-[120px] truncate text-foreground font-semibold">
            {email ? email.split("@")[0] : "사용자"}
          </span>

          <ChevronDown className="w-3.5 h-3.5 text-muted-foreground hidden sm:block" />
        </Button>
      </DropdownTrigger>

      <DropdownContent align="right" className="w-48">
        <div className="px-3 py-2 border-b space-y-0.5">
          <p className="text-[10px] text-muted-foreground font-medium">
            로그인 계정
          </p>
          <p className="text-xs font-bold text-foreground truncate">
            {email ?? "계정 정보 없음"}
          </p>
        </div>

        <DropdownItem onClick={() => router.push("/settings")}>
          <Settings className="w-4 h-4 text-muted-foreground shrink-0" />
          <span>계정 설정</span>
        </DropdownItem>

        <DropdownItem
          onClick={handleSignOut}
          className="text-destructive focus:text-destructive cursor-pointer"
        >
          <LogOut className="w-4 h-4 text-destructive shrink-0" />
          <span>로그아웃</span>
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
};
