"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useMemoQuery, useUpsertMemoMutation } from "../api/useMemoQuery";
import { sanitizeMemoHtml } from "@/shared/lib/sanitize";
import { Loader2, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export interface MemoWidgetProps {
  widgetId: string;
  isExpanded?: boolean;
}

const MAX_INNER_HTML_LENGTH = 10000;

// 파라미터 구조 분해 할당에서 미사용 변수인 isExpanded 제거
export const MemoWidget = ({ widgetId }: MemoWidgetProps) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const { data: memoData, isLoading } = useMemoQuery(widgetId);
  const upsertMemoMutation = useUpsertMemoMutation(widgetId);

  const [contentLength, setContentLength] = useState(0);
  const lastSavedContentRef = useRef<string>("");
  const isFocusedRef = useRef(false);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (memoData && editorRef.current && !isFocusedRef.current) {
      const sanitized = sanitizeMemoHtml(memoData.content || "");
      if (editorRef.current.innerHTML !== sanitized) {
        editorRef.current.innerHTML = sanitized;
        lastSavedContentRef.current = sanitized;
        setContentLength(sanitized.length);
      }
    }
  }, [memoData]);

  const saveContent = useCallback(
    (currentHtml: string) => {
      const sanitized = sanitizeMemoHtml(currentHtml);
      if (sanitized === lastSavedContentRef.current) return;

      lastSavedContentRef.current = sanitized;
      upsertMemoMutation.mutate({ content: sanitized });
    },
    [upsertMemoMutation],
  );

  const handleInput = () => {
    if (!editorRef.current) return;

    const currentHtml = editorRef.current.innerHTML;

    if (currentHtml.length > MAX_INNER_HTML_LENGTH) {
      toast.warning("메모 용량 한도(10,000자)에 도달했습니다.");
      const truncated = currentHtml.slice(0, MAX_INNER_HTML_LENGTH);
      editorRef.current.innerHTML = truncated;
      setContentLength(truncated.length);
      return;
    }

    setContentLength(currentHtml.length);

    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = setTimeout(() => {
      saveContent(currentHtml);
    }, 800);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const pastedText =
      e.clipboardData.getData("text/html") ||
      e.clipboardData.getData("text/plain");
    const sanitizedPaste = sanitizeMemoHtml(pastedText);

    document.execCommand("insertHTML", false, sanitizedPaste);
    handleInput();
  };

  const handleBlur = () => {
    isFocusedRef.current = false;
    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    if (editorRef.current) {
      saveContent(editorRef.current.innerHTML);
    }
  };

  const handleFocus = () => {
    isFocusedRef.current = true;
  };

  const isNearLimit = contentLength > MAX_INNER_HTML_LENGTH * 0.85;

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
          {contentLength.toLocaleString()} /{" "}
          {MAX_INNER_HTML_LENGTH.toLocaleString()} 자
        </span>
        {upsertMemoMutation.isPending && (
          <span className="text-[10px] text-primary flex items-center gap-1">
            <Loader2 className="w-2.5 h-2.5 animate-spin" /> 저장 중...
          </span>
        )}
      </div>
    </div>
  );
};
