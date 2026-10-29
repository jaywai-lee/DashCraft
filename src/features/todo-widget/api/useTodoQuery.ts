import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { todoRepository, TodoRow } from "./todoRepository";
import { queryKeys } from "@/shared/config/queryKeys";
import { createOptimisticMutation } from "@/shared/lib/react-query/optimisticHelper";

export interface AddTodoParams {
  text: string;
  todoId?: string;
}

export const useTodosQuery = (widgetId: string) => {
  return useQuery({
    queryKey: queryKeys.todos.byWidget(widgetId),
    queryFn: () => todoRepository.fetchTodos(widgetId),
    enabled: Boolean(widgetId),
  });
};

export const useAddTodoMutation = (widgetId: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    createOptimisticMutation<TodoRow, AddTodoParams, TodoRow[]>({
      queryClient,
      queryKey: queryKeys.todos.byWidget(widgetId),
      mutationFn: async ({ text, todoId }) => {
        const targetTodoId = todoId ?? crypto.randomUUID();
        const currentTodos = (
          queryClient.getQueryData<TodoRow[]>(
            queryKeys.todos.byWidget(widgetId),
          ) ?? []
        ).filter((t) => t.todo_id !== targetTodoId);

        const nextSortOrder =
          currentTodos.length > 0
            ? Math.max(...currentTodos.map((t) => t.sort_order), 0) + 1
            : 1;

        return todoRepository.insertTodo({
          widget_id: widgetId,
          todo_id: targetTodoId,
          text,
          completed: false,
          sort_order: nextSortOrder,
        });
      },
      updateCache: (oldTodos = [], { text, todoId }) => {
        const nextSortOrder =
          oldTodos.length > 0
            ? Math.max(...oldTodos.map((t) => t.sort_order), 0) + 1
            : 1;

        const optimisticTodo: TodoRow = {
          id: crypto.randomUUID(),
          user_id: "",
          widget_id: widgetId,
          todo_id: todoId ?? crypto.randomUUID(),
          text,
          completed: false,
          sort_order: nextSortOrder,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };

        return [...oldTodos, optimisticTodo];
      },
      errorMessage: "할 일 추가 실패",
    }),
  );
};

export const useToggleTodoMutation = (widgetId: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    createOptimisticMutation<
      TodoRow,
      { todoId: string; completed: boolean },
      TodoRow[]
    >({
      queryClient,
      queryKey: queryKeys.todos.byWidget(widgetId),
      mutationFn: ({ todoId, completed }) =>
        todoRepository.updateTodo(widgetId, todoId, { completed }),
      updateCache: (oldTodos = [], { todoId, completed }) =>
        oldTodos.map((t) => (t.todo_id === todoId ? { ...t, completed } : t)),
      errorMessage: "할 일 상태 변경 실패",
    }),
  );
};

export const useUpdateTodoMutation = (widgetId: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    createOptimisticMutation<
      TodoRow,
      { todoId: string; text: string },
      TodoRow[]
    >({
      queryClient,
      queryKey: queryKeys.todos.byWidget(widgetId),
      mutationFn: ({ todoId, text }) =>
        todoRepository.updateTodo(widgetId, todoId, { text }),
      updateCache: (oldTodos = [], { todoId, text }) =>
        oldTodos.map((t) => (t.todo_id === todoId ? { ...t, text } : t)),
      errorMessage: "할 일 내용 수정 실패",
    }),
  );
};

export const useDeleteTodoMutation = (widgetId: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    createOptimisticMutation<void, string, TodoRow[]>({
      queryClient,
      queryKey: queryKeys.todos.byWidget(widgetId),
      mutationFn: (todoId: string) =>
        todoRepository.deleteTodo(widgetId, todoId),
      updateCache: (oldTodos = [], todoId) =>
        oldTodos.filter((t) => t.todo_id !== todoId),
      errorMessage: "할 일 삭제 실패",
    }),
  );
};
