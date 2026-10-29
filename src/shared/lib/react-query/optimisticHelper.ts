import { QueryClient, UseMutationOptions } from "@tanstack/react-query";
import { toast } from "sonner";

export interface OptimisticMutationConfig<TData, TVariables, TQueryData> {
  queryClient: QueryClient;
  queryKey: readonly unknown[];
  mutationFn: (variables: TVariables) => Promise<TData>;
  updateCache: (
    oldData: TQueryData | undefined,
    variables: TVariables,
  ) => TQueryData;
  errorMessage?: string;
}

export interface MutationContext<TQueryData> {
  previousData?: TQueryData;
}

export function createOptimisticMutation<TData, TVariables, TQueryData>({
  queryClient,
  queryKey,
  mutationFn,
  updateCache,
  errorMessage = "요청 처리 실패",
}: OptimisticMutationConfig<TData, TVariables, TQueryData>): UseMutationOptions<
  TData,
  Error,
  TVariables,
  MutationContext<TQueryData>
> {
  return {
    mutationFn,
    onMutate: async (variables: TVariables) => {
      await queryClient.cancelQueries({ queryKey });

      const previousData = queryClient.getQueryData<TQueryData>(queryKey);

      queryClient.setQueryData<TQueryData>(queryKey, (old) =>
        updateCache(old, variables),
      );

      return { previousData };
    },
    onError: (err, _variables, context) => {
      if (context?.previousData !== undefined) {
        queryClient.setQueryData<TQueryData>(queryKey, context.previousData);
      }
      toast.error(errorMessage, { description: err.message });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  };
}
