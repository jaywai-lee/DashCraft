"use client";

import { useState } from "react";

export const HOURS = Array.from({ length: 12 }, (_, i) =>
  String(i + 1).padStart(2, "0"),
);
export const MINUTES = [
  "00",
  "05",
  "10",
  "15",
  "20",
  "25",
  "30",
  "35",
  "40",
  "45",
  "50",
  "55",
];

export const useTimePicker = () => {
  const [isAllDay, setIsAllDay] = useState(true);
  const [ampm, setAmpm] = useState<"오전" | "오후">("오전");
  const [hour, setHour] = useState("09");
  const [minute, setMinute] = useState("00");

  const toggleAllDay = () => setIsAllDay((prev) => !prev);

  const getTimeString = (): string | undefined => {
    if (isAllDay) return undefined;

    let h = parseInt(hour, 10);
    if (ampm === "오후" && h < 12) h += 12;
    if (ampm === "오전" && h === 12) h = 0;

    return `${String(h).padStart(2, "0")}:${minute}`;
  };

  const resetTimePicker = () => {
    setIsAllDay(true);
    setAmpm("오전");
    setHour("09");
    setMinute("00");
  };

  return {
    isAllDay,
    ampm,
    hour,
    minute,
    setAmpm,
    setHour,
    setMinute,
    toggleAllDay,
    getTimeString,
    resetTimePicker,
  };
};
