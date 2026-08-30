"use client";

import { cn } from "@/shared/lib/utils";
import { X } from "lucide-react";
import React, { useEffect } from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg";
  className?: string;
}

export const Modal = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  maxWidth = "md",
  className,
}: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthStyles = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div
        className={cn(
          "relative w-full max-h-[90vh] overflow-y-auto bg-background text-foreground rounded-2xl border shadow-2xl z-10 space-y-5 p-5 sm:p-6 animate-in zoom-in-95 duration-200 my-auto",
          maxWidthStyles[maxWidth],
          className,
        )}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1.5 hover:bg-accent rounded-lg text-muted-foreground hover:text-foreground transition-colors shrink-0 z-20"
          aria-label="모달 닫기"
        >
          <X className="w-4 h-4" />
        </button>

        {(title || description) && (
          <div className="text-center space-y-1.5 pt-2 px-2 sm:px-6">
            {title && (
              <h2 className="text-base sm:text-lg font-bold tracking-tight text-foreground">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-xs text-muted-foreground leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}

        {children && (
          <div className="text-xs text-muted-foreground bg-muted/40 p-3.5 rounded-xl border border-border/50 text-center leading-relaxed">
            {children}
          </div>
        )}

        {footer && (
          <div className="flex items-center justify-center sm:justify-end gap-2 pt-2 border-t">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};
