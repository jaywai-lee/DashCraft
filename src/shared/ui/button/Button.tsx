"use client";

import { cn } from "@/shared/lib/utils";
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
  children: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "md",
  isLoading = false,
  className = "",
  disabled,
  children,
  ref,
  ...props
}: ButtonProps) => {
  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:opacity-90 shadow-2xs",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline:
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-2xs",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    danger:
      "bg-destructive text-destructive-foreground hover:opacity-90 shadow-2xs",
  };

  const sizeStyles = {
    sm: "h-8 px-3 text-xs font-medium rounded-lg gap-1.5 min-w-[60px]",
    md: "h-9 px-4 text-xs font-semibold rounded-lg gap-1.5 min-w-[72px]",
    lg: "h-11 px-5 text-sm font-semibold rounded-xl gap-2 min-w-[84px]",
  };

  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";

  return (
    <button
      ref={ref}
      disabled={disabled || isLoading}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {isLoading ? (
        <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin shrink-0" />
      ) : null}
      {children}
    </button>
  );
};

Button.displayName = "Button";
