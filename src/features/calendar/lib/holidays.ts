interface HolidayInfo {
  name: string;
  isHoliday: boolean;
}

const FIXED_HOLIDAYS: Record<string, string> = {
  "01-01": "신정",
  "03-01": "삼일절",
  "05-05": "어린이날",
  "06-06": "현충일",
  "08-15": "광복절",
  "10-03": "개천절",
  "10-09": "한글날",
  "12-25": "성탄절",
};

const LUNAR_HOLIDAYS_MAP: Record<string, Record<string, string>> = {
  "2025": {
    "01-28": "설날 연휴",
    "01-29": "설날",
    "01-30": "설날 연휴",
    "05-05": "부처님오신날",
    "10-05": "추석 연휴",
    "10-06": "추석",
    "10-07": "추석 연휴",
    "10-08": "대체공휴일",
  },
  "2026": {
    "02-16": "설날 연휴",
    "02-17": "설날",
    "02-18": "설날 연휴",
    "05-24": "부처님오신날",
    "09-24": "추석 연휴",
    "09-25": "추석",
    "09-26": "추석 연휴",
  },
  "2027": {
    "02-06": "설날 연휴",
    "02-07": "설날",
    "02-08": "설날 연휴",
    "02-09": "대체공휴일",
    "05-13": "부처님오신날",
    "09-14": "추석 연휴",
    "09-15": "추석",
    "09-16": "추석 연휴",
  },
};

export const getKoreanHolidayInfo = (date: Date): HolidayInfo | null => {
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const monthDay = `${month}-${day}`;

  if (FIXED_HOLIDAYS[monthDay]) {
    return { name: FIXED_HOLIDAYS[monthDay], isHoliday: true };
  }

  if (LUNAR_HOLIDAYS_MAP[year] && LUNAR_HOLIDAYS_MAP[year][monthDay]) {
    return { name: LUNAR_HOLIDAYS_MAP[year][monthDay], isHoliday: true };
  }

  return null;
};
