"use client";

import { useState, useCallback } from "react";
import { ScheduleRow } from "../api/scheduleRepository";

interface ModalState {
  isOpen: boolean;
  selectedDateStr: string;
  scheduleToEdit: ScheduleRow | null;
}

export const useScheduleModal = () => {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    selectedDateStr: "",
    scheduleToEdit: null,
  });

  const openAddModal = useCallback((dateStr: string) => {
    setModalState({
      isOpen: true,
      selectedDateStr: dateStr,
      scheduleToEdit: null,
    });
  }, []);

  const openEditModal = useCallback((schedule: ScheduleRow) => {
    setModalState({
      isOpen: true,
      selectedDateStr: schedule.date_str,
      scheduleToEdit: schedule,
    });
  }, []);

  const closeModal = useCallback(() => {
    setModalState((prev) => ({
      ...prev,
      isOpen: false,
      scheduleToEdit: null,
    }));
  }, []);

  return {
    isOpen: modalState.isOpen,
    selectedDateStr: modalState.selectedDateStr,
    scheduleToEdit: modalState.scheduleToEdit,
    openAddModal,
    openEditModal,
    closeModal,
  };
};
