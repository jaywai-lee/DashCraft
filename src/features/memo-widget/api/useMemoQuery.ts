import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { memoRepository, MemoRow } from "./memoRepository";
import { queryKeys } from "@/shared/config/queryKeys";
import { createOptimisticMutation } from "@/shared/lib/react-query/optimisticHelper";

interface UpsertMemoParams {
  content: string;
  highlight?: MemoRow["highlight"];
}

export const useMemoQuery = (widgetId: string) => {
  return useQuery({
    queryKey: queryKeys.memos.byWidget(widgetId),
    queryFn: async () => {
      const data = await memoRepository.fetchMemo(widgetId);
      if (data) {
        return data;
      }
      return null;
    },
    enabled: Boolean(widgetId),
  });
};

export const useUpsertMemoMutation = (widgetId: string) => {
  const queryClient = useQueryClient();
  const queryKey = queryKeys.memos.byWidget(widgetId);

  return useMutation(
    createOptimisticMutation<MemoRow, UpsertMemoParams, MemoRow | null>({
      queryClient,
      queryKey,
      mutationFn: ({ content, highlight = "none" }) =>
        memoRepository.upsertMemo(widgetId, content, highlight),
      updateCache: (previousMemo, { content, highlight }) => ({
        id: previousMemo?.id ?? crypto.randomUUID(),
        user_id: previousMemo?.user_id ?? "",
        widget_id: widgetId,
        content,
        highlight: highlight ?? previousMemo?.highlight ?? "none",
        updated_at: new Date().toISOString(),
      }),
      errorMessage: "메모 저장 실패",
    }),
  );
};
