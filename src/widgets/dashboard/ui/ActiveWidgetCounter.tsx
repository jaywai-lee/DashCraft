"use client";

import { useDashboardStore } from "@/widgets/dashboard-grid/model/useDashboardStore";
import { CheckSquare } from "lucide-react";
import { memo } from "react";

export const ActiveWidgetCounter = memo(
  () => {
    const count = useDashboardStore((s) => s.widgets.length);

    return (
      <div className="flex items-center gap-2 text-xs text-muted-foreground bg-background border px-3 py-1.5 rounded-lg w-fit shadow-2xs">
        <CheckSquare className="w-4 h-4 text-primary" />
        <span>
          활성 위젯{" "}
          <strong className="text-foreground font-semibold">{count}</strong>개
        </span>
      </div>
    );
  },
  () => true,
);

ActiveWidgetCounter.displayName = "ActiveWidgetCounter";
