import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { scheduleRepository, ScheduleRow } from "./scheduleRepository";
import { queryKeys } from "@/shared/config/queryKeys";
import { createOptimisticMutation } from "@/shared/lib/react-query/optimisticHelper";

interface AddScheduleParams {
  dateStr: string;
  title: string;
  time?: string;
  scheduleId?: string;
}

interface UpdateScheduleParams {
  scheduleId: string;
  dateStr: string;
  title: string;
  time?: string;
}

interface DeleteScheduleParams {
  scheduleId: string;
}

export const useSchedulesQuery = (startDate: string, endDate: string) => {
  return useQuery({
    queryKey: queryKeys.schedules.range(startDate, endDate),
    queryFn: () => scheduleRepository.fetchSchedulesByRange(startDate, endDate),
    enabled: Boolean(startDate && endDate),
  });
};

export const useAddScheduleMutation = (startDate: string, endDate: string) => {
  const queryClient = useQueryClient();
  const queryKey = queryKeys.schedules.range(startDate, endDate);

  return useMutation(
    createOptimisticMutation<ScheduleRow, AddScheduleParams, ScheduleRow[]>({
      queryClient,
      queryKey,
      mutationFn: ({ dateStr, title, time, scheduleId }) =>
        scheduleRepository.insertSchedule({
          schedule_id: scheduleId ?? crypto.randomUUID(),
          date_str: dateStr,
          title,
          time_str: time ?? null,
        }),
      updateCache: (
        oldSchedules = [],
        { dateStr, title, time, scheduleId },
      ) => {
        const optimisticSchedule: ScheduleRow = {
          id: crypto.randomUUID(),
          user_id: "",
          schedule_id: scheduleId ?? crypto.randomUUID(),
          date_str: dateStr,
          title,
          time_str: time ?? null,
          color: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };
        return [...oldSchedules, optimisticSchedule];
      },
      errorMessage: "일정 추가 실패",
    }),
  );
};

export const useUpdateScheduleMutation = (
  startDate: string,
  endDate: string,
) => {
  const queryClient = useQueryClient();
  const queryKey = queryKeys.schedules.range(startDate, endDate);

  return useMutation(
    createOptimisticMutation<ScheduleRow, UpdateScheduleParams, ScheduleRow[]>({
      queryClient,
      queryKey,
      mutationFn: ({ scheduleId, title, time }) =>
        scheduleRepository.updateSchedule(scheduleId, {
          title,
          time_str: time ?? null,
        }),
      updateCache: (oldSchedules = [], { scheduleId, title, time }) =>
        oldSchedules.map((s) =>
          s.schedule_id === scheduleId
            ? { ...s, title, time_str: time ?? null }
            : s,
        ),
      errorMessage: "일정 수정 실패",
    }),
  );
};

export const useDeleteScheduleMutation = (
  startDate: string,
  endDate: string,
) => {
  const queryClient = useQueryClient();
  const queryKey = queryKeys.schedules.range(startDate, endDate);

  return useMutation(
    createOptimisticMutation<void, DeleteScheduleParams, ScheduleRow[]>({
      queryClient,
      queryKey,
      mutationFn: ({ scheduleId }) =>
        scheduleRepository.deleteSchedule(scheduleId),
      updateCache: (oldSchedules = [], { scheduleId }) =>
        oldSchedules.filter((s) => s.schedule_id !== scheduleId),
      errorMessage: "일정 삭제 실패",
    }),
  );
};
