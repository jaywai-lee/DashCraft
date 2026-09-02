import { beforeEach, describe, expect, it } from "vitest";
import { useMemoStore } from "./useMemoStore";

describe("useMemoStore", () => {
  const widgetId = "memo-test-1";

  beforeEach(() => {
    useMemoStore.getState().resetAllMemos();
  });

  it("메모를 정상적으로 업데이트해야 한다", () => {
    useMemoStore.getState().updateMemo(widgetId, "테스트 메모 작성");

    const memo = useMemoStore.getState().memos[widgetId];
    expect(memo).toBeDefined();
    expect(memo.content).toBe("테스트 메모 작성");
    expect(memo.id).toBe(widgetId);
  });

  it("메모를 정상적으로 삭제해야 한다", () => {
    useMemoStore.getState().updateMemo(widgetId, "삭제될 메모");
    useMemoStore.getState().removeWidgetMemo(widgetId);

    const memo = useMemoStore.getState().memos[widgetId];
    expect(memo).toBeUndefined();
  });

  it("resetAllMemos 호출 시 모든 메모가 삭제되어야 한다", () => {
    useMemoStore.getState().updateMemo("memo-1", "메모1");
    useMemoStore.getState().updateMemo("memo-2", "메모2");
    useMemoStore.getState().resetAllMemos();

    expect(Object.keys(useMemoStore.getState().memos).length).toBe(0);
  });
});
