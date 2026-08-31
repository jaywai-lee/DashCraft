"use client";

import { useEffect, useRef, useState } from "react";
import {
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  pointerWithin,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { toast } from "sonner";
import { Widget } from "@/entities/widget/model/types";
import { useDashboardStore } from "./useDashboardStore";

const RAPID_SWAP_THRESHOLD = 6;
const RESET_INTERVAL_MS = 400;

export const useDashboardDnD = () => {
  const { widgets, setWidgets } = useDashboardStore();
  const [localWidgets, setLocalWidgets] = useState<Widget[]>(widgets);
  const [activeWidget, setActiveWidget] = useState<Widget | null>(null);

  const lastOverIdRef = useRef<string | number | null>(null);

  const swapCountRef = useRef<number>(0);
  const lastResetTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    setLocalWidgets(widgets);
  }, [widgets]);

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 5 },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 200,
      tolerance: 5,
    },
  });

  const sensors = useSensors(pointerSensor, touchSensor);

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const foundWidget = localWidgets.find((w) => w.id === active.id);
    if (foundWidget) {
      setActiveWidget(foundWidget);
      lastOverIdRef.current = active.id;
      swapCountRef.current = 0;
      lastResetTimeRef.current = Date.now();
    }
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    if (lastOverIdRef.current === over.id) return;

    const now = Date.now();
    if (now - lastResetTimeRef.current > RESET_INTERVAL_MS) {
      swapCountRef.current = 0;
      lastResetTimeRef.current = now;
    }

    swapCountRef.current += 1;

    if (swapCountRef.current > RAPID_SWAP_THRESHOLD) {
      toast.warning("과도한 움직임이 감지되었습니다.", {
        id: "dnd-rapid-warning",
      });
      handleDragCancel();
      return;
    }

    const oldIndex = localWidgets.findIndex((w) => w.id === active.id);
    const newIndex = localWidgets.findIndex((w) => w.id === over.id);

    if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
      lastOverIdRef.current = over.id;
      setLocalWidgets((prev) => arrayMove(prev, oldIndex, newIndex));
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = localWidgets.findIndex((w) => w.id === active.id);
      const newIndex = localWidgets.findIndex((w) => w.id === over.id);

      if (oldIndex !== -1 && newIndex !== -1) {
        const updated = arrayMove(localWidgets, oldIndex, newIndex);
        setWidgets(updated);
      } else {
        setWidgets(localWidgets);
      }
    } else {
      setWidgets(localWidgets);
    }

    setActiveWidget(null);
    lastOverIdRef.current = null;
    swapCountRef.current = 0;
  };

  const handleDragCancel = () => {
    setLocalWidgets(widgets);
    setActiveWidget(null);
    lastOverIdRef.current = null;
    swapCountRef.current = 0;
  };

  return {
    sensors,
    localWidgets,
    activeWidget,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    handleDragCancel,
    collisionDetection: pointerWithin,
  };
};
