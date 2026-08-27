import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MemoData {
  id: string;
  content: string;
  updatedAt: string;
}

interface MemoState {
  memos: Record<string, MemoData>;
  updateMemo: (widgetId: string, content: string) => void;
  deleteMemo: (widgetId: string) => void;
}

export const useMemoStore = create<MemoState>()(
  persist(
    (set) => ({
      memos: {},
      updateMemo: (widgetId, content) =>
        set((state) => ({
          memos: {
            ...state.memos,
            [widgetId]: {
              id: widgetId,
              content,
              updatedAt: new Date().toISOString(),
            },
          },
        })),

      deleteMemo: (widgetId) =>
        set((state) => {
          const next = { ...state.memos };
          delete next[widgetId];
          return { memos: next };
        }),
    }),

    { name: "dashcraft-memo-storage" },
  ),
);
