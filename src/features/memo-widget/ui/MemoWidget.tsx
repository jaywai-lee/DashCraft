"use client";

import React from "react";
import { Loader2, AlertCircle } from "lucide-react";
import { useMemoEditor } from "../model/useMemoEditor";
import { HighlightPicker } from "@/shared/ui/highlight-picker/HighlightPicker";
import { cn } from "@/shared/lib/utils";

export interface MemoWidgetProps {
  widgetId: string;
  isExpanded?: boolean;
}

export const MemoWidget = ({
  widgetId,
  isExpanded = false,
}: MemoWidgetProps) => {
  const {
    editorRef,
    contentLength,
    isLoading,
    isSaving,
    maxLimit,
    currentHighlight,
    handleSelectHighlightColor,
    exitHighlightOnKey,
    handleInput,
    handlePaste,
    handleBlur,
    handleFocus,
  } = useMemoEditor(widgetId);

  const isNearLimit = contentLength > maxLimit * 0.85;

  if (isLoading) {
    return (
      <div className="w-full h-full min-h-[140px] flex items-center justify-center text-muted-foreground">
        <Loader2 className="w-5 h-5 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col w-full h-full pt-2 px-3 pb-2 gap-1 transition-all duration-200 relative group",
        isExpanded ? "min-h-[320px]" : "min-h-[180px]",
      )}
    >
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        onPaste={handlePaste}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={exitHighlightOnKey}
        data-placeholder="자유롭게 메모를 작성하고 드래그하여 형광펜을 칠해보세요"
        className="flex-1 w-full text-xs leading-relaxed text-foreground focus:outline-none overflow-y-auto scrollbar-thin scrollbar-thumb-muted-foreground/20 empty:before:content-[attr(data-placeholder)] empty:before:text-muted-foreground/60 empty:before:pointer-events-none"
      />

      <div className="flex items-center justify-between text-[10px] text-muted-foreground border-t border-border/40 pt-1.5 px-0.5 mt-auto shrink-0">
        <HighlightPicker
          selectedColor={currentHighlight}
          onSelectColor={handleSelectHighlightColor}
          size="sm"
        />

        <div className="flex items-center gap-2">
          {isSaving && (
            <span className="text-[10px] text-primary flex items-center gap-1">
              <Loader2 className="w-2.5 h-2.5 animate-spin" /> 저장 중...
            </span>
          )}
          <span
            className={
              isNearLimit
                ? "text-amber-500 font-semibold flex items-center gap-1"
                : ""
            }
          >
            {isNearLimit && <AlertCircle className="w-3 h-3 text-amber-500" />}
            {contentLength.toLocaleString()} / {maxLimit.toLocaleString()} 자
          </span>
        </div>
      </div>
    </div>
  );
};
