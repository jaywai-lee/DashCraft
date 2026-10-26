import { createClient } from "@/shared/lib/client";
import { Database } from "@/shared/types/database.types";

export type MemoRow = Database["public"]["Tables"]["memos"]["Row"];

export const memoRepository = {
  async fetchMemo(widgetId: string): Promise<MemoRow | null> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("memos")
      .select("*")
      .eq("widget_id", widgetId)
      .maybeSingle();

    if (error) throw error;
    return data;
  },

  async upsertMemo(
    widgetId: string,
    content: string,
    highlight: MemoRow["highlight"] = "none",
  ): Promise<MemoRow> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("memos")
      .upsert(
        {
          widget_id: widgetId,
          content,
          highlight,
        },
        { onConflict: "user_id,widget_id" },
      )
      .select()
      .single();

    if (error) throw error;
    return data;
  },
};
