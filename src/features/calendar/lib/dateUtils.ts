export const getMondayFirstDayIndex = (dayIndex: number) => {
  return dayIndex === 0 ? 6 : dayIndex - 1;
};

export const generateCalendarDays = (year: number, month: number) => {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const startDayIdx = getMondayFirstDayIndex(firstDayOfMonth.getDay());
  const totalDays = lastDayOfMonth.getDate();

  const days = [];

  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = startDayIdx - 1; i >= 0; i--) {
    const date = new Date(year, month - 1, prevMonthLastDay - i);
    days.push({ date, isCurrentMonth: false });
  }

  for (let i = 1; i <= totalDays; i++) {
    const date = new Date(year, month, i);
    days.push({ date, isCurrentMonth: true });
  }

  const remainingSlots = 42 - days.length;
  for (let i = 1; i <= remainingSlots; i++) {
    const date = new Date(year, month + 1, i);
    days.push({ date, isCurrentMonth: false });
  }

  return days;
};

export const formatDateToYYYYMMDD = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
