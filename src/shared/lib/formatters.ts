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
