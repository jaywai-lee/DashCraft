import React from "react";
import { useMemoStore } from "../model/useMemoStore";
import { cn } from "@/shared/lib/utils";

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
  const content = memo?.content ?? "";

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateMemo(widgetId, e.target.value);
  };

  return (
    <div
      className={cn(
        "flex flex-col w-full h-full p-3 gap-2 transition-all duration-200",
        isExpanded ? "min-h-[320px]" : "min-h-[180px]",
      )}
    >
      <textarea
        value={content}
        onChange={handleChange}
        placeholder="자유롭게 메모를 작성해보세요"
        className="w-full flex-1 resize-none bg-transparent text-sm leading-relaxed placeholder:text-muted-foreground focus:outline-none scrollbar-thin scrollbar-thumb-muted-foreground/20"
      />
      <div className="flex justify-end items-center text-[10px] text-muted-foreground border-t border-border/40 pt-1.5 px-0.5 shrink-0">
        <span>{content.length}자</span>
      </div>
    </div>
  );
};
