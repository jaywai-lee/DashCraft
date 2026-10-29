import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ddayRepository, DDayRow } from "./ddayRepository";
import { queryKeys } from "@/shared/config/queryKeys";
import { createOptimisticMutation } from "@/shared/lib/react-query/optimisticHelper";

interface AddDDayParams {
  title: string;
  targetDate: string;
  ddayId?: string;
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
  const queryKey = queryKeys.ddays.byWidget(widgetId);

  return useMutation(
    createOptimisticMutation<DDayRow, AddDDayParams, DDayRow[]>({
      queryClient,
      queryKey,
      mutationFn: ({ title, targetDate, ddayId }) =>
        ddayRepository.insertDDay({
          widget_id: widgetId,
          dday_id: ddayId ?? crypto.randomUUID(),
          title,
          target_date: targetDate,
        }),
      updateCache: (oldDDays = [], { title, targetDate, ddayId }) => {
        const optimisticDDay: DDayRow = {
          id: crypto.randomUUID(),
          user_id: "",
          widget_id: widgetId,
          dday_id: ddayId ?? crypto.randomUUID(),
          title,
          target_date: targetDate,
          created_at: new Date().toISOString(),
        };
        return [...oldDDays, optimisticDDay];
      },
      errorMessage: "D-Day 추가 실패",
    }),
  );
};

export const useDeleteDDayMutation = (widgetId: string) => {
  const queryClient = useQueryClient();
  const queryKey = queryKeys.ddays.byWidget(widgetId);

  return useMutation(
    createOptimisticMutation<void, string, DDayRow[]>({
      queryClient,
      queryKey,
      mutationFn: (ddayId: string) =>
        ddayRepository.deleteDDay(widgetId, ddayId),
      updateCache: (oldDDays = [], ddayId) =>
        oldDDays.filter((d) => d.dday_id !== ddayId),
      errorMessage: "D-Day 삭제 실패",
    }),
  );
};
