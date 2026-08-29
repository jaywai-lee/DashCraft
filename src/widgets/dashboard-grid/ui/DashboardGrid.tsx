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
import { useEffect, useMemo, useState } from "react";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import { ChevronDown, LayoutGrid, Plus, SearchX } from "lucide-react";
import { Button } from "@/shared/ui/button";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "@/shared/ui/dropdown/Dropdown";
import {
  WIDGET_CONFIG_MAP,
  WIDGET_OPTIONS,
  WidgetType,
} from "../config/widgets.config";
import { useFilterStore } from "@/features/dashboard-filter/model/useFilterStore";
import { useFilteredWidgets } from "../model/useFilteredWidgets";

export const DashboardGrid = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { setWidgets, addWidget } = useDashboardStore();
  const { resetFilter } = useFilterStore();
  const { widgets, filteredWidgets } = useFilteredWidgets();

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 5 },
  });
  const keyboardSensor = useSensor(KeyboardSensor, {
    coordinateGetter: sortableKeyboardCoordinates,
  });
  const sensors = useSensors(pointerSensor, keyboardSensor);

  const widgetIds = useMemo(
    () => filteredWidgets.map((w) => w.id),
    [filteredWidgets],
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

  const handleAddWidget = (type: WidgetType) => {
    const config = WIDGET_CONFIG_MAP[type];
    if (!config) return;

    addWidget({
      type: config.type,
      title: config.title,
      layout: { id: "", x: 0, y: 0, w: 1, h: 1 },
    });
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
            상단의 &quot;위젯 추가&quot; 메뉴 또는 아래 버튼을 눌러 나만의
            대시보드를 채워보세요.
          </p>
        </div>

        <Dropdown>
          <DropdownTrigger>
            <Button variant="primary" size="md" className="gap-1.5">
              <Plus className="w-4 h-4" />
              <span>첫 위젯 추가하기</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </Button>
          </DropdownTrigger>

          <DropdownContent align="left">
            {WIDGET_OPTIONS.map((item) => {
              const Icon = item.icon;
              return (
                <DropdownItem
                  key={item.type}
                  onClick={() => handleAddWidget(item.type)}
                >
                  <Icon className="w-4 h-4 text-primary" />
                  <span>{item.title}</span>
                </DropdownItem>
              );
            })}
          </DropdownContent>
        </Dropdown>
      </div>
    );
  }

  if (filteredWidgets.length === 0) {
    return (
      <div className="border-2 border-dashed rounded-2xl p-12 text-center flex flex-col items-center justify-center space-y-4 bg-background/30 my-4">
        <div className="p-3 bg-muted text-muted-foreground rounded-xl">
          <SearchX className="w-8 h-8" />
        </div>
        <div className="space-y-1 max-w-sm">
          <h3 className="font-semibold text-base">검색 결과가 없습니다</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            필터 조건이나 검색어를 변경하여 다시 검색해보세요
          </p>
        </div>
        <Button variant="outline" size="md" onClick={resetFilter}>
          필터 조건 초기화
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
      <SortableContext items={widgetIds} strategy={rectSortingStrategy}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 items-start w-full">
          {filteredWidgets.map((widget) => (
            <SortableWidget key={widget.id} widget={widget} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};
