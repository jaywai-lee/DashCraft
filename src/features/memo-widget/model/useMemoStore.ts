import { HighlightColor } from "@/shared/config/highlight.config";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MemoData {
  id: string;
  content: string;
  updatedAt: string;
  highlight?: HighlightColor;
}

interface MemoState {
  memos: Record<string, MemoData>;
  updateMemo: (widgetId: string, content: string) => void;
  updateHighlight: (widgetId: string, highlight: HighlightColor) => void;
  removeWidgetMemo: (widgetId: string) => void;
  resetAllMemos: () => void;
}

export const useMemoStore = create<MemoState>()(
  persist(
    (set) => ({
      memos: {},

      updateMemo: (widgetId, content) =>
        set((state) => {
          const currentMemo = state.memos[widgetId];
          return {
            memos: {
              ...state.memos,
              [widgetId]: {
                ...currentMemo,
                id: widgetId,
                content,
                updatedAt: new Date().toISOString(),
              },
            },
          };
        }),

      updateHighlight: (widgetId, highlight) =>
        set((state) => {
          const currentMemo = state.memos[widgetId];
          if (!currentMemo) return state;

          return {
            memos: {
              ...state.memos,
              [widgetId]: {
                ...currentMemo,
                highlight,
                updatedAt: new Date().toISOString(),
              },
            },
          };
        }),

      removeWidgetMemo: (widgetId) =>
        set((state) => {
          const next = { ...state.memos };
          delete next[widgetId];
          return { memos: next };
        }),
      resetAllMemos: () => set({ memos: {} }),
    }),

    { name: "dashcraft-memo-storage" },
  ),
);
