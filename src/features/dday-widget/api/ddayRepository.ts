import { createClient } from "@/shared/lib/client";
import { Database } from "@/shared/types/database.types";

export type DDayRow = Database["public"]["Tables"]["ddays"]["Row"];
export type DDayInsert = Database["public"]["Tables"]["ddays"]["Insert"];

export const ddayRepository = {
  async fetchDDays(widgetId: string): Promise<DDayRow[]> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("ddays")
      .select("*")
      .eq("widget_id", widgetId)
      .order("created_at", { ascending: true });

    if (error) throw error;
    return data ?? [];
  },

  async insertDDay(dday: DDayInsert): Promise<DDayRow> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("ddays")
      .insert(dday)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deleteDDay(widgetId: string, ddayId: string): Promise<void> {
    const supabase = createClient();
    const { error } = await supabase
      .from("ddays")
      .delete()
      .eq("widget_id", widgetId)
      .eq("dday_id", ddayId);

    if (error) throw error;
  },
};
