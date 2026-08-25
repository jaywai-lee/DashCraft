import { Button } from "@/shared/ui/button";
import { WidgetColor } from "../model/types";
import { WidgetColorPicker } from "./WidgetColorPicker";
import { Maximize2, Minimize2, X } from "lucide-react";

interface WidgetHeaderActionsProps {
  color: WidgetColor;
  width?: number;
  onSelectColor: (color: WidgetColor) => void;
  onToggleWidth: () => void;
  onRemove: () => void;
}

export const WidgetHeaderActions = ({
  color,
  width = 1,
  onSelectColor,
  onToggleWidth,
  onRemove,
}: WidgetHeaderActionsProps) => {
  return (
    <div
      className="flex items-center gap-1 shrink-0"
      onPointerDown={(e) => e.stopPropagation()}
    >
      <WidgetColorPicker color={color} onSelectColor={onSelectColor} />

      <Button
        variant="ghost"
        size="sm"
        type="button"
        onClick={onToggleWidth}
        className="h-7 w-7 p-0 min-w-[28px] text-muted-foreground hover:text-foreground shrink-0"
        title={width === 1 ? "확대하기 (2x2)" : "축소하기 (1x1)"}
      >
        {width === 1 ? (
          <Maximize2 className="w-3.5 h-3.5" />
        ) : (
          <Minimize2 className="w-3.5 h-3.5" />
        )}
      </Button>

      <Button
        variant="ghost"
        size="sm"
        type="button"
        onClick={onRemove}
        className="h-7 w-7 p-0 min-w-[28px] text-muted-foreground hover:text-foreground shrink-0"
        aria-label="위젯 삭제"
      >
        <X className="w-4 h-4" />
      </Button>
    </div>
  );
};
