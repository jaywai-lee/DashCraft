"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { sanitizeMemoHtml } from "@/shared/lib/sanitize";
import { toast } from "sonner";
import {
  useMemoQuery,
  useUpsertMemoMutation,
} from "@/features/memo-widget/api/useMemoQuery";
import { MemoRow } from "@/features/memo-widget/api/memoRepository";
import { flushMemoKeepalive } from "@/features/memo-widget/api/memoKeepalive";

const MAX_INNER_HTML_LENGTH = 10000;

export const useMemoEditor = (widgetId: string) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const { data: memoData, isLoading } = useMemoQuery(widgetId);
  const upsertMemoMutation = useUpsertMemoMutation(widgetId);

  const [contentLength, setContentLength] = useState(0);
  const lastSavedContentRef = useRef<string>("");
  const currentHighlightRef = useRef<MemoRow["highlight"]>("none");
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
      currentHighlightRef.current = memoData.highlight || "none";
    }
  }, [memoData]);

  const saveContent = useCallback(
    (currentHtml: string) => {
      const sanitized = sanitizeMemoHtml(currentHtml);
      if (sanitized === lastSavedContentRef.current) return;

      upsertMemoMutation.mutate(
        { content: sanitized, highlight: currentHighlightRef.current },
        {
          onSuccess: () => {
            lastSavedContentRef.current = sanitized;
          },
        },
      );
    },
    [upsertMemoMutation],
  );

  const flushCurrentContent = useCallback(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = null;
    }
    if (editorRef.current) {
      const currentHtml = editorRef.current.innerHTML;
      const sanitized = sanitizeMemoHtml(currentHtml);
      if (sanitized !== lastSavedContentRef.current) {
        flushMemoKeepalive(
          widgetId,
          sanitized,
          currentHighlightRef.current ?? "none",
        );
        lastSavedContentRef.current = sanitized;
      }
    }
  }, [widgetId]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        flushCurrentContent();
      }
    };

    window.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", flushCurrentContent);

    return () => {
      window.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", flushCurrentContent);
      flushCurrentContent();
    };
  }, [flushCurrentContent]);

  const handleInput = () => {
    if (!editorRef.current) return;

    const currentHtml = editorRef.current.innerHTML;

    if (currentHtml.length > MAX_INNER_HTML_LENGTH) {
      toast.warning("메모 용량 한도(10,000자)에 도달했습니다.");
      editorRef.current.innerHTML = lastSavedContentRef.current;
      setContentLength(lastSavedContentRef.current.length);
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
    const plainText = e.clipboardData.getData("text/plain");

    if (plainText) {
      document.execCommand("insertText", false, plainText);
    } else {
      const htmlText = e.clipboardData.getData("text/html");
      const sanitizedPaste = sanitizeMemoHtml(htmlText);
      document.execCommand("insertHTML", false, sanitizedPaste);
    }
    handleInput();
  };

  const handleBlur = () => {
    isFocusedRef.current = false;
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = null;
    }
    if (editorRef.current) {
      saveContent(editorRef.current.innerHTML);
    }
  };

  const handleFocus = () => {
    isFocusedRef.current = true;
  };

  return {
    editorRef,
    contentLength,
    isLoading,
    isSaving: upsertMemoMutation.isPending,
    maxLimit: MAX_INNER_HTML_LENGTH,
    handleInput,
    handlePaste,
    handleBlur,
    handleFocus,
  };
};
