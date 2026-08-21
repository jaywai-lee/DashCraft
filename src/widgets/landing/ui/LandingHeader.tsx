import { ArrowRight, LayoutGrid } from "lucide-react";
import Link from "next/link";

export const LandingHeader = () => {
  return (
    <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 gap-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-primary text-primary-foreground rounded-lg">
            <LayoutGrid className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg tracking-tight">DashCraft</span>
        </div>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
        >
          대시보드 시작하기
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </header>
  );
};
