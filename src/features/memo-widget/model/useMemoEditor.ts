"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { sanitizeMemoHtml } from "@/shared/lib/sanitize";
import { toast } from "sonner";
import { useMemoQuery, useUpsertMemoMutation } from "../api/useMemoQuery";
import { flushMemoKeepalive } from "../api/memoKeepalive";
import { useTextHighLighter } from "@/shared/lib/useTextHighlighter";
import { HighlightColor } from "@/shared/config/highlight.config";

const MAX_INNER_HTML_LENGTH = 10000;

const getPlainTextLength = (element: HTMLElement | null): number => {
  if (!element) return 0;
  return element.innerText.replace(/\u200B/g, "").length;
};

export const useMemoEditor = (widgetId: string) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const { data: memoData, isLoading } = useMemoQuery(widgetId);
  const upsertMemoMutation = useUpsertMemoMutation(widgetId);

  const [contentLength, setContentLength] = useState(0);
  const [currentHighlight, setCurrentHighlight] =
    useState<HighlightColor>("none");

  const lastSavedContentRef = useRef<string>("");
  const currentHighlightRef = useRef<HighlightColor>("none");
  const isFocusedRef = useRef(false);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const memoContent = memoData?.content;
  const memoHighlight = memoData?.highlight;

  useEffect(() => {
    if (memoContent !== undefined || memoHighlight !== undefined) {
      const initialHighlight = (memoHighlight as HighlightColor) || "none";
      currentHighlightRef.current = initialHighlight;
      setCurrentHighlight(initialHighlight);

      if (editorRef.current && !isFocusedRef.current) {
        const sanitized = sanitizeMemoHtml(memoContent || "");
        if (editorRef.current.innerHTML !== sanitized) {
          editorRef.current.innerHTML = sanitized;
          lastSavedContentRef.current = sanitized;
        }
        setContentLength(getPlainTextLength(editorRef.current));
      }
    }
  }, [memoContent, memoHighlight]);

  const saveContent = useCallback(
    (currentHtml: string, highlight?: HighlightColor) => {
      const sanitized = sanitizeMemoHtml(currentHtml);
      const targetHighlight = highlight ?? currentHighlightRef.current;

      if (
        sanitized === lastSavedContentRef.current &&
        targetHighlight === currentHighlightRef.current
      ) {
        return;
      }

      upsertMemoMutation.mutate(
        { content: sanitized, highlight: targetHighlight },
        {
          onSuccess: () => {
            lastSavedContentRef.current = sanitized;
            currentHighlightRef.current = targetHighlight;
          },
        },
      );
    },
    [upsertMemoMutation],
  );

  const { applyHighlight, exitHighlightOnKey } = useTextHighLighter(
    editorRef,
    (newHtml) => {
      if (!editorRef.current) return;
      setContentLength(getPlainTextLength(editorRef.current));
      saveContent(newHtml);
    },
  );

  const handleSelectHighlightColor = (color: HighlightColor) => {
    setCurrentHighlight(color);
    currentHighlightRef.current = color;
    applyHighlight(color);
  };

  const flushCurrentContent = useCallback(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = null;
    }
    if (editorRef.current) {
      const currentHtml = editorRef.current.innerHTML;
      const sanitized = sanitizeMemoHtml(currentHtml);
      if (
        sanitized !== lastSavedContentRef.current ||
        currentHighlightRef.current !==
          ((memoData?.highlight as HighlightColor) ?? "none")
      ) {
        flushMemoKeepalive(
          widgetId,
          sanitized,
          currentHighlightRef.current ?? "none",
        );
        lastSavedContentRef.current = sanitized;
      }
    }
  }, [widgetId, memoData?.highlight]);

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
      setContentLength(getPlainTextLength(editorRef.current));
      return;
    }

    setContentLength(getPlainTextLength(editorRef.current));

    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = setTimeout(() => {
      saveContent(currentHtml);
    }, 800);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const plainText = e.clipboardData.getData("text/plain");
    if (!plainText) return;

    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    range.deleteContents();

    const textNode = document.createTextNode(plainText);
    range.insertNode(textNode);

    range.setStartAfter(textNode);
    range.setEndAfter(textNode);
    selection.removeAllRanges();
    selection.addRange(range);

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
    currentHighlight,
    handleSelectHighlightColor,
    exitHighlightOnKey,
    handleInput,
    handlePaste,
    handleBlur,
    handleFocus,
  };
};
