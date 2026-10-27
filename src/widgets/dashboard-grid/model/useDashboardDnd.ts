"use client";

import { useState } from "react";
import {
  DragEndEvent,
  DragStartEvent,
  closestCenter,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { WidgetRow } from "../api/dashboardRepository";
import {
  useWidgetsQuery,
  useReorderWidgetsMutation,
} from "../api/useDashboardQuery";

export const useDashboardDnD = () => {
  const { data: widgets = [] } = useWidgetsQuery();
  const reorderMutation = useReorderWidgetsMutation();

  const [activeWidget, setActiveWidget] = useState<WidgetRow | null>(null);

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 5 },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 200, tolerance: 5 },
  });

  const sensors = useSensors(pointerSensor, touchSensor);

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const foundWidget = widgets.find((w) => w.widget_id === active.id);
    if (foundWidget) {
      setActiveWidget(foundWidget);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = widgets.findIndex((w) => w.widget_id === active.id);
      const newIndex = widgets.findIndex((w) => w.widget_id === over.id);

      if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
        const reordered = arrayMove(widgets, oldIndex, newIndex);
        reorderMutation.mutate(reordered.map((w) => w.widget_id));
      }
    }

    setActiveWidget(null);
  };

  const handleDragCancel = () => {
    setActiveWidget(null);
  };

  return {
    sensors,
    localWidgets: widgets,
    activeWidget,
    handleDragStart,
    handleDragEnd,
    handleDragCancel,
    collisionDetection: closestCenter,
  };
};
