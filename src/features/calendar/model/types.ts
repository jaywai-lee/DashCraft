export interface ScheduleItem {
  id: string;
  title: string;
  time?: string;
  color?: string;
}

export type SchedulesMap = Record<string, ScheduleItem[]>;
