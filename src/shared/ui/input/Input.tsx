import { cn } from "@/shared/lib/utils";
import { type LucideIcon } from "lucide-react";

export interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
  error?: string;
  icon?: LucideIcon;
  containerClassName?: string;
}

export const Input = ({
  label,
  error,
  icon: Icon,
  containerClassName,
  className,
  id,
  disabled,
  ref,
  ...props
}: InputProps) => {
  const inputId = id || props.name;

  return (
    <div className={cn("space-y-1 w-full", containerClassName)}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-xs font-semibold text-muted-foreground"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground shrink-0 pointer-events-none" />
        )}
        <input
          id={inputId}
          ref={ref}
          disabled={disabled}
          className={cn(
            "w-full py-2 bg-background border rounded-lg text-xs transition-colors focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed",
            Icon ? "pl-9 pr-3" : "px-3",
            error
              ? "border-destructive focus:ring-destructive"
              : "border-border",
            className,
          )}
          {...props}
        />
      </div>
      {error && <p className="text-[11px] text-destructive">{error}</p>}
    </div>
  );
};
