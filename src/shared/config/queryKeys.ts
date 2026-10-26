export const queryKeys = {
  widgets: {
    all: ["widgets"] as const,
    list: () => [...queryKeys.widgets.all, "list"] as const,
  },
  todos: {
    all: ["todos"] as const,
    byWidget: (widgetId: string) =>
      [...queryKeys.todos.all, "widget", widgetId] as const,
  },
  memos: {
    all: ["memos"] as const,
    byWidget: (widgetId: string) =>
      [...queryKeys.memos.all, "widget", widgetId] as const,
  },
  ddays: {
    all: ["ddays"] as const,
    byWidget: (widgetId: string) =>
      [...queryKeys.ddays.all, "widget", widgetId] as const,
  },
  schedules: {
    all: ["schedules"] as const,
    range: (startDate: string, endDate: string) =>
      [...queryKeys.schedules.all, "range", startDate, endDate] as const,
  },
} as const;
