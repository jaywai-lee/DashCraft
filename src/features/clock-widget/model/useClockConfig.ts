"use client";

import { useCallback, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  dashboardRepository,
  WidgetRow,
} from "@/widgets/dashboard-grid/api/dashboardRepository";
import { useUpdateWidgetMutation } from "@/widgets/dashboard-grid/api/useDashboardQuery";
import { parseClockConfig } from "@/widgets/dashboard-grid/model/widgetSchemas";
import { queryKeys } from "@/shared/config/queryKeys";
import { requestNotificationPermission } from "../lib/audioNotifier";
import { toast } from "sonner";

export const useClockConfig = (widgetId: string) => {
  const { data: widgetConfig } = useQuery({
    queryKey: queryKeys.widgets.list(),
    queryFn: () => dashboardRepository.fetchWidgets(),
    select: useCallback(
      (widgets: WidgetRow[]) =>
        widgets.find((w) => w.widget_id === widgetId)?.config,
      [widgetId],
    ),
  });

  const updateWidgetMutation = useUpdateWidgetMutation();

  const rawConfig = useMemo(
    () =>
      widgetConfig &&
      typeof widgetConfig === "object" &&
      !Array.isArray(widgetConfig)
        ? (widgetConfig as Record<string, unknown>)
        : {},
    [widgetConfig],
  );

  const validatedConfig = useMemo(
    () => parseClockConfig(widgetConfig),
    [widgetConfig],
  );

  const { workDuration, breakDuration, isSoundEnabled, isNotificationEnabled } =
    validatedConfig;

  const toggleSound = useCallback(() => {
    updateWidgetMutation.mutate({
      widgetId,
      config: {
        ...rawConfig,
        isSoundEnabled: !isSoundEnabled,
      },
    });
  }, [isSoundEnabled, updateWidgetMutation, widgetId, rawConfig]);

  const handleNotificationToggle = useCallback(async () => {
    if (!isNotificationEnabled) {
      const granted = await requestNotificationPermission();
      if (granted) {
        updateWidgetMutation.mutate({
          widgetId,
          config: {
            ...rawConfig,
            isNotificationEnabled: true,
          },
        });
        toast.success("브라우저 알림이 활성화되었습니다.");
      } else {
        toast.warning("브라우저 설정에서 알림 권한을 허용해 주세요.");
      }
    } else {
      updateWidgetMutation.mutate({
        widgetId,
        config: {
          ...rawConfig,
          isNotificationEnabled: false,
        },
      });
      toast.info("브라우저 알림이 비활성화되었습니다.");
    }
  }, [isNotificationEnabled, updateWidgetMutation, widgetId, rawConfig]);

  return {
    workDuration,
    breakDuration,
    isSoundEnabled,
    isNotificationEnabled,
    rawConfig,
    toggleSound,
    handleNotificationToggle,
  };
};
