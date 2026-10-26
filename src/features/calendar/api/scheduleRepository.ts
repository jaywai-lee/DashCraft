import { createClient } from "@/shared/lib/client";
import { Database } from "@/shared/types/database.types";

export type ScheduleRow = Database["public"]["Tables"]["schedules"]["Row"];
export type ScheduleInsert =
  Database["public"]["Tables"]["schedules"]["Insert"];
export type ScheduleUpdate =
  Database["public"]["Tables"]["schedules"]["Update"];

export const scheduleRepository = {
  async fetchSchedulesByRange(
    startDate: string,
    endDate: string,
  ): Promise<ScheduleRow[]> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("schedules")
      .select("*")
      .gte("date_str", startDate)
      .lte("date_str", endDate)
      .order("time_str", { ascending: true, nullsFirst: true });

    if (error) throw error;
    return data ?? [];
  },

  async insertSchedule(schedule: ScheduleInsert): Promise<ScheduleRow> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("schedules")
      .insert(schedule)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updateSchedule(
    scheduleId: string,
    updates: ScheduleUpdate,
  ): Promise<ScheduleRow> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("schedules")
      .update(updates)
      .eq("schedule_id", scheduleId)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deleteSchedule(scheduleId: string): Promise<void> {
    const supabase = createClient();
    const { error } = await supabase
      .from("schedules")
      .delete()
      .eq("schedule_id", scheduleId);

    if (error) throw error;
  },
};
