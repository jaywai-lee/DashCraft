import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { memoRepository, MemoRow } from "./memoRepository";
import { queryKeys } from "@/shared/config/queryKeys";
import { toast } from "sonner";

interface UpsertMemoParams {
  content: string;
  highlight?: MemoRow["highlight"];
}

interface MutationContext {
  previousMemo?: MemoRow | null;
}

export const useMemoQuery = (widgetId: string) => {
  return useQuery({
    queryKey: queryKeys.memos.byWidget(widgetId),
    queryFn: () => memoRepository.fetchMemo(widgetId),
    enabled: Boolean(widgetId),
  });
};

export const useUpsertMemoMutation = (widgetId: string) => {
  const queryClient = useQueryClient();

  return useMutation<MemoRow, Error, UpsertMemoParams, MutationContext>({
    mutationKey: queryKeys.memos.byWidget(widgetId),
    mutationFn: ({ content, highlight = "none" }) =>
      memoRepository.upsertMemo(widgetId, content, highlight),
    onMutate: async ({ content, highlight = "none" }) => {
      await queryClient.cancelQueries({
        queryKey: queryKeys.memos.byWidget(widgetId),
      });

      const previousMemo = queryClient.getQueryData<MemoRow | null>(
        queryKeys.memos.byWidget(widgetId),
      );

      const optimisticMemo: MemoRow = {
        id: previousMemo?.id ?? crypto.randomUUID(),
        user_id: previousMemo?.user_id ?? "",
        widget_id: widgetId,
        content,
        highlight,
        updated_at: new Date().toISOString(),
      };

      queryClient.setQueryData<MemoRow | null>(
        queryKeys.memos.byWidget(widgetId),
        optimisticMemo,
      );

      return { previousMemo };
    },
    onError: (err, _variables, context) => {
      if (context?.previousMemo !== undefined) {
        queryClient.setQueryData<MemoRow | null>(
          queryKeys.memos.byWidget(widgetId),
          context.previousMemo,
        );
      }
      toast.error("메모 저장 실패", { description: err.message });
    },
    onSettled: () => {
      if (
        queryClient.isMutating({
          mutationKey: queryKeys.memos.byWidget(widgetId),
        }) === 1
      ) {
        queryClient.invalidateQueries({
          queryKey: queryKeys.memos.byWidget(widgetId),
        });
      }
    },
  });
};
