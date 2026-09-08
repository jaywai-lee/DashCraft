"use client";

import { cn } from "@/shared/lib/utils";

interface DashboardGridSkeletonProps {
  count?: number;
}

export const DashboardGridSkeleton = ({
  count = 3,
}: DashboardGridSkeletonProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 items-start w-full">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "relative flex flex-col w-full bg-card text-card-foreground rounded-xl border border-border/60 shadow-xs animate-pulse overflow-hidden",
            "h-auto min-h-[280px] sm:h-[280px]",
          )}
        >
          <div className="h-1 w-full bg-muted shrink-0" />

          <div className="flex items-center justify-between px-4 py-2 bg-muted/30 border-b border-border/40 h-11 shrink-0">
            <div className="h-4 w-24 bg-muted/80 rounded-md" />
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-md bg-muted/80" />
              <div className="w-6 h-6 rounded-md bg-muted/80" />
              <div className="w-6 h-6 rounded-md bg-muted/80" />
            </div>
          </div>

          <div className="flex-1 p-4 flex flex-col justify-between">
            <div className="w-full h-full bg-muted/20 rounded-lg" />
          </div>
        </div>
      ))}
    </div>
  );
};
