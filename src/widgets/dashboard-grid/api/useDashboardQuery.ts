import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { dashboardRepository, WidgetRow } from "./dashboardRepository";
import { DEFAULT_CLOCK_CONFIG } from "../config/widgets.config";
import { Database } from "@/shared/types/database.types";
import { toast } from "sonner";

export const DASHBOARD_QUERY_KEYS = {
  widgets: ["widgets"] as const,
};

interface AddWidgetParams {
  type: WidgetRow["type"];
  title: string;
  color?: WidgetRow["color"];
  layout_w?: number;
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
    queryKey: DASHBOARD_QUERY_KEYS.widgets,
    queryFn: () => dashboardRepository.fetchWidgets(),
  });
};

export const useAddWidgetMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<WidgetRow, Error, AddWidgetParams, MutationContext>({
    mutationFn: async ({ type, title, color = "default", layout_w = 1 }) => {
      const currentWidgets =
        queryClient.getQueryData<WidgetRow[]>(DASHBOARD_QUERY_KEYS.widgets) ??
        [];

      const maxSortOrder =
        currentWidgets.length > 0
          ? Math.max(...currentWidgets.map((w) => w.sort_order))
          : 0;
      const nextSortOrder = maxSortOrder + 1;
      const widgetId = crypto.randomUUID();

      const isClock = type === "clock";
      const config = isClock ? DEFAULT_CLOCK_CONFIG : {};

      return dashboardRepository.insertWidget({
        widget_id: widgetId,
        type,
        title,
        color,
        layout_w,
        layout_h: 1,
        layout_x: 0,
        layout_y: 0,
        sort_order: nextSortOrder,
        config:
          config as unknown as Database["public"]["Tables"]["widgets"]["Insert"]["config"],
      });
    },
    onMutate: async (newWidgetParams) => {
      await queryClient.cancelQueries({
        queryKey: DASHBOARD_QUERY_KEYS.widgets,
      });

      const previousWidgets = queryClient.getQueryData<WidgetRow[]>(
        DASHBOARD_QUERY_KEYS.widgets,
      );

      if (previousWidgets) {
        const maxSortOrder =
          previousWidgets.length > 0
            ? Math.max(...previousWidgets.map((w) => w.sort_order))
            : 0;

        const optimisticWidget: WidgetRow = {
          id: crypto.randomUUID(),
          user_id: "",
          widget_id: crypto.randomUUID(),
          type: newWidgetParams.type,
          title: newWidgetParams.title,
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

        queryClient.setQueryData<WidgetRow[]>(DASHBOARD_QUERY_KEYS.widgets, [
          ...previousWidgets,
          optimisticWidget,
        ]);
      }

      return { previousWidgets };
    },
    onError: (err, _variables, context) => {
      if (context?.previousWidgets) {
        queryClient.setQueryData<WidgetRow[]>(
          DASHBOARD_QUERY_KEYS.widgets,
          context.previousWidgets,
        );
      }
      toast.error("위젯 추가 실패", { description: err.message });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: DASHBOARD_QUERY_KEYS.widgets });
    },
  });
};

export const useUpdateWidgetMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<WidgetRow, Error, UpdateWidgetParams, MutationContext>({
    mutationFn: async ({ widgetId, title, color, layout_w, config }) => {
      return dashboardRepository.updateWidget(widgetId, {
        ...(title !== undefined && { title }),
        ...(color !== undefined && { color }),
        ...(layout_w !== undefined && { layout_w }),
        ...(config !== undefined && {
          config:
            config as unknown as Database["public"]["Tables"]["widgets"]["Update"]["config"],
        }),
      });
    },
    onMutate: async ({ widgetId, title, color, layout_w, config }) => {
      await queryClient.cancelQueries({
        queryKey: DASHBOARD_QUERY_KEYS.widgets,
      });

      const previousWidgets = queryClient.getQueryData<WidgetRow[]>(
        DASHBOARD_QUERY_KEYS.widgets,
      );

      if (previousWidgets) {
        queryClient.setQueryData<WidgetRow[]>(
          DASHBOARD_QUERY_KEYS.widgets,
          previousWidgets.map((w) => {
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
        );
      }

      return { previousWidgets };
    },
    onError: (err, _variables, context) => {
      if (context?.previousWidgets) {
        queryClient.setQueryData<WidgetRow[]>(
          DASHBOARD_QUERY_KEYS.widgets,
          context.previousWidgets,
        );
      }
      toast.error("위젯 수정 실패", { description: err.message });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: DASHBOARD_QUERY_KEYS.widgets });
    },
  });
};

export const useDeleteWidgetMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string, MutationContext>({
    mutationFn: (widgetId: string) =>
      dashboardRepository.deleteWidget(widgetId),
    onMutate: async (widgetId) => {
      await queryClient.cancelQueries({
        queryKey: DASHBOARD_QUERY_KEYS.widgets,
      });

      const previousWidgets = queryClient.getQueryData<WidgetRow[]>(
        DASHBOARD_QUERY_KEYS.widgets,
      );

      if (previousWidgets) {
        queryClient.setQueryData<WidgetRow[]>(
          DASHBOARD_QUERY_KEYS.widgets,
          previousWidgets.filter((w) => w.widget_id !== widgetId),
        );
      }

      return { previousWidgets };
    },
    onError: (err, _variables, context) => {
      if (context?.previousWidgets) {
        queryClient.setQueryData<WidgetRow[]>(
          DASHBOARD_QUERY_KEYS.widgets,
          context.previousWidgets,
        );
      }
      toast.error("위젯 삭제 실패", { description: err.message });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: DASHBOARD_QUERY_KEYS.widgets });
    },
  });
};

export const useReorderWidgetsMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string[], MutationContext>({
    mutationFn: (widgetIds: string[]) =>
      dashboardRepository.reorderWidgets(widgetIds),
    onMutate: async (widgetIds) => {
      await queryClient.cancelQueries({
        queryKey: DASHBOARD_QUERY_KEYS.widgets,
      });

      const previousWidgets = queryClient.getQueryData<WidgetRow[]>(
        DASHBOARD_QUERY_KEYS.widgets,
      );

      if (previousWidgets) {
        const widgetMap = new Map(previousWidgets.map((w) => [w.widget_id, w]));
        const reordered = widgetIds
          .map((id, index) => {
            const item = widgetMap.get(id);
            if (!item) return null;
            return { ...item, sort_order: index + 1 };
          })
          .filter((w): w is WidgetRow => w !== null);

        queryClient.setQueryData<WidgetRow[]>(
          DASHBOARD_QUERY_KEYS.widgets,
          reordered,
        );
      }

      return { previousWidgets };
    },
    onError: (err, _variables, context) => {
      if (context?.previousWidgets) {
        queryClient.setQueryData<WidgetRow[]>(
          DASHBOARD_QUERY_KEYS.widgets,
          context.previousWidgets,
        );
      }
      toast.error("위젯 순서 변경 실패", { description: err.message });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: DASHBOARD_QUERY_KEYS.widgets });
    },
  });
};
