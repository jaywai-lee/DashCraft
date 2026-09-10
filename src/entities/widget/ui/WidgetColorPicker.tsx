"use client";

import { memo, useEffect, useRef, useState } from "react";
import { WidgetColor } from "../model/types";
import { Palette } from "lucide-react";
import { COLOR_THEMES } from "../model/constants";
import { cn } from "@/shared/lib/utils";

interface WidgetColorPickerProps {
  color: WidgetColor;
  onSelectColor: (color: WidgetColor) => void;
}

export const WidgetColorPicker = memo(
  ({ color, onSelectColor }: WidgetColorPickerProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleSelect = (selectedColor: WidgetColor) => {
      onSelectColor(selectedColor);
      setIsOpen(false);
    };

    useEffect(() => {
      if (!isOpen) return;

      const handleClickOutside = (e: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
      <div ref={containerRef} className="relative flex items-center shrink-0">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary shrink-0"
          title="위젯 색상 변경"
        >
          <Palette className="w-3.5 h-3.5" />
        </button>

        {isOpen && (
          <div className="absolute top-8 right-0 z-[100] p-1.5 bg-popover text-popover-foreground border rounded-xl shadow-xl flex items-center gap-1 animate-in zoom-in-95 duration-150">
            {(
              Object.entries(COLOR_THEMES) as [
                WidgetColor,
                (typeof COLOR_THEMES)[WidgetColor],
              ][]
            ).map(([themeKey, themeValue]) => {
              const isSelected = color === themeKey;

              return (
                <button
                  key={themeKey}
                  type="button"
                  onClick={() => handleSelect(themeKey)}
                  className={cn(
                    "w-4 h-4 rounded-full border border-black/10 dark:border-white/10 transition-transform hover:scale-110 flex items-center justify-center shrink-0",
                    COLOR_THEMES[themeKey].accentBg,
                    isSelected
                      ? "ring-2 ring-foreground ring-offset-1 ring-offset-popover scale-110"
                      : "opacity-80 hover:opacity-100",
                  )}
                  title={themeValue.label}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  },
);

WidgetColorPicker.displayName = "WidgetColorPicker";
