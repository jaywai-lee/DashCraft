"use client";

import React, { memo } from "react";
import { Button } from "@/shared/ui/button";
import {
  useFilterStore,
  selectIsFilterActive,
} from "@/features/dashboard-filter/model/useFilterStore";
import { Search } from "lucide-react";
import { cn } from "@/shared/lib/utils";

interface FilterToggleButtonProps {
  size?: "sm" | "md";
  className?: string;
}

export const FilterToggleButton = memo(
  ({ size = "sm", className }: FilterToggleButtonProps) => {
    const toggleFilter = useFilterStore((s) => s.toggleFilter);
    const isOpen = useFilterStore((s) => s.isOpen);
    const isFilterActive = useFilterStore(selectIsFilterActive);

    return (
      <Button
        variant={isOpen ? "primary" : "outline"}
        size={size}
        onClick={toggleFilter}
        className={cn("relative gap-1.5 cursor-pointer", className)}
        title="검색 및 필터"
      >
        <Search className="w-4 h-4" />
        <span>검색 & 필터</span>
        {isFilterActive && (
          <span className="w-2 h-2 rounded-full bg-primary absolute -top-0.5 -right-0.5 ring-2 ring-background" />
        )}
      </Button>
    );
  },
);

FilterToggleButton.displayName = "FilterToggleButton";
