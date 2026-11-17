import { z } from "zod";
import { DEFAULT_CLOCK_CONFIG } from "../config/widgets.config";
import type { WidgetRow } from "../api/dashboardRepository";

export const widgetTypeSchema = z.enum(["todo", "clock", "dday", "memo"]);

export const widgetColorSchema = z.enum([
  "default",
  "blue",
  "green",
  "yellow",
  "purple",
  "red",
]);

export const clockConfigSchema = z.object({
  workDuration: z
    .number()
    .int()
    .min(60)
    .max(7200)
    .catch(DEFAULT_CLOCK_CONFIG.workDuration),
  breakDuration: z
    .number()
    .int()
    .min(60)
    .max(3600)
    .catch(DEFAULT_CLOCK_CONFIG.breakDuration),
  isSoundEnabled: z.boolean().catch(DEFAULT_CLOCK_CONFIG.isSoundEnabled),
  isNotificationEnabled: z
    .boolean()
    .catch(DEFAULT_CLOCK_CONFIG.isNotificationEnabled),
});

export type ValidatedClockConfig = z.infer<typeof clockConfigSchema>;

const widgetLayoutWidthSchema = z.union([z.literal(1), z.literal(2)]).catch(1);

const widgetRowValidationSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  widget_id: z.string().min(1),
  type: widgetTypeSchema,
  title: z.string().min(1).max(60).catch("위젯"),
  color: widgetColorSchema.catch("default"),
  layout_w: widgetLayoutWidthSchema,
  layout_h: z.number().int().min(1).catch(1),
  layout_x: z.number().int().min(0).catch(0),
  layout_y: z.number().int().min(0).catch(0),
  sort_order: z.number().int().catch(0),
  config: z.record(z.string(), z.unknown()).nullable().catch({}),
  created_at: z.string(),
  updated_at: z.string(),
});

export const parseClockConfig = (rawConfig: unknown): ValidatedClockConfig => {
  if (!rawConfig || typeof rawConfig !== "object" || Array.isArray(rawConfig)) {
    return { ...DEFAULT_CLOCK_CONFIG };
  }
  return clockConfigSchema.parse(rawConfig);
};

export const parseWidgetRows = (rows: unknown[]): WidgetRow[] => {
  return rows.reduce<WidgetRow[]>((acc, row) => {
    const parsed = widgetRowValidationSchema.safeParse(row);
    if (parsed.success) {
      acc.push(parsed.data as WidgetRow);
    }
    return acc;
  }, []);
};
