"use client";

import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useDashboardStore } from "../model/useDashboardStore";
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { SortableWidget } from "./SortableWidget";
import { useEffect, useState } from "react";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import { LayoutGrid, Plus } from "lucide-react";
import { Button } from "@/shared/ui/button";

export const DashboardGrid = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { widgets, setWidgets, addWidget } = useDashboardStore();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = widgets.findIndex((w) => w.id === active.id);
      const newIndex = widgets.findIndex((w) => w.id === over.id);

      const newWidgets = arrayMove(widgets, oldIndex, newIndex);
      setWidgets(newWidgets);
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex items-center justify-center p-12 text-sm text-muted-foreground">
        대시보드를 불러오는 중..
      </div>
    );
  }

  if (widgets.length === 0) {
    return (
      <div className="border-2 border-dashed rounded-2xl p-12 text-center flex flex-col items-center justify-center space-y-4 bg-background/50 my-4">
        <div className="p-3 bg-primary/10 text-primary rounded-xl">
          <LayoutGrid className="w-8 h-8" />
        </div>
        <div className="space-y-1 max-w-sm">
          <h3 className="font-semibold text-base">배치된 위젯이 없습니다</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            상단의 &quot;Todo 위젯 추가&quot; 버튼을 눌러 나만의 대시보드를
            채워보세요.
          </p>
        </div>
        <Button
          variant="primary"
          size="md"
          onClick={() =>
            addWidget({
              type: "todo",
              title: "할 일 목록",
              layout: { id: "", x: 0, y: 0, w: 1, h: 1 },
            })
          }
        >
          <Plus className="w-4 h-4" />첫 위젯 추가하기
        </Button>
      </div>
    );
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToWindowEdges]}
    >
      <SortableContext
        items={widgets.map((w) => w.id)}
        strategy={rectSortingStrategy}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
          {widgets.map((widget) => (
            <SortableWidget key={widget.id} widget={widget} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};
