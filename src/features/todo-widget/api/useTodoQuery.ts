import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { todoRepository, TodoRow } from "./todoRepository";
import { queryKeys } from "@/shared/config/queryKeys";
import { toast } from "sonner";

interface AddTodoParams {
  text: string;
  todoId: string;
}

interface UpdateTodoParams {
  todoId: string;
  completed?: boolean;
  text?: string;
}

interface MutationContext {
  previousTodos?: TodoRow[];
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

  return useMutation<TodoRow, Error, AddTodoParams, MutationContext>({
    mutationKey: queryKeys.todos.byWidget(widgetId),
    mutationFn: ({ text, todoId }) =>
      todoRepository.insertTodo({
        widget_id: widgetId,
        todo_id: todoId,
        text,
        completed: false,
      }),
    onMutate: async ({ text, todoId }) => {
      await queryClient.cancelQueries({
        queryKey: queryKeys.todos.byWidget(widgetId),
      });

      const previousTodos = queryClient.getQueryData<TodoRow[]>(
        queryKeys.todos.byWidget(widgetId),
      );

      const optimisticTodo: TodoRow = {
        id: crypto.randomUUID(),
        user_id: "",
        widget_id: widgetId,
        todo_id: todoId,
        text,
        completed: false,
        sort_order: (previousTodos?.length ?? 0) + 1,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      queryClient.setQueryData<TodoRow[]>(
        queryKeys.todos.byWidget(widgetId),
        (old = []) => [...old, optimisticTodo],
      );

      return { previousTodos };
    },
    onError: (err, _variables, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData<TodoRow[]>(
          queryKeys.todos.byWidget(widgetId),
          context.previousTodos,
        );
      }
      toast.error("할 일 추가 실패", { description: err.message });
    },
    onSettled: () => {
      if (
        queryClient.isMutating({
          mutationKey: queryKeys.todos.byWidget(widgetId),
        }) === 1
      ) {
        queryClient.invalidateQueries({
          queryKey: queryKeys.todos.byWidget(widgetId),
        });
      }
    },
  });
};

export const useUpdateTodoMutation = (widgetId: string) => {
  const queryClient = useQueryClient();

  return useMutation<TodoRow, Error, UpdateTodoParams, MutationContext>({
    mutationKey: queryKeys.todos.byWidget(widgetId),
    mutationFn: ({ todoId, completed, text }) =>
      todoRepository.updateTodo(widgetId, todoId, {
        ...(completed !== undefined && { completed }),
        ...(text !== undefined && { text }),
      }),
    onMutate: async ({ todoId, completed, text }) => {
      await queryClient.cancelQueries({
        queryKey: queryKeys.todos.byWidget(widgetId),
      });

      const previousTodos = queryClient.getQueryData<TodoRow[]>(
        queryKeys.todos.byWidget(widgetId),
      );

      if (previousTodos) {
        queryClient.setQueryData<TodoRow[]>(
          queryKeys.todos.byWidget(widgetId),
          previousTodos.map((t) =>
            t.todo_id === todoId
              ? {
                  ...t,
                  ...(completed !== undefined && { completed }),
                  ...(text !== undefined && { text }),
                }
              : t,
          ),
        );
      }

      return { previousTodos };
    },
    onError: (err, _variables, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData<TodoRow[]>(
          queryKeys.todos.byWidget(widgetId),
          context.previousTodos,
        );
      }
      toast.error("할 일 수정 실패", { description: err.message });
    },
    onSettled: () => {
      if (
        queryClient.isMutating({
          mutationKey: queryKeys.todos.byWidget(widgetId),
        }) === 1
      ) {
        queryClient.invalidateQueries({
          queryKey: queryKeys.todos.byWidget(widgetId),
        });
      }
    },
  });
};

export const useToggleTodoMutation = (widgetId: string) => {
  return useUpdateTodoMutation(widgetId);
};

export const useDeleteTodoMutation = (widgetId: string) => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string, MutationContext>({
    mutationKey: queryKeys.todos.byWidget(widgetId),
    mutationFn: (todoId: string) => todoRepository.deleteTodo(widgetId, todoId),
    onMutate: async (todoId) => {
      await queryClient.cancelQueries({
        queryKey: queryKeys.todos.byWidget(widgetId),
      });

      const previousTodos = queryClient.getQueryData<TodoRow[]>(
        queryKeys.todos.byWidget(widgetId),
      );

      if (previousTodos) {
        queryClient.setQueryData<TodoRow[]>(
          queryKeys.todos.byWidget(widgetId),
          previousTodos.filter((t) => t.todo_id !== todoId),
        );
      }

      return { previousTodos };
    },
    onError: (err, _variables, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData<TodoRow[]>(
          queryKeys.todos.byWidget(widgetId),
          context.previousTodos,
        );
      }
      toast.error("할 일 삭제 실패", { description: err.message });
    },
    onSettled: () => {
      if (
        queryClient.isMutating({
          mutationKey: queryKeys.todos.byWidget(widgetId),
        }) === 1
      ) {
        queryClient.invalidateQueries({
          queryKey: queryKeys.todos.byWidget(widgetId),
        });
      }
    },
  });
};
