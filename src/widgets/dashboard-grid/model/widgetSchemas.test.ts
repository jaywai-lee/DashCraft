import { describe, expect, it } from "vitest";
import { parseClockConfig, parseWidgetRows } from "./widgetSchemas";
import { DEFAULT_CLOCK_CONFIG } from "../config/widgets.config";

describe("widgetSchemas 런타임 검증", () => {
  it("손상되거나 범위 밖의 clock config 필드를 기본값으로 안전하게 복원한다", () => {
    const result = parseClockConfig({
      workDuration: -50,
      breakDuration: "invalid",
      isSoundEnabled: false,
    });

    expect(result).toEqual({
      workDuration: DEFAULT_CLOCK_CONFIG.workDuration,
      breakDuration: DEFAULT_CLOCK_CONFIG.breakDuration,
      isSoundEnabled: false,
      isNotificationEnabled: DEFAULT_CLOCK_CONFIG.isNotificationEnabled,
    });
  });

  it("유효하지 않은 위젯 타입 레코드는 필터링하고 layout_w 이상치는 1로 보정한다", () => {
    const rows = parseWidgetRows([
      {
        id: "1",
        user_id: "u1",
        widget_id: "w1",
        type: "todo",
        title: "할 일",
        color: "unknown-color",
        layout_w: 99,
        layout_h: 1,
        layout_x: 0,
        layout_y: 0,
        sort_order: 1,
        config: {},
        created_at: "2026-01-01",
        updated_at: "2026-01-01",
      },
      {
        id: "2",
        user_id: "u1",
        widget_id: "w2",
        type: "malicious_type",
        title: "위험 위젯",
      },
    ]);

    expect(rows).toHaveLength(1);
    expect(rows[0].color).toBe("default");
    expect(rows[0].layout_w).toBe(1);
  });
});
