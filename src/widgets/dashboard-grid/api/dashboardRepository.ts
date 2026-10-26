import { createClient } from "@/shared/lib/client";
import { Database } from "@/shared/types/database.types";

export type WidgetRow = Database["public"]["Tables"]["widgets"]["Row"];
export type WidgetInsert = Database["public"]["Tables"]["widgets"]["Insert"];
export type WidgetUpdate = Database["public"]["Tables"]["widgets"]["Update"];

export const dashboardRepository = {
  async fetchWidgets(): Promise<WidgetRow[]> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("widgets")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error) throw error;
    return data ?? [];
  },

  async insertWidget(widget: WidgetInsert): Promise<WidgetRow> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("widgets")
      .insert(widget)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updateWidget(
    widgetId: string,
    updates: WidgetUpdate,
  ): Promise<WidgetRow> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("widgets")
      .update(updates)
      .eq("widget_id", widgetId)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deleteWidget(widgetId: string): Promise<void> {
    const supabase = createClient();
    const { error } = await supabase
      .from("widgets")
      .delete()
      .eq("widget_id", widgetId);

    if (error) throw error;
  },

  async reorderWidgets(widgetIds: string[]): Promise<void> {
    const supabase = createClient();
    const { error } = await supabase.rpc("reorder_widgets", {
      p_widget_ids: widgetIds,
    });

    if (error) throw error;
  },
};
