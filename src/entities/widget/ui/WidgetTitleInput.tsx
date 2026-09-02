"use client";

import { Check, Edit2 } from "lucide-react";
import { useRef, useState } from "react";

interface WidgetTitleInputProps {
  title: string;
  onUpdateTitle: (newTitle: string) => void;
}

export const WidgetTitleInput = ({
  title,
  onUpdateTitle,
}: WidgetTitleInputProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputTitle, setInputTitle] = useState(title);
  const isSubmittingRef = useRef(false);

  const handleStartEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    setInputTitle(title);
    setIsEditing(true);
    isSubmittingRef.current = false;
  };

  const handleTitleSubmit = () => {
    const trimmed = inputTitle.trim();
    isSubmittingRef.current = true;

    if (trimmed) {
      onUpdateTitle(trimmed);
    } else {
      setInputTitle(title);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (e.key === "Enter") {
      handleTitleSubmit();
    } else if (e.key === "Escape") {
      isSubmittingRef.current = true;
      setInputTitle(title);
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <div
        className="flex items-center gap-1 w-full max-w-[220px]"
        onPointerDown={(e) => e.stopPropagation()}
      >
        <input
          type="text"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleTitleSubmit}
          autoFocus
          className="px-1 py-0.5 text-sm font-semibold text-foreground bg-background border border-primary rounded outline-none focus:ring-1 focus:ring-primary w-full transition-all"
        />
        <button
          type="button"
          onClick={handleTitleSubmit}
          className="p-1 hover:bg-accent rounded text-primary shrink-0"
        >
          <Check className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <div
      onDoubleClick={handleStartEdit}
      className="flex items-center gap-1.5 cursor-pointer group truncate max-w-full"
      title="더블클릭 또는 연필 버튼으로 이름 변경"
    >
      <h3 className="font-semibold text-sm truncate py-0.5 px-1">{title}</h3>
      <button
        type="button"
        onClick={handleStartEdit}
        className="p-0.5 hover:bg-accent rounded opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Edit2 className="w-3 h-3 text-muted-foreground shrink-0" />
      </button>
    </div>
  );
};
