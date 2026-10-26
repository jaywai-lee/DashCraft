import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ddayRepository, DDayRow } from "./ddayRepository";
import { queryKeys } from "@/shared/config/queryKeys";
import { toast } from "sonner";

interface AddDDayParams {
  title: string;
  targetDate: string;
}

interface MutationContext {
  previousDDays?: DDayRow[];
}

export const useDDaysQuery = (widgetId: string) => {
  return useQuery({
    queryKey: queryKeys.ddays.byWidget(widgetId),
    queryFn: () => ddayRepository.fetchDDays(widgetId),
    enabled: Boolean(widgetId),
  });
};

export const useAddDDayMutation = (widgetId: string) => {
  const queryClient = useQueryClient();

  return useMutation<DDayRow, Error, AddDDayParams, MutationContext>({
    mutationFn: ({ title, targetDate }) =>
      ddayRepository.insertDDay({
        widget_id: widgetId,
        dday_id: crypto.randomUUID(),
        title,
        target_date: targetDate,
      }),
    onMutate: async ({ title, targetDate }) => {
      await queryClient.cancelQueries({
        queryKey: queryKeys.ddays.byWidget(widgetId),
      });

      const previousDDays = queryClient.getQueryData<DDayRow[]>(
        queryKeys.ddays.byWidget(widgetId),
      );

      if (previousDDays) {
        const optimisticDDay: DDayRow = {
          id: crypto.randomUUID(),
          user_id: "",
          widget_id: widgetId,
          dday_id: crypto.randomUUID(),
          title,
          target_date: targetDate,
          created_at: new Date().toISOString(),
        };

        queryClient.setQueryData<DDayRow[]>(
          queryKeys.ddays.byWidget(widgetId),
          [...previousDDays, optimisticDDay],
        );
      }

      return { previousDDays };
    },
    onError: (err, _variables, context) => {
      if (context?.previousDDays) {
        queryClient.setQueryData<DDayRow[]>(
          queryKeys.ddays.byWidget(widgetId),
          context.previousDDays,
        );
      }
      toast.error("D-Day 추가 실패", { description: err.message });
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.ddays.byWidget(widgetId),
      });
    },
  });
};

export const useDeleteDDayMutation = (widgetId: string) => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string, MutationContext>({
    mutationFn: (ddayId: string) => ddayRepository.deleteDDay(widgetId, ddayId),
    onMutate: async (ddayId) => {
      await queryClient.cancelQueries({
        queryKey: queryKeys.ddays.byWidget(widgetId),
      });

      const previousDDays = queryClient.getQueryData<DDayRow[]>(
        queryKeys.ddays.byWidget(widgetId),
      );

      if (previousDDays) {
        queryClient.setQueryData<DDayRow[]>(
          queryKeys.ddays.byWidget(widgetId),
          previousDDays.filter((d) => d.dday_id !== ddayId),
        );
      }

      return { previousDDays };
    },
    onError: (err, _ddayId, context) => {
      if (context?.previousDDays) {
        queryClient.setQueryData<DDayRow[]>(
          queryKeys.ddays.byWidget(widgetId),
          context.previousDDays,
        );
      }
      toast.error("D-Day 삭제 실패", { description: err.message });
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.ddays.byWidget(widgetId),
      });
    },
  });
};
