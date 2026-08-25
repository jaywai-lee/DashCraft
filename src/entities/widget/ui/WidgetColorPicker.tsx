"use client";

import { useState } from "react";
import { WidgetColor } from "../model/types";
import { Palette } from "lucide-react";
import { COLOR_THEMES } from "../model/constants";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";

interface WidgetColorPickerProps {
  color: WidgetColor;
  onSelectColor: (color: WidgetColor) => void;
}

export const WidgetColorPicker = ({
  color,
  onSelectColor,
}: WidgetColorPickerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (selectedColor: WidgetColor) => {
    onSelectColor(selectedColor);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="h-7 w-7 p-0 min-w-[28px] text-muted-foreground hover:text-foreground shrink-0"
        title="위젯 색상 변경"
      >
        <Palette className="w-3.5 h-3.5" />
      </Button>

      {isOpen && (
        <div className="absolute top-8 right-0 z-50 p-2 bg-background border rounded-xl shadow-xl flex items-center gap-1.5 animate-in zoom-in-95 duration-150">
          {(Object.keys(COLOR_THEMES) as WidgetColor[]).map((themeKey) => (
            <button
              key={themeKey}
              type="button"
              onClick={() => handleSelect(themeKey)}
              className={cn(
                "w-5 h-5 rounded-full border transition-transform hover:scale-110 flex items-center justify-center",
                COLOR_THEMES[themeKey].accentBg,
                color === themeKey
                  ? "ring-2 ring-primary ring-offset-1 scale-110"
                  : "",
              )}
              title={COLOR_THEMES[themeKey].label}
            />
          ))}
        </div>
      )}
    </div>
  );
};
