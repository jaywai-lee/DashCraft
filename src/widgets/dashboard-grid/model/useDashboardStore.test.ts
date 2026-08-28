import { beforeEach, describe, expect, it } from "vitest";
import { useDashboardStore } from "./useDashboardStore";

describe("useDashboardStore", () => {
  beforeEach(() => {
    useDashboardStore.getState().resetDashboard();
  });

  it("초기 위젯 데이터는 빈 배열이어야 한다", () => {
    const { widgets } = useDashboardStore.getState();
    expect(widgets.length).toBe(0);
  });

  it("새로운 위젯을 추가할 수 있어야 한다", () => {
    const { addWidget } = useDashboardStore.getState();

    addWidget({
      type: "dday",
      title: "디데이 위젯",
      layout: { id: "", x: 2, y: 2, w: 1, h: 1 },
    });

    const { widgets } = useDashboardStore.getState();
    expect(widgets.length).toBe(1);
    expect(widgets[0].type).toBe("dday");
  });

  it("지정한 위젯을 삭제할 수 있어야 한다", () => {
    const { addWidget, removeWidget } = useDashboardStore.getState();
    addWidget({
      type: "todo",
      title: "할 일 목록",
      layout: { id: "", x: 0, y: 0, w: 1, h: 1 },
    });

    const { widgets } = useDashboardStore.getState();
    const targetId = widgets[0].id;

    removeWidget(targetId);

    const updatedWidgets = useDashboardStore.getState().widgets;
    expect(updatedWidgets.find((w) => w.id === targetId)).toBeUndefined();
    expect(updatedWidgets.length).toBe(0);
  });
});
