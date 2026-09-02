"use client";

import {
  HIGHLIGHT_OPTIONS,
  HighlightColor,
} from "@/shared/config/highlight.config";
import { cn } from "@/shared/lib/utils";

interface HighlightPickerProps {
  selectedColor?: HighlightColor;
  onSelectColor: (color: HighlightColor) => void;
  size?: "sm" | "md";
}

export const HighlightPicker = ({
  selectedColor,
  onSelectColor,
  size,
}: HighlightPickerProps) => {
  return (
    <div className="flex items-center gap-1 bg-muted/40 p-1 rounded-full border border-border/50 shrink-0">
      {HIGHLIGHT_OPTIONS.map((option) => (
        <button
          key={option.id}
          type="button"
          onMouseDown={(e) => {
            e.preventDefault();
            onSelectColor(option.id);
          }}
          className={cn(
            "rounded-full border transition-all cursor-pointer flex items-center justify-center shrink-0",
            size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4",
            option.id === "none"
              ? "bg-transparent border-muted-foreground/40 hover:border-foreground"
              : "border-transparent hover:scale-110",
            selectedColor === option.id &&
              "ring-1.5 ring-primary ring-offset-1 scale-105",
          )}
          style={{
            backgroundColor:
              option.id !== "none" ? option.colorCode : undefined,
          }}
          title={`형광펜: ${option.label}`}
        >
          {option.id === "none" && (
            <span className="w-full h-0.5 bg-red-400/80 rotate-45 rounded-full" />
          )}
        </button>
      ))}
    </div>
  );
};
