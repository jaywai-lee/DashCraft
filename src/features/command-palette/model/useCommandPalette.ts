"use client";

import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import { useCommandPaletteStore } from "./useCommandPaletteStore";
import { usePathname } from "next/navigation";

export const useCommandPalette = () => {
  const { isOpen, setIsOpen, toggle } = useCommandPaletteStore(
    useShallow((s) => ({
      isOpen: s.isOpen,
      setIsOpen: s.setIsOpen,
      toggle: s.toggle,
    })),
  );
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!pathname.startsWith("/dashboard")) return;

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
