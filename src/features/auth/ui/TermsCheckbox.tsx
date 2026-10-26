import React from "react";
import { cn } from "@/shared/lib/utils";

export interface TermsCheckboxProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
  className?: string;
}

export const TermsCheckbox = ({
  id,
  checked,
  onChange,
  onOpenTerms,
  onOpenPrivacy,
  className,
}: TermsCheckboxProps) => {
  return (
    <div className={cn("flex items-start gap-2 pt-1", className)}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.checked)
        }
        className="mt-0.5 h-4 w-4 rounded border-input text-primary focus:ring-1 focus:ring-primary cursor-pointer shrink-0"
      />
      <label
        htmlFor={id}
        className="text-xs text-foreground/80 leading-normal cursor-pointer select-none"
      >
        <button
          type="button"
          onClick={onOpenTerms}
          className="text-primary font-medium underline underline-offset-4 hover:text-primary/80 transition-colors"
        >
          이용약관
        </button>
        <span className="px-1 text-muted-foreground">및</span>
        <button
          type="button"
          onClick={onOpenPrivacy}
          className="text-primary font-medium underline underline-offset-4 hover:text-primary/80 transition-colors"
        >
          개인정보처리방침
        </button>
        <span className="pl-0.5">에 동의합니다.</span>
      </label>
    </div>
  );
};
