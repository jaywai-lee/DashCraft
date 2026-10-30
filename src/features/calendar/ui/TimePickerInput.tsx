"use client";

import React from "react";
import { Clock } from "lucide-react";

interface TimePickerInputProps {
  value: string;
  onChange: (time: string) => void;
  disabled?: boolean;
}

export const TimePickerInput = ({
  value,
  onChange,
  disabled = false,
}: TimePickerInputProps) => {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
        <Clock className="w-3.5 h-3.5 text-primary" />
        시간 선택 (선택 사항)
      </label>
      <input
        type="time"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="w-full px-3 py-2 text-xs bg-background border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
      />
    </div>
  );
};
