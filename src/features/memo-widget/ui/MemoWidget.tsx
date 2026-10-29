"use client";

import React from "react";
import { Loader2, AlertCircle } from "lucide-react";
import { useMemoEditor } from "@/features/profile/model/useMemoEditor";

export interface MemoWidgetProps {
  widgetId: string;
  isExpanded?: boolean;
}

export const MemoWidget = ({ widgetId }: MemoWidgetProps) => {
  const {
    editorRef,
    contentLength,
    isLoading,
    isSaving,
    maxLimit,
    handleInput,
    handlePaste,
    handleBlur,
    handleFocus,
  } = useMemoEditor(widgetId);

  const isNearLimit = contentLength > maxLimit * 0.85;

  if (isLoading) {
    return (
      <div className="w-full h-full min-h-[140px] flex items-center justify-center text-muted-foreground">
        <Loader2 className="w-5 h-5 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full w-full relative group">
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        onPaste={handlePaste}
        onBlur={handleBlur}
        onFocus={handleFocus}
        data-placeholder="메모를 입력하세요..."
        className="flex-1 w-full p-3 text-xs leading-relaxed focus:outline-none overflow-y-auto empty:before:content-[attr(data-placeholder)] empty:before:text-muted-foreground/60 empty:before:pointer-events-none"
      />

      <div className="px-3 py-1 text-[10px] flex items-center justify-between text-muted-foreground border-t border-border/40 bg-muted/10">
        <span
          className={
            isNearLimit
              ? "text-amber-500 font-semibold flex items-center gap-1"
              : ""
          }
        >
          {isNearLimit && <AlertCircle className="w-3 h-3" />}
          {contentLength.toLocaleString()} / {maxLimit.toLocaleString()} 자
        </span>
        {isSaving && (
          <span className="text-[10px] text-primary flex items-center gap-1">
            <Loader2 className="w-2.5 h-2.5 animate-spin" /> 저장 중...
          </span>
        )}
      </div>
    </div>
  );
};
