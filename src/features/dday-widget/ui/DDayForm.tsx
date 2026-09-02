"use client";

import { Button } from "@/shared/ui/button";
import { Plus } from "lucide-react";
import React, { useState } from "react";

interface DDayFormProps {
  onAdd: (title: string, targetDate: string) => void;
}

export const DDayForm = ({ onAdd }: DDayFormProps) => {
  const [title, setTitle] = useState("");
  const [targetDate, setTargetDate] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!title.trim() || !targetDate) return;
    onAdd(title.trim(), targetDate);
    setTitle("");
    setTargetDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-1.5 mb-3 w-full min-w-0"
    >
      <input
        type="text"
        placeholder="디데이 제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 min-w-0 px-2.5 py-1.5 text-xs bg-background border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
      />
      <input
        type="date"
        value={targetDate}
        onChange={(e) => setTargetDate(e.target.value)}
        className="w-[110px] shrink-0 px-1.5 py-1.5 text-xs bg-background border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
      />
      <Button
        type="submit"
        variant="primary"
        size="sm"
        className="h-8 w-8 p-0 shrink-0"
        title="D-Day 추가"
      >
        <Plus className="w-3.5 h-3.5" />
      </Button>
    </form>
  );
};
