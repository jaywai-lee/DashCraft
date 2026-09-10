"use client";

import { useEffect } from "react";
import { useCommandPaletteStore } from "./useCommandPaletteStore";
import { usePathname } from "next/navigation";

export const useCommandPalette = () => {
  const { isOpen, setIsOpen, toggle } = useCommandPaletteStore();
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (pathname !== "/dashboard") return;

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        toggle();
      }

      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, toggle, setIsOpen, pathname]);

  return { isOpen, setIsOpen, toggle };
};
