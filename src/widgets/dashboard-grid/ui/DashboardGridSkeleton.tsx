"use client";

export const DashboardGridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 items-start w-full">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="h-[320px] rounded-2xl bg-card border border-border/60 p-4 flex flex-col justify-between animate-pulse shadow-2xs"
        >
          <div className="flex items-center justify-between border-b pb-3 border-border/40">
            <div className="h-4 w-24 bg-muted/60 rounded-md" />
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-md bg-muted/60" />
              <div className="w-5 h-5 rounded-md bg-muted/60" />
            </div>
          </div>
          <div className="flex-1 my-3 bg-muted/30 rounded-xl" />
        </div>
      ))}
    </div>
  );
};
