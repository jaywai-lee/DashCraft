"use client";

import { useWidgetsQuery } from "@/widgets/dashboard-grid/api/useDashboardQuery";
import { CheckSquare } from "lucide-react";
import { memo } from "react";

export const ActiveWidgetCounter = memo(() => {
  const { data: widgets = [] } = useWidgetsQuery();

  return (
    <div className="flex items-center gap-2 text-xs text-muted-foreground bg-background border px-3 py-1.5 rounded-lg w-fit shadow-2xs">
      <CheckSquare className="w-4 h-4 text-primary" />
      <span>
        활성 위젯{" "}
        <strong className="text-foreground font-semibold">
          {widgets.length}
        </strong>
        개
      </span>
    </div>
  );
});

ActiveWidgetCounter.displayName = "ActiveWidgetCounter";
