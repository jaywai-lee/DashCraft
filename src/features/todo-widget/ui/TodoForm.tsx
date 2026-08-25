import { Button } from "@/shared/ui/button";
import { Plus } from "lucide-react";
import React from "react";

interface TodoFormProps {
  inputText: string;
  onChangeText: (text: string) => void;
  onSubmit: (e: React.SubmitEvent) => void;
}

export const TodoForm = ({
  inputText,
  onChangeText,
  onSubmit,
}: TodoFormProps) => {
  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={inputText}
        onChange={(e) => onChangeText(e.target.value)}
        onKeyDown={(e) => e.stopPropagation()}
        placeholder="할 일 추가.."
        className="flex-1 px-3 py-1.5 text-sm border rounded-md bg-background focus:outline-none focus:ring-1 focus:ring-primary"
      />
      <Button
        type="submit"
        variant="primary"
        size="sm"
        aria-label="추가"
        className="min-w-0 px-2.5"
      >
        <Plus className="w-4 h-4" />
      </Button>
    </form>
  );
};
