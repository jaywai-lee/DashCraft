"use client";

import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/shared/lib/utils";

export const SCHEDULE_COLORS = [
  { id: "default", bg: "bg-primary", label: "기본" },
  { id: "blue", bg: "bg-blue-500", label: "파랑" },
  { id: "green", bg: "bg-emerald-500", label: "초록" },
  { id: "yellow", bg: "bg-amber-500", label: "노랑" },
  { id: "purple", bg: "bg-purple-500", label: "보라" },
  { id: "red", bg: "bg-rose-500", label: "빨강" },
] as const;

export type ScheduleColorId = (typeof SCHEDULE_COLORS)[number]["id"];

interface ColorPalettePickerProps {
  selectedColor: string;
  onChange: (colorId: ScheduleColorId) => void;
  disabled?: boolean;
}

export const ColorPalettePicker = ({
  selectedColor,
  onChange,
  disabled = false,
}: ColorPalettePickerProps) => {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-semibold text-muted-foreground">
        태그 색상
      </label>
      <div className="flex items-center gap-2">
        {SCHEDULE_COLORS.map((color) => {
          const isSelected = selectedColor === color.id;
          return (
            <button
              key={color.id}
              type="button"
              disabled={disabled}
              onClick={() => onChange(color.id)}
              className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center transition-transform hover:scale-110 focus:outline-none cursor-pointer",
                color.bg,
                isSelected && "ring-2 ring-offset-2 ring-primary scale-110",
              )}
              title={color.label}
              aria-label={color.label}
            >
              {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};
