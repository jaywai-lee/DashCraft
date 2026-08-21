import { CheckCircle2 } from "lucide-react";

export const LandingPreview = () => {
  return (
    <div className="w-full max-w-4xl pb-16">
      <div className="p-3 bg-muted/40 rounded-2xl border shadow-2xl backdrop-blur-sm">
        <div className="rounded-xl border bg-card p-6 shadow-sm space-y-4 text-left">
          <div className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="text-xs text-muted-foreground ml-2 font-mono">
                DashCraft Preview
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 border rounded-xl bg-background space-y-3 shadow-xs">
              <div className="flex justify-between items-center text-xs font-semibold border-b pb-2">
                <span>오늘의 공부 목표</span>
                <span className="text-primary">50%</span>
              </div>
              <div className="space-y-1.5 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  <span className="line-through">TypeScript 복습</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full border" />
                  <span>Next.js App Router 학습</span>
                </div>
              </div>
            </div>

            <div className="p-4 border rounded-xl bg-background space-y-3 shadow-xs">
              <div className="flex justify-between items-center text-xs font-semibold border-b pb-2">
                <span>장보기 리스트</span>
                <span className="text-primary">0%</span>
              </div>
              <div className="space-y-1.5 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full border" />
                  <span>우유, 계란, 사과</span>
                </div>
              </div>
            </div>

            <div className="p-4 border rounded-xl bg-background/50 border-dashed flex items-center justify-center text-xs text-muted-foreground min-h-[100px]">
              + 자유롭게 위젯 추가
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
