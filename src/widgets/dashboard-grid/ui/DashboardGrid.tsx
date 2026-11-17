// src/widgets/dashboard-grid/ui/DashboardGrid.tsx
"use client";

import { useCallback, useMemo, useState } from "react";
import {
  Announcements,
  DndContext,
  DragOverlay,
  ScreenReaderInstructions,
} from "@dnd-kit/core";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import { AnimatePresence } from "framer-motion";
import { WidgetFrame } from "@/entities/widget/ui/WidgetFrame";
import { WidgetColor } from "@/entities/widget/model/types";
import { useFilterStore } from "@/features/dashboard-filter/model/useFilterStore";
import { SortableWidget } from "./SortableWidget";
import { DashboardEmpty, DashboardSearchEmpty } from "./DashboardEmptyState";
import { DashboardGridSkeleton } from "./DashboardGridSkeleton";
import { useDashboardDnD } from "../model/useDashboardDnd";
import { useFilteredWidgets } from "../model/useFilteredWidgets";
import { WidgetContentRenderer } from "./WidgetContentRenderer";

const SCREEN_READER_INSTRUCTIONS: ScreenReaderInstructions = {
  draggable:
    "위젯 순서를 변경하려면 스페이스바 또는 엔터 키를 눌러 집은 뒤 방향키로 이동하고, 다시 스페이스바를 눌러 배치하세요. 또는 위젯 우측 상단의 옵션 메뉴에서 왼쪽·오른쪽 이동 버튼을 사용할 수 있습니다.",
};

export const DashboardGrid = () => {
  const resetFilter = useFilterStore((s) => s.resetFilter);
  const [liveAnnouncement, setLiveAnnouncement] = useState("");

  const {
    sensors,
    localWidgets,
    activeWidget,
    handleDragStart,
    handleDragEnd,
    handleDragCancel,
    collisionDetection,
  } = useDashboardDnD();

  const { filteredWidgets: filteredLocalWidgets, isLoading } =
    useFilteredWidgets(localWidgets);

  const widgetIds = useMemo(
    () => filteredLocalWidgets.map((w) => w.widget_id),
    [filteredLocalWidgets],
  );

  const getWidgetLabel = useCallback(
    (id: string | number) => {
      const target = localWidgets.find((w) => w.widget_id === String(id));
      return target ? `${target.title} 위젯` : "위젯";
    },
    [localWidgets],
  );

  const announcements: Announcements = useMemo(
    () => ({
      onDragStart({ active }) {
        const index = widgetIds.indexOf(String(active.id));
        return `${getWidgetLabel(active.id)}을(를) 집었습니다. 현재 전체 ${widgetIds.length}개 중 ${index + 1}번째 위치입니다.`;
      },
      onDragOver({ active, over }) {
        if (!over) return;
        const overIndex = widgetIds.indexOf(String(over.id));
        if (overIndex === -1) return;
        return `${getWidgetLabel(active.id)}이(가) ${overIndex + 1}번째 위치 위로 이동했습니다.`;
      },
      onDragEnd({ active, over }) {
        if (!over) {
          return `${getWidgetLabel(active.id)} 이동이 취소되었습니다.`;
        }
        const finalIndex = widgetIds.indexOf(String(over.id));
        return `${getWidgetLabel(active.id)}이(가) ${finalIndex + 1}번째 위치에 배치되었습니다.`;
      },
      onDragCancel({ active }) {
        return `${getWidgetLabel(active.id)} 이동이 취소되었습니다.`;
      },
    }),
    [getWidgetLabel, widgetIds],
  );

  const handleAnnounce = useCallback((message: string) => {
    setLiveAnnouncement("");
    requestAnimationFrame(() => {
      setLiveAnnouncement(message);
    });
  }, []);

  if (isLoading) {
    return <DashboardGridSkeleton count={5} />;
  }

  if (localWidgets.length === 0) {
    return <DashboardEmpty />;
  }

  if (filteredLocalWidgets.length === 0) {
    return <DashboardSearchEmpty onResetFilter={resetFilter} />;
  }

  return (
    <>
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {liveAnnouncement}
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={collisionDetection}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
        modifiers={[restrictToWindowEdges]}
        accessibility={{
          screenReaderInstructions: SCREEN_READER_INSTRUCTIONS,
          announcements,
        }}
      >
        <SortableContext items={widgetIds} strategy={rectSortingStrategy}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 items-start w-full">
            <AnimatePresence mode="popLayout">
              {filteredLocalWidgets.map((widget) => (
                <SortableWidget
                  key={widget.widget_id}
                  widget={widget}
                  onAnnounce={handleAnnounce}
                />
              ))}
            </AnimatePresence>
          </div>
        </SortableContext>

        <DragOverlay dropAnimation={null}>
          {activeWidget ? (
            <div className="w-full opacity-90 scale-[1.02] shadow-2xl cursor-grabbing pointer-events-none">
              <WidgetFrame
                id={activeWidget.widget_id}
                title={activeWidget.title}
                color={activeWidget.color as WidgetColor}
                width={activeWidget.layout_w}
                widgetType={activeWidget.type}
              >
                <WidgetContentRenderer widget={activeWidget} />
              </WidgetFrame>
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </>
  );
};
