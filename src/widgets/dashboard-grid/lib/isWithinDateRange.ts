import { DateRangePreset } from "@/features/dashboard-filter/model/useFilterStore";

export const isWithinDateRange = (
  createdAtStr?: string,
  preset: DateRangePreset = "all",
  startDateStr: string | null = null,
  endDateStr: string | null = null,
) => {
  if (preset === "all" || !createdAtStr) return true;
  const createdTime = new Date(createdAtStr).getTime();
  const now = new Date();

  if (preset === "today") {
    const startOfToday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
    ).getTime();
    return createdTime >= startOfToday;
  }

  if (preset === "week") {
    const sevenDaysAgo = now.getTime() - 7 * 24 * 60 * 60 * 1000;
    return createdTime >= sevenDaysAgo;
  }

  if (preset === "month") {
    const thirtyDaysAgo = now.getTime() - 30 * 24 * 60 * 60 * 1000;
    return createdTime >= thirtyDaysAgo;
  }

  if (preset === "custom") {
    if (startDateStr) {
      const start = new Date(startDateStr);
      start.setHours(0, 0, 0, 0);
      if (createdTime < start.getTime()) return false;
    }

    if (endDateStr) {
      const end = new Date(endDateStr);
      end.setHours(23, 59, 59, 999);
      if (createdTime > end.getTime()) return false;
    }

    return true;
  }

  return true;
};
