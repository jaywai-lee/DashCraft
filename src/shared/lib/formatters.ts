export const formatSecondsToMMSS = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

export const formatTimeToTimeString = (date: Date): string => {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};

export const formatDateParts = (date: Date) => {
  const dateString = date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayOfWeek = date.toLocaleDateString("ko-KR", {
    weekday: "short",
  });

  return {
    dateString, // "2026년 8월 26일"
    dayOfWeek: `${dayOfWeek}요일`, // "수요일"
  };
};

export const calculateDDay = (targetDateStr: string): number => {
  if (!targetDateStr) return 0;

  const target = new Date(targetDateStr);
  const today = new Date();

  target.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffTime = target.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};

export const formatDDayText = (diffDays: number): string => {
  if (diffDays === 0) return "D-Day";
  if (diffDays > 0) return `D-${diffDays}`;
  return `D+${Math.abs(diffDays)}`;
};
