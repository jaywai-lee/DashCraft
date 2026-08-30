"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "../button";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-[72px] h-9 rounded-lg border bg-muted/40 animate-pulse shrink-0" />
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
};
