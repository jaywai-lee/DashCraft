"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserDropdown } from "./UserDropdown";
import { useCommandPaletteStore } from "@/features/command-palette/model/useCommandPaletteStore";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";
import { Calendar, LayoutGrid, Search } from "lucide-react";
import { ThemeToggle } from "@/shared/ui/theme-toggle/ThemeToggle";

interface AppHeaderProps {
  userEmail?: string;
  avatarUrl?: string;
  children?: React.ReactNode;
}

export const AppHeader = ({
  userEmail,
  avatarUrl,
  children,
}: AppHeaderProps) => {
  const pathname = usePathname();
  const toggleCommandPalette = useCommandPaletteStore((s) => s.toggle);

  const isDashboard = pathname.startsWith("/dashboard");
  const isCalendar = pathname.startsWith("/calendar");

  return (
    <header className="px-4 sm:px-6 h-16 flex items-center justify-between gap-4 border-b bg-background/80 backdrop-blur-md sticky top-0 z-[100] w-full">
      <div className="flex items-center gap-4 sm:gap-6">
        <Link href="/dashboard" className="flex items-center gap-2 shrink-0">
          <div className="p-1.5 bg-primary text-primary-foreground rounded-lg">
            <LayoutGrid className="w-4 h-4" />
          </div>
          <span className="font-extrabold text-base tracking-tight hidden sm:inline-block text-foreground">
            DashCraft
          </span>
        </Link>

        <nav className="flex items-center gap-1 bg-muted/50 p-1 rounded-xl border border-border/50">
          <Link href="/dashboard">
            <Button
              variant={isDashboard ? "primary" : "ghost"}
              size="sm"
              className={cn(
                "h-8 px-2.5 text-xs gap-1.5 rounded-lg",
                !isDashboard && "text-muted-foreground hover:text-foreground",
              )}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">대시보드</span>
            </Button>
          </Link>

          <Link href="/calendar">
            <Button
              variant={isCalendar ? "primary" : "ghost"}
              size="sm"
              className={cn(
                "h-8 px-2.5 text-xs gap-1.5 rounded-lg",
                !isCalendar && "text-muted-foreground hover:text-foreground",
              )}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">캘린더</span>
            </Button>
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-2">
        {children}

        <Button
          variant="outline"
          size="sm"
          onClick={toggleCommandPalette}
          className="h-9 px-2.5 text-xs gap-2 text-muted-foreground hidden md:flex items-center"
          title="빠른 명령 실행 (⌘K)"
        >
          <Search className="w-3.5 h-3.5" />
          <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-muted rounded border border-border">
            ⌘K
          </kbd>
        </Button>

        <ThemeToggle />

        <UserDropdown userEmail={userEmail} avatarUrl={avatarUrl} />
      </div>
    </header>
  );
};
