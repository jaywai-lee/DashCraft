"use client";

import { useTheme } from "next-themes";
import { memo, useEffect, useState } from "react";
import { Button } from "../button";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = memo(() => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="md"
        className="w-9 h-9 p-0 rounded-lg opacity-50 pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-4 h-4 rounded-full bg-muted-foreground/30 animate-pulse" />
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      variant="outline"
      size="md"
      className="w-9 h-9 p-0 rounded-lg transition-transform active:scale-95"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 transition-all" />
      ) : (
        <Moon className="w-4 h-4 text-slate-700 transition-all" />
      )}
    </Button>
  );
});

ThemeToggle.displayName = "ThemeToggle";
