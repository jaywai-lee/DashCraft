"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, Calendar, Command } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { UserDropdown } from "./UserDropdown";
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

  const navItems = [
    {
      href: "/dashboard",
      label: "대시보드",
      icon: LayoutGrid,
      isActive: pathname === "/dashboard",
    },
    {
      href: "/calendar",
      label: "캘린더",
      icon: Calendar,
      isActive: pathname.startsWith("/calendar"),
    },
  ];

  const handleOpenCommandPalette = () => {
    const event = new KeyboardEvent("keydown", {
      key: "k",
      metaKey: true,
      bubbles: true,
    });
    document.dispatchEvent(event);
  };

  return (
    <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-[100] w-full">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-2 sm:gap-6">
          <Link
            href="/dashboard"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-90 shrink-0"
          >
            <div className="p-2 bg-primary text-primary-foreground rounded-xl shadow-xs">
              <LayoutGrid className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-lg tracking-tight text-foreground hidden sm:inline-block">
              DashCraft
            </span>
          </Link>

          <nav className="flex items-center gap-1 bg-muted/50 p-1 rounded-xl border">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg text-xs font-semibold transition-all select-none",
                    item.isActive
                      ? "bg-background text-foreground shadow-xs"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/50",
                  )}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={handleOpenCommandPalette}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl border bg-muted/30 text-xs text-muted-foreground hover:text-foreground hover:bg-accent transition-colors select-none"
            aria-label="빠른 명령 실행"
          >
            <Command className="w-3.5 h-3.5" />
            <span>검색...</span>
            <kbd className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono font-medium text-muted-foreground bg-background border rounded shadow-2xs">
              ⌘K
            </kbd>
          </button>

          {children}

          <ThemeToggle />
          <UserDropdown userEmail={userEmail} avatarUrl={avatarUrl} />
        </div>
      </div>
    </header>
  );
};
