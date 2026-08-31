"use client";

import { useEffect } from "react";
import { useCommandPaletteStore } from "./useCommandPaletteStore";

export const useCommandPalette = () => {
  const { isOpen, setIsOpen, toggle } = useCommandPaletteStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        toggle();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggle]);

  return { isOpen, setIsOpen, toggle };
};
