import { createClient } from "@/shared/lib/client";
import { Database } from "@/shared/types/database.types";

export type TodoRow = Database["public"]["Tables"]["todos"]["Row"];
export type TodoInsert = Database["public"]["Tables"]["todos"]["Insert"];
export type TodoUpdate = Database["public"]["Tables"]["todos"]["Update"];

export const todoRepository = {
  async fetchTodos(widgetId: string): Promise<TodoRow[]> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("todos")
      .select("*")
      .eq("widget_id", widgetId)
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: true });

    if (error) throw error;
    return data ?? [];
  },

  async insertTodo(todo: TodoInsert): Promise<TodoRow> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("todos")
      .insert(todo)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updateTodo(
    widgetId: string,
    todoId: string,
    updates: Partial<Pick<TodoRow, "text" | "completed" | "sort_order">>,
  ): Promise<TodoRow> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("todos")
      .update(updates)
      .eq("widget_id", widgetId)
      .eq("todo_id", todoId)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deleteTodo(widgetId: string, todoId: string): Promise<void> {
    const supabase = createClient();
    const { error } = await supabase
      .from("todos")
      .delete()
      .eq("widget_id", widgetId)
      .eq("todo_id", todoId);

    if (error) throw error;
  },
};
