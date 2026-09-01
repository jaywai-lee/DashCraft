"use client";

import { useEffect, useMemo, useState } from "react";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import { AnimatePresence } from "framer-motion";
import { Widget } from "@/entities/widget/model/types";
import { WidgetFrame } from "@/entities/widget/ui/WidgetFrame";
import { TodoWidget } from "@/features/todo-widget";
import { ClockWidget } from "@/features/clock-widget/ui/ClockWidget";
import { DDayWidget } from "@/features/dday-widget/ui/DDayWidget";
import { MemoWidget } from "@/features/memo-widget/ui/MemoWidget";
import { useFilterStore } from "@/features/dashboard-filter/model/useFilterStore";
import { SortableWidget } from "./SortableWidget";
import { DashboardEmpty, DashboardSearchEmpty } from "./DashboardEmptyState";
import { DashboardGridSkeleton } from "./DashboardGridSkeleton";
import { useDashboardDnD } from "../model/useDashboardDnd";
import { useFilteredWidgets } from "../model/useFilteredWidgets";

export const DashboardGrid = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { resetFilter } = useFilterStore();

  const {
    sensors,
    localWidgets,
    activeWidget,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    handleDragCancel,
    collisionDetection,
  } = useDashboardDnD();

  const { filteredWidgets: filteredLocalWidgets } =
    useFilteredWidgets(localWidgets);

  const widgetIds = useMemo(
    () => filteredLocalWidgets.map((w) => w.id),
    [filteredLocalWidgets],
  );

  const renderOverlayContent = (widget: Widget) => {
    const isExpanded = widget.layout.w === 2;
    switch (widget.type) {
      case "todo":
        return <TodoWidget widgetId={widget.id} isExpanded={isExpanded} />;
      case "clock":
        return <ClockWidget widgetId={widget.id} isExpanded={isExpanded} />;
      case "dday":
        return <DDayWidget widgetId={widget.id} isExpanded={isExpanded} />;
      case "memo":
        return <MemoWidget widgetId={widget.id} isExpanded={isExpanded} />;
      default:
        return <div>알 수 없는 위젯 타입입니다.</div>;
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <DashboardGridSkeleton />;
  if (localWidgets.length === 0) return <DashboardEmpty />;
  if (filteredLocalWidgets.length === 0)
    return <DashboardSearchEmpty onResetFilter={resetFilter} />;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={collisionDetection}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
      modifiers={[restrictToWindowEdges]}
    >
      <SortableContext items={widgetIds} strategy={rectSortingStrategy}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 items-start w-full">
          <AnimatePresence mode="popLayout">
            {/* 💡 filteredLocalWidgets 기반으로 렌더링 */}
            {filteredLocalWidgets.map((widget) => (
              <SortableWidget key={widget.id} widget={widget} />
            ))}
          </AnimatePresence>
        </div>
      </SortableContext>

      <DragOverlay dropAnimation={null}>
        {activeWidget ? (
          <div className="w-full opacity-90 scale-[1.02] shadow-2xl cursor-grabbing pointer-events-none">
            <WidgetFrame
              id={activeWidget.id}
              title={activeWidget.title}
              color={activeWidget.color}
              width={activeWidget.layout.w}
            >
              {renderOverlayContent(activeWidget)}
            </WidgetFrame>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};
