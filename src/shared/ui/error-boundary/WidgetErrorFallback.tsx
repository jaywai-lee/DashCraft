"use client";

import React from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Button } from "@/shared/ui/button";

interface WidgetErrorFallbackProps {
  error?: Error | null;
  onReset: () => void;
}

export const WidgetErrorFallback = ({
  error,
  onReset,
}: WidgetErrorFallbackProps) => {
  return (
    <div className="w-full h-full min-h-[140px] flex flex-col items-center justify-center p-4 text-center space-y-3 bg-muted/20 rounded-xl border border-dashed border-border/80 animate-in fade-in duration-200">
      <div className="w-9 h-9 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0">
        <AlertTriangle className="w-5 h-5" />
      </div>

      <div className="space-y-1 max-w-[200px]">
        <h4 className="text-xs font-semibold text-foreground">
          위젯 불러오기 실패
        </h4>
        <p className="text-[11px] text-muted-foreground line-clamp-2 leading-tight">
          {error?.message || "일시적인 오류가 발생했습니다."}
        </p>
      </div>

      <Button
        type="button"
        size="sm"
        variant="outline"
        onClick={onReset}
        className="h-7 text-xs px-2.5 gap-1.5 cursor-pointer hover:bg-background"
      >
        <RotateCcw className="w-3 h-3" />
        <span>다시 시도</span>
      </Button>
    </div>
  );
};
