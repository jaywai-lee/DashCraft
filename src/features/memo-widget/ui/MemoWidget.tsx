"use client";

import React, { useEffect, useRef, useState } from "react";
import { useMemoStore } from "../model/useMemoStore";
import { cn } from "@/shared/lib/utils";
import { useTextHighLighter } from "@/shared/lib/useTextHighlighter";
import { HighlightPicker } from "@/shared/ui/highlight-picker/HighlightPicker";

interface MemoWidgetProps {
  widgetId: string;
  isExpanded?: boolean;
}

export const MemoWidget = ({
  widgetId,
  isExpanded = false,
}: MemoWidgetProps) => {
  const memo = useMemoStore((s) => s.memos[widgetId]);
  const updateMemo = useMemoStore((s) => s.updateMemo);

  const editorRef = useRef<HTMLDivElement>(null);
  const [textLength, setTextLength] = useState(0);
  const htmlContent = memo?.content ?? "";

  const { applyHighlight, exitHighlightOnKey } = useTextHighLighter(
    editorRef,
    (newHtml) => {
      updateMemo(widgetId, newHtml);
    },
  );

  const getPlainTextLength = (element: HTMLDivElement | null) => {
    if (!element) return 0;
    return element.innerText.replace(/[\s\u200B]/g, "").length;
  };

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== htmlContent) {
      editorRef.current.innerHTML = htmlContent;
      setTextLength(getPlainTextLength(editorRef.current));
    }
  }, [htmlContent]);

  const handleInput = () => {
    if (!editorRef.current) return;
    const currentHtml = editorRef.current.innerHTML;

    setTextLength(getPlainTextLength(editorRef.current));
    updateMemo(widgetId, currentHtml);
  };

  return (
    <div
      className={cn(
        "flex flex-col w-full h-full pt-3 px-3 gap-1 transition-all duration-200",
        isExpanded ? "min-h-[320px]" : "min-h-[180px]",
      )}
    >
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        onKeyDown={exitHighlightOnKey}
        suppressContentEditableWarning
        data-placeholder="자유롭게 메모를 작성하고 드래그하여 형광펜을 칠해보세요"
        className={cn(
          "w-full flex-1 resize-none bg-transparent text-sm leading-relaxed text-foreground focus:outline-none overflow-y-auto scrollbar-thin scrollbar-thumb-muted-foreground/20",
          "empty:before:content-[attr(data-placeholder)] empty:before:text-muted-foreground empty:before:cursor-text",
        )}
      />
      <div className="flex justify-between items-center text-[10px] text-muted-foreground border-t border-border/40 pt-1 px-0.5 mt-auto shrink-0">
        <HighlightPicker onSelectColor={applyHighlight} />
        <span>{textLength}자</span>
      </div>
    </div>
  );
};
