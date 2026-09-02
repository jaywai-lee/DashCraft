"use client";

import { useEffect, useMemo, useState } from "react";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import { AnimatePresence } from "framer-motion";
import { WidgetFrame } from "@/entities/widget/ui/WidgetFrame";
import { useFilterStore } from "@/features/dashboard-filter/model/useFilterStore";
import { SortableWidget } from "./SortableWidget";
import { DashboardEmpty, DashboardSearchEmpty } from "./DashboardEmptyState";
import { DashboardGridSkeleton } from "./DashboardGridSkeleton";
import { useDashboardDnD } from "../model/useDashboardDnd";
import { useFilteredWidgets } from "../model/useFilteredWidgets";
import { WidgetContentRenderer } from "./WidgetContentRenderer";

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
              <WidgetContentRenderer widget={activeWidget} />
            </WidgetFrame>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};
