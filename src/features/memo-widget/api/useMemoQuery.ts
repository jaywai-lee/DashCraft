import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { memoRepository, MemoRow } from "./memoRepository";
import { queryKeys } from "@/shared/config/queryKeys";
import { sanitizeMemoHtml } from "@/shared/lib/sanitize";
import { toast } from "sonner";

interface UpsertMemoParams {
  widgetId: string;
  content: string;
  highlight?: MemoRow["highlight"];
}

export const useMemoQuery = (widgetId: string) => {
  return useQuery({
    queryKey: queryKeys.memos.byWidget(widgetId),
    queryFn: async () => {
      const data = await memoRepository.fetchMemo(widgetId);
      if (data) {
        return {
          ...data,
          content: sanitizeMemoHtml(data.content),
        };
      }
      return null;
    },
    enabled: Boolean(widgetId),
  });
};

export const useUpsertMemoMutation = (widgetId: string) => {
  const queryClient = useQueryClient();

  return useMutation<MemoRow, Error, UpsertMemoParams>({
    mutationKey: queryKeys.memos.byWidget(widgetId),
    mutationFn: ({ content, highlight = "none" }) => {
      const sanitizedContent = sanitizeMemoHtml(content);
      return memoRepository.upsertMemo(widgetId, sanitizedContent, highlight);
    },
    onMutate: async ({ content, highlight }) => {
      await queryClient.cancelQueries({
        queryKey: queryKeys.memos.byWidget(widgetId),
      });

      const previousMemo = queryClient.getQueryData<MemoRow | null>(
        queryKeys.memos.byWidget(widgetId),
      );

      const sanitized = sanitizeMemoHtml(content);

      const optimisticMemo: MemoRow = {
        id: previousMemo?.id ?? crypto.randomUUID(),
        user_id: previousMemo?.user_id ?? "",
        widget_id: widgetId,
        content: sanitized,
        highlight: highlight ?? previousMemo?.highlight ?? "none",
        updated_at: new Date().toISOString(),
      };

      queryClient.setQueryData<MemoRow | null>(
        queryKeys.memos.byWidget(widgetId),
        optimisticMemo,
      );

      return { previousMemo };
    },
    onError: (err) => {
      toast.error("메모 저장 실패", {
        description: "입력 내용을 다시 확인해주세요: " + err.message,
      });
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
