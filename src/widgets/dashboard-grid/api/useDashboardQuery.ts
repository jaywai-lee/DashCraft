import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { dashboardRepository, WidgetRow } from "./dashboardRepository";
import {
  DEFAULT_CLOCK_CONFIG,
  WIDGET_CONFIG_MAP,
} from "../config/widgets.config";
import { queryKeys } from "@/shared/config/queryKeys";
import { createOptimisticMutation } from "@/shared/lib/react-query/optimisticHelper";
import { toast } from "sonner";
import { generateNextWidgetTitle } from "../lib/generateWidgetTitle";
import { Database } from "@/shared/types/database.types";

interface AddWidgetParams {
  type: WidgetRow["type"];
  title?: string;
  color?: WidgetRow["color"];
  layout_w?: number;
  widgetId: string;
}

interface UpdateWidgetParams {
  widgetId: string;
  title?: string;
  color?: WidgetRow["color"];
  layout_w?: number;
  config?: Record<string, unknown>;
}

interface MutationContext {
  previousWidgets?: WidgetRow[];
}

export const useWidgetsQuery = () => {
  return useQuery({
    queryKey: queryKeys.widgets.list(),
    queryFn: () => dashboardRepository.fetchWidgets(),
  });
};

export const useAddWidgetMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<WidgetRow, Error, AddWidgetParams, MutationContext>({
    mutationKey: queryKeys.widgets.list(),
    mutationFn: async ({
      type,
      title: inputTitle,
      color = "default",
      layout_w = 1,
      widgetId,
    }) => {
      const targetWidgetId = widgetId || crypto.randomUUID();
      const currentWidgets =
        queryClient.getQueryData<WidgetRow[]>(queryKeys.widgets.list()) ?? [];

      const otherWidgets = currentWidgets.filter(
        (w) => w.widget_id !== targetWidgetId,
      );

      const config = WIDGET_CONFIG_MAP[type as keyof typeof WIDGET_CONFIG_MAP];
      const baseTitle = config?.title ?? "위젯";

      const finalTitle =
        inputTitle || generateNextWidgetTitle(type, otherWidgets, baseTitle);

      const maxSortOrder =
        otherWidgets.length > 0
          ? Math.max(...otherWidgets.map((w) => w.sort_order))
          : 0;
      const nextSortOrder = maxSortOrder + 1;

      const isClock = type === "clock";
      const clockConfig = isClock ? DEFAULT_CLOCK_CONFIG : {};

      return dashboardRepository.insertWidget({
        widget_id: targetWidgetId,
        type,
        title: finalTitle,
        color,
        layout_w,
        layout_h: 1,
        layout_x: 0,
        layout_y: 0,
        sort_order: nextSortOrder,
        config:
          clockConfig as unknown as Database["public"]["Tables"]["widgets"]["Insert"]["config"],
      });
    },
    onMutate: async (newWidgetParams) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.widgets.list() });

      const targetWidgetId = newWidgetParams.widgetId || crypto.randomUUID();
      newWidgetParams.widgetId = targetWidgetId;

      const previousWidgets =
        queryClient.getQueryData<WidgetRow[]>(queryKeys.widgets.list()) ?? [];

      const config =
        WIDGET_CONFIG_MAP[
          newWidgetParams.type as keyof typeof WIDGET_CONFIG_MAP
        ];
      const baseTitle = config?.title ?? "위젯";

      if (!newWidgetParams.title) {
        newWidgetParams.title = generateNextWidgetTitle(
          newWidgetParams.type,
          previousWidgets,
          baseTitle,
        );
      }

      const finalTitle = newWidgetParams.title;

      const maxSortOrder =
        previousWidgets.length > 0
          ? Math.max(...previousWidgets.map((w) => w.sort_order))
          : 0;

      const optimisticWidget: WidgetRow = {
        id: crypto.randomUUID(),
        user_id: "",
        widget_id: targetWidgetId,
        type: newWidgetParams.type,
        title: finalTitle,
        color: newWidgetParams.color ?? "default",
        layout_w: newWidgetParams.layout_w ?? 1,
        layout_h: 1,
        layout_x: 0,
        layout_y: 0,
        sort_order: maxSortOrder + 1,
        config: (newWidgetParams.type === "clock"
          ? DEFAULT_CLOCK_CONFIG
          : {}) as unknown as WidgetRow["config"],
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      queryClient.setQueryData<WidgetRow[]>(queryKeys.widgets.list(), [
        ...previousWidgets,
        optimisticWidget,
      ]);

      return { previousWidgets };
    },
    onError: (err, _variables, context) => {
      if (context?.previousWidgets) {
        queryClient.setQueryData<WidgetRow[]>(
          queryKeys.widgets.list(),
          context.previousWidgets,
        );
      }
      toast.error("위젯 추가 실패", { description: err.message });
    },
    onSettled: () => {
      if (
        queryClient.isMutating({
          mutationKey: queryKeys.widgets.list(),
        }) === 1
      ) {
        queryClient.invalidateQueries({
          queryKey: queryKeys.widgets.list(),
        });
      }
    },
  });
};

