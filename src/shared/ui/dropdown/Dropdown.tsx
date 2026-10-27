"use client";

import { cn } from "@/shared/lib/utils";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface DropdownContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  close: () => void;
}

const DropdownContext = createContext<DropdownContextType | null>(null);

const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("Dropdown components must be used within a Dropdown");
  }
  return context;
};

export const Dropdown = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const close = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen, close }}>
      <div ref={containerRef} className="relative inline-block text-left">
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

export const DropdownTrigger = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { isOpen, setIsOpen } = useDropdown();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      onKeyDown={handleKeyDown}
      className={cn("cursor-pointer select-none", className)}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
    >
      {children}
    </div>
  );
};

export const DropdownContent = ({
  children,
  align = "right",
  className,
}: {
  children: React.ReactNode;
  align?: "left" | "right";
  className?: string;
}) => {
  const { isOpen } = useDropdown();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  return (
    <div
      className={cn(
        "absolute top-full mt-2 w-56 sm:w-64 md:w-72 rounded-2xl border bg-popover p-2 text-popover-foreground shadow-2xl ring-1 ring-black/5 z-[100] animate-in fade-in-80 zoom-in-95",
        align === "right" ? "right-0" : "left-0",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const DropdownItem = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  const { close } = useDropdown();

  const handleClick = () => {
    if (onClick) onClick();
    close();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 md:px-4 md:py-3 text-xs md:text-sm font-semibold text-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer select-none",
        className,
      )}
    >
      {children}
    </button>
  );
};
