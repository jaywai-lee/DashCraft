import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BrandLogo } from "@/shared/ui/brand-logo/BrandLogo";

export const LandingHeader = () => {
  return (
    <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50 select-none w-full">
      <div className="max-w-6xl mx-auto px-6 gap-10 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center hover:opacity-90 transition-opacity"
          aria-label="DashCraft 홈"
        >
          <BrandLogo variant="full" size="md" priority />
        </Link>
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