export const useUpdateWidgetMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    createOptimisticMutation<WidgetRow, UpdateWidgetParams, WidgetRow[]>({
      queryClient,
      queryKey: queryKeys.widgets.list(),
      mutationFn: ({ widgetId, title, color, layout_w, config }) =>
        dashboardRepository.updateWidget(widgetId, {
          ...(title !== undefined && { title }),
          ...(color !== undefined && { color }),
          ...(layout_w !== undefined && { layout_w }),
          ...(config !== undefined && {
            config: config as unknown as WidgetRow["config"],
          }),
        }),
      updateCache: (
        oldWidgets = [],
        { widgetId, title, color, layout_w, config },
      ) =>
        oldWidgets.map((w) => {
          if (w.widget_id !== widgetId) return w;
          return {
            ...w,
            ...(title !== undefined && { title }),
            ...(color !== undefined && { color }),
            ...(layout_w !== undefined && { layout_w }),
            ...(config !== undefined && {
              config: {
                ...(w.config as object),
                ...config,
              } as unknown as WidgetRow["config"],
            }),
          };
        }),
      errorMessage: "위젯 설정 변경 실패",
    }),
  );
};

export const useDeleteWidgetMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    createOptimisticMutation<void, string, WidgetRow[]>({
      queryClient,
      queryKey: queryKeys.widgets.list(),
      mutationFn: (widgetId: string) =>
        dashboardRepository.deleteWidget(widgetId),
      updateCache: (oldWidgets = [], widgetId) =>
        oldWidgets.filter((w) => w.widget_id !== widgetId),
      errorMessage: "위젯 삭제 실패",
    }),
  );
};

export const useReorderWidgetsMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    createOptimisticMutation<void, string[], WidgetRow[]>({
      queryClient,
      queryKey: queryKeys.widgets.list(),
      mutationFn: (widgetIds: string[]) =>
        dashboardRepository.reorderWidgets(widgetIds),
      updateCache: (oldWidgets = [], widgetIds) => {
        const widgetMap = new Map(oldWidgets.map((w) => [w.widget_id, w]));
        return widgetIds
          .map((id, index) => {
            const item = widgetMap.get(id);
            if (!item) return null;
            return { ...item, sort_order: index + 1 };
          })
          .filter((w): w is WidgetRow => w !== null);
      },
      errorMessage: "위젯 순서 변경 실패",
    }),
  );
};

export const useResetDashboardMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    createOptimisticMutation<void, void, WidgetRow[]>({
      queryClient,
      queryKey: queryKeys.widgets.list(),
      mutationFn: () => dashboardRepository.deleteAllWidgets(),
      updateCache: () => [],
      errorMessage: "대시보드 초기화 실패",
    }),
  );
};
