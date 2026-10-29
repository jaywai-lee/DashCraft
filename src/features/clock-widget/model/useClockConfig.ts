"use client";

import { useCallback, useMemo } from "react";
import {
  useWidgetsQuery,
  useUpdateWidgetMutation,
} from "@/widgets/dashboard-grid/api/useDashboardQuery";
import { DEFAULT_CLOCK_CONFIG } from "@/widgets/dashboard-grid/config/widgets.config";
import { requestNotificationPermission } from "../lib/audioNotifier";
import { toast } from "sonner";

export const useClockConfig = (widgetId: string) => {
  const { data: widgets = [] } = useWidgetsQuery();
  const updateWidgetMutation = useUpdateWidgetMutation();

  const currentWidget = widgets.find((w) => w.widget_id === widgetId);

  const rawConfig = useMemo(
    () => (currentWidget?.config as Record<string, unknown>) ?? {},
    [currentWidget?.config],
  );

  const workDuration =
    typeof rawConfig.workDuration === "number"
      ? rawConfig.workDuration
      : DEFAULT_CLOCK_CONFIG.workDuration;

  const breakDuration =
    typeof rawConfig.breakDuration === "number"
      ? rawConfig.breakDuration
      : DEFAULT_CLOCK_CONFIG.breakDuration;

  const isSoundEnabled =
    typeof rawConfig.isSoundEnabled === "boolean"
      ? rawConfig.isSoundEnabled
      : DEFAULT_CLOCK_CONFIG.isSoundEnabled;

  const isNotificationEnabled =
    typeof rawConfig.isNotificationEnabled === "boolean"
      ? rawConfig.isNotificationEnabled
      : DEFAULT_CLOCK_CONFIG.isNotificationEnabled;

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
