import { WidgetColor } from "../model/types";
import { WidgetColorPicker } from "./WidgetColorPicker";
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  Minimize2,
  MoreVertical,
  X,
} from "lucide-react";
import { memo } from "react";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "@/shared/ui/dropdown/Dropdown";

interface WidgetHeaderActionsProps {
  id: string;
  color: WidgetColor;
  width?: number;
  onMoveLeft: (id: string) => void;
  onMoveRight: (id: string) => void;
  onSelectColor: (color: WidgetColor) => void;
  onToggleWidth: () => void;
  onRemove: () => void;
}

export const WidgetHeaderActions = memo(
  ({
    id,
    color,
    width = 1,
    onMoveLeft,
    onMoveRight,
    onSelectColor,
    onToggleWidth,
    onRemove,
  }: WidgetHeaderActionsProps) => {
    return (
      <div
        className="flex items-center gap-1 shrink-0 ml-auto"
        onPointerDown={(e) => e.stopPropagation()}
      >
        <WidgetColorPicker color={color} onSelectColor={onSelectColor} />

        <Dropdown>
          <DropdownTrigger className="w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary shrink-0">
            <MoreVertical className="w-3.5 h-3.5" />
          </DropdownTrigger>

          <DropdownContent align="right" className="w-36">
            <DropdownItem onClick={onToggleWidth}>
              {width === 1 ? (
                <>
                  <Maximize2 className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                  <span>2x2로 확대</span>
                </>
              ) : (
                <>
                  <Minimize2 className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                  <span>1x1로 축소</span>
                </>
              )}
            </DropdownItem>

            <DropdownItem onClick={() => onMoveLeft(id)}>
              <ArrowLeft className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
              <span>왼쪽으로 이동</span>
            </DropdownItem>

            <DropdownItem onClick={() => onMoveRight(id)}>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
              <span>오른쪽으로 이동</span>
            </DropdownItem>
          </DropdownContent>
        </Dropdown>

        <button
          type="button"
          onClick={onRemove}
          className="w-7 h-7 flex items-center justify-center text-muted-foreground hover:bg-destructive/10 hover:text-destructive rounded-md transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary shrink-0"
          aria-label="위젯 삭제"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  },
  (prevProps, nextProps) =>
    prevProps.id === nextProps.id &&
    prevProps.color === nextProps.color &&
    prevProps.width === nextProps.width,
);

WidgetHeaderActions.displayName = "WidgetHeaderActions";
