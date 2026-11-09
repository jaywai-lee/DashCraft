import { describe, expect, it } from "vitest";
import { getKoreanHolidayInfo } from "./holidays";

describe("holidays lib - getKoreanHolidayInfo", () => {
  it("신정(1월 1일) 날짜 입력 시 해당 공휴일 정보를 반환해야 한다", () => {
    const newYearDate = new Date(2026, 0, 1);
    const info = getKoreanHolidayInfo(newYearDate);

    expect(info).not.toBeNull();
    expect(info?.name).toBe("신정");
  });

  it("크리스마스(12월 25일) 날짜 입력 시 공휴일 정보를 반환해야 한다", () => {
    const christmasDate = new Date(2026, 11, 25);
    const info = getKoreanHolidayInfo(christmasDate);

    expect(info).not.toBeNull();
    expect(info?.name).toBe("성탄절");
  });

  it("공휴일이 아닌 일반 평일의 경우 null을 반환해야 한다", () => {
    const normalDay = new Date(2026, 10, 17);
    const info = getKoreanHolidayInfo(normalDay);

    expect(info).toBeNull();
  });
});
