import { beforeEach, describe, expect, it } from "vitest";
import { useDDayStore } from "./useDDayStore";

describe("useDDayStore", () => {
  const widgetId = "dday-test-1";

  beforeEach(() => {
    useDDayStore.setState({ ddays: {} });
  });

  it("D-Day 항목을 정상적으로 추가해야 한다", () => {
    useDDayStore.getState().addDDay(widgetId, "종강", "2026-12-23");

    const items = useDDayStore.getState().getWidgetDDays(widgetId);
    expect(items.length).toBe(1);
    expect(items[0].title).toBe("종강");
    expect(items[0].targetDate).toBe("2026-12-23");
  });

  it("D-Day 항목을 정상적으로 삭제해야 한다", () => {
    useDDayStore.getState().addDDay(widgetId, "종강", "2026-12-23");

    const items = useDDayStore.getState().getWidgetDDays(widgetId);
    const ddayId = items[0].id;

    useDDayStore.getState().removeDDay(widgetId, ddayId);
    const updatedItems = useDDayStore.getState().getWidgetDDays(widgetId);
    expect(updatedItems.length).toBe(0);
  });

  it("removeWidgetDDays 호출 시 특정 위젯의 D-Day 목록이 삭제되어야 한다", () => {
    useDDayStore.getState().addDDay(widgetId, "종강", "2026-12-23");
    useDDayStore.getState().removeWidgetDDays(widgetId);

    const items = useDDayStore.getState().getWidgetDDays(widgetId);
    expect(items.length).toBe(0);
  });
});
