"use client";

import { useMemo, useCallback } from "react";
import {
  useSchedulesQuery,
  useAddScheduleMutation,
  useUpdateScheduleMutation,
  useDeleteScheduleMutation,
} from "../api/useScheduleQuery";
import { ScheduleItem } from "./types";

export const useCalendarSchedules = (
  startDateStr: string,
  endDateStr: string,
) => {
  const {
    data: schedules = [],
    isLoading,
    isError,
  } = useSchedulesQuery(startDateStr, endDateStr);

  const addScheduleMutation = useAddScheduleMutation(startDateStr, endDateStr);
  const updateScheduleMutation = useUpdateScheduleMutation(
    startDateStr,
    endDateStr,
  );
  const deleteScheduleMutation = useDeleteScheduleMutation(
    startDateStr,
    endDateStr,
  );

  const schedulesMap = useMemo(() => {
    const map = new Map<string, ScheduleItem[]>();
    schedules.forEach((item) => {
      const existing = map.get(item.date_str) ?? [];
      const mappedItem: ScheduleItem = {
        id: item.schedule_id,
        title: item.title,
        time: item.time_str ?? undefined,
      };
      map.set(item.date_str, [...existing, mappedItem]);
    });
    return map;
  }, [schedules]);

  const addSchedule = useCallback(
    (params: { dateStr: string; title: string; time?: string }) => {
      return addScheduleMutation.mutateAsync(params);
    },
    [addScheduleMutation],
  );

  const updateSchedule = useCallback(
    (params: {
      scheduleId: string;
      dateStr: string;
      title: string;
      time?: string;
    }) => {
      return updateScheduleMutation.mutateAsync(params);
    },
    [updateScheduleMutation],
  );

  const deleteSchedule = useCallback(
    (scheduleId: string) => {
      return deleteScheduleMutation.mutateAsync({ scheduleId });
    },
    [deleteScheduleMutation],
  );

  return {
    schedules,
    schedulesMap,
    isLoading,
    isError,
    addSchedule,
    updateSchedule,
    deleteSchedule,
    isSaving:
      addScheduleMutation.isPending ||
      updateScheduleMutation.isPending ||
      deleteScheduleMutation.isPending,
  };
};
