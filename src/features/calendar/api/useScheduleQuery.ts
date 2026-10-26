import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { scheduleRepository, ScheduleRow } from "./scheduleRepository";
import { queryKeys } from "@/shared/config/queryKeys";
import { toast } from "sonner";

interface AddScheduleParams {
  dateStr: string;
  title: string;
  time?: string;
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

interface MutationContext {
  previousSchedules?: ScheduleRow[];
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

  return useMutation<ScheduleRow, Error, AddScheduleParams, MutationContext>({
    mutationFn: ({ dateStr, title, time }) =>
      scheduleRepository.insertSchedule({
        schedule_id: crypto.randomUUID(),
        date_str: dateStr,
        title,
        time_str: time ?? null,
      }),
    onMutate: async ({ dateStr, title, time }) => {
      await queryClient.cancelQueries({
        queryKey: queryKeys.schedules.range(startDate, endDate),
      });

      const previousSchedules = queryClient.getQueryData<ScheduleRow[]>(
        queryKeys.schedules.range(startDate, endDate),
      );

      if (previousSchedules) {
        const optimisticSchedule: ScheduleRow = {
          id: crypto.randomUUID(),
          user_id: "",
          schedule_id: crypto.randomUUID(),
          date_str: dateStr,
          title,
          time_str: time ?? null,
          color: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };

        queryClient.setQueryData<ScheduleRow[]>(
          queryKeys.schedules.range(startDate, endDate),
          [...previousSchedules, optimisticSchedule],
        );
      }

      return { previousSchedules };
    },
    onError: (err, _variables, context) => {
      if (context?.previousSchedules) {
        queryClient.setQueryData<ScheduleRow[]>(
          queryKeys.schedules.range(startDate, endDate),
          context.previousSchedules,
        );
      }
      toast.error("일정 추가 실패", { description: err.message });
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.schedules.all,
      });
    },
  });
};

export const useUpdateScheduleMutation = (
  startDate: string,
  endDate: string,
) => {
  const queryClient = useQueryClient();

  return useMutation<ScheduleRow, Error, UpdateScheduleParams, MutationContext>(
    {
      mutationFn: ({ scheduleId, title, time }) =>
        scheduleRepository.updateSchedule(scheduleId, {
          title,
          time_str: time ?? null,
        }),
      onMutate: async ({ scheduleId, title, time }) => {
        await queryClient.cancelQueries({
          queryKey: queryKeys.schedules.range(startDate, endDate),
        });

        const previousSchedules = queryClient.getQueryData<ScheduleRow[]>(
          queryKeys.schedules.range(startDate, endDate),
        );

        if (previousSchedules) {
          queryClient.setQueryData<ScheduleRow[]>(
            queryKeys.schedules.range(startDate, endDate),
            previousSchedules.map((s) =>
              s.schedule_id === scheduleId
                ? { ...s, title, time_str: time ?? null }
                : s,
            ),
          );
        }

        return { previousSchedules };
      },
      onError: (err, _variables, context) => {
        if (context?.previousSchedules) {
          queryClient.setQueryData<ScheduleRow[]>(
            queryKeys.schedules.range(startDate, endDate),
            context.previousSchedules,
          );
        }
        toast.error("일정 수정 실패", { description: err.message });
      },
      onSettled: () => {
        queryClient.invalidateQueries({
          queryKey: queryKeys.schedules.all,
        });
      },
    },
  );
};

export const useDeleteScheduleMutation = (
  startDate: string,
  endDate: string,
) => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, DeleteScheduleParams, MutationContext>({
    mutationFn: ({ scheduleId }) =>
      scheduleRepository.deleteSchedule(scheduleId),
    onMutate: async ({ scheduleId }) => {
      await queryClient.cancelQueries({
        queryKey: queryKeys.schedules.range(startDate, endDate),
      });

      const previousSchedules = queryClient.getQueryData<ScheduleRow[]>(
        queryKeys.schedules.range(startDate, endDate),
      );

      if (previousSchedules) {
        queryClient.setQueryData<ScheduleRow[]>(
          queryKeys.schedules.range(startDate, endDate),
          previousSchedules.filter((s) => s.schedule_id !== scheduleId),
        );
      }

      return { previousSchedules };
    },
    onError: (err, _variables, context) => {
      if (context?.previousSchedules) {
        queryClient.setQueryData<ScheduleRow[]>(
          queryKeys.schedules.range(startDate, endDate),
          context.previousSchedules,
        );
      }
      toast.error("일정 삭제 실패", { description: err.message });
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.schedules.all,
      });
    },
  });
};
