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
      <button
        type="submit"
        className="p-1.5 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
        aria-label="추가"
      >
        <Plus className="w-4 h-4" />
      </button>
    </form>
  );
};
